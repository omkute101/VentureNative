# Venture Native

A frontend-first foundation for Venture Native: an independent venture research journal, hypothetical paper portfolio, market-map library, and private research workspace.

## Run it

```bash
npm install
npm run dev
```

Use `npm run build` for the TypeScript and production build check.

## Included routes

Public: `/`, `/portfolio`, `/companies`, `/companies/:slug`, `/research`, `/research/:slug`, `/markets`, `/markets/:slug`, `/thesis`, `/about`, `/newsletter`, and `/submit`.

Local prototype workspace: `/admin`, `/admin/dealflow`, `/admin/companies`, `/admin/research`, `/admin/decisions`, `/admin/markets`, `/admin/milestones`, `/admin/tasks`, and `/admin/settings`.

## Data and prototype behavior

Seed records live in `src/data/seed.ts` and are governed by shared TypeScript models in `src/models`. Illustrative company records are explicitly labeled; no returns, ownership, fund activity, or fabricated factual company claims are presented.

`src/services/prototype-store.ts` is the versioned local-storage boundary. The `PrototypeProvider` keeps the UI independent of storage details and offers the same kind of operations a future API client would expose. Company edits, pipeline status changes, research metadata, task completion, and decision-journal additions persist locally. Settings can reset this browser-only data.

Newsletter and founder-submission forms validate input and display an explicit local-demo confirmation; they do not send or store data remotely.

## Future backend boundary

The models map naturally to PostgreSQL tables for companies, sources, decisions, memos, market maps/categories, milestones, tasks, work items, activities, newsletter subscriptions, and startup submissions. Replace the `prototype-store` methods behind the provider with authenticated API clients; the page components should not require a rewrite. Authentication and real access control are intentionally out of scope—the workspace is clearly a local prototype and client-side routes do not provide security.
