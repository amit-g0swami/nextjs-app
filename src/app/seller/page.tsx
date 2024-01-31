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
    const loggedInType = getItem();
    if (loggedInType !== USER_TYPE.SELLER) {
      return redirect("/");
    }
  }, []);

  useEffect(() => {
    const loggedInType = getItem();
    const user = session?.user;
    if (user && user !== null && user !== undefined) {
      const userDataPayload: IUserLoginPayload = {
        name: user.name,
        email: user.email,
        createdAs: loggedInType,
      };
      useLoginMutate.mutate(userDataPayload);
    }
  }, [session]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">
          Seller: {session?.user?.name}
        </h6>
      </BackGroundDiv>
    </div>
  );
};

export default withAuth(SellerPage);
