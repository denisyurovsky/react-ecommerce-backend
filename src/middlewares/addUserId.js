const { REQUEST_METHOD } = require('../constants');
const getCurrentUserId = require('../helpers/extractUserIdFromRequest');

module.exports = (req, res, next) => {
  if (req.method !== REQUEST_METHOD.GET) {
    req.body.userId = getCurrentUserId(req);
  }

  next();
};
