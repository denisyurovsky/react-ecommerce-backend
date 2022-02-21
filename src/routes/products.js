const { ORIGIN_URL } = require('../constants.js');
const { products } = require('../data/products');
const removeImages = require('../helpers/removeImages');
const uploadImages = require('../helpers/uploadImages');
const isEditProduct = (url) => /products\/([0-9]+)/i.test(url);

module.exports = (req, res, next) => {
  if (req.body.images) {
    if (isEditProduct(req.url)) {
      const id = Number(req.url.split('/')[2]);
      const product = products.find((product) => product.id === id);
      const relativePaths = product.images.map((path) =>
        path.replace(ORIGIN_URL, 'public')
      );

      relativePaths.forEach((relativePath) =>
        removeImages(relativePath, false)
      );
    }
    const base64Col = req.body.images;

    req.body.images = uploadImages(base64Col, 'products/images');
  }
  next();
};
