const data = require('../data');
const uploadImages = require('../helper/uploadImages');

module.exports = (req, res, next) => {
  if (req.body.images) {
    const id = Number(req.url.split('/')[2]);
    const product = data.products.find(product => product.id === id);
    const base64Col = req.body.images;
    const uploadedImageUrls = uploadImages(base64Col, constants.PATHNAME);
    req.body.images = [...product.images, ...uploadedImageUrls];
  }
  next();
}
