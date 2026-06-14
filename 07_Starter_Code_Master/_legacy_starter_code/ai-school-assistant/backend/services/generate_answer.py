import json
import os
import re

from openai import OpenAI

from prompts.system_prompt import HANDBOOK_SYSTEM_PROMPT, NOT_FOUND_ANSWER

CHAT_MODEL = os.getenv("OPENAI_CHAT_MODEL", "gpt-4o-mini")

_client: OpenAI | None = None


def get_client() -> OpenAI:
    global _client
    if _client is None:
        api_key = os.getenv("SG_API_KEY") or os.getenv("OPENAI_API_KEY")
        base_url = os.getenv("BASE_URL")
        kwargs: dict = {"api_key": api_key}
        if base_url:
            kwargs["base_url"] = base_url
        _client = OpenAI(**kwargs)
    return _client


def build_context(chunks: list[dict]) -> str:
    parts = []
    for index, chunk in enumerate(chunks):
        meta = chunk.get("metadata") or {}
        parts.append(
            "\n".join(
                [
                    f"Chunk {index + 1}",
                    f"sourceTitle: {meta.get('sourceTitle', 'School Handbook')}",
                    f"section: {meta.get('section', '—')}",
                    f"page: {meta.get('page', '—')}",
                    f"text:\n{chunk.get('text', '')}",
                ]
            )
        )
    return "\n\n".join(parts)


async def generate_answer(question: str, chunks: list[dict]) -> dict:
    if not chunks:
        return {"answer": NOT_FOUND_ANSWER, "sources": [], "found": False}

    user_prompt = (
        f"Question: {question}\n\n"
        f"Handbook context:\n{build_context(chunks)}\n\n"
        "Return strict JSON only."
    )

    response = get_client().chat.completions.create(
        model=CHAT_MODEL,
        temperature=0,
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": HANDBOOK_SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
    )

    content = response.choices[0].message.content if response.choices else None
    if not content:
        return {"answer": NOT_FOUND_ANSWER, "sources": [], "found": False}

    try:
        parsed = json.loads(content)
        has_answer = bool(parsed.get("answer", "").strip())
        is_found = parsed.get("found") is not False and has_answer
        return {
            "answer": parsed.get("answer") if has_answer else NOT_FOUND_ANSWER,
            "sources": parsed.get("sources") if isinstance(parsed.get("sources"), list) else [],
            "found": is_found,
        }
    except json.JSONDecodeError:
        fallback = re.sub(r"```json\s*|```", "", content).strip()
        if len(fallback) > 20 and "could not find" not in fallback.lower():
            return {"answer": fallback, "sources": [], "found": True}
        return {"answer": NOT_FOUND_ANSWER, "sources": [], "found": False}
