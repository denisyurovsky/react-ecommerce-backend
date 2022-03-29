import { PERSONAL_DISCOUNT } from '../constants/constants';
import { Cart, CartItem, CartProduct, CartToCalculate } from '../ts/models/cart.model';

const calcPersonalDiscount = (expenses: number, price: number): number => {
  if (!expenses) return 0;

  if (expenses > PERSONAL_DISCOUNT.LARGE.THRESHOLD) {
    return price * PERSONAL_DISCOUNT.LARGE.DISCOUNT;
  }

  if (expenses > PERSONAL_DISCOUNT.MODERATE.THRESHOLD) {
    return price * PERSONAL_DISCOUNT.MODERATE.DISCOUNT;
  }

  if (expenses > PERSONAL_DISCOUNT.SMALL.THRESHOLD) {
    return price * PERSONAL_DISCOUNT.SMALL.DISCOUNT;
  }

  return 0;
};

const calcBasicPrice = (products: CartProduct[]): number =>
  products.reduce((acc, pr) => acc + pr.price * pr.quantity, 0);

const calcQuantity = (products: CartProduct[]): number =>
  products.reduce((acc, pr) => acc + pr.quantity, 0);

const calcSellersDiscount = (products: CartProduct[]): number =>
  products.reduce(
    (acc, pr) => (!pr.discountPrice ? acc : acc + (pr.price - pr.discountPrice) * pr.quantity),
    0
  );

const getCheckedProducts = (products: CartItem[]): CartProduct[] =>
  products
    .filter((item) => item.checked)
    .flatMap((item) => item.products)
    .filter((pr) => pr.checked);

const flatAllProducts = (products: CartItem[]): CartProduct[] =>
  products.flatMap((item) => item.products);

export const calculateCart = (cart: CartToCalculate, totalSpendings: number): Cart => {
  const checkedProducts = getCheckedProducts(Object.values(cart.sellers));
  const allProducts = flatAllProducts(Object.values(cart.sellers));

  const totalQuantity = calcQuantity(allProducts);
  const totalPrice = calcBasicPrice(checkedProducts);
  const sellersDiscount = calcSellersDiscount(checkedProducts);

  let totalDiscountPrice = totalPrice - Number(sellersDiscount);
  const personalDiscount = calcPersonalDiscount(totalSpendings, totalDiscountPrice);

  totalDiscountPrice -= Number(personalDiscount);

  return {
    ...cart,
    totalPrice,
    totalDiscountPrice,
    totalQuantity,
    sellersDiscount,
    personalDiscount,
  };
};
