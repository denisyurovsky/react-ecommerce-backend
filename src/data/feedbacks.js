const faker = require('faker');
const _ = require('lodash');

const { users } = require('./users');
const { products } = require('./products');
const {
    NUMBER_OF_FEEDBACKS,
    USER_ROLE
} = require('../constants.js');

faker.seed(1);

const feedbacks = [];
const consumers = _.filter(users, ['role', USER_ROLE.CONSUMER]);

for (let i = 0; i < NUMBER_OF_FEEDBACKS; i++) {
    const user = faker.random.arrayElement(consumers);
    const product = faker.random.arrayElement(products);

    feedbacks.push({
        id: i,
        userId: user.id,
        productId: product.id,
        rating: Number(faker.finance.amount(1, 5, 0)),
        comment: faker.lorem.sentence(50, 20),
        createdAt: faker.date.between(product.createdAt, new Date()),
        displayedName: `${user.firstName} ${user.lastName}`,
    });
};

module.exports = { feedbacks };
