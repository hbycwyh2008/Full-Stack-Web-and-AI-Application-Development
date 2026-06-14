import os

from openai import OpenAI

EMBEDDING_MODEL = os.getenv("OPENAI_EMBEDDING_MODEL", "text-embedding-3-small")

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


async def embed_texts(texts: list[str]) -> list[list[float]]:
    response = get_client().embeddings.create(
        model=EMBEDDING_MODEL,
        input=texts,
    )
    return [row.embedding for row in response.data]
