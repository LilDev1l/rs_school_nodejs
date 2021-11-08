import {Transform} from 'stream';

class AtbashTransformStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        const caesarChunk = chunk
            .toString()
            .split('')
            .map(char => this.#atbashTransform(char))
            .join('');

        this.push(caesarChunk);
        callback();
    }

    #atbashTransform(char) {
        if (/[^A-Za-z]/.test(char)) {
            return char;
        }
        const beforeCharCode = char.charCodeAt(0);
        const lowerCaseCharCode = char.toLowerCase().charCodeAt(0);
        const isLowerCase = beforeCharCode === lowerCaseCharCode;

        let charCode = 96 + (123 - lowerCaseCharCode);

        return isLowerCase ? String.fromCharCode(+charCode) : String.fromCharCode(+charCode).toUpperCase();
    }
}

export {AtbashTransformStream};