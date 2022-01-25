const _ = require('lodash');
module.exports = (cart) => {
  if (
    !Array.isArray(cart.products) ||
    !Number.isInteger(cart.totalQuantity) ||
    !Number.isInteger(cart.totalPrice)
  ) {
    return false;
  }
  return true;
};
