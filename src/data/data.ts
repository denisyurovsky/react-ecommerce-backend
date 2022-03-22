import { filter, round, sumBy } from 'lodash';

import addresses from './addresses';
import categories from './categories';
import cities from './cities.json';
import countries from './countries.json';
import feedbacks from './feedbacks';
import orders from './orders';
import paymentCards from './paymentCards';
import products from './products';
import users from './users';

products.forEach((product, i: number) => {
  const productFeedbacks = filter(feedbacks, ['productId', i]);

  const averageRatings = round(sumBy(productFeedbacks, 'rating') / productFeedbacks.length, 4);

  if (productFeedbacks.length) product.rating = averageRatings;
});

export default {
  users,
  categories,
  products,
  feedbacks,
  addresses,
  countries,
  cities,
  orders,
  'payment-cards': paymentCards,
};
