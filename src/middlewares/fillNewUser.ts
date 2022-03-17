import type { Request, Response, NextFunction } from 'express';

import getBaseUrl from '../helpers/getBaseUrl';
import { Gender } from '../ts/enums';
import { RegistredUser, RegistredUserWithoutId } from '../ts/models/user.model';

const fillMandatoryKeys = (body: RegistredUser): RegistredUserWithoutId => ({
  avatar: null,
  phoneNumber: null,
  gender: Gender.Unknown,
  dateOfBirth: null,
  addresses: [],
  ...body,
});

export default (req: Request, res: Response, next: NextFunction): void => {
  const baseUrl = getBaseUrl(req.url);

  if (baseUrl === 'register') {
    req.body = fillMandatoryKeys(req.body);
  }

  next();
};
