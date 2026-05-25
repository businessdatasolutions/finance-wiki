# Finance-Wiki

A static, statically-generated knowledge wiki ("digital garden") built with [Quartz](https://quartz.jzhao.xyz/). Markdown notes live under `wiki/` and are compiled to a browsable site. The content tracks research and sources on financial-distress prediction, accounting indicators, and behavioural finance, organised into concepts, entities, sources, syntheses, and threads, with per-page provenance and confidence metadata. Published to `businessdatasolutions.github.io/finance-wiki`.

## Structure

- `wiki/` — Markdown content (`concepts/`, `entities/`, `sources/`, `syntheses/`, `threads/`, `index.md`, `log.md`)
- `quartz/`, `quartz.config.ts`, `quartz.layout.ts` — Quartz generator and site config
- `extensions/` — custom Quartz plugins (type tags, aliases, stale banner, confidence badge, etc.)
- `scripts/`, `raw/` — ingestion scripts and source material (PDFs/binaries gitignored; markdown transcripts committed)
- `public/` — generated output (gitignored; built by Quartz)
- `docs/`, `CLAUDE.md`, `llm-wiki*.md` — design docs and working notes

## Run

Requires Node >= 22.

- `npm install` — install dependencies (first run only)
- `npm run serve` — build and serve the wiki locally with live reload at <http://localhost:8080>
- `npm run build` — build the static site into `public/`
- `npm run check` — TypeScript type-check

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the Quartz site and publishes it to GitHub Pages. In repo Settings → Pages, set the source to "GitHub Actions" before the first push.
