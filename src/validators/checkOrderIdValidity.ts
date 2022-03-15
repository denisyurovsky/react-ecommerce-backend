export default function checkOrderIdValidity(orderId: string): boolean {
  if (!Number.isInteger(parseInt(orderId))) {
    return false;
  }

  return true;
}
