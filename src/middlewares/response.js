const checkCurrentUser = require('../helpers/checkCurrentUser');
const getBaseUrl = require('../helpers/getBaseUrl');

const modifyAllUsersResponse = (body, req) => {
  body
    .map((user) => delete user.password)
    .filter((user) => !checkCurrentUser(user, req))
    .map((user) => delete user.cart);
};

const modifySingleUserResponse = (body, req) => {
  delete body.password;
  if (!checkCurrentUser(body, req)) {
    delete body.cart;
  }
};

module.exports = (req, res) => {
  const body = res.locals.data;
  const baseUrl = getBaseUrl(req.url);

  switch (baseUrl) {
    case 'users':
      if (Array.isArray(body)) {
        modifyAllUsersResponse(body, req);
      }
      modifySingleUserResponse(body, req);
  }
  res.json(body);
};
