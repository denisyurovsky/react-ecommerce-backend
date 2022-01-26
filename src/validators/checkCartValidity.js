module.exports = (cart) => {
  return (
    Number.isInteger(cart.totalQuantity) && Number.isInteger(cart.totalPrice)
  );
};
