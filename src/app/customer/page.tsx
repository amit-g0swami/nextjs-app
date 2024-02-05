"use client";

import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { USER_TYPE } from "@/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { CustomerComponent } from "@/features/customer";

const CustomerPage = () => {
  const { getItem } = useLocalStorage("loggedInType");
  const { user } = UserAuth();

  useEffect(() => {
    const loggedInType = getItem();
    if (loggedInType !== USER_TYPE.CUSTOMER) {
      return redirect("/");
    }
  }, [user]);

  return <CustomerComponent user={user} />;
};

export default CustomerPage;
