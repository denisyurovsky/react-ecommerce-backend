const _ = require('lodash');

const { addresses } = require('./addresses');
const { categories } = require('./categories');
const cities = require('./cities.json');
const countries = require('./countries.json');
const { feedbacks } = require('./feedbacks');
const { orders } = require('./orders');
const { products } = require('./products');
const { users } = require('./users');

products.forEach((product, i) => {
  const productFeedbacks = _.filter(feedbacks, ['productId', i]);

  const averageRatings = _.round(
    _.sumBy(productFeedbacks, 'rating') / productFeedbacks.length,
    4
  );

  if (productFeedbacks.length) product.rating = averageRatings;
});

module.exports = {
  users,
  categories,
  products,
  feedbacks,
  addresses,
  countries,
  cities,
  orders,
};
