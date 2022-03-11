const { orderStatus } = require('../constants');

const orders = [
  {
    userId: 0,
    id: 0,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 100,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 200,
      },
      {
        originalProductId: 3,
        categoryId: 1,
        price: 300,
      },
      {
        originalProductId: 4,
        categoryId: 1,
        price: 400,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 10000,
    createdAt: '2021-04-19T08:46:13.911Z',
    deliveredAt: '2021-10-29T22:24:39.800Z',
  },
  {
    userId: 0,
    id: 1,
    products: [
      {
        originalProductId: 13,
        categoryId: 1,
        price: 500,
      },
      {
        originalProductId: 11,
        categoryId: 1,
        price: 150,
      },
      {
        originalProductId: 45,
        categoryId: 1,
        price: 34,
      },
    ],
    status: orderStatus.PAID,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 30,
    totalPrice: 714,
    createdAt: '2020-01-19T08:46:13.911Z',
    deliveredAt: '2020-11-29T22:24:39.800Z',
  },
  {
    userId: 0,
    id: 2,
    products: [
      {
        originalProductId: 9,
        categoryId: 1,
        price: 264.5,
      },
      {
        originalProductId: 7,
        categoryId: 1,
        price: 264.5,
      },
    ],
    status: orderStatus.DELIVERED,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 539,
    createdAt: '2019-03-19T08:46:13.911Z',
    deliveredAt: '2019-07-29T22:24:39.800Z',
  },
  {
    userId: 0,
    id: 3,
    products: [
      {
        originalProductId: 8,
        categoryId: 1,
        price: 264.5,
      },
    ],
    status: 4,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 274.5,
    createdAt: '2022-09-19T08:46:13.911Z',
    deliveredAt: '2023-12-29T22:24:39.800Z',
  },
  {
    userId: 4,
    id: 4,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 100,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 200,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 310,
    createdAt: '2021-04-19T08:46:13.911Z',
    deliveredAt: '2021-10-29T22:24:39.800Z',
  },
  {
    userId: 4,
    id: 5,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 10,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 20,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 30,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 40,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 11,
    totalPrice: 111,
    createdAt: '2020-04-19T08:46:13.911Z',
    deliveredAt: '2020-10-29T22:24:39.800Z',
  },
  {
    userId: 5,
    id: 6,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 100,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 200,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 310,
    createdAt: '2018-04-19T08:46:13.911Z',
    deliveredAt: '2018-10-29T22:24:39.800Z',
  },
  {
    id: 7,
    userId: 5,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 10,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 20,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 30,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 40,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 11,
    totalPrice: 111,
    createdAt: '2021-03-19T08:46:13.911Z',
    deliveredAt: '2021-07-29T22:24:39.800Z',
  },
  {
    id: 8,
    userId: 5,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 100,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 200,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 310,
    createdAt: '2021-08-19T08:46:13.911Z',
    deliveredAt: '2021-12-29T22:24:39.800Z',
  },
  {
    id: 9,
    userId: 5,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 450,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 280,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 740,
    createdAt: '2021-01-19T08:46:13.911Z',
    deliveredAt: '2021-01-29T22:24:39.800Z',
  },
  {
    id: 10,
    userId: 5,
    products: [
      {
        originalProductId: 1,
        categoryId: 1,
        price: 1000,
      },
      {
        originalProductId: 2,
        categoryId: 1,
        price: 2000,
      },
    ],
    status: orderStatus.WAITING_FOR_PAYMENT,
    deliveryAddress:
      'Mr. Mister Name, Russian Federation, Saint Petersburg, Builders street, 12/2',
    deliveryPrice: 10,
    totalPrice: 3010,
    createdAt: '2010-02-19T08:46:13.911Z',
    deliveredAt: '2010-02-29T22:24:39.800Z',
  },
];

module.exports = {
  orders,
};
