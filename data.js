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
};

const USER_ROLE = {
  ADMIN: 'admin',
  SELLER: 'seller',
  CONSUMER: 'consumer',
  GUEST: 'guest',
};

faker.seed(1);

const users = [
  {
    id: 1,
    email: "admin@born2die.com",
    password: "$2a$10$P2R8y6j/oFchTHiitujMl.7nA.laPVUHOVULLf/byZ6CvObHuIYxu",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.ADMIN,
  },
  {
    id: 2,
    email: "seller1@gmail.com",
    password: "$2a$10$TlKHdnxu1pFzlEaM.JP4OOw.kIDTFQ/EjIBOyDbR.rkUrLhaUl..q",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.SELLER,
  },
  {
    id: 3,
    email: "seller2@gmail.com",
    password: "$2a$10$W3PFvZHfrw8No6UoL0Fzb.diBJb1WmYZg4culF5pYO1ba7Sm/egDe",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.SELLER,
  },
  {
    id: 4,
    email: "seller3@gmail.com",
    password: "$2a$10$eKIBw.ZuION4wAl5qhqEpOh.toNEOb6wgGqYaa3Qvrpj7qpv6sHCy",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.SELLER,
  },
  {
    id: 5,
    email: "consumer1@gmail.com",
    password: "$2a$10$ckfg.zH5LAH5kem5pDfryufvtPwKwhgf7B.FvKo8mpORpKwJyOUMy",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.CONSUMER,
  },
  {
    id: 6,
    email: "consumer2@gmail.com",
    password: "$2a$10$wHl53GUuzpG/I2QeHjtcA.OtVouHC18cENehCcEiLPUZNbOG4uSuq",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: USER_ROLE.CONSUMER,
  }
];

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
    userId: users[randomArrayIndex(4)].id,
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    category: {
      id: faker.datatype.uuid(),
      name: categories[randomArrayIndex(constants.NUMBER_OF_CATEGORIES)]
    },
    rating: null,
    images: TEST_IMAGE_URLS[i] ? TEST_IMAGE_URLS[i] : [],
    createdAt,
    updatedAt
  });
}

module.exports = {
  products,
  users,
  categories,
  feedbacks: [],
};
