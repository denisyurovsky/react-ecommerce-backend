const fs = require('fs');
const path = require('path');

module.exports = async (relativePath, leavePathFile = false) => {
    const extensions = ['png', 'bmp', 'jpeg', 'jpg', 'gif', 'webp'];
    const [pathWithoutExtension, newFileExtension] = relativePath.split('.');

    extensions.forEach(extension => {
        if (leavePathFile && newFileExtension === extension) return;

        const filePath = path.resolve(`${pathWithoutExtension}.${extension}`);

        fs.stat(filePath, function (err) {
            if (err) return;

            fs.unlinkSync(filePath);
            console.log(`The ${filePath} was deleted.`);
        });
    })
}
