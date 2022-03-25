import { Role, Gender } from '../enums';

import { Cart } from './cart.model';
import { Wishlist } from './wishlist.model';

export interface DraftUser {
  email: string;
  password: string;
  role: Role;
  addresses: number[];
  wishlists?: Wishlist[];
}

export interface RegistredUser {
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  password?: string;
}

export interface RegistredUserWithoutId extends RegistredUser {
  avatar: string | null;
  phoneNumber: string | null;
  gender: Gender;
  dateOfBirth: Date | null;
  addresses: number[] | [];
  cart?: Cart;
  wishlists?: Wishlist[];
}

export interface User extends RegistredUserWithoutId {
  id: number;
}
