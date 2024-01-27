"use client";

import { UserIcon, BuildingStorefrontIcon } from "@heroicons/react/20/solid";

export default function LoginPage() {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-[-60px] max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none justify-center">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
              <div className="mx-auto max-w-xs px-8">
                <div className="mt-8 flex items-baseline justify-center text-gray-700">
                  <BuildingStorefrontIcon className="h-32" />
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Seller Login
                </a>
                <p className="mt-8 text-xs leading-5 text-gray-600">
                  Elevate your business journey! Sign in to your seller account
                  and explore tools designed to boost your sales.
                </p>
              </div>
            </div>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
              <div className="mx-auto max-w-xs px-8">
                <div className="mt-8 flex items-baseline justify-center text-gray-700">
                  <UserIcon className="h-32" />
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  User Login
                </a>
                <p className="mt-8 text-xs leading-5 text-gray-600">
                  Unlock endless possibilities and personalized experiences.
                  Login to access exclusive features tailored just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
