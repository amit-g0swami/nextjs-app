"use client";

import { BackGroundDiv } from "@/components/BackGroundDiv";
import { FormSection } from "@/components/FormSection";

export default function CustomerPage() {
  const getFormData = (data: any) => {
    console.log(data);
  };
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <FormSection getFormData={getFormData} />
      </BackGroundDiv>
    </div>
  );
}
