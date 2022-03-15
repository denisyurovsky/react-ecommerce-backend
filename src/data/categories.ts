import faker from '@faker-js/faker';

import { NUMBER_OF_CATEGORIES } from '../constants';
import type { Category } from '../ts/models/category.model';

faker.seed(1);
const categories: Category[] = [];

const checkUniqueCategory = (categoryName: string): boolean =>
  categories.filter((el) => el.name === categoryName).length === 0;

for (let id = 0; categories.length < NUMBER_OF_CATEGORIES; id++) {
  const newCategory = faker.commerce.department();

  if (checkUniqueCategory(newCategory)) {
    categories.push({
      id,
      name: newCategory,
    });
  }
}

export default categories;
