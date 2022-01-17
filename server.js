const data = require('./data');
const rating = require('./routes/rating');
const products = require('./routes/products');
const constants = require('./constants');

const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.db = router.db;

const rules = auth.rewriter({
  "/comments*": "/644/comments$1",
  "/products*": "/644/products$1",
  "/users*": "/644/users$1",
  "/feedbacks*": "/644/feedbacks$1",
  "/rating*": "/664/rating$1"
});

server.use(
  middlewares,
  jsonServer.bodyParser,
  jsonServer.rewriter({
    '/products/:id/update': '/products/:id'
  })
);

server.patch('/products/:id', products);


server.use(rules);
server.use(auth);

server.patch('/rating', rating);

server.use(router);

server.listen(constants.PORT_URL, () => {
  console.log('JSON Server is running');
});
