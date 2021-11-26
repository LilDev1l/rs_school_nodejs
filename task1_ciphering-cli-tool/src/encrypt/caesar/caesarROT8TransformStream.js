import {CaesarTransformStream} from './base/caesarTransformStream.js';

class CaesarROT8TransformStream extends CaesarTransformStream {
    constructor(isEncrypt) {
        super(8, isEncrypt);
    }
}

export {CaesarROT8TransformStream, };