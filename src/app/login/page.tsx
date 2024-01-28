"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { UserIcon, BuildingStorefrontIcon } from "@heroicons/react/20/solid";

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: Readonly<CardProps>) => (
  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <div className="mx-auto max-w-xs px-8">
        <div className="mt-10 flex items-baseline justify-center text-gray-900">
          {icon}
        </div>
        <a
          href="#"
          className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {title}
        </a>
        <p className="mt-10 text-xs leading-5 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function LoginPage() {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl sm:mt-18 lg:mx-0 lg:flex lg:max-w-none justify-center">
            <Card
              icon={<BuildingStorefrontIcon className="h-32" />}
              title="Seller Login"
              description="Elevate your business journey! Sign in to your seller account
            and explore tools designed to boost your sales."
            />
            <Card
              icon={<UserIcon className="h-32" />}
              title="Customer Login"
              description="Unlock endless possibilities and personalized experiences. Login to
            access exclusive features tailored just for you."
            />
          </div>
        </div>
      </BackGroundDiv>
    </div>
  );
}
