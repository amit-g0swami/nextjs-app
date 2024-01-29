"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function withAuth(Component: any) {
  return function IsAuth(props: any) {
    const { data: session } = useSession();

    useEffect(() => {
      if (session?.user === null) {
        return redirect("/");
      }
    }, [session?.user]);

    return <Component {...props} />;
  };
}
