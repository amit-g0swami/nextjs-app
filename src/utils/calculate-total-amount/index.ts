export const calculateTotalAmount = (
  data: Record<string, string | number | boolean>
) => {
  if (data && data.quantity && data.unitPrice) {
    return Number(data.quantity) * Number(data.unitPrice)
  }
  return 0
}
