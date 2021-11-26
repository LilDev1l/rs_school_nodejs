import fsPromises from 'fs/promises';
import fs from 'fs';
import {UnavailableFileError} from '../../errors/UnavailableFileError.js';

async function createInputStreamFile(pathFile) {
    let inputStream;
    try {
        await fsPromises.access(pathFile, fs.constants.R_OK);
        inputStream = fs.createReadStream();
    } catch (err) {
        throw new UnavailableFileError('Could not open file for reading');
    }

    return inputStream;
}

async function createOutputStreamFile(pathFile) {
    let outputStream;
    try {
        await fsPromises.access(pathFile, fs.constants.W_OK);
        outputStream = fs.createWriteStream()
    } catch (err) {
        throw new UnavailableFileError('Could not open file for writing');
    }

    return outputStream;
}

export {createInputStreamFile, createOutputStreamFile};