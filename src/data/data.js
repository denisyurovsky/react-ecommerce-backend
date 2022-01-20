const _ = require('lodash');

const { users } = require('./users');
const { categories } = require('./categories');
const { products } = require('./products');
const { feedbacks } = require('./feedbacks');
const { addresses } = require('./addresses');
const countries = require('./countries.json');
const cities = require('./cities.json');

products.forEach((product, i) => {
  const productFeedbacks = _.filter(feedbacks, ['productId', i]);

  const averageRatings =
    _.round((_.sumBy(productFeedbacks, 'rating') / productFeedbacks.length), 4);

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
};
