"use client";

import { useEffect, useState } from "react";
import { USER_TYPE } from "@/store";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { redirect } from "next/navigation";
import { UserAuth } from "@/shared/contexts/AuthContext";
import { LoginComponent } from "@/features/login";

export default function LoginPage() {
  const [loginType, setLoginType] = useState<USER_TYPE | null>(null);
  const { user } = UserAuth();

  const { setItem, getItem } = useLocalStorage("loggedInType");
  const { getItem: getUserDetails } = useLocalStorage("userDetails");

  const setType = (type: USER_TYPE) => {
    setItem(type);
    setLoginType(type);
  };

  useEffect(() => {
    if (
      getItem() === USER_TYPE.SELLER &&
      user !== null &&
      getUserDetails() !== null
    ) {
      const sellerId = JSON.parse(getUserDetails() as string);
      redirect(`/seller/${sellerId}`);
    }
    if (getItem() === USER_TYPE.CUSTOMER && user) {
      redirect("/customer");
    }
  }, [user]);

  return <LoginComponent loginType={loginType} setType={setType} />;
}
