const jwtDecode = require('jwt-decode');

const getToken = (req) => req.get('Authorization')?.replace(/Bearer\s/, '');
const getIdFromToken = (token) => {
  if (!token) return null;

  const decoded = jwtDecode(token);

  return Number(decoded.sub);
};

module.exports = (user, req) => {
  const token = getToken(req);
  const currentUserId = getIdFromToken(token);

  return user.id === currentUserId;
};
