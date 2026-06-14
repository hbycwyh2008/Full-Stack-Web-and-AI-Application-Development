"use client";

// This is the main page of the AI School Assistant demo.
// It shows a question box, sends the question to the FastAPI backend,
// and displays the answer and its source.

import { useState } from "react";

// The backend address. The FastAPI server runs here during local development.
const BACKEND_URL = "http://localhost:8000/ask";

export default function Home() {
  // React state: the current question, the answer, the source,
  // whether we are loading, and any error message.
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // This function runs when the student clicks the submit button.
  async function handleSubmit() {
    setError("");
    setAnswer("");
    setSource("");

    // Simple check: do not send an empty question.
    if (!question.trim()) {
      setError("Please type a question first.");
      return;
    }

    setLoading(true);

    try {
      // Send the question to the FastAPI backend using a POST request.
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("The server returned an error. Is the backend running?");
      }

      // Read the JSON response: { answer, source }.
      const data = await response.json();
      setAnswer(data.answer);
      setSource(data.source);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>AI School Assistant Demo</h1>
      <p className="description">
        Ask a question about school policies (for example: &quot;What is the late
        homework policy?&quot;). This demo answers using a sample school handbook.
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      {/* Show an error message if something went wrong. */}
      {error && <p className="error">{error}</p>}

      {/* Show the answer and source when we have them. */}
      {answer && (
        <div>
          <div className="answer-box">{answer}</div>
          <p className="source">Source: {source}</p>
        </div>
      )}
    </main>
  );
}
