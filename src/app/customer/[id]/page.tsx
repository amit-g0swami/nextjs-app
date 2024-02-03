"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { FormSection } from "@/components/FormSection";
import { useAddressMutation } from "@/hooks/useAddressMutation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useParams } from "next/navigation";

export default function CustomerFormPage() {
  const { getItem } = useLocalStorage("userDetails");

  const useAddressMutate = useAddressMutation();
  const params = useParams();
  const userID = JSON.parse(getItem() as string);

  const getFormData = (data: Record<string, string | number>) => {
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
        <FormSection getFormData={getFormData} />
      </BackGroundDiv>
    </div>
  );
}
