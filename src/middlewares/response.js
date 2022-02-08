const getBaseUrl = require('../helpers/getBaseUrl');
const checkCurrentUser = require('../helpers/checkCurrentUser');

module.exports = (req, res) => {
  const body = res.locals.data;
  const baseUrl = getBaseUrl(req.url);
  const checkConfidentialUser = (user) => !checkCurrentUser(user, req);

  switch(baseUrl) {
    case 'users':
      if (Array.isArray(body)) {
        body
          .filter(user => checkConfidentialUser(user))
          .forEach(user => delete user.cart);
      } else if (checkConfidentialUser(body)) {
        delete body.cart;
      }
  }

  res.json(body);
};
