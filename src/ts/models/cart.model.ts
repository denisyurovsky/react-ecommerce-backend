export interface CartProduct {
  userId: number;
  productId: number;
  quantity: number;
  checked: boolean;
  price: number;
  discountPrice: number | null;
}

export interface CartItem {
  products: CartProduct[];
  checked: boolean;
}

export interface CartToCalculate {
  sellers: Record<string, CartItem>;
}

export interface Cart extends CartToCalculate {
  totalPrice: number;
  totalQuantity: number;
  totalDiscountPrice: number;
  sellersDiscount: number | null;
  personalDiscount: number | null;
}
