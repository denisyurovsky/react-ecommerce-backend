import { OrderStatus, Title } from '../ts/enums';
import { Wishlist } from '../ts/models/wishlist.model';

export const demoWishlists: Wishlist[] = [
  {
    id: '0',
    name: 'Default wishlist',
    productIds: [1, 2, 3, 4, 5, 10],
  },
  {
    id: '1',
    name: "New Year's present",
    productIds: [0, 6, 7, 8, 2, 3],
  },
  {
    id: '2',
    name: 'Gifts for the wife',
    productIds: [50, 9, 10, 11, 12],
  },
  {
    id: '3',
    name: 'Ideas of presents for sun birthday',
    productIds: [33, 13, 14, 15, 16, 17],
  },
];

export const defaultWishlists: Wishlist[] = [
  {
    id: '0',
    name: 'Default wishlist',
    productIds: [],
  },
];
