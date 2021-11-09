import fs from 'fs/promises';

async function tryCreateInputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'r');
    const inputStream = await fileHandle.createReadStream()

    return inputStream;
}

async function tryCreateOutputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'a');
    const outputStream = await fileHandle.createWriteStream()

    return outputStream;
}

export {tryCreateInputStreamFile, tryCreateOutputStreamFile};