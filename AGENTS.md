# Agent Instructions for linkshorterproject

This file outlines the coding standards, conventions, and best practices for LLM agents contributing to this project. All code must adhere to these guidelines.

## Read docs first (mandatory)

**This is non-negotiable:** before you **generate, edit, or suggest any code** for this repository, you **must** read **every** individual instruction file under [`/docs`](./docs/) that applies to the task (auth, UI, API, database, styling, naming, project layout, and anything else covered there). Do **not** skip this step. Do **not** rely only on this summary, on training-data defaults, or on patterns from other projects — those will drift from how *this* repo is meant to work.

If you are unsure which files apply, use the [Documentation Structure](#documentation-structure) table and the [Quick Decision Tree](#quick-decision-tree) below, open each linked file, and read it **before** writing code.

## Quick Reference

**Project type**: URL shortener service  
**Framework**: Next.js 16.2.x (App Router)  
**Language**: TypeScript 5 (strict mode)  
**Database**: PostgreSQL (Neon) with Drizzle ORM  
**Styling**: Tailwind CSS 4 + shadcn/ui  
**Auth**: Clerk  

**Critical**: Next.js 16 introduces breaking changes from earlier majors. Before implementing routing interception, caching, or config, consult the version shipped in this repo: `node_modules/next/dist/docs/` and [Next.js documentation](https://nextjs.org/docs).

**Critical — routing/proxy**: `middleware.ts` is **deprecated and must never be used** in this project. Next.js 16 (the version in this repo) replaces it with `proxy.ts`. All request interception, auth guards, redirects, and rewrites must be implemented in `proxy.ts`. Creating or editing `middleware.ts` is not allowed.

---

## Documentation Structure

Project-specific rules live as **individual markdown files in `/docs`**. **Always open and read the full text** of each file that matches your task **first**, then implement. The table below is an index only — it is **not** a substitute for reading those files.

| Document | Use when |
|----------|----------|
| [Authentication (Clerk)](./docs/auth-clerk.md) | Sign-in, protected routes, middleware/proxy |
| [UI (shadcn/ui only)](./docs/ui-shadcn.md) | Any UI work; adding/using components; avoiding custom primitives |

When the [Quick Decision Tree](#quick-decision-tree) points to additional docs (components, API routes, database, styling, code style, project overview), **read those files too** before coding.

---

## Essential Rules (non-negotiable)

1. **Read `/docs` before code** — For every task, read all applicable files under [`/docs`](./docs/) in full (see [Read docs first](#read-docs-first-mandatory)) **before** producing or changing implementation code.
2. **Strict TypeScript** — No implicit `any`; prefer `unknown` and narrow. Exported functions have explicit return types.
3. **Server Components by default** — Add `'use client'` only when the component needs hooks, browser APIs, or event handlers.
4. **Validate untrusted input** — APIs and Server Actions must validate and sanitize request bodies and search params.
5. **Consistent errors** — Log server-side failures; return safe messages to clients. Use appropriate HTTP status codes in route handlers.
6. **Database** — Use Drizzle with typed queries; snake_case columns in schema; migrations via Drizzle Kit (read [Database and ORM](./docs/database-orm.md) before database work).
7. **Auth** — Use Clerk for all authentication; do not roll custom session cookies for app auth (read [Authentication (Clerk)](./docs/auth-clerk.md) before auth work).
9. **Routing/proxy** — **Never create or edit `middleware.ts`** — it is deprecated in Next.js 16. Use `proxy.ts` for all request interception, auth guards, redirects, and rewrites.
8. **UI** — Use **shadcn/ui** for all UI elements; do not create custom UI primitives (read [UI (shadcn/ui only)](./docs/ui-shadcn.md) before UI work).

---

## Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

Drizzle (when configured):

```bash
npx drizzle-kit generate   # Generate SQL migrations from schema
npx drizzle-kit migrate    # Apply migrations (per project setup)
npx drizzle-kit studio     # Optional: local schema browser
```

---

## Quick Decision Tree

**Read the linked doc(s) in full before implementing** — the bullets below are pointers only.

- **New UI piece** → [Component guidelines](./docs/component-guidelines.md) + [Styling](./docs/styling-tailwind.md)  
- **New HTTP endpoint** → [API routes](./docs/api-server-routes.md)  
- **New table or query** → [Database and ORM](./docs/database-orm.md)  
- **Login, logout, or route protection** → [Authentication (Clerk)](./docs/auth-clerk.md)  
- **Request interception, redirects, rewrites** → use `proxy.ts` (**never** `middleware.ts`)  
- **Naming or file placement** → [Code style](./docs/code-style-naming.md) + [Project overview](./docs/project-overview.md)  

---

## External References

- [Next.js](https://nextjs.org/docs)  
- [TypeScript](https://www.typescriptlang.org/docs/)  
- [Drizzle ORM](https://orm.drizzle.team/)  
- [Tailwind CSS](https://tailwindcss.com/docs)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Clerk (Next.js)](https://clerk.com/docs/quickstarts/nextjs)  

---

**Last updated**: April 2026  
