import type { Request, Response } from 'express';

import data from '../data/data';
import findUserAndOrder from '../helpers/findUserAndOrder';
import { OrderStatus } from '../ts/enums';
import isOrderIdValid from '../validators/checkOrderIdValidity';

export default (req: Request, res: Response): void => {
  const { orderId, userId } = req.body;

  try {
    const { user, order } = findUserAndOrder(userId, orderId, data);

    if (!isOrderIdValid(orderId)) {
      res.status(400).json(`Invalid orderId format`);
    }

    if (!user) {
      res.status(400).json(`No user with id ${userId}`);

      return;
    }

    if (!order) {
      res.status(400).json(`No order with id ${orderId}`);

      return;
    }

    order.status = OrderStatus.Cancelled;

    res.json({ orderStatus: order.status, orderId });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
