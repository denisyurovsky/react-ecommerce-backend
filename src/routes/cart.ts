import type { Request, Response } from 'express';

import { calculateCart } from '../controllers/cart.controller';
import { CartToCalculate } from '../ts/models/cart.model';
import { User } from '../ts/models/user.model';

interface Body {
  cart: CartToCalculate;
  updatedAt: Date;
}

export const setCart = (req: Request, res: Response): void => {
  const { cart, updatedAt }: Body = req.body;
  const user: User = res.locals.user;

  try {
    const calculatedCart = calculateCart(cart, user.spentCash);

    user.cart = calculatedCart;
    user.updatedAt = updatedAt;

    res.json({ id: user.id, cart: calculatedCart });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteCart = (req: Request, res: Response): void => {
  const user: User = res.locals.user;

  delete user.cart;

  res.status(200).json();
};
