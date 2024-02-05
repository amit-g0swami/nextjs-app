"use client";

import Joi from "joi";
import { useState } from "react";
import { Form } from "@/components/molecules/form";
import { FormInput } from "@/components/molecules/form-input";

type CustomerAddressFormProps = {
  getFormData: (data: Record<string, string | number | boolean>) => void;
  validationSchema: Joi.ObjectSchema;
};

export const CustomerAddressForm = ({
  getFormData,
  validationSchema,
}: CustomerAddressFormProps) => {
  const [values, setValues] = useState<Record<string, string | number>>({});

  return (
    <Form getFormData={getFormData} validationSchema={validationSchema}>
      <h4 className="text-4xl text-neutral-800">Please enter your address</h4>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <FormInput
              className="col-span-full"
              label="Street address"
              name="streetAddress"
              labelRequired
            />
            <FormInput
              className="sm:col-span-2 sm:col-start-1"
              label="City"
              name="city"
              labelRequired
            />
            <FormInput
              className="sm:col-span-2"
              label="State / Province"
              name="state"
              labelRequired
            />
            <FormInput
              className="sm:col-span-2"
              label="ZIP / Postal code"
              name="zipCode"
              type="number"
              labelRequired
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};
