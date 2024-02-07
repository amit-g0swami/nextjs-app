"use client";

import Joi from "joi";
import { Form } from "@/components/molecules/form";
import { FormInput } from "@/components/molecules/form-input";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";

type CustomerAddressFormProps = {
  getFormData: (data: Record<string, string | number | boolean>) => void;
  validationSchema: Joi.ObjectSchema;
};

export const CustomerAddressForm = ({
  getFormData,
  validationSchema,
}: CustomerAddressFormProps) => {
  return (
    <Form getFormData={getFormData} validationSchema={validationSchema}>
      <Text as="h4" className="text-4xl text-neutral-800">
        Please enter your address
      </Text>
      <Container className="space-y-12">
        <Container className="border-b border-gray-900/10 pb-12">
          <Container className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
          </Container>
        </Container>
      </Container>

      <Container className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="submit" btnText="Submit" />
      </Container>
    </Form>
  );
};
