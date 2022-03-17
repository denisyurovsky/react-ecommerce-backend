import faker from '@faker-js/faker';

import { Gender, Role } from '../ts/enums';
import type { User, DraftUser } from '../ts/models/user.model';

import { defaultWishlists, demoWishlists } from './wishlists';

faker.seed(1);

const draftUsers: DraftUser[] = [
  {
    email: 'admin@born2die.com',
    password: '$2a$10$P2R8y6j/oFchTHiitujMl.7nA.laPVUHOVULLf/byZ6CvObHuIYxu',
    role: Role.Admin,
    addresses: [1, 3],
    spentCash: 0,
  },
  {
    email: 'seller1@gmail.com',
    password: '$2a$10$TlKHdnxu1pFzlEaM.JP4OOw.kIDTFQ/EjIBOyDbR.rkUrLhaUl..q',
    role: Role.Seller,
    addresses: [2],
    spentCash: 0,
  },
  {
    email: 'seller2@gmail.com',
    password: '$2a$10$W3PFvZHfrw8No6UoL0Fzb.diBJb1WmYZg4culF5pYO1ba7Sm/egDe',
    role: Role.Seller,
    addresses: [],
    spentCash: 0,
  },
  {
    email: 'seller3@gmail.com',
    password: '$2a$10$eKIBw.ZuION4wAl5qhqEpOh.toNEOb6wgGqYaa3Qvrpj7qpv6sHCy',
    role: Role.Seller,
    addresses: [],
    spentCash: 0,
  },
  {
    email: 'consumer1@gmail.com',
    password: '$2a$10$ckfg.zH5LAH5kem5pDfryufvtPwKwhgf7B.FvKo8mpORpKwJyOUMy',
    role: Role.Consumer,
    addresses: [1, 3],
    wishlists: demoWishlists,
    spentCash: 120000,
  },
  {
    email: 'consumer2@gmail.com',
    password: '$2a$10$wHl53GUuzpG/I2QeHjtcA.OtVouHC18cENehCcEiLPUZNbOG4uSuq',
    role: Role.Consumer,
    addresses: [],
    wishlists: defaultWishlists,
    spentCash: 20000,
  },
];

const users: User[] = draftUsers.map((user, i) => {
  const createdAt = faker.date.past();
  const currentDate = new Date();

  return {
    ...user,
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: Gender.Unknown,
    dateOfBirth: faker.date.between('1970-01-01', '2000-01-01'),
    phoneNumber: '',
    avatar: '',
    createdAt: faker.date.past(),
    updatedAt: faker.date.between(createdAt.toDateString(), currentDate.toDateString()),
  };
});

export default users;
