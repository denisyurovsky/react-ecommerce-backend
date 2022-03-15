export enum Gender {
  Male = 'male',
  Female = 'female',
  Unknown = '',
}

export enum Title {
  Male = 'Mr.',
  Female = 'Mrs.',
}

export const enum Role {
  Admin = 'admin',
  Seller = 'seller',
  Consumer = 'consumer',
  Guest = 'guest',
}

export const enum OrderStatus {
  WaitingForPayment = 1,
  Paid,
  Delivered,
  Cancelled,
}

export const enum Methods {
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Get = 'GET',
  Delete = 'DELETE',
}
