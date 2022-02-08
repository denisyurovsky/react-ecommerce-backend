const jwtDecode = require('jwt-decode');

module.exports = (request) => {
  const token = request.get('Authorization')?.replace(/Bearer\s/, '');

  if (!token) return null;

  const decoded = jwtDecode(token);

  return Number(decoded.sub);
};
