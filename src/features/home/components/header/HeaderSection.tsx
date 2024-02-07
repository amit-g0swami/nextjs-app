"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { ROUTES } from "@/shared/shared.interface";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "Help", href: "#help" },
];

export const HeaderSection = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navigationData, setNavigationData] = useState<[] | typeof navigation>(
    []
  );
  const { user, logOut } = UserAuth();

  useEffect(() => {
    if (!user) {
      return setNavigationData(navigation);
    }
    return setNavigationData([]);
  }, [user]);

  const handleSignOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href={ROUTES.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/assets/logo.png"
              alt=""
              width={98}
              height={98}
              priority
            />
            <link
              rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationData.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <button
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => handleSignOut()}
            >
              Logout
              <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <Link
              href={pathname === ROUTES.LOGIN ? ROUTES.HOME : ROUTES.LOGIN}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {pathname === ROUTES.LOGIN ? "Go Home" : "Login"}{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Shippiviot</span>
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={98}
                  height={98}
                  priority
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigationData.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-sm px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {user ? (
                    <button
                      className="text-sm font-semibold leading-6 text-gray-900"
                      onClick={() => handleSignOut()}
                    >
                      Logout
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  ) : (
                    <Link
                      href={
                        pathname === ROUTES.LOGIN ? ROUTES.HOME : ROUTES.LOGIN
                      }
                      className="-mx-3 block rounded-sm px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      {pathname === ROUTES.LOGIN ? "Go Home" : "Login"}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};
