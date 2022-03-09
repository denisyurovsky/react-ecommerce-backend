const { ORIGIN_URL } = require('../constants.js');
const { categories } = require('../data/categories');
const { products } = require('../data/products');
const removeImages = require('../helpers/removeImages');
const uploadImages = require('../helpers/uploadImages');
const isEditProduct = (url) => /products\/([0-9]+)/i.test(url);

const formatCategory = (req, res, next) => {
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

const imagesConverter = (req, res, next) => {
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

module.exports = { imagesConverter, formatCategory };
