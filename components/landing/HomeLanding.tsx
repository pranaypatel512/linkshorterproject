import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  BarChart3,
  Database,
  Link2,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast redirects",
    description:
      "Short links resolve quickly so shared URLs feel instant for your audience.",
  },
  {
    icon: Link2,
    title: "Clean, shareable links",
    description:
      "Replace fragile long URLs with compact links that look good in bios, decks, and chat.",
  },
  {
    icon: Lock,
    title: "Secure accounts",
    description:
      "Sign in with Clerk so your workspace and links stay tied to you, not to anonymous sessions.",
  },
  {
    icon: BarChart3,
    title: "Organized dashboard",
    description:
      "Create and review your links from one place instead of hunting through bookmarks.",
  },
  {
    icon: Database,
    title: "Postgres on Neon",
    description:
      "Reliable serverless Postgres with Drizzle ORM—ready as you grow past prototypes.",
  },
  {
    icon: ShieldCheck,
    title: "Built for safety",
    description:
      "Validate and store only what the product needs, with room to add policies and rate limits later.",
  },
] as const;

export function HomeLanding() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.457_0.24_277.023/0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.398_0.195_277.366/0.25),transparent)]"
        />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6 md:max-w-2xl">
            <Badge variant="secondary" className="font-normal">
              URL shortener
            </Badge>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-tight">
              Short links that stay{" "}
              <span className="text-primary">sharp</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Turn long URLs into small, memorable links. Sign in to manage
              everything from your dashboard—built on Next.js, Clerk, and Neon
              Postgres.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                <Button type="button" size="lg" className="w-full sm:w-auto">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Sign in
                </Button>
              </SignInButton>
            </div>
          </div>

          <Card className="border-dashed bg-muted/30 shadow-none ring-border/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Example
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 font-mono text-sm md:flex-row md:items-center md:gap-4">
              <div className="min-w-0 flex-1 truncate rounded-lg border border-border bg-background/80 px-3 py-2 text-foreground/80">
                https://example.com/blog/how-we-ship-features?s=organic&ref=newsletter
              </div>
              <span className="hidden text-muted-foreground md:inline">→</span>
              <span className="text-muted-foreground md:hidden">becomes</span>
              <div className="shrink-0 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-primary">
                yourdomain.com/x/k9m2
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Everything you need to share smarter
          </h2>
          <p className="mt-3 text-muted-foreground">
            A focused toolkit for shortening links, staying signed in, and
            keeping data on a solid foundation.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card
                size="sm"
                className="h-full transition-colors hover:bg-muted/40"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Ready to shorten your first link?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Create an account in seconds—no credit card required to explore
              the dashboard.
            </p>
          </div>
          <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
            <Button type="button" size="lg">
              Create free account
            </Button>
          </SignUpButton>
        </div>
      </section>
    </div>
  );
}
