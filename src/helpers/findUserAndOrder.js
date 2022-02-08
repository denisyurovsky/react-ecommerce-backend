module.exports = (userId, orderId, data) => {
  const user = data.users.find((user) => {
    return user.id === Number(userId);
  });

  const order = data.orders.find((order) => {
    return order.id === Number(orderId);
  });

  return { order, user };
};
