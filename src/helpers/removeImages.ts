import { unlinkSync, stat } from 'fs';
import { resolve } from 'path';

export default function removeImages(relativePath: string, leavePathFile = false): void {
  const extensions = ['png', 'bmp', 'jpeg', 'jpg', 'gif', 'webp'];
  const [pathWithoutExtension, newFileExtension] = relativePath.split('.');

  extensions.forEach((extension) => {
    if (leavePathFile && newFileExtension === extension) return;

    const filePath = resolve(`${pathWithoutExtension}.${extension}`);

    stat(filePath, function (err) {
      if (err) return;

      unlinkSync(filePath);
      console.log(`The ${filePath} was deleted.`);
    });
  });
}
