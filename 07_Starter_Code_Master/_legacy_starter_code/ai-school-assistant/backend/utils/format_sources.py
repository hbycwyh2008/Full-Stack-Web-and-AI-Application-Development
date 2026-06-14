def is_meaningful_quote(text: str) -> bool:
    cleaned = (text or "").strip()
    return len(cleaned) > 0 and cleaned not in {"—", "–", "-"}


def format_sources_from_chunks(chunks: list[dict]) -> list[dict]:
    by_key: dict[str, dict] = {}

    for chunk in chunks:
        metadata = chunk.get("metadata") or {}
        source_title = metadata.get("sourceTitle", "School Handbook")
        section = metadata.get("section")
        page = metadata.get("page")
        key = f"{source_title}\t{section}\t{page}"
        quote = (chunk.get("text") or "")[:220].strip()

        existing = by_key.get(key)
        if not existing:
            by_key[key] = {
                "sourceTitle": source_title,
                "section": section,
                "page": page,
                "quote": quote,
            }
        elif is_meaningful_quote(quote) and not is_meaningful_quote(existing["quote"]):
            existing["quote"] = quote

    return list(by_key.values())
