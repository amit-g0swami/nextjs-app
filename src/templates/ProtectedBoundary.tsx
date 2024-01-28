"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const ProtectedBoundary = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  if (session?.user === null) {
    console.log(session);
    redirect("/login");
  }

  return <>{children}</>;
};
