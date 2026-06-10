import re

SUSPICIOUS_PATTERNS = [
    re.compile(r"ignore\s+previous\s+instructions", re.IGNORECASE),
    re.compile(r"reveal\s+(the\s+)?system\s+prompt", re.IGNORECASE),
    re.compile(r"use\s+your\s+own\s+knowledge", re.IGNORECASE),
    re.compile(r"forget\s+the\s+handbook", re.IGNORECASE),
    re.compile(r"act\s+as", re.IGNORECASE),
    re.compile(r"pretend\s+you\s+are", re.IGNORECASE),
]


def safety_check(question: str = "") -> dict:
    matches = [pattern.pattern for pattern in SUSPICIOUS_PATTERNS if pattern.search(question)]
    return {
        "suspicious": len(matches) > 0,
        "reasons": matches,
    }
