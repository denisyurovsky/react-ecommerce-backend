import faker from '@faker-js/faker';
import { filter } from 'lodash';

import { NUMBER_OF_FEEDBACKS } from '../constants';
import { Role } from '../ts/enums';
import type { Feedback } from '../ts/models/feedbacks.model';

import products from './products';
import users from './users';

faker.seed(1);

const feedbacks: Feedback[] = [];
const consumers = filter(users, ['role', Role.Consumer]);

for (let i = 0; i < NUMBER_OF_FEEDBACKS; i++) {
  const user = faker.random.arrayElement(consumers);
  const product = faker.random.arrayElement(products);

  const productCreationStr = product.createdAt.toDateString();
  const currentDate = new Date();
  const feedbackCreation = faker.date.between(productCreationStr, currentDate.toDateString());

  feedbacks.push({
    id: i,
    userId: user.id,
    productId: product.id,
    rating: Number(faker.finance.amount(1, 5, 0)),
    comment: faker.lorem.sentence(50, 20),
    createdAt: feedbackCreation,
    updatedAt: faker.date.between(feedbackCreation.toDateString(), currentDate.toDateString()),
    displayedName: `${user.firstName} ${user.lastName}`,
  });
}

export default feedbacks;
