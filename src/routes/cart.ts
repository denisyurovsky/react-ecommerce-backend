import type { Request, Response } from 'express';

import data from '../data/data';
import { User } from '../ts/models/user.model';
import isCartValid from '../validators/checkCartValidity';

export default (req: Request, res: Response): void => {
  const { cart, updatedAt } = req.body;
  const { userId } = req.params;
  let user: User | undefined;

  try {
    if (!isCartValid(cart)) {
      res.status(400).json(`Wrong cart  format`);
    }

    user = data.users.find((user) => user.id === Number(userId));

    if (!user) {
      res.status(400).json(`No user with id ${userId}`);

      return;
    }

    user.cart = cart;
    user.updatedAt = updatedAt;
    res.json({ id: userId, cart: cart });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
