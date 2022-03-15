import type { Request, Response, NextFunction } from 'express';

import data from '../data/data';
import extractUserIdFromRequest from '../helpers/extractUserIdFromRequest';
import findUserAndOrder from '../helpers/findUserAndOrder';
import { OrderStatus } from '../ts/enums';
import isOrderIdValid from '../validators/checkOrderIdValidity';

export const handleUserId = (req: Request, res: Response, next: NextFunction) => {
  const userId = extractUserIdFromRequest(req);

  if (!req.body.userId && !userId) {
    return next(new Error('UserId is a mandatory argument for guests'));
  }

  if (userId) {
    req.body.userId = userId;
  }

  next();
};

export const confirmOrder = (req: Request, res: Response): void => {
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

    const date = new Date();

    order.status = OrderStatus.Delivered;
    order.deliveredAt = date.toDateString();

    res.json({
      orderStatus: order.status,
      orderId,
      deliveredAt: order.deliveredAt,
    });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
