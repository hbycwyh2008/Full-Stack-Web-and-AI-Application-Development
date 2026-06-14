#!/usr/bin/env bash
# Start backend + frontend for local development (embedded ChromaDB — no Docker required).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BACKEND="$ROOT/backend"
FRONTEND="$ROOT/frontend"

if [[ ! -f "$BACKEND/.env" ]]; then
  echo "Copy .env.example to backend/.env and set OPENAI_API_KEY first."
  cp "$ROOT/.env.example" "$BACKEND/.env"
  echo "Created backend/.env — edit OPENAI_API_KEY, then run again."
  exit 1
fi

if [[ ! -f "$FRONTEND/.env.local" ]]; then
  cp "$FRONTEND/.env.local.example" "$FRONTEND/.env.local"
fi

echo "Starting FastAPI on http://localhost:8000 ..."
(
  cd "$BACKEND"
  source venv/bin/activate 2>/dev/null || { python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt -q; }
  uvicorn main:app --reload --port 8000
) &
BACKEND_PID=$!

echo "Starting Next.js on http://localhost:3000 ..."
(
  cd "$FRONTEND"
  npm install --silent 2>/dev/null || npm install
  npm run dev
) &
FRONTEND_PID=$!

trap 'kill $BACKEND_PID $FRONTEND_PID 2>/dev/null' EXIT INT TERM

echo "Ready. Press Ctrl+C to stop both servers."
wait
