const faker = require('faker');

const addresses = [
  {
    id: 1,
    title: 'Mr.',
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
    title: 'Mr.',
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
    title: 'Mrs.',
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

addresses.forEach((address) => {
  const createdAt = faker.date.past();

  address.createdAt = createdAt;
  address.updatedAt = faker.date.between(createdAt, new Date());
});

module.exports = { addresses };
