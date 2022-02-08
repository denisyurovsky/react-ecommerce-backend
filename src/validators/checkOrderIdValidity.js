module.exports = (orderId) => {
  if (!Number.isInteger(parseInt(orderId))) {
    return false;
  }

  return true;
};
