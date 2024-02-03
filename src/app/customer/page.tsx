"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { USER_TYPE } from "@/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";

const CustomerPage = () => {
  const { getItem } = useLocalStorage("loggedInType");
  const { user } = UserAuth();

  useEffect(() => {
    const loggedInType = getItem();
    if (loggedInType !== USER_TYPE.CUSTOMER) {
      return redirect("/");
    }
  }, [user]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">User: {user?.displayName}</h6>
      </BackGroundDiv>
    </div>
  );
};

export default CustomerPage;
