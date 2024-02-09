"use client";

import Joi from "joi";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { useAddressMutation } from "@/features/customer/hooks/useAddressMutation";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { useParams } from "next/navigation";
import { CustomerAddressForm } from "./CustomerAddressForm";
import { USE_LOCAL_STORAGE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";

const validationSchema = Joi.object({
  streetAddress: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zipCode: Joi.string()
    .required()
    .pattern(/^\d{6}$/),
});

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
    <Container className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <CustomerAddressForm
          getFormData={getFormData}
          validationSchema={validationSchema}
        />
      </BackGroundDiv>
    </Container>
  );
};
