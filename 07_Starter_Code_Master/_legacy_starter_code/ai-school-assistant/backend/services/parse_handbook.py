from pathlib import Path

from docx import Document
from pypdf import PdfReader


async def parse_handbook(file_path: str, original_name: str) -> str | dict:
    ext = Path(original_name or file_path).suffix.lower()

    if ext in {".txt", ".md"}:
        return Path(file_path).read_text(encoding="utf-8")

    if ext == ".docx":
        document = Document(file_path)
        return "\n".join(paragraph.text for paragraph in document.paragraphs if paragraph.text.strip())

    if ext == ".pdf":
        reader = PdfReader(file_path)
        pages = [page.extract_text() or "" for page in reader.pages]
        text = "\n".join(pages)
        num_pages = len(reader.pages)
        return {"text": text, "num_pages": num_pages}

    raise ValueError("Unsupported file type. Use .docx, .txt, .md, or .pdf")
