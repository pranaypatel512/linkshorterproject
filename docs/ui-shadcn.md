# UI: shadcn/ui only

This repo standardizes all application UI on **shadcn/ui** components (Radix primitives + Tailwind). Agents must not introduce ad-hoc custom UI primitives.

## When to use this doc

- You are adding or editing **any** UI element: buttons, inputs, dialogs/modals, dropdowns, nav, cards, forms, tables, toasts, etc.
- You are tempted to create a new “custom” component for a basic control.
- You need to add a missing component to the design system.

## Rules (non-negotiable)

- **Use shadcn/ui for all UI elements.**
- **Do not create custom UI primitives** (custom Button, Input, Dialog, Modal, Dropdown, Select, Toast, etc.).
- **Compose shadcn/ui components** to build features. Small feature components are fine (e.g. `LinkCreateForm.tsx`) as long as their *controls* are shadcn/ui.
- Keep styling consistent: use the existing tokens/variants from shadcn/ui, and only add new variants when necessary.

## Where shadcn/ui lives in this repo

- shadcn/ui components: `components/ui/*`

## If you need a component that doesn’t exist yet

- Add it using the shadcn CLI (preferred), then use it from `components/ui/*`.
- If the CLI is not available for some reason, follow shadcn’s documented install process and place the resulting component in `components/ui/*` (matching existing patterns in that folder).

## Examples

- **Good**: Use `components/ui/button.tsx` everywhere a button is needed.
- **Good**: Create `components/links/CreateLinkForm.tsx` that composes `components/ui/input.tsx`, `components/ui/button.tsx`, `components/ui/label.tsx`.
- **Bad**: Add `components/Button.tsx` because you want a slightly different hover style.
- **Bad**: Build a modal from scratch with raw `div` + Tailwind instead of a shadcn `Dialog`.

## Related

- `AGENTS.md` (repo-wide agent rules)
- `docs/styling-tailwind.md` (when it exists) for Tailwind conventions and theming

## Agent checklist

- [ ] Did you use a shadcn/ui component for every control?
- [ ] Did you avoid introducing a new UI primitive outside `components/ui/*`?
- [ ] If you needed a missing component, did you add it into `components/ui/*`?

