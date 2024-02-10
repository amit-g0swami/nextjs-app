"use client";

import React from "react";
import toast from "react-hot-toast";
import { UserAuth } from "@/contexts/AuthContext";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { USE_LOCAL_STORAGE } from "@/shared/shared.interface";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { ShowDetails } from "@/features/shared/components/show-details";

export const SellerProfile = () => {
  const { user } = UserAuth();
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS);
  const sellerId = getItem() as string | undefined;

  const handleClick = () => {
    navigator.clipboard.writeText(JSON.parse(sellerId as string)).then(() => {
      toast.success("Copied to clipboard");
    });
  };

  return (
    <Container>
      <Container className="px-4 sm:px-0">
        <Text
          as="h3"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Seller Information
        </Text>
        <Text as="p" className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </Text>
      </Container>
      <Container className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <ShowDetails title="Full Name" description={user?.displayName} />
          <ShowDetails title="Email" description={user?.email} />
          <ShowDetails
            title="Seller Code"
            description={
              sellerId && (
                <Container className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
                  {JSON.parse(sellerId)}
                  <DocumentDuplicateIcon
                    onClick={() => handleClick()}
                    className="ml-2 h-5 w-5 cursor-pointer"
                  />
                </Container>
              )
            }
          />
        </dl>
      </Container>
    </Container>
  );
};
