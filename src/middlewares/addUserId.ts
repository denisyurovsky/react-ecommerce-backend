import type { Request, Response, NextFunction } from 'express';

import getCurrentUserId from '../helpers/extractUserIdFromRequest';
import { Methods } from '../ts/enums';

export default (req: Request, res: Response, next: NextFunction): void => {
  if (req.method !== Methods.Get) {
    req.body.userId = getCurrentUserId(req);
  }

  next();
};
