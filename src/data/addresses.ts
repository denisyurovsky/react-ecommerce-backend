import faker from '@faker-js/faker';

import { Title } from '../ts/enums';
import { Address, DraftAddress } from '../ts/models/addresses.model';

const draftAddress: DraftAddress[] = [
  {
    id: 1,
    title: Title.Male,
    name: 'Alexander',
    surname: 'Sidorov',
    country: {
      id: 'RU',
      name: 'Russian Federation',
    },
    city: 'Saint Petersburg',
    street: 'Pulkovskaya',
    building: '8',
    flat: '4',
    phone: '+7 (981) 3002020',
    zip: '168142',
  },
  {
    id: 2,
    title: Title.Male,
    name: 'Ivan',
    surname: 'Ivanov',
    country: {
      id: 'RU',
      name: 'Russian Federation',
    },
    city: 'Saint Petersburg',
    street: 'Nevsky',
    building: '8',
    flat: '4',
    phone: '+7 (981) 1112233',
    zip: '168142',
  },
  {
    id: 3,
    title: Title.Female,
    name: 'Alexandra',
    surname: 'Sidorova',
    country: {
      id: 'RU',
      name: 'Russian Federation',
    },
    city: 'Saint Petersburg',
    street: 'Pulkovskaya',
    building: '8',
    flat: '4',
    phone: '+7 (981) 1233232',
    zip: '168142',
  },
];

const addresses: Address[] = draftAddress.map((address) => {
  const createdAt = faker.date.past();
  const currentDate = new Date();

  return {
    ...address,
    createdAt: createdAt,
    updatedAt: faker.date.between(createdAt.toDateString(), currentDate.toDateString()),
  };
});

export default addresses;
