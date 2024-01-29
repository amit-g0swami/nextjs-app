"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { BackGroundDiv } from "@/components/BackGroundDiv";
import {
  UserCircleIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  setLoginType: (type: string) => void;
  type: string;
};

const Card = ({
  icon,
  title,
  description,
  type,
  setLoginType,
}: Readonly<CardProps>) => (
  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <div className="mx-auto max-w-xs px-8">
        <div className="mt-10 flex items-baseline justify-center text-gray-900">
          {icon}
        </div>
        <button
          className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setLoginType(type)}
        >
          {title}
        </button>
        <p className="mt-10 text-xs leading-5 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function LoginPage() {
  const { data: session } = useSession();
  const [loginType, setLoginType] = useState<string | null>(null);
  const setType = (type: string) => setLoginType(type);

  useEffect(() => {
    if (session?.user !== null && session?.user !== undefined) {
      return redirect("/seller");
    }
  }, [session?.user]);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl sm:mt-18 lg:mx-0 lg:flex lg:max-w-none justify-center">
            {loginType === null ? (
              <>
                <Card
                  icon={<BuildingStorefrontIcon className="h-32" />}
                  title="Seller Login"
                  description="Elevate your business journey! Sign in to your seller account
            and explore tools designed to boost your sales."
                  setLoginType={setType}
                  type="seller"
                />
                <Card
                  icon={<UserCircleIcon className="h-32" />}
                  title="Customer Login"
                  description="Unlock endless possibilities and personalized experiences. Login to
            access exclusive features tailored just for you."
                  setLoginType={setType}
                  type="customer"
                />
              </>
            ) : (
              <div className="gap-10 flex">
                <button
                  type="button"
                  className="w-auto rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center justify-center flex"
                  onClick={() => signIn()}
                >
                  Sign in with Google
                </button>
                <button
                  type="button"
                  disabled
                  className="w-auto rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center justify-center flex
              disabled:bg-neutral-800 disabled:cursor-not-allowed
              "
                >
                  Sign in with Facebook
                </button>
              </div>
            )}
          </div>
        </div>
      </BackGroundDiv>
    </div>
  );
}
