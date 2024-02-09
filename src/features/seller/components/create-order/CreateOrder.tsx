"use client";

import Joi from "joi";
import { PAYMENT_TYPE } from "@/shared/shared.interface";
import { useParams } from "next/navigation";
import { useCreateOrderMutation } from "../../hooks/useCreateOrderMutation";
import { ICreateOrderPayload } from "../../seller.interface";
import { CreateOrderForm } from "./CreateOrderForm";

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

export const CreateOrder = () => {
  const params = useParams();
  const sellerId = params?.id;

  const useCreateOrderMutate = useCreateOrderMutation();

  const getFormData = (data: Record<string, string | number | boolean>) => {
    const buyerDetails = {
      fullName: data.fullName,
      email: data.email,
      mobileNumber: data.mobileNumber,
    };
    const orderPlaced = {
      completeAddress: data.completeAddress,
      landMark: data.landMark,
      pinCode: data.pinCode,
      city: data.city,
      state: data.state,
      country: data.country,
    };
    const orderDetails = [
      {
        productName: data.productName,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
        totalAmount: data.totalAmount,
      },
    ];
    const packageDetails = {
      deadWeight: data.deadWeight,
      packageDimension: {
        length: data.length,
        width: data.width,
        height: data.height,
      },
    };
    const paymentDetails = {
      paymentMode: data.paymentMode,
    };
    const orderPayload = {
      sellerId,
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails,
    } as ICreateOrderPayload;

    useCreateOrderMutate.mutate(orderPayload);
  };

  return (
    <CreateOrderForm
      getFormData={getFormData}
      validationSchema={createOrderSchema}
    />
  );
};
