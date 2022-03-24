import { OrderStatus, Title } from '../ts/enums';
import { Order } from '../ts/models/order.model';

const deliveryAddress = {
  title: Title.Male,
  name: 'Elon',
  surname: 'Mask',
  country: {
    id: 'RU',
    name: 'Russian Federation',
  },
  city: 'Saint Petersburg',
  street: 'Nevskiy',
  building: '8',
  flat: '33',
  phone: '+7 (981) 1112233',
  zip: '168142',
};

const orders: Order[] = [
  {
    userId: 0,
    id: 0,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        name: 'Unbranded Concrete Gloves',
        images: [],
        price: 100,
        discountPrice: 90,
        quantity: 1,
      },
      {
        originalProductId: 2,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 200,
        discountPrice: 200,
        quantity: 1,
      },
      {
        originalProductId: 3,
        name: 'Licensed Rubber Cheese',
        images: [],
        price: 300,
        discountPrice: 280,
        quantity: 1,
      },
      {
        originalProductId: 4,
        name: 'Ergonomic Fresh Pants',
        images: [],
        price: 400,
        discountPrice: 200,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.WaitingForPayment,
    deliveryPrice: 10,
    totalPrice: 10000,
    totalDiscountPrice: 7500,
    sellersDiscount: 0,
    personalDiscount: 2500,
    totalQuantity: 4,
    createdAt: '2021-04-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    userId: 0,
    id: 1,
    addressId: 5,
    products: [
      {
        originalProductId: 13,
        name: 'Unbranded Concrete Gloves',
        images: [],
        price: 100,
        discountPrice: 90,
        quantity: 1,
      },
      {
        originalProductId: 11,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 200,
        discountPrice: 200,
        quantity: 1,
      },
      {
        originalProductId: 45,
        name: 'Licensed Rubber Cheese',
        images: [],
        price: 300,
        discountPrice: 280,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Paid,
    deliveryPrice: 30,
    totalPrice: 714,
    totalDiscountPrice: 714,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 3,
    createdAt: '2020-01-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    userId: 0,
    id: 2,
    addressId: 5,
    products: [
      {
        originalProductId: 9,
        name: 'Unbranded Concrete Gloves',
        images: [],
        price: 100,
        discountPrice: 90,
        quantity: 1,
      },
      {
        originalProductId: 7,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 200,
        discountPrice: 200,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Delivered,
    deliveryPrice: 10,
    totalPrice: 539,
    totalDiscountPrice: 329.25,
    sellersDiscount: 109.75,
    personalDiscount: 100,
    totalQuantity: 2,
    createdAt: '2019-03-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: '2021-07-29T22:24:39.800Z',
  },
  {
    userId: 0,
    id: 3,
    addressId: 5,
    products: [
      {
        originalProductId: 8,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 264.5,
        discountPrice: 264.5,
        quantity: 1,
      },
    ],
    status: OrderStatus.Cancelled,
    deliveryAddress,
    deliveryPrice: 10,
    totalPrice: 264.5,
    totalDiscountPrice: 123.375,
    sellersDiscount: 41.125,
    personalDiscount: 100,
    totalQuantity: 1,
    createdAt: '2022-09-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    userId: 4,
    id: 4,
    addressId: 5,
    products: [
      {
        originalProductId: 9,
        name: 'Unbranded Concrete Gloves',
        images: [],
        price: 100,
        discountPrice: 90,
        quantity: 1,
      },
      {
        originalProductId: 7,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 200,
        discountPrice: 200,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Delivered,
    deliveryPrice: 10,
    totalPrice: 310,
    totalDiscountPrice: 310,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 2,
    createdAt: '2021-04-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: '2021-10-29T22:24:39.800Z',
  },
  {
    userId: 4,
    id: 5,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 10,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 4,
        images: [],
        name: 'Ergonomic Fresh Pants',
        price: 20,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 3,
        images: [],
        name: 'Licensed Rubber Cheese',
        price: 30,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 40,
        discountPrice: null,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.WaitingForPayment,
    deliveryPrice: 11,
    totalPrice: 111,
    totalDiscountPrice: 111,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 4,
    createdAt: '2020-04-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    userId: 4,
    id: 7,
    addressId: 5,
    products: [
      {
        originalProductId: 9,
        name: 'Unbranded Concrete Gloves',
        images: [],
        price: 100,
        discountPrice: 90,
        quantity: 1,
      },
      {
        originalProductId: 7,
        name: 'Gorgeous Frozen Car',
        images: [],
        price: 200,
        discountPrice: 200,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Paid,
    deliveryPrice: 10,
    totalPrice: 310,
    totalDiscountPrice: 310,
    totalQuantity: 2,
    createdAt: '2021-04-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    userId: 5,
    id: 6,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 100,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 200,
        discountPrice: 100,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.WaitingForPayment,
    deliveryPrice: 10,
    totalPrice: 310,
    totalDiscountPrice: 210,
    sellersDiscount: 100,
    personalDiscount: 0,
    totalQuantity: 2,
    createdAt: '2018-04-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    id: 7,
    userId: 5,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 10,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 20,
        discountPrice: null,
        quantity: 3,
      },
      {
        originalProductId: 3,
        images: [],
        name: 'Licensed Rubber Cheese',
        price: 30,
        discountPrice: null,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Delivered,
    deliveryPrice: 11,
    totalPrice: 111,
    totalDiscountPrice: 111,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 4,
    createdAt: '2021-03-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: '2021-07-29T22:24:39.800Z',
  },
  {
    id: 8,
    userId: 5,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 100,
        quantity: 1,
        discountPrice: null,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 200,
        quantity: 1,
        discountPrice: null,
      },
    ],
    deliveryAddress,
    status: OrderStatus.Cancelled,
    deliveryPrice: 10,
    totalPrice: 310,
    totalDiscountPrice: 310,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 2,
    createdAt: '2021-08-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    id: 9,
    userId: 5,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 450,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 280,
        discountPrice: null,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.WaitingForPayment,
    deliveryPrice: 10,
    totalPrice: 740,
    totalDiscountPrice: 740,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 2,
    createdAt: '2021-01-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
  {
    id: 10,
    userId: 5,
    addressId: 5,
    products: [
      {
        originalProductId: 1,
        images: [],
        name: 'Unbranded Concrete Gloves',
        price: 1000,
        discountPrice: null,
        quantity: 1,
      },
      {
        originalProductId: 2,
        images: [],
        name: 'Gorgeous Frozen Car',
        price: 2000,
        discountPrice: null,
        quantity: 1,
      },
    ],
    deliveryAddress,
    status: OrderStatus.WaitingForPayment,
    deliveryPrice: 10,
    totalPrice: 3010,
    totalDiscountPrice: 3010,
    sellersDiscount: 0,
    personalDiscount: 0,
    totalQuantity: 2,
    createdAt: '2010-02-19T08:46:13.911Z',
    updatedAt: '2022-03-07T23:26:49.748Z',
    deliveredAt: null,
  },
];

export default orders;
