import type { NextFunction, Request, Response } from 'express';

import data from '../data/data';
import { User } from '../ts/models/user.model';

const getUserById = (id: string): User | undefined =>
  data.users.find((user) => user.id === Number(id));

export default (req: Request, res: Response, next: NextFunction): void => {
  const { userId } = req.body;
  const user = getUserById(userId);

  if (!user) {
    next(new Error("User doesn't exist"));

    return;
  }

  res.locals.user = user;
  next();
};
