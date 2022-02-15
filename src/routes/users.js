const fs = require('fs');

const { ORIGIN_URL } = require('../constants.js');
const removeImages = require('../helpers/removeImages');

module.exports = (req, res, next) => {
  if (req.body.avatar?.indexOf('base64') >= 0) {
    const { id, avatar } = req.body;
    const [fileParameters, base64img] = avatar.split(';base64,');
    const extension = fileParameters.split('/')[1];
    const publicFolderPath = `users/images/profile${id}.${extension}`;
    const relativePath = `public/${publicFolderPath}`;

    fs.writeFileSync(relativePath, base64img, { encoding: 'base64' });
    console.log(`The ${relativePath} was written.`);
    removeImages(relativePath, true);
    req.body.avatar = `${ORIGIN_URL}/${publicFolderPath}`;
  }

  next();
};
