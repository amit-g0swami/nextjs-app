import React from "react";
import useSellerStore from "@/features/seller/store/seller.store";
import { Container } from "@/components/atoms/container";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";

interface TabsProps {
  children: React.ReactElement[];
}

const renderToggleButton = (isTabOpen: boolean) => {
  switch (isTabOpen) {
    case true:
      return <XMarkIcon className=" h-6 w-6" aria-hidden="true" />;
    default:
      return <Bars3Icon className="block h-6 w-6" aria-hidden="true" />;
  }
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const { isTabOpen } = useSellerStore();
  const { selected } = useSellerStore();
  const { setSelected } = useSellerStore();
  const { setIsTabOpen } = useSellerStore();

  const handleChange = (index: number) => {
    setSelected(index);
  };

  const toggleMenu = () => {
    setIsTabOpen(!isTabOpen);
  };

  return (
    <React.Fragment>
      <nav className="ring-1 ring-inset ring-gray-900/5">
        <Container className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0">
          <Container className="flex h-16 items-center justify-between">
            <Container className="flex items-center">
              <Container className="hidden md:block">
                <Container className="ml-0 flex space-x-4 items-center">
                  {React.Children.map(
                    children,
                    (elem: React.ReactElement, index: number) => {
                      const className =
                        index === selected
                          ? "bg-indigo-600 text-white"
                          : "text-gray-600 hover:bg-indigo-500 hover:text-white";
                      return (
                        <Button
                          key={index}
                          className={`rounded-md px-3 py-2 z-50 text-sm font-medium cursor-pointer ${className}`}
                          onClick={() => handleChange(index)}
                          btnText={elem.props.title}
                        />
                      );
                    }
                  )}
                </Container>
              </Container>
            </Container>

            <Container className="flex md:hidden">
              <Button
                onClick={() => toggleMenu()}
                className="sm:mr-2 relative z-50 inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-gray-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                btnText={
                  <React.Fragment>
                    <Text className="absolute -inset-0.5">
                      <div />
                    </Text>
                    <Text className="sr-only">Open main menu</Text>
                    {renderToggleButton(isTabOpen)}
                  </React.Fragment>
                }
              />
            </Container>
          </Container>
        </Container>
      </nav>

      <Container className="md:hidden">
        <Container className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {isTabOpen && (
            <React.Fragment>
              {React.Children.map(
                children,
                (elem: React.ReactElement, index: number) => {
                  const className =
                    index === selected
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-indigo-500 hover:text-white";
                  return (
                    <Button
                      key={index}
                      className={`block rounded-md z-50 px-3 py-2 text-base font-medium ${className}`}
                      onClick={() => handleChange(index)}
                      btnText={elem.props.title}
                    />
                  );
                }
              )}
            </React.Fragment>
          )}
        </Container>
      </Container>

      <main>
        <Container className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-0">
          {React.Children.toArray(children)[selected]}
        </Container>
      </main>
    </React.Fragment>
  );
};
