const fs = require('fs');
const path = require('path')
const _ = require('lodash');

const { ORIGIN_URL } = require('../constants.js');

module.exports = (base64Col, pathname) => {
  const imageUrls = [];

  base64Col.forEach(base64 => {
    const [fileParameters, base64image] = base64.split(';base64,');
    const extension = fileParameters.split('/')[1];
    const fileName = _.uniqueId('photo_') + '.' + extension;
    const url = new URL(path.join(pathname, fileName), ORIGIN_URL);

    fs.writeFileSync(
      path.resolve('public', pathname, fileName),
      base64image,
      { encoding: 'base64' },
    );
    imageUrls.push(url.href);
  });

  return imageUrls;
};
