const { products } = require('../data/products');
const uploadImages = require('../helpers/uploadImages');

module.exports = (req, res, next) => {
    if (req.body.images) {
        const id = Number(req.url.split('/')[2]);
        const product = products.find(product => product.id === id);
        const base64Col = req.body.images;
        const uploadedImageUrls = uploadImages(base64Col, 'products/images');
        req.body.images = [...product.images, ...uploadedImageUrls];
    }
    next();
}
