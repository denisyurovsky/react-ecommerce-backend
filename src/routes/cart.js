const data = require('../data/data');
const isCartValid = require('../validators/checkCartValidity');

module.exports = (req, res) => {
  const { cart } = req.body;
  const { userId } = req.params;
  let user;

  try {
    if (!isCartValid(cart)) {
      return res.status(400).json(`Wrong cart  format`);
    }

    user = data.users.find((user) => user.id == userId);

    if (!user) {
      return res.status(400).json(`No user with id ${userId}`);
    }

    user.cart = cart;
    res.json({ id: userId, cart: cart });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
