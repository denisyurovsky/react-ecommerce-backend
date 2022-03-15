import data from '../data/data';
import { Order } from '../ts/models/order.model';
import { User } from '../ts/models/user.model';

type DataStructure = typeof data;
interface UserWithOrder {
  user?: User;
  order?: Order;
}

export default function findUserAndOrder(
  userId: number,
  orderId: number,
  data: DataStructure
): UserWithOrder {
  const user = data.users.find((user) => {
    return user.id === Number(userId);
  });

  const order = data.orders.find((order) => {
    return order.id === Number(orderId);
  });

  return { order, user };
}
