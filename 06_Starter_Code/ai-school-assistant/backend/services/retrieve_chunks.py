from services.chroma_client import query_chunks
from services.embed_chunks import embed_texts


async def retrieve_chunks(question: str, k: int = 6) -> list[dict]:
    embeddings = await embed_texts([question])
    return await query_chunks(embeddings[0], k)
