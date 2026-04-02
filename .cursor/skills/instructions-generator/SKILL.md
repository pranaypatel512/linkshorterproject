---
name: create-instructions
description: Generates or updates focused markdown in docs/ for LLM agents—checklists, decision trees, concrete paths, and cross-links aligned with AGENTS.md. Use when adding or revising /docs guides, expanding the documentation table in AGENTS.md, introducing a new architectural or standards area, or when the user mentions instructions-generator, agent docs, or create-instructions.
agent: Instructions Generator
---

# Agent-oriented documentation (this repo)

## When to use

- New or revised guidance under `docs/` (one primary topic per file).
- User asks to document a layer, workflow, or standard for coding agents.
- After material doc changes: ensure `AGENTS.md` “Documentation Structure” table has a row if needed.

## Before writing

1. **Scope**: Confirm topic, target path (`docs/<kebab-case>.md` unless specified), new vs revision.
2. **Read**: `AGENTS.md` (index + quick reference), `docs/project-overview.md`, and any overlapping `docs/*.md`. Match existing voice: tables, short imperative sections, links not duplication.
3. **Verify implementation**: For implementation-specific topics, grep/read the repo—real paths, env vars, scripts only; no invented APIs.

## Content rules

- **Actionable**: Imperative Do/Don’t, checklists, decision trees, “when to read this doc.”
- **Scoped**: Cross-link other `docs/*.md` instead of repeating.
- **Concrete**: Paths in backticks; commands in `bash` fences; patterns that match this stack (Next.js 16 App Router, strict TS, Drizzle + Neon, Clerk, Tailwind 4 + shadcn).
- **Versions**: For shifting framework/auth ORM behavior, say to verify this repo’s installed version or official docs—do not assert breaking changes from memory.
- **AGENTS.md**: New or significantly changed doc → add or update a table row with “Use when” text and link `./docs/<file>.md`.

## Suggested `docs/*.md` skeleton

1. `# Title` + one purpose paragraph.
2. **When to use this doc**
3. **Rules / conventions**
4. **Examples** (minimal fences)
5. **Related** (`docs/` + optional external)
6. **Agent checklist** (optional, short)

## Output behavior

- **New file**: Deliver full contents ready to save as `docs/<name>.md`.
- **Update**: Prefer clear section edits or full file if diff would be noisy—state which approach.
- Do not paste all of `AGENTS.md` into a doc; link it. No unrelated boilerplate.

## Subagent alignment

This skill mirrors `.cursor/agents/instructions-generator.md`. Prefer delegating long doc passes via that agent when the user explicitly wants a dedicated documentation pass; otherwise apply this skill directly when editing `docs/` in the same thread.
