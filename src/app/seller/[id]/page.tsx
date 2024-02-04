"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { UserAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { USER_TYPE } from "@/store";
import { redirect } from "next/navigation";

const SellerPage = () => {
  const { getItem } = useLocalStorage("loggedInType");
  const { user } = UserAuth();

  useEffect(() => {
    const loggedInType = getItem();
    if (loggedInType !== USER_TYPE.SELLER) {
      return redirect("/");
    }
  }, [user]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">
          Seller: {user?.displayName}
        </h6>
      </BackGroundDiv>
    </div>
  );
};

export default SellerPage;
