const faker = require('faker');
const constants = require('./constants.js');

const randomArrayIndex = length => Math.floor(Math.random() * length);

const TEST_IMAGE_URLS = {
  0: ['http://localhost:5000/products/images/photo_test_11.webp',
  'http://localhost:5000/products/images/photo_test_12.webp',
  'http://localhost:5000/products/images/photo_test_13.webp',
  'http://localhost:5000/products/images/photo_test_14.webp',
  'http://localhost:5000/products/images/photo_test_15.webp'],
  1: ['http://localhost:5000/products/images/photo_test_21.webp',
  'http://localhost:5000/products/images/photo_test_22.webp',
  'http://localhost:5000/products/images/photo_test_23.webp',
  'http://localhost:5000/products/images/photo_test_24.webp'],
  2: ['http://localhost:5000/products/images/photo_test_31.webp',
  'http://localhost:5000/products/images/photo_test_32.webp',
  'http://localhost:5000/products/images/photo_test_33.webp'],
  3: ['http://localhost:5000/products/images/photo_test_41.webp',
  'http://localhost:5000/products/images/photo_test_42.webp'],
  4: ['http://localhost:5000/products/images/photo_test_51.webp']
}

faker.seed(1);
const categories = [];
const products = [];

while (categories.length < constants.NUMBER_OF_CATEGORIES) {
  const newCategory = faker.commerce.department();

  if (!categories.includes(newCategory)) {
    categories.push(newCategory);
  }
}

for (let i = 0; i < constants.NUMBER_OF_PRODUCTS; i++) {
  const createdAt = faker.date.past();
  const updatedAt = faker.date.between(createdAt, new Date(Date.now()));

  products.push({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: {
      id: faker.datatype.uuid(),
      name: categories[randomArrayIndex(constants.NUMBER_OF_CATEGORIES)]
    },
    author: {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    images: TEST_IMAGE_URLS[i] ? TEST_IMAGE_URLS[i] : [],
    createdAt,
    updatedAt
  });
}

module.exports = {
  products,
  users: [],
  categories,
};
