import Joi from "joi";
import { Button } from "@/components/atoms/button";
import { Form } from "@/components/molecules/form";
import { FormInput } from "@/components/molecules/form-input";
import { FormRadioInput } from "@/components/molecules/form-radio";
import { PAYMENT_TYPE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";
import { FormSection } from "@/components/molecules/form-section";

type CreateOrderFormProps = {
  getFormData: (data: Record<string, string | number | boolean>) => void;
};

const createOrderSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  mobileNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  completeAddress: Joi.string().required(),
  landMark: Joi.string().required(),
  pinCode: Joi.string()
    .pattern(/^\d{6}$/)
    .required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  productName: Joi.string().required(),
  quantity: Joi.number().required(),
  unitPrice: Joi.number().required(),
  totalAmount: Joi.number().required(),
  deadWeight: Joi.number().required(),
  length: Joi.number().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
  paymentMode: Joi.string()
    .valid(PAYMENT_TYPE.COD, PAYMENT_TYPE.PREPAID)
    .required(),
});

export const CreateOrderForm = ({ getFormData }: CreateOrderFormProps) => {
  return (
    <Form getFormData={getFormData} validationSchema={createOrderSchema}>
      <FormSection title="Personal Information">
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
      </FormSection>

      <FormSection title="Where order is placed">
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
      </FormSection>

      <FormSection title="Order Details">
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
      </FormSection>

      <FormSection title="Package Details">
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
      </FormSection>

      <FormSection title="Payment Details">
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
      </FormSection>

      <Container className="-mt-6 flex items-center justify-end gap-x-6">
        <Button
          btnText="Submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </Container>
    </Form>
  );
};
