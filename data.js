const faker = require('faker');

const NUMBER_OF_PRODUCTS = 70;
const NUMBER_OF_CATEGORIES = 10;

const randomArrayIndex = length => Math.floor(Math.random() * length);

module.exports = () => {
  faker.seed(1);
  const categories = [];
  const products = [];

  for (let i = 0; i < NUMBER_OF_CATEGORIES; i++) {
    categories.push(faker.commerce.department());
  }

  for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
    const createdAt = faker.date.past();
    const updatedAt = faker.date.between(createdAt, new Date(Date.now()));

    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: {
        id: faker.datatype.uuid(),
        name: categories[randomArrayIndex(NUMBER_OF_CATEGORIES)]
      },
      author: {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      },
      createdAt,
      updatedAt
    });
  }

  return {
    products,
    users: [],
    categories
  };
};