const jsonServer = require('json-server');
const auth = require('json-server-auth');

const { PORT } = require('./constants');
const data = require('./data/data');
const render = require('./middlewares/response');
const cart = require('./routes/cart');
const deleteCategoryWithConnectedProducts = require('./routes/deleteCategoryWithConnectedProducts');
const products = require('./routes/products');
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
});

server.use(
  middlewares,
  jsonServer.bodyParser,
  jsonServer.rewriter({
    '/products/:id/update': '/products/:id',
  }),
  rules,
  auth
);

server.patch('/products/:id', products);
server.patch('/users/:id', users);
server.patch('/rating', rating);
server.put('/cart/:userId', cart);
server.delete('/categories/:name', deleteCategoryWithConnectedProducts);

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
