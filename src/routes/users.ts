import { writeFileSync } from 'fs';

import type { Request, Response, NextFunction } from 'express';

import { ORIGIN_URL } from '../constants';
import removeImages from '../helpers/removeImages';

export default (req: Request, res: Response, next: NextFunction): void => {
  if (req.body.avatar?.indexOf('base64') >= 0) {
    const { id, avatar } = req.body;
    const [fileParameters, base64img] = avatar.split(';base64,');
    const extension = fileParameters.split('/')[1];
    const publicFolderPath = `users/images/profile${id}.${extension}`;
    const relativePath = `public/${publicFolderPath}`;

    writeFileSync(relativePath, base64img, { encoding: 'base64' });
    console.log(`The ${relativePath} was written.`);
    removeImages(relativePath, true);
    req.body.avatar = `${ORIGIN_URL}/${publicFolderPath}`;
  }

  next();
};
