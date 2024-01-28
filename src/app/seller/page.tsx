"use client";

import { useSession, signOut } from "next-auth/react";

export default function SellerPage() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4 ml-auto">
      <p className="text-sky-600">{session?.user?.name}</p>
      <button onClick={() => signOut()} className="text-red-600">
        Sign Out
      </button>
    </div>
  );
}
