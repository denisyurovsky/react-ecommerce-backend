import { Cart } from '../ts/models/cart.model';

export default function checkCartValidity(cart: Cart): boolean {
  return Number.isInteger(cart.totalQuantity) && Number.isInteger(cart.totalPrice);
}
