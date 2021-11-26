import {Transform} from 'stream';

class CaesarTransformStream extends Transform {
    #shift;
    #isEncrypt;

    constructor(shift, isEncrypt) {
        super();
        this.#shift = shift;
        this.#isEncrypt = isEncrypt;
    }

    _transform(chunk, encoding, callback) {
        const caesarChunk = chunk
            .toString()
            .split('')
            .map(char => this.#caesarTransform(char))
            .join('');

        this.push(caesarChunk);
        callback();
    }

    #caesarTransform(char) {
        if (/[^A-Za-z]/.test(char)) {
            return char;
        }
        const beforeCharCode = char.charCodeAt(0);
        const lowerCaseCharCode = char.toLowerCase().charCodeAt(0);
        const isLowerCase = beforeCharCode === lowerCaseCharCode;

        let charCode = this.#isEncrypt ? lowerCaseCharCode + this.#shift : lowerCaseCharCode - this.#shift;

        if (charCode > 'z'.charCodeAt(0)) {
            charCode -= 26;
        } else if (charCode < 'a'.charCodeAt(0)) {
            charCode += 26;
        }

        return isLowerCase ? String.fromCharCode(+charCode) : String.fromCharCode(+charCode).toUpperCase();
    }
}

export {CaesarTransformStream};