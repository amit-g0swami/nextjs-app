"use client";

import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { useEffect } from "react";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { USER_TYPE } from "@/store";
import { redirect } from "next/navigation";
import { SellerComponent } from "@/features/seller";

const SellerPage = () => {
  const { getItem } = useLocalStorage("loggedInType");
  const { user } = UserAuth();

  useEffect(() => {
    const loggedInType = getItem();
    if (loggedInType !== USER_TYPE.SELLER) {
      return redirect("/");
    }
  }, [user]);

  return <SellerComponent />;
};

export default SellerPage;
