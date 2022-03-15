import type { Request, Response, NextFunction } from 'express';

import { ORIGIN_URL } from '../constants';
import categories from '../data/categories';
import products from '../data/products';
import removeImages from '../helpers/removeImages';
import uploadImages from '../helpers/uploadImages';

const isEditProduct = (url: string): boolean => /products\/([0-9]+)/i.test(url);

export const formatCategory = (req: Request, res: Response, next: NextFunction): void => {
  const categoryName = req.body.category;

  if (typeof categoryName !== 'string') {
    throw new Error('Wrong category format');
  }

  const [category] = categories.filter((el) => el.name === categoryName);

  if (!category) {
    throw new Error('There is no such category');
  }

  req.body.category = category;
  next();
};

export const imagesConverter = (req: Request, res: Response, next: NextFunction): void => {
  if (req.body.images) {
    if (isEditProduct(req.url)) {
      try {
        const id = Number(req.url.split('/')[2]);
        const product = products.find((product) => product.id === id);

        if (!product) {
          throw new Error('no such product');
        }

        const relativePaths = product.images.map((path) => path.replace(ORIGIN_URL, 'public'));

        relativePaths.forEach((relativePath) => removeImages(relativePath, false));
      } catch (err) {
        return next(err);
      }
    }
    const base64Col = req.body.images;

    req.body.images = uploadImages(base64Col, 'products/images');
  }
  next();
};
