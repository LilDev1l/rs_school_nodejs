import fs from 'fs/promises';

async function createInputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'r');
    const inputStream = fileHandle.createReadStream()

    return inputStream;
}

async function createOutputStreamFile(pathFile) {
    const fileHandle = await fs.open(pathFile, 'ax');
    const outputStream = fileHandle.createWriteStream()

    return outputStream;
}

export {createInputStreamFile, createOutputStreamFile};