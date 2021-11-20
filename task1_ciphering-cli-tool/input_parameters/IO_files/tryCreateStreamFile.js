import fs from 'fs/promises';

async function tryCreateInputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'r');
    const inputStream = fileHandle.createReadStream()

    return inputStream;
}

async function tryCreateOutputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'ax');
    const outputStream = fileHandle.createWriteStream()

    return outputStream;
}

export {tryCreateInputStreamFile, tryCreateOutputStreamFile};