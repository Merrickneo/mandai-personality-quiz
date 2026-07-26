# Mandai Personality Quiz

A quiz that maps a visitor to one of Mandai's wildlife characters. Full
product/technical plan lives in [`docs/PRD-TD.md`](docs/PRD-TD.md).

**Current status:** early prototype. The quiz flow (landing → 12
questions → result) is real and working, but scoring is stubbed to
always resolve to **Otter** — see `lib/matchAnimal.ts`. Swap in the real
25-animal roster and scoring rubric once that content lands.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding the otter photo

Drop the image at `public/animals/otter.jpg`. See
`public/animals/README.md` for size guidance. Until it's there, the
result card falls back to a plain jungle-green gradient — nothing
breaks.

## Project structure

```
app/                 Next.js App Router entry (layout, page, global styles)
components/          UI: LandingScreen, QuizScreen, ResultScreen, DidYouKnowBubble, ShareButton
data/                Placeholder content: questions.ts, otter.ts
lib/                 types.ts, matchAnimal.ts (scoring — currently stubbed)
public/animals/      Drop animal images here
docs/PRD-TD.md       Full product & technical plan
```

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. Share feature uses
`html-to-image` to capture the result card client-side. No backend yet —
the result-frequency tracking (Supabase) described in the plan hasn't
been wired up.
