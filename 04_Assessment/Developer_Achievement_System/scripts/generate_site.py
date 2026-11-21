#!/usr/bin/env python3
"""Publish generated achievement data into the GitHub Pages /docs folder."""

from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = ROOT.parents[1]
DOCS = REPO_ROOT / "docs"


def main() -> None:
    DOCS.mkdir(parents=True, exist_ok=True)
    shutil.copy2(ROOT / "data" / "achievements.json", DOCS / "data.json")
    shutil.copy2(ROOT / "config" / "rules.json", DOCS / "rules.json")
    shutil.copy2(ROOT / "config" / "catalog.json", DOCS / "catalog.json")
    print(f"Published dashboard data to {DOCS}")


if __name__ == "__main__":
    main()
