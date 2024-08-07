import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { FormRadioInput } from '@/components/organisms/form/form-radio'
import { PAYMENT_TYPE } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'
import { FormSection } from '@/components/organisms/form/form-section'
import { FormSwitch } from '@/components/organisms/form/form-swich'
import { Input } from '@/components/atoms/input'
import {
  calculateApplicableWeight,
  calculateTotalAmount
} from '@/utils/calculate-amounts'

type CreateOrderFormProps = {
  disabled?: boolean
  showSubmitButton?: boolean
  initialValues?: Record<string, any>
  totalAmount?: number
  applicableWeight?: number
  setTotalAmount?: (totalAmount: number) => void
  setApplicableWeight?: (applicableWeight: number) => void
  getFormData: (data: Record<string, string | number | boolean>) => void
}

const createOrderSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  mobileNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  completeAddress: Joi.string().required(),
  landMark: Joi.string().allow(''),
  pinCode: Joi.string()
    .pattern(/^\d{6}$/)
    .required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  productName: Joi.string().required(),
  quantity: Joi.number().required(),
  unitPrice: Joi.number().required(),
  deadWeight: Joi.number().required(),
  length: Joi.number().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
  paymentMode: Joi.string()
    .valid(PAYMENT_TYPE.COD, PAYMENT_TYPE.PREPAID)
    .required(),
  isSavedToShiprocket: Joi.boolean()
})

export const CreateOrderForm = ({
  showSubmitButton = true,
  disabled = false,
  initialValues = {},
  totalAmount = 0,
  applicableWeight = 0,
  getFormData,
  setApplicableWeight = () => {},
  setTotalAmount = () => {}
}: CreateOrderFormProps) => {
  const getFormDetails = (data: Record<string, string | number | boolean>) => {
    const newTotalAmount = calculateTotalAmount(data)
    const totalAmountWithApplicableWeight = calculateApplicableWeight(data)
    if (setTotalAmount) {
      setTotalAmount(newTotalAmount)
    }
    if (setApplicableWeight) {
      setApplicableWeight(totalAmountWithApplicableWeight)
    }
  }
  return (
    <Form
      validationSchema={createOrderSchema}
      initialValues={initialValues}
      getFormData={getFormData}
      getFormDetails={getFormDetails}
    >
      <FormSection title="Personal Information">
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Full Name"
            name="fullName"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Email address"
            name="email"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Mobile Number"
            name="mobileNumber"
            type="number"
            disabled={disabled}
            labelRequired
          />
        </Container>
      </FormSection>

      <FormSection title="Where order is placed">
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Complete Address"
            name="completeAddress"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="landmark"
            name="landMark"
            disabled={disabled}
          />
          <FormInput
            className="sm:col-span-2"
            label="Pincode"
            name="pinCode"
            type="number"
            disabled={disabled}
            labelRequired
          />
        </Container>
        <Container className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="City"
            name="city"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="State"
            name="state"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Country"
            name="country"
            disabled={disabled}
            labelRequired
          />
        </Container>
      </FormSection>

      <FormSection title="Order Details">
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Product Name"
            name="productName"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Quantity"
            name="quantity"
            type="number"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Unit Price"
            name="unitPrice"
            type="number"
            disabled={disabled}
            labelRequired
          />
        </Container>
        <Container className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Input
            className="sm:col-span-2 sm:col-start-1"
            label="Total Amount"
            name="totalAmount"
            type="number"
            disabled={true}
            value={totalAmount}
            labelRequired
          />
        </Container>
      </FormSection>

      <FormSection title="Package Details">
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Dead weight"
            name="deadWeight"
            type="number"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Length (in cm)"
            name="length"
            type="number"
            disabled={disabled}
            labelRequired
          />
          <FormInput
            className="sm:col-span-2"
            label="Width (in cm)"
            name="width"
            type="number"
            disabled={disabled}
            labelRequired
          />
        </Container>
        <Container className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            className="sm:col-span-2 sm:col-start-1"
            label="Height (in cm)"
            name="height"
            type="number"
            disabled={disabled}
            labelRequired
          />
          <Input
            className="sm:col-span-2"
            label="Applicable Weight"
            name="applicableWeight"
            type="number"
            disabled={true}
            value={applicableWeight}
            labelRequired
          />
        </Container>
      </FormSection>

      <FormSection title="Payment Details">
        <Container className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <FormRadioInput
            name="paymentMode"
            label="Prepaid"
            value={PAYMENT_TYPE.PREPAID}
            disabled={disabled}
            labelRequired
          />
          <FormRadioInput
            name="paymentMode"
            label="COD"
            value={PAYMENT_TYPE.COD}
            disabled={disabled}
            labelRequired
          />
          <FormSwitch
            className="sm:col-span-2"
            name="isSavedToShiprocket"
            label="Save To Shiprocket"
            disabled={disabled}
          />
        </Container>
      </FormSection>

      {showSubmitButton && (
        <Container className="-mt-6 flex items-center justify-end gap-x-6">
          <Button
            btnText="Submit"
            className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </Container>
      )}
    </Form>
  )
}
