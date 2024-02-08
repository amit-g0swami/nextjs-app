import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { UserAuth } from "../shared/contexts/AuthContext";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { USE_LOCAL_STORAGE } from "@/shared/shared.interface";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Modal } from "@/components/molecules/modal";
import useCustomerStore from "./store/customer.store";

export const CustomerComponent = () => {
  const { user } = UserAuth();
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_SELLED_ID);
  const sellerId = JSON.parse(getItem() as string);

  const { isAddSellerIdModelOpen } = useCustomerStore();
  const { setIsAddSellerIdModelOpen } = useCustomerStore();

  const handleAddSeller = () => {
    setIsAddSellerIdModelOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddSellerIdModelOpen(false);
  };

  return (
    <Container className="bg-white py-10 sm:py-14 h-screen">
      <BackGroundDiv>
        <Container>
          <Container className="px-4 sm:px-0">
            <Text
              as="h3"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Customer Information
            </Text>
          </Container>
          <Container className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.displayName}
                </dd>
              </Container>
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.email}
                </dd>
              </Container>
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Seller
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {sellerId === null ? (
                    <div
                      className="flex cursor-pointer"
                      onClick={() => handleAddSeller()}
                    >
                      <PlusCircleIcon className="mr-2 h-5 w-5" />
                      Add Seller
                    </div>
                  ) : (
                    sellerId
                  )}
                </dd>
              </Container>
            </dl>
          </Container>
        </Container>
      </BackGroundDiv>

      <Modal
        isOpen={isAddSellerIdModelOpen}
        title="Add SellerId"
        content={
          <div>
            <Text as="p" className="text-sm leading-6 text-gray-500">
              Add your seller Id
            </Text>
          </div>
        }
        onClose={handleCloseModal}
      />
    </Container>
  );
};
