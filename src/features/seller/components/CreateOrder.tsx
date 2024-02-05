"use client";

import Joi from "joi";
import { Form } from "@/components/molecules/form";
import { FormInput } from "@/components/molecules/form-input";
import { PAYMENT_TYPE } from "@/shared/shared.interface";

const createOrderSchema = Joi.object({
  buyerDetails: Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    mobileNumber: Joi.string()
      .pattern(/^\d{10}$/)
      .required(),
  }).required(),
  orderPlaced: Joi.object({
    completeAddress: Joi.string().required(),
    landMark: Joi.string().required(),
    pinCode: Joi.string()
      .pattern(/^\d{6}$/)
      .required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  orderDetails: Joi.array()
    .items(
      Joi.object({
        productName: Joi.string().required(),
        quantity: Joi.number().required(),
        unitPrice: Joi.number().required(),
        totalAmount: Joi.number().required(),
      })
    )
    .required(),
  packageDetails: Joi.object({
    deadWeight: Joi.number().required(),
    packageDimension: Joi.object({
      length: Joi.number().required(),
      width: Joi.number().required(),
      height: Joi.number().required(),
    }).required(),
  }).required(),
  paymentDetails: Joi.object({
    paymentMode: Joi.string()
      .valid(PAYMENT_TYPE.COD, PAYMENT_TYPE.PREPAID)
      .required(),
  }).required(),
});

export const CreateOrder = () => {
  const getFormData = (data: Record<string, string | number | boolean>) => {
    console.log(data);
  };

  return (
    <Form getFormData={getFormData} validationSchema={createOrderSchema}>
      <h4 className="text-xl text-neutral-800">Create Order</h4>
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
