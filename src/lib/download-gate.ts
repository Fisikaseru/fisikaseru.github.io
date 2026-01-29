"use client";

import { signIn, useSession } from "next-auth/react";

export function useRequireAuthForDownload() {
  const { data: session, status } = useSession();

  const requireAuthForDownload = async (nextUrl: string) => {
    if (status === "authenticated") return true;
    await signIn(undefined, { callbackUrl: nextUrl });
    return false;
  };

  return { session, status, requireAuthForDownload };
}
