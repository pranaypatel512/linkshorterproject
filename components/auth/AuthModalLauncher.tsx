"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

type AuthModalLauncherProps = {
  auth?: "sign-in" | "sign-up";
};

export function AuthModalLauncher({ auth }: AuthModalLauncherProps) {
  const clerk = useClerk();

  useEffect(() => {
    if (auth === "sign-in") {
      clerk.openSignIn();
    } else if (auth === "sign-up") {
      clerk.openSignUp();
    }
  }, [auth, clerk]);

  return null;
}

