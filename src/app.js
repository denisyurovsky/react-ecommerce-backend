const jsonServer = require('json-server');
const auth = require('json-server-auth');

const { PORT } = require('./constants');
const data = require('./data/data');
const addUserId = require('./middlewares/addUserId');
const render = require('./middlewares/response');
const addDatesToRequest = require('./routes/addDatesToRequest');
const cancelOrder = require('./routes/cancelOrder');
const cart = require('./routes/cart');
const confirmOrder = require('./routes/confirmOrder');
const deleteCategoryWithConnectedProducts = require('./routes/deleteCategoryWithConnectedProducts');
const { formatCategory, imagesConverter } = require('./routes/products');
const rating = require('./routes/rating');
const users = require('./routes/users');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

router.render = render;
server.db = router.db;

const rules = auth.rewriter({
  '/comments*': '/644/comments$1',
  '/products*': '/644/products$1',
  '/users*': '/644/users$1',
  '/feedbacks*': '/644/feedbacks$1',
  '/rating*': '/664/rating$1',
  '/cart*': '/644/cart$1',
  '/categories*': '/664/categories$1',
  '/cities*': '/444/cities$1',
  '/countries*': '/444/countries$1',
  '/addresses*': '/660/addresses$1',
  '/confirm-order*': '/600/confirm-order$1',
  '/cancel-order*': '/600/cancel-order$1',
  // '/orders*': '/666/orders$1',
});

const services = [addDatesToRequest, addUserId];

server.use(middlewares, jsonServer.bodyParser, ...services, rules, auth);

server.patch('/products/:id', formatCategory, imagesConverter);
server.post('/products', formatCategory, imagesConverter);
server.patch('/users/:id', users);
server.patch('/rating', rating);
server.put('/cart/:userId', cart);
server.delete('/categories/:name', deleteCategoryWithConnectedProducts);
server.post('/cancel-order', cancelOrder);
server.post('/confirm-order', confirmOrder);

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
