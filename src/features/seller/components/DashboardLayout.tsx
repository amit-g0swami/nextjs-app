import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CreateOrder } from "./CreateOrder";
import { UserAuth } from "@/features/shared/contexts/AuthContext";

const navigation = [
  { name: "Create Order", href: "#", current: true },
  {
    name: "Seller Profile",
    href: "#",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout() {
  const { user } = UserAuth();
  return (
    <div className="bg-white pt-0 sm:pt-10 h-screen">
      <div className="relative isolate px-0 pt-20 lg:pt-12 md:pt-10">
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
        <Disclosure
          as="nav"
          className="bg-gray-50 ring-1 ring-inset ring-gray-900/5"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-0 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-600 text-white"
                                : "text-gray-600 hover:bg-indigo-500 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="sm:mr-2 relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-gray-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-600 text-white"
                          : "text-gray-600 hover:bg-indigo-500 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-gray-600">
                        {user?.displayName}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl py-6 px-0 sm:px-6 lg:px-0">
            <CreateOrder />
          </div>
        </main>
      </div>
    </div>
  );
}
