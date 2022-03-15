import * as jsonServer from 'json-server';
import auth from 'json-server-auth';

import { PORT } from './constants';
import data from './data/data';
import addDatesToRequest from './middlewares/addDatesToRequest';
import addUserId from './middlewares/addUserId';
import fillNewUser from './middlewares/fillNewUser';
import response from './middlewares/response';
import cancelOrder from './routes/cancelOrder';
import cart from './routes/cart';
import { confirmOrder, handleUserId } from './routes/confirmOrder';
import deleteCategoryWithConnectedProducts from './routes/deleteCategoryWithConnectedProducts';
import { imagesConverter, formatCategory } from './routes/products';
import rating from './routes/rating';
import users from './routes/users';

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

//@ts-ignore
server.db = router.db;
//@ts-ignore
router.render = response;

const rules = auth.rewriter({
  comments: 644,
  products: 644,
  users: 644,
  feedbacks: 644,
  rating: 664,
  cart: 644,
  categories: 664,
  cities: 444,
  countries: 444,
  addresses: 660,
  'confirm-order': 600,
  'cancel-order': 600,
  orders: 666,
});

const services = [addDatesToRequest, addUserId, fillNewUser];

server.use(middlewares, jsonServer.bodyParser, ...services, rules, auth);

server.patch('/products/:id', formatCategory, imagesConverter);
server.post('/products', formatCategory, imagesConverter);
server.patch('/users/:id', users);
server.patch('/rating', rating);
server.put('/cart/:userId', cart);
server.delete('/categories/:name', deleteCategoryWithConnectedProducts);
server.post('/cancel-order', handleUserId, cancelOrder);
server.post('/confirm-order', handleUserId, confirmOrder);

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
