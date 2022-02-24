const faker = require('faker');

const { USER_ROLE } = require('../constants');

faker.seed(1);

const users = [
  {
    email: 'admin@born2die.com',
    password: '$2a$10$P2R8y6j/oFchTHiitujMl.7nA.laPVUHOVULLf/byZ6CvObHuIYxu',
    role: USER_ROLE.ADMIN,
    addresses: [0, 2],
  },
  {
    email: 'seller1@gmail.com',
    password: '$2a$10$TlKHdnxu1pFzlEaM.JP4OOw.kIDTFQ/EjIBOyDbR.rkUrLhaUl..q',
    role: USER_ROLE.SELLER,
    addresses: [2],
  },
  {
    email: 'seller2@gmail.com',
    password: '$2a$10$W3PFvZHfrw8No6UoL0Fzb.diBJb1WmYZg4culF5pYO1ba7Sm/egDe',
    role: USER_ROLE.SELLER,
    addresses: [],
  },
  {
    email: 'seller3@gmail.com',
    password: '$2a$10$eKIBw.ZuION4wAl5qhqEpOh.toNEOb6wgGqYaa3Qvrpj7qpv6sHCy',
    role: USER_ROLE.SELLER,
    addresses: [],
  },
  {
    email: 'consumer1@gmail.com',
    password: '$2a$10$ckfg.zH5LAH5kem5pDfryufvtPwKwhgf7B.FvKo8mpORpKwJyOUMy',
    role: USER_ROLE.CONSUMER,
    addresses: [],
  },
  {
    email: 'consumer2@gmail.com',
    password: '$2a$10$wHl53GUuzpG/I2QeHjtcA.OtVouHC18cENehCcEiLPUZNbOG4uSuq',
    role: USER_ROLE.CONSUMER,
    addresses: [],
  },
];

users.forEach((user, i) => {
  const createdAt = faker.date.past();

  user.id = i;
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.gender = '';
  user.dateOfBirth = faker.date.between('1970-01-01', '2000-01-01');
  user.phoneNumber = '';
  user.avatar = '';
  if (user.role === USER_ROLE.CONSUMER || user.role === USER_ROLE.ADMIN) {
    user.wishlist = [];
  }
  user.createdAt = faker.date.past();
  user.updatedAt = faker.date.between(createdAt, new Date());
});

module.exports = { users };
