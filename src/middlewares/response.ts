import type { Request, Response } from 'express';
import { cloneDeep } from 'lodash';

import checkCurrentUser from '../helpers/checkCurrentUser';
import getBaseUrl from '../helpers/getBaseUrl';
import { Cart } from '../ts/models/cart.model';
import { User } from '../ts/models/user.model';

interface ResponseBody {
  id: number;
  password?: string;
  cart?: Cart;
}

const modifySingleUser = <T extends ResponseBody>(body: T, req: Request): void => {
  delete body.password;
  if (!checkCurrentUser(body.id, req)) {
    delete body.cart;
  }
};

const modifyMultipleUsers = <T extends ResponseBody>(body: T[], req: Request): void => {
  body.forEach((user) => delete user.password);
  body.filter((user) => !checkCurrentUser(user.id, req)).map((user) => delete user.cart);
};

export default (req: Request, res: Response): void => {
  const body = cloneDeep(res.locals.data);
  const baseUrl = getBaseUrl(req.url);

  switch (baseUrl) {
    case 'users':
      if (Array.isArray(body)) {
        modifyMultipleUsers<User>(body, req);
        break;
      }

      modifySingleUser<User>(body, req);
      break;
  }
  res.json(body);
};
