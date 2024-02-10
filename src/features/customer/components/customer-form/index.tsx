"use client";

import { BackGroundDiv } from "@/features/shared/components/background-dev";
import { useAddressMutation } from "@/features/customer/hooks/useAddressMutation";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { useParams } from "next/navigation";
import { USE_LOCAL_STORAGE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";
import { CreateOrderForm } from "@/features/shared/components/create-order-form";

export const CustomerFormComponent = () => {
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS);

  const useAddressMutate = useAddressMutation();
  const params = useParams();
  const userID = getItem() as string | undefined;

  const getFormData = (data: Record<string, string | number | boolean>) => {
    const addressPayload = {
      id: params?.id,
      address: {
        ...data,
        userId: JSON.parse(userID as string),
      },
    };
    useAddressMutate.mutate(addressPayload);
  };

  return (
    <Container className="bg-white py-8 sm:py-10 h-screen">
      <BackGroundDiv>
        <CreateOrderForm getFormData={getFormData} />
      </BackGroundDiv>
    </Container>
  );
};
