# The Ultimate VIT Campus OS

A hackathon-ready full-stack MVP for a **unified student intelligence & collaboration platform** built with **Next.js 14 + Firebase + Gemini API**.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS + Framer Motion + glass UI
- Zustand + React Query
- Firebase Auth, Firestore, Storage
- Gemini API for assistant and embeddings

## Folder structure

- `app/` routes: dashboard, team builder, chat, skills, events, assistant, profile, and API endpoints
- `components/` reusable UI blocks (glass cards, metrics, providers)
- `lib/` domain types, firebase initialization, matching algorithm, seeded data
- `store/` Zustand global state
- `scripts/` seed script + vector ingestion script
- `functions/` edge-compatible AI helper

## Database collections
`users`, `messages`, `chats`, `skills_progress`, `events`, `news`, `submissions`, `vectors`, `resources`

## Local setup
1. Copy `.env.example` to `.env.local` and fill Firebase + Gemini keys.
2. Install and run app:
   ```bash
   npm install
   npm run dev
   ```
3. Seed data:
   ```bash
   npm run seed
   npm run ingest:vectors
   ```

## Key product features implemented
- Personalized dashboard cards + action center
- Weighted teammate matching engine with compatibility explanations
- Realtime-style chat interface scaffold (typing + share-ready layout)
- Skill roadmap and per-user progress-ready structure
- Events/news feed with AI teammate recommendations
- AI campus assistant endpoint (Gemini + citations-ready response)
- Firestore security rules for core collections

## Demo line
> This replaces 10 different student platforms.
