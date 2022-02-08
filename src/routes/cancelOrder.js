const { orderStatus } = require('../constants');
const data = require('../data/data');
const extractUserIdFromRequest = require('../helpers/extractUserIdFromRequest');
const findUserAndOrder = require('../helpers/findUserAndOrder');
const isOrderIdValid = require('../validators/checkOrderIdValidity');

module.exports = (req, res) => {
  const { orderId } = req.body;
  const userId = extractUserIdFromRequest(req);

  try {
    const { user, order } = findUserAndOrder(userId, orderId, data);

    if (!isOrderIdValid(orderId)) {
      return res.status(400).json(`Invalid orderId format`);
    }

    if (!user) {
      return res.status(400).json(`No user with id ${userId}`);
    }

    if (!order) {
      return res.status(400).json(`No order with id ${orderId}`);
    }

    order.status = orderStatus.CANCELLED;

    res.json({ orderStatus: order.status, orderId });
  } catch (e) {
    res.status(500).json({ message: `${e.message}` });
  }
};
