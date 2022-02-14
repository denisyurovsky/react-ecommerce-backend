const faker = require('faker');
const _ = require('lodash');

const { users } = require('./users');
const { categories } = require('./categories');
const {
  NUMBER_OF_PRODUCTS,
  USER_ROLE,
  TEST_IMAGE_URLS,
} = require('../constants.js');

faker.seed(1);
const products = [];

const sellers = _.filter(users, ['role', USER_ROLE.SELLER]);

for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
  const createdAt = faker.date.past();
  const updatedAt = faker.date.between(createdAt, new Date());

  const discountPrice = Number(faker.commerce.price());
  const price = Number(faker.commerce.price());
  products.push({
    id: i,
    userId: faker.random.arrayElement(sellers).id,
    name: faker.commerce.productName(),
    price: price,
    discountPrice: discountPrice < price ? discountPrice : null,
    description: faker.commerce.productDescription(),
    category: faker.random.arrayElement(categories),
    rating: null,
    images: TEST_IMAGE_URLS[i] ? TEST_IMAGE_URLS[i] : [],
    createdAt,
    updatedAt,
  });
}

module.exports = { products };
