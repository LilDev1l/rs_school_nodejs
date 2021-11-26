import {CaesarTransformStream} from './base/caesarTransformStream.js';

class CaesarROT1TransformStream extends CaesarTransformStream {
    constructor(isEncrypt) {
        super(1, isEncrypt);
    }
}

export {CaesarROT1TransformStream};