import type { Request, Response } from 'express';
import { cloneDeep } from 'lodash';

import products from '../data/products';
import checkCurrentUser from '../helpers/checkCurrentUser';
import getBaseUrl from '../helpers/getBaseUrl';
import { Cart } from '../ts/models/cart.model';
import { Feedback } from '../ts/models/feedbacks.model';
import { User } from '../ts/models/user.model';

interface ResponseBody {
  id: number;
  password?: string;
  cart?: Cart;
}

interface FeedbacksBody extends Feedback {
  productName?: string;
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

const addProductName = (body: FeedbacksBody | FeedbacksBody[]) => {
  Array.isArray(body)
    ? body.map((feedback) => {
        feedback.productName = products[feedback.productId].name;

        return feedback;
      })
    : (body.productName = products[body.productId].name);
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

    case 'feedbacks':
      addProductName(body);
      break;
  }
  res.json(body);
};
