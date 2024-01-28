"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { useSession } from "next-auth/react";

export default function SellerPage() {
  const { data: session } = useSession();

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h4 className="text-4xl text-neutral-800">{session?.user?.name}</h4>
      </BackGroundDiv>
    </div>
  );
}
