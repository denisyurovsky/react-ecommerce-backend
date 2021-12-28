const uploadImages = require('./helper/uploadImages');
const data = require('./data');
const constants = require('./constants.js');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(
  middlewares,
  jsonServer.bodyParser,
  jsonServer.rewriter({
    '/products/:id/update': '/products/:id'
  })
);

server.patch('/products/:id', (req, res, next) => {
  const id = Number(req.url.split('/')[2]);
  const product = data.products.find(product => product.id === id);
  const base64Col = req.body.images;
  const uploadedImageUrls = uploadImages(base64Col, constants.PATHNAME);
  req.body.images = [...product.images, ...uploadedImageUrls];
  next();
});

server.use(router);

server.listen(constants.PORT_URL, () => {
  console.log('JSON Server is running');
});
