const data = require('../data/data');

module.exports = (req, res) => {
  const { orders } = req.body;
  const { userId } = req.params;

  let user;

  try {
    user = data.users.find((user) => {
      return user.id === Number(userId);
    });

    if (!user) {
      return res.status(400).json(`No user with id ${userId}`);
    }

    user.orders = orders;
    res.json({ userId, orders });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
