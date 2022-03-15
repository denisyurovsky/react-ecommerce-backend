import type { Request, Response, NextFunction } from 'express';

import data from '../data/data';
import getBaseUrl from '../helpers/getBaseUrl';
import getIdUrl from '../helpers/getIdUrl';
import { Methods } from '../ts/enums';

type DataStructure = typeof data;

interface EntitiesWithDate {
  createdAt: Date;
}

const getCreatedDate = (
  db: DataStructure,
  baseUrl: string,
  id: number | undefined
): Date | undefined => {
  if (!(baseUrl in db) || !id) return;

  const entity = db[baseUrl as keyof DataStructure];

  if (!Array.isArray(entity)) return;

  const item = entity[id];

  if (!item || !('createdAt' in item)) return;

  return (item as EntitiesWithDate).createdAt;
};

export default (req: Request, res: Response, next: NextFunction): void => {
  const { body, method } = req;
  const baseUrl = getBaseUrl(req.url);
  const id = getIdUrl(req.url);
  const createdAt = getCreatedDate(data, baseUrl, id);

  body.updatedAt = new Date();

  if (method === Methods.Post || method === Methods.Put) {
    body.createdAt = createdAt ?? body.updatedAt;
  }

  next();
};
