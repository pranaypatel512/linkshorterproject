import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Link Shorter",
    template: "%s · Link Shorter",
  },
  description:
    "Create short, shareable links and manage them from your dashboard. Built with Next.js, Clerk, and Neon Postgres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", ibmPlexSans.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClerkProvider appearance={{ theme: shadcn }}>
            <header className="border-b border-border bg-background/80 backdrop-blur-sm">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3">
                <Link
                  href="/"
                  className="font-heading text-base font-semibold tracking-tight text-foreground hover:text-primary"
                >
                  Link Shorter
                </Link>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <Button type="button" variant="ghost" size="sm">
                        Sign in
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button type="button" variant="default" size="sm">
                        Sign up
                      </Button>
                    </SignUpButton>
                  </Show>
                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                </div>
              </div>
            </header>
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
