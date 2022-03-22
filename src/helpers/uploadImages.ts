import { writeFileSync } from 'fs';
import { join, resolve } from 'path';

import { uniqueId } from 'lodash';

import { ORIGIN_URL } from '../constants/constants';

export default function uploadImages(base64Col: string[], pathname: string): string[] {
  const imageUrls: string[] = [];

  base64Col.forEach((base64) => {
    const [fileParameters, base64image] = base64.split(';base64,');
    const extension = fileParameters.split('/')[1];
    const fileName = uniqueId('photo_') + '.' + extension;
    const url = new URL(join(pathname, fileName), ORIGIN_URL);

    writeFileSync(resolve('public', pathname, fileName), base64image, {
      encoding: 'base64',
    });
    imageUrls.push(url.href);
  });

  return imageUrls;
}
