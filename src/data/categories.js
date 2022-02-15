const faker = require('faker');

const { NUMBER_OF_CATEGORIES } = require('../constants.js');

faker.seed(1);
let categories = [];

while (categories.length < NUMBER_OF_CATEGORIES) {
  const newCategory = faker.commerce.department();

  if (!categories.includes(newCategory)) {
    categories.push(newCategory);
  }
}

categories = categories.map((name, id) => ({ id, name }));

module.exports = { categories };
