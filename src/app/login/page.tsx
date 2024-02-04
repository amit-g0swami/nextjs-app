"use client";

import LoginForm from "@/components/LoginForm";
import { useEffect, useState } from "react";
import { BackGroundDiv } from "@/components/BackGroundDiv";
import { USER_TYPE } from "@/store";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card } from "@/components/CardComponent";
import { redirect } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

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
    if (getItem() === USER_TYPE.SELLER && user) {
      const sellerId = JSON.parse(getUserDetails() as string);
      redirect(`/seller/${sellerId}`);
    }
    if (getItem() === USER_TYPE.CUSTOMER && user) {
      redirect("/customer");
    }
  }, [user]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl sm:mt-18 lg:mx-0 lg:flex lg:max-w-none justify-center">
            {loginType === null ? (
              <>
                <Card
                  icon={"/assets/seller.png"}
                  title="Seller Login"
                  description="Elevate your business journey! Sign in to your seller account
            and explore tools designed to boost your sales."
                  setLoginType={setType}
                  type={USER_TYPE.SELLER}
                />
                <Card
                  icon={"/assets/profile.png"}
                  title="Customer Login"
                  description="Unlock endless possibilities and personalized experiences. Login to
            access exclusive features tailored just for you."
                  setLoginType={setType}
                  type={USER_TYPE.CUSTOMER}
                />
              </>
            ) : (
              <LoginForm disabled={true} />
            )}
          </div>
        </div>
      </BackGroundDiv>
    </div>
  );
}
