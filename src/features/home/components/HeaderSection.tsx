"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import toast from "react-hot-toast";

const navigation = [
  { name: "About", href: "#about", showAlert: false },
  { name: "Features", href: "#features", showAlert: true },
  { name: "Marketplace", href: "#marketplace", showAlert: true },
  { name: "Help", href: "#help", showAlert: true },
];

export const HeaderSection = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navigationData, setNavigationData] = useState<[] | typeof navigation>(
    []
  );
  const { user, logOut } = UserAuth();

  useEffect(() => {
    if (user) {
      setNavigationData([]);
    } else {
      setNavigationData(navigation);
    }
  }, [user]);

  const showAlert = () => {
    toast("Comming Soon!");
  };

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
          <a href="/" className="-m-1.5 p-1.5">
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
              onClick={item.showAlert ? showAlert : undefined}
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
              href={pathname === "/login" ? "/" : "/login"}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {pathname === "/login" ? "Go Home" : "Login"}{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    onClick={item.showAlert ? showAlert : undefined}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                    href={pathname === "/login" ? "/" : "/login"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {pathname === "/login" ? "Go Home" : "Login"}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};