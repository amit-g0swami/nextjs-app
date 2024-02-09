"use client";

import { useState } from "react";

export default function Layout({
  children,
  order,
  profile,
}: {
  children: React.ReactNode;
  order: React.ReactNode;
  profile: React.ReactNode;
}) {
  const [isTabOpen, setIsTabOpen] = useState(0);
  return (
    <div className="p-40">
      {children}
      {isTabOpen === 0 ? (
        <div onClick={() => setIsTabOpen(1)}>{profile}</div>
      ) : (
        <>{order}</>
      )}
    </div>
  );
}
