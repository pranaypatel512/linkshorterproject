import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { AuthModalLauncher } from "@/components/auth/AuthModalLauncher";
import { HomeLanding } from "@/components/landing/HomeLanding";

type HomePageProps = {
  searchParams: Promise<{
    auth?: "sign-in" | "sign-up";
  }>;
};

export default async function Home({
  searchParams,
}: HomePageProps) {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  const params = await searchParams;

  return (
    <>
      <AuthModalLauncher auth={params.auth} />
      <HomeLanding />
    </>
  );
}
