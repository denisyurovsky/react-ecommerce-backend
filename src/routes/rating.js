const data = require('../data/data');

module.exports = (req, res) => {
  const { productId, rating, updatedAt } = req.body;
  let product;

  try {
    product = data.products.find((pr) => pr.id == productId);

    if (!product) {
      return res.status(400).json(`No product with id ${productId}`);
    }

    product.rating = rating;
    product.updatedAt = updatedAt;
    res.json({ id: productId, rating });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: `${e.message}` });
  }
};
