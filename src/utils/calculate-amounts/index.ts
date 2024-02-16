export const calculateTotalAmount = (
  data: Record<string, string | number | boolean>
): number => {
  if (data && data.quantity && data.unitPrice) {
    return Number(data.quantity) * Number(data.unitPrice)
  }
  return 0
}

export const calculateApplicableWeight = (
  data: Record<string, string | number | boolean>
): number => {
  if (data && data.deadWeight && data.length && data.width && data.height) {
    const dimensionsWeight =
      (Number(data.length) * Number(data.width) * Number(data.height)) / 10
    if (Number(data.deadWeight) > dimensionsWeight) {
      return Number(data.deadWeight)
    }
    return Number(dimensionsWeight)
  }
  return 0
}
