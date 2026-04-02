# Agent Instructions for linkshorterproject

This file outlines the coding standards, conventions, and best practices for LLM agents contributing to this project. All code must adhere to these guidelines.

## Quick Reference

**Project type**: URL shortener service  
**Framework**: Next.js 16.2.x (App Router)  
**Language**: TypeScript 5 (strict mode)  
**Database**: PostgreSQL (Neon) with Drizzle ORM  
**Styling**: Tailwind CSS 4 + shadcn/ui  
**Auth**: Clerk  

**Critical**: Next.js 16 introduces breaking changes from earlier majors. Before implementing routing interception, caching, or config, consult the version shipped in this repo: `node_modules/next/dist/docs/` and [Next.js documentation](https://nextjs.org/docs).

---

## Documentation Structure

Guidelines live in `/docs`. **Read the relevant document before writing code** for that area.

| Document | Use when |
|----------|----------|
| [Authentication (Clerk)](./docs/auth-clerk.md) | Sign-in, protected routes, middleware/proxy |
| [UI (shadcn/ui only)](./docs/ui-shadcn.md) | Any UI work; adding/using components; avoiding custom primitives |

---

## Essential Rules (non-negotiable)

1. **Strict TypeScript** — No implicit `any`; prefer `unknown` and narrow. Exported functions have explicit return types.
2. **Server Components by default** — Add `'use client'` only when the component needs hooks, browser APIs, or event handlers.
3. **Validate untrusted input** — APIs and Server Actions must validate and sanitize request bodies and search params.
4. **Consistent errors** — Log server-side failures; return safe messages to clients. Use appropriate HTTP status codes in route handlers.
5. **Database** — Use Drizzle with typed queries; snake_case columns in schema; migrations via Drizzle Kit (see [Database and ORM](./docs/database-orm.md)).
6. **Auth** — Use Clerk for all authentication; do not roll custom session cookies for app auth (see [Authentication (Clerk)](./docs/auth-clerk.md)).
7. **UI** — Use **shadcn/ui** for all UI elements; do not create custom UI primitives (see [UI (shadcn/ui only)](./docs/ui-shadcn.md)).

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

- **New UI piece** → [Component guidelines](./docs/component-guidelines.md) + [Styling](./docs/styling-tailwind.md)  
- **New HTTP endpoint** → [API routes](./docs/api-server-routes.md)  
- **New table or query** → [Database and ORM](./docs/database-orm.md)  
- **Login, logout, or route protection** → [Authentication (Clerk)](./docs/auth-clerk.md)  
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
