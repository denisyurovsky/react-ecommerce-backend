import faker from '@faker-js/faker';
import { filter } from 'lodash';

import { NUMBER_OF_PRODUCTS, TEST_IMAGE_URLS } from '../constants';
import { Role } from '../ts/enums';
import { Product } from '../ts/models/product.model';

import categories from './categories';
import users from './users';

faker.seed(1);
const products: Product[] = [];

const sellers = filter(users, ['role', Role.Seller]);

for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
  const createdAt = faker.date.past();
  const updatedAt = faker.date.between(String(createdAt), String(new Date()));

  const discountPrice = Number(faker.commerce.price());
  const price = Number(faker.commerce.price());

  products.push({
    id: i,
    userId: faker.random.arrayElement(sellers).id,
    name: faker.commerce.productName(),
    price: price,
    discountPrice: discountPrice < price ? discountPrice : null,
    isDiscounted: discountPrice < price,
    actualPrice: discountPrice < price ? discountPrice : price,
    description: faker.commerce.productDescription(),
    category: faker.random.arrayElement(categories),
    rating: null,
    images: TEST_IMAGE_URLS[i] ?? [],
    createdAt,
    updatedAt,
  });
}

export default products;
