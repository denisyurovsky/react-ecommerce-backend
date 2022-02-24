const { REQUEST_METHOD } = require('../constants');
const data = require('../data/data');
const getBaseUrl = require('../helpers/getBaseUrl');
const getIdUrl = require('../helpers/getIdUrl');
const { POST, PUT } = REQUEST_METHOD;

module.exports = (req, res, next) => {
  const { body, method } = req;
  const baseUrl = getBaseUrl(req.url);
  const id = getIdUrl(req.url);
  const entity = data[baseUrl] && data[baseUrl][id];

  body.updatedAt = new Date();

  if (method === POST || method === PUT) {
    body.createdAt = entity?.createdAt ?? body.updatedAt;
  }

  next();
};
