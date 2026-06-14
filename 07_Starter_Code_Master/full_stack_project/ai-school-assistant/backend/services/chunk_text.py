import re
import time
from typing import Any


def split_sections(text: str) -> list[dict[str, str]]:
    lines = text.split("\n")
    sections: list[dict[str, str]] = []
    current_title = "General"
    buffer: list[str] = []

    def flush() -> None:
        content = "\n".join(buffer).strip()
        if content:
            sections.append({"title": current_title, "content": content})
        buffer.clear()

    for line in lines:
        trimmed = line.strip()
        if not trimmed:
            buffer.append(line)
            continue

        is_numbered_heading = bool(re.match(r"^\d+\.\s+[A-Z]", trimmed)) and len(trimmed) < 80
        is_all_caps_heading = bool(re.match(r"^[A-Z][A-Z\s\-:&/]{4,}$", trimmed)) and len(trimmed) < 80
        is_markdown_heading = bool(re.match(r"^#{1,4}\s+", trimmed))
        is_heading = (is_numbered_heading or is_all_caps_heading or is_markdown_heading) and len(trimmed) > 3

        if is_heading and buffer:
            flush()
            current_title = re.sub(r"^#{1,4}\s+", "", trimmed)
        elif is_heading:
            current_title = re.sub(r"^#{1,4}\s+", "", trimmed)
        else:
            buffer.append(line)

    flush()
    return sections if sections else [{"title": "General", "content": text}]


def chunk_text(text: str, options: dict[str, Any] | None = None) -> list[dict[str, Any]]:
    opts = options or {}
    chunk_size = opts.get("chunk_size", 1200)
    overlap = opts.get("overlap", 200)
    source_title = opts.get("source_title", "School Handbook")
    num_pages = opts.get("num_pages")

    sections = split_sections(text)
    chunks: list[dict[str, Any]] = []
    chunk_index = 0
    base_id = int(time.time() * 1000)

    for section in sections:
        section_text = f"[{section['title']}]\n{section['content']}"
        start = 0

        while start < len(section_text):
            end = min(start + chunk_size, len(section_text))
            slice_text = section_text[start:end].strip()

            if start > 0 and not slice_text.startswith("["):
                slice_text = f"[{section['title']}] (continued)\n{slice_text}"

            if slice_text:
                chunks.append(
                    {
                        "id": f"{base_id}-{chunk_index}",
                        "text": slice_text,
                        "metadata": {
                            "sourceTitle": source_title,
                            "section": section["title"] or None,
                            "page": None,
                            "chunkIndex": chunk_index,
                            "version": None,
                        },
                    }
                )
                chunk_index += 1

            if end >= len(section_text):
                break
            start = max(0, end - overlap)

    if num_pages and num_pages > 0 and chunks:
        for index, chunk in enumerate(chunks):
            page_num = min(
                num_pages,
                max(1, round(((index + 0.5) / len(chunks)) * num_pages)),
            )
            chunk["metadata"]["page"] = page_num

    return chunks
