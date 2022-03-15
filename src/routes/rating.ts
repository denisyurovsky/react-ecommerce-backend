import type { Request, Response } from 'express';

import data from '../data/data';

export default (req: Request, res: Response): void => {
  const { productId, rating, updatedAt } = req.body;
  let product;

  try {
    product = data.products.find((pr) => pr.id == productId);

    if (!product) {
      res.status(400).json(`No product with id ${productId}`);

      return;
    }

    product.rating = rating;
    product.updatedAt = updatedAt;
    res.json({ id: productId, rating });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: `${e.message}` });
  }
};
