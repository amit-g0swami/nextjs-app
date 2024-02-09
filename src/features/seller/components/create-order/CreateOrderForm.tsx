import Joi from "joi";
import { Button } from "@/components/atoms/button";
import { Form } from "@/components/molecules/form";
import { FormInput } from "@/components/molecules/form-input";
import { FormRadioInput } from "@/components/molecules/form-radio";
import { PAYMENT_TYPE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";

type CreateOrderFormProps = {
  validationSchema: Joi.ObjectSchema;
  getFormData: (data: Record<string, string | number | boolean>) => void;
};

export const CreateOrderForm = ({
  getFormData,
  validationSchema,
}: CreateOrderFormProps) => {
  return (
    <Form getFormData={getFormData} validationSchema={validationSchema}>
      <Container className="pb-6">
        <Text
          as="h2"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Personal Information
        </Text>
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Full Name"
            name="fullName"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Email address"
            name="email"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Mobile Number"
            name="mobileNumber"
            labelRequired
            type="number"
          />
        </Container>
      </Container>

      <Container className="pb-6">
        <Text
          as="h2"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Where order is placed
        </Text>
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Complete Address"
            name="completeAddress"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="landmark"
            name="landMark"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Pincode"
            name="pinCode"
            type="number"
            labelRequired
          />
        </Container>
        <Container className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="City"
            name="city"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="State"
            name="state"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Country"
            name="country"
            labelRequired
          />
        </Container>
      </Container>

      <Container className="pb-6">
        <Text
          as="h2"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Order Details
        </Text>
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Product Name"
            name="productName"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Quantity"
            name="quantity"
            type="number"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Unit Price"
            name="unitPrice"
            type="number"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Total Amount"
            name="totalAmount"
            type="number"
            labelRequired
          />
        </Container>
      </Container>

      <Container className="pb-6">
        <Text
          as="h2"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Package Details
        </Text>
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Dead weight"
            name="deadWeight"
            type="number"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Length (in cm)"
            name="length"
            type="number"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Width (in cm)"
            name="width"
            type="number"
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Height (in cm)"
            name="height"
            type="number"
            labelRequired
          />
        </Container>
      </Container>

      <Container className="pb-0">
        <Text
          as="h2"
          className="text-base font-semibold leading-7 text-gray-900"
        >
          Payment Details
        </Text>
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <FormRadioInput
            name="paymentMode"
            label="Prepaid"
            labelRequired
            value={PAYMENT_TYPE.PREPAID}
          />
          <FormRadioInput
            name="paymentMode"
            label="COD"
            labelRequired
            value={PAYMENT_TYPE.COD}
          />
        </Container>
      </Container>

      <Container className="mt-0 flex items-center justify-end gap-x-6">
        <Button
          btnText="Submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </Container>
    </Form>
  );
};
