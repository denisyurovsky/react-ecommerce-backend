import type { Request, Response } from 'express';

import { calculateCart } from '../controllers/cart.controller';
import { CartToCalculate } from '../ts/models/cart.model';

interface Body {
  cart: CartToCalculate;
}

export const calculateGuestCart = (req: Request, res: Response): void => {
  const { cart }: Body = req.body;

  try {
    res.json({ cart: calculateCart(cart, 0) });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
