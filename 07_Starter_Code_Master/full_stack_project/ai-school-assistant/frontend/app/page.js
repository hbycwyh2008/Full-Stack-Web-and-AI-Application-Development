"use client";

import { useEffect, useRef, useState } from "react";

const INGEST_STORAGE_KEY = "handbook_ingest_record";
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const fileInputRef = useRef(null);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("No answer yet.");
  const [sources, setSources] = useState([]);
  const [askStatus, setAskStatus] = useState("");
  const [askLoading, setAskLoading] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [replaceExisting, setReplaceExisting] = useState(true);
  const [ingestStatus, setIngestStatus] = useState("");
  const [ingestRecord, setIngestRecord] = useState("");
  const [ingestRecordClass, setIngestRecordClass] = useState("ingest-record");
  const [ingestLoading, setIngestLoading] = useState(false);
  const [progressActive, setProgressActive] = useState(false);
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    loadIngestRecord();
  }, []);

  function updateIngestRecordUI(record, serverHasData) {
    if (!record) {
      setIngestRecord("");
      setIngestRecordClass("ingest-record");
      return;
    }

    if (!serverHasData) {
      setIngestRecord("Handbook was cleared on the server. Please upload again.");
      setIngestRecordClass("ingest-record ingest-record-warn");
      try {
        localStorage.removeItem(INGEST_STORAGE_KEY);
      } catch (_error) {
        // ignore storage errors
      }
      return;
    }

    const date = record.ingestedAt ? new Date(record.ingestedAt).toLocaleString() : "";
    const names =
      record.filenames?.length > 0
        ? record.filenames.join(", ")
        : record.filename || record.sourceTitle || "Handbook";

    setIngestRecord(
      `Handbook loaded: ${names} (${record.chunksStored ?? 0} chunks)${date ? ` · ${date}` : ""}. You can ask questions below or add more files (uncheck "Replace" to append).`
    );
    setIngestRecordClass("ingest-record ingest-record-ok");
  }

  async function loadIngestRecord() {
    let record = null;
    try {
      const raw = localStorage.getItem(INGEST_STORAGE_KEY);
      if (raw) {
        record = JSON.parse(raw);
      }
    } catch (_error) {
      // ignore parse errors
    }

    if (!record) {
      updateIngestRecordUI(null, false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/ingest/status`);
      const data = await response.json();
      updateIngestRecordUI(record, data.hasData === true);
    } catch (_error) {
      updateIngestRecordUI(record, false);
    }
  }

  function handleFileChange(event) {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  }

  async function handleIngest(event) {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      setIngestStatus("Please choose at least one file.");
      return;
    }

    setIngestLoading(true);
    setIngestStatus(`Uploading and indexing ${selectedFiles.length} file(s)...`);
    setProgressActive(true);
    setProgressWidth("10%");

    const timer = setInterval(() => {
      setProgressWidth((current) => {
        const value = parseInt(current, 10) || 10;
        return `${Math.min(value + 10, 90)}%`;
      });
    }, 300);

    try {
      const formData = new FormData();
      for (const file of selectedFiles) {
        formData.append("files", file);
      }
      formData.append("replaceExisting", replaceExisting ? "true" : "false");

      const response = await fetch(`${API_BASE}/api/ingest`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      clearInterval(timer);
      setProgressWidth("100%");

      if (response.ok && data.success) {
        const filenames =
          data.sources?.map((source) => source.name) ||
          (data.sourceTitle ? [data.sourceTitle] : selectedFiles.map((file) => file.name));

        const record = {
          filenames,
          sourceTitle:
            data.sourceTitle ||
            (selectedFiles.length === 1 ? selectedFiles[0].name : `${selectedFiles.length} files`),
          chunksStored: data.chunksStored,
          ingestedAt: Date.now(),
        };

        try {
          localStorage.setItem(INGEST_STORAGE_KEY, JSON.stringify(record));
        } catch (_error) {
          // ignore storage errors
        }

        setIngestStatus(data.message || `Ingested. Chunks stored: ${data.chunksStored}.`);
        updateIngestRecordUI(record, true);
      } else {
        setIngestStatus(`Ingest failed: ${data.detail || data.message || "Unknown error"}`);
      }
    } catch (error) {
      clearInterval(timer);
      setIngestStatus(
        error.message?.includes("fetch")
          ? "Cannot reach backend. Start ChromaDB and FastAPI first."
          : `Ingest error: ${error.message || "Unknown error"}`
      );
    } finally {
      setIngestLoading(false);
      setTimeout(() => {
        setProgressActive(false);
        setProgressWidth("0%");
      }, 800);
    }
  }

  async function handleAsk(event) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    setAskLoading(true);
    setAskStatus("Loading...");
    setAnswer("");
    setSources([]);

    try {
      const response = await fetch(`${API_BASE}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await response.json();
      setAnswer(data.answer || "No answer.");
      setSources(data.sources || []);
      setAskStatus(data.found === false ? "Not found in handbook." : "Done.");
    } catch (error) {
      setAskStatus("Error contacting backend.");
      setAnswer(error.message || "Something went wrong.");
    } finally {
      setAskLoading(false);
    }
  }

  const fileLabel =
    selectedFiles.length === 0
      ? "No file chosen"
      : selectedFiles.length === 1
        ? selectedFiles[0].name
        : `${selectedFiles.length} files: ${selectedFiles.map((file) => file.name).join(", ")}`;

  return (
    <main className="container">
      <h1>AI School Handbook Assistant</h1>
      <p className="sub">Ask handbook questions and get grounded answers with citations.</p>

      <section className="panel">
        <h2>Upload handbook</h2>
        <form onSubmit={handleIngest}>
          <p>Handbook file(s) — select multiple to add several documents</p>
          <div className="file-input">
            <button type="button" onClick={() => fileInputRef.current?.click()}>
              Choose file(s)
            </button>
            <span className="muted">{fileLabel}</span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt,.md"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={replaceExisting}
              onChange={(event) => setReplaceExisting(event.target.checked)}
            />
            Replace existing handbook (uncheck to add to current)
          </label>
          <button type="submit" disabled={ingestLoading}>
            {ingestLoading ? "Ingesting..." : "Ingest handbook"}
          </button>
          <div className={`progress ${progressActive ? "progress-active" : ""}`}>
            <div className="progress-bar" style={{ width: progressWidth }} />
          </div>
        </form>
        {ingestRecord && <p className={ingestRecordClass}>{ingestRecord}</p>}
        {ingestStatus && <p className="muted">{ingestStatus}</p>}
      </section>

      <section className="panel">
        <h2>Ask a question</h2>
        <form onSubmit={handleAsk}>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="What is the attendance policy?"
            rows={4}
            required
          />
          <button type="submit" disabled={askLoading}>
            {askLoading ? "Thinking..." : "Ask"}
          </button>
        </form>
        {askStatus && <p className="muted">{askStatus}</p>}
      </section>

      <section className="panel">
        <h2>Answer</h2>
        <div className="answer">{answer}</div>
      </section>

      <section className="panel">
        <h2>Sources</h2>
        <ul className="sources">
          {sources.length === 0 ? (
            <li className="muted">No sources available.</li>
          ) : (
            sources.map((source, index) => (
              <li key={`${source.sourceTitle}-${source.section}-${index}`}>
                <strong>{source.sourceTitle || "School Handbook"}</strong>
                <br />
                <span>
                  Section: {source.section || "N/A"} | Page: {source.page ?? "N/A"}
                </span>
                <p>&ldquo;{source.quote || ""}&rdquo;</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
