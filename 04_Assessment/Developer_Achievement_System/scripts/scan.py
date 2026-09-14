#!/usr/bin/env python3
"""Recompute student achievement XP from GitHub evidence.

The scanner is intentionally idempotent: it rebuilds the complete result from
current GitHub evidence instead of incrementing a mutable points counter.
"""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "config"
DATA = ROOT / "data"


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def api_get(path: str, query: dict[str, Any] | None = None) -> Any:
    if query:
        path = f"{path}?{urllib.parse.urlencode(query)}"
    url = f"https://api.github.com{path}"
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "developer-achievement-dashboard",
    }
    token = os.getenv("GH_SCANNER_TOKEN", "").strip()
    if token:
        headers["Authorization"] = f"Bearer {token}"

    request = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        return {"_error": exc.code, "_url": url}
    except urllib.error.URLError as exc:
        return {"_error": str(exc.reason), "_url": url}


def is_error(value: Any) -> bool:
    return isinstance(value, dict) and "_error" in value


def add_rule_xp(
    totals: dict[str, int], rules: dict[str, Any], rule_name: str, condition: bool
) -> None:
    if not condition:
        return
    rule = rules.get("automatic_xp", {}).get(rule_name)
    if not rule:
        return
    skill = rule["skill"]
    totals[skill] = totals.get(skill, 0) + int(rule["xp"])


def build_badges(totals: dict[str, int], rules: dict[str, Any]) -> list[dict[str, Any]]:
    badges: list[dict[str, Any]] = []
    for skill, skill_rule in rules.get("skills", {}).items():
        xp = int(totals.get(skill, 0))
        for badge in skill_rule.get("badges", []):
            if xp >= int(badge["xp"]):
                badges.append(
                    {
                        "skill": skill,
                        "skill_label": skill_rule["label"],
                        "name": badge["name"],
                        "threshold": int(badge["xp"]),
                    }
                )
    return badges


def find_debug_recovery(runs: list[dict[str, Any]]) -> bool:
    ordered = sorted(runs, key=lambda run: run.get("created_at") or "")
    saw_failure = False
    for run in ordered:
        conclusion = run.get("conclusion")
        if conclusion in {"failure", "cancelled", "timed_out", "action_required"}:
            saw_failure = True
        elif conclusion == "success" and saw_failure:
            return True
    return False


def scan_assignment(
    github: str,
    assignment: dict[str, Any],
    totals: dict[str, int],
    rules: dict[str, Any],
) -> dict[str, Any]:
    repo_name = assignment["repo"]
    repo_full = f"{github}/{repo_name}"
    base = assignment.get("base_branch", "main")
    branch_template = assignment.get("feature_branch", "")
    feature = branch_template.replace("{github}", github) if branch_template else ""

    repo_meta = api_get(f"/repos/{repo_full}")
    if is_error(repo_meta):
        return {
            "id": assignment.get("id", repo_name),
            "repository": repo_full,
            "status": "unreachable",
            "error": repo_meta.get("_error"),
        }

    branches_data = api_get(f"/repos/{repo_full}/branches", {"per_page": 100})
    branches = [] if is_error(branches_data) else branches_data
    branch_names = {item.get("name") for item in branches if isinstance(item, dict)}

    pulls_data = api_get(
        f"/repos/{repo_full}/pulls", {"state": "all", "per_page": 100}
    )
    pulls = [] if is_error(pulls_data) else pulls_data

    if feature:
        matching_pulls = [
            pr
            for pr in pulls
            if pr.get("head", {}).get("ref") == feature
            and pr.get("base", {}).get("ref") == base
        ]
        feature_evidence = feature in branch_names or bool(matching_pulls)
    else:
        matching_pulls = [
            pr
            for pr in pulls
            if pr.get("head", {}).get("ref") != base
            and pr.get("base", {}).get("ref") == base
        ]
        feature_evidence = any(name and name != base for name in branch_names) or bool(
            matching_pulls
        )
        if matching_pulls:
            feature = matching_pulls[0].get("head", {}).get("ref", "")

    valid_pr = bool(matching_pulls)
    merged_pr = any(pr.get("merged_at") for pr in matching_pulls)
    pr_url = matching_pulls[0].get("html_url") if matching_pulls else None

    commit_evidence = valid_pr
    ahead_by = None
    if feature and feature in branch_names:
        compare_path = (
            f"/repos/{repo_full}/compare/"
            f"{urllib.parse.quote(base, safe='')}...{urllib.parse.quote(feature, safe='')}"
        )
        compare_data = api_get(compare_path)
        if not is_error(compare_data):
            ahead_by = int(compare_data.get("ahead_by", 0))
            commit_evidence = commit_evidence or ahead_by > 0

    runs_data = {"workflow_runs": []}
    if feature:
        runs_data = api_get(
            f"/repos/{repo_full}/actions/runs",
            {"branch": feature, "per_page": 100},
        )
    runs = [] if is_error(runs_data) else runs_data.get("workflow_runs", [])
    ci_ran = bool(runs)
    ci_success = any(run.get("conclusion") == "success" for run in runs)
    debug_recovery = find_debug_recovery(runs)

    add_rule_xp(totals, rules, "feature_branch_evidence", feature_evidence)
    add_rule_xp(totals, rules, "commit_evidence", commit_evidence)
    add_rule_xp(totals, rules, "valid_pull_request", valid_pr)
    add_rule_xp(totals, rules, "merged_pull_request", merged_pr)
    add_rule_xp(totals, rules, "successful_ci", ci_success)
    add_rule_xp(totals, rules, "testing_success", ci_success)
    add_rule_xp(totals, rules, "debug_recovery", debug_recovery)

    if ci_success:
        for skill, xp in assignment.get("xp_on_ci_success", {}).items():
            totals[skill] = totals.get(skill, 0) + int(xp)

    return {
        "id": assignment.get("id", repo_name),
        "repository": repo_full,
        "status": "scanned",
        "base_branch": base,
        "feature_branch": feature,
        "evidence": {
            "feature_branch": feature_evidence,
            "commit_ahead_of_base": commit_evidence,
            "ahead_by": ahead_by,
            "valid_pull_request": valid_pr,
            "pull_request_url": pr_url,
            "merged_pull_request": merged_pr,
            "ci_ran": ci_ran,
            "ci_success": ci_success,
            "debug_recovery": debug_recovery,
        },
    }


def main() -> int:
    students_config = load_json(CONFIG / "students.json")
    rules = load_json(CONFIG / "rules.json")
    skill_keys = list(rules.get("skills", {}).keys())

    output: dict[str, Any] = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "students": [],
    }

    for student in students_config.get("students", []):
        if not student.get("enabled", True):
            continue

        totals = {skill: 0 for skill in skill_keys}
        assignments: list[dict[str, Any]] = []

        for assignment in student.get("assignments", []):
            assignments.append(
                scan_assignment(student["github"], assignment, totals, rules)
            )

        for skill, xp in student.get("manual_xp", {}).items():
            if skill in totals:
                totals[skill] += int(xp)

        output["students"].append(
            {
                "name": student["name"],
                "github": student["github"],
                "skills": totals,
                "total_xp": sum(totals.values()),
                "badges": build_badges(totals, rules),
                "assignments": assignments,
            }
        )

    DATA.mkdir(parents=True, exist_ok=True)
    out_path = DATA / "achievements.json"
    out_path.write_text(json.dumps(output, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {out_path} with {len(output['students'])} student profile(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
