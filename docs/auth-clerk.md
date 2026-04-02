# Authentication with Clerk

## Principles

- **Clerk is the only auth system** in this app. Do not add any other auth method (no custom cookies/sessions, no NextAuth, no Auth.js, no bespoke JWT auth).
- **Clerk is the source of truth** for user identity. Treat `userId` from Clerk as the canonical identity key.
- Use **`@clerk/nextjs`** patterns that match the **installed major version** (check `package.json` and [Clerk Next.js docs](https://clerk.com/docs/quickstarts/nextjs)).

## Provider

- Wrap the app with **`ClerkProvider`** in the root layout (`app/layout.tsx`).

## UI

- Sign in and sign up must always open as a **modal**:
  - Use `SignInButton` / `SignUpButton` with `mode="modal"` in UI.
  - If a user navigates directly to `/sign-in` or `/sign-up`, redirect them to the homepage with an `auth` query param to open the modal (see `app/sign-in/page.tsx`, `app/sign-up/page.tsx`, `components/auth/AuthModalLauncher.tsx`).
- Prefer **accessible** labels and consistent placement with the rest of the header/chrome.

## Protecting routes

- **Next.js 16** uses **`proxy.ts`** at the project root for request interception (this repo’s entry point for Clerk middleware-style logic).
- Use **`clerkMiddleware`** (or the current Clerk export for your Next version) and Clerk’s **`createRouteMatcher`** (or equivalent) to mark public vs protected paths.
- Required behavior in this repo:
  - **Protected**: `/dashboard` (and any nested routes) requires a signed-in user (enforced in `proxy.ts`).
  - **Homepage redirect**: if a signed-in user visits `/`, redirect them to `/dashboard` server-side (implemented in `app/page.tsx`).
  - **Middleware gate pattern**: in `proxy.ts`, check `const { userId, redirectToSignIn } = await auth()` and `return redirectToSignIn()` when `userId` is missing for protected routes (do not rely on non-existent helpers like `protect()` in this repo’s installed version).

## Server-side user access

- In Server Components, Route Handlers, and Server Actions, use **`auth()`** from `@clerk/nextjs/server` (or the documented replacement) to read `userId` and gate logic.

## Environment

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` must be set in every environment.
- Align **sign-in/sign-up URLs** and **redirect URLs** with Clerk dashboard settings and Next.js `NEXT_PUBLIC_*` URL vars if used.

## Agents: verify before editing

- Next.js and Clerk evolve quickly. Before changing `proxy.ts` or auth layout, confirm:
  1. **`node_modules/next/dist/docs/`** for proxy/middleware file conventions and exports.
  2. **Clerk’s Next.js App Router** guide for the exact middleware/proxy integration for your Clerk version.

If Clerk’s example still shows `middleware.ts` but this project standardizes on `proxy.ts` for Next 16, follow **Clerk’s recommended wrapper** while keeping the **filename and exports** valid for Next 16.
