"use client";

import withAuth from "@/withAuth";
import { BackGroundDiv } from "@/components/BackGroundDiv";
import { useSession } from "next-auth/react";
import { useCreateUserMutation } from "@/hooks/useLoginMutation";
import { IUserLoginPayload } from "@/services/userService";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { USER_TYPE } from "@/store";
import { redirect } from "next/navigation";

const SellerPage = () => {
  const { data: session } = useSession();
  const useLoginMutate = useCreateUserMutation();

  const { getItem } = useLocalStorage("loggedInType");

  useEffect(() => {
    if (getItem() !== USER_TYPE.SELLER) {
      return redirect("/");
    }
    if (session && session.user !== null && session.user !== undefined) {
      const userDataPayload: IUserLoginPayload = {
        name: session.user.name,
        email: session.user.email,
        createdAs: getItem(),
      };
      useLoginMutate.mutate(userDataPayload);
    }
  }, [session]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h4 className="text-4xl text-neutral-800">{session?.user?.name}</h4>
      </BackGroundDiv>
    </div>
  );
};

export default withAuth(SellerPage);
