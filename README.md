# VIT OS — Unified Student Intelligence & Collaboration Platform

Next.js 14 + Firebase serverless campus operating system MVP.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind + glass UI components
- Framer Motion-ready architecture
- Zustand + React Query
- Firebase Auth / Firestore / Storage
- Gemini API for AI assistant + embeddings RAG

## Features shipped
- Auth-ready app shell with profile-first flow hooks
- Personalized dashboard and smart recommendation cards
- Team builder with weighted compatibility scoring
- Realtime messaging UI blueprint (typing, seen, reactions)
- Skill builder roadmap + progress tracker
- Events/news feed with bookmark + teammate suggestion hints
- AI campus assistant endpoint with retrieval hook + Gemini fallback
- Profile surface for bio/skills/interests/goals

## Database collections
`users`, `messages`, `chats`, `skills_progress`, `events`, `news`, `submissions`, `vectors`, `resources`

## Scripts
- `npm run seed` → seeds 1000 fake users + 12 events
- `npm run ingest:pdf resources/handbook.pdf` → chunks/embeds handbook into `vectors`

## Folder Structure
- `app/*` routes (dashboard, team-builder, messages, skills, events, assistant, profile)
- `app/api/ai/chat` edge API route
- `lib/firebase` client/admin Firebase configs
- `lib/algorithms` matching logic
- `lib/ai` RAG context retrieval
- `scripts` seed + ingestion scripts

## Run
```bash
npm install
npm run dev
```
