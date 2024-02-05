"use client";

import Joi from "joi";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { useAddressMutation } from "@/features/customer/hooks/useAddressMutation";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { useParams } from "next/navigation";
import { CustomerAddressForm } from "./CustomerAddressForm";

const validationSchema = Joi.object({
  streetAddress: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zipCode: Joi.string().required(),
});

export const CustomerFormComponent = () => {
  const { getItem } = useLocalStorage("userDetails");

  const useAddressMutate = useAddressMutation();
  const params = useParams();
  const userID = JSON.parse(getItem() as string);

  const getFormData = (data: Record<string, string | number | boolean>) => {
    const addressPayload = {
      id: params?.id,
      address: {
        ...data,
        userId: userID,
        sellerId: params?.id,
      },
    };
    useAddressMutate.mutate(addressPayload);
  };
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <CustomerAddressForm
          getFormData={getFormData}
          validationSchema={validationSchema}
        />
      </BackGroundDiv>
    </div>
  );
};
