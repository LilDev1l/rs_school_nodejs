import {CaesarROT1TransformStream} from './encrypt/caesar/caesarROT1TransformStream.js';
import {pipeline} from 'stream';

const streamCaesarEncryption = new CaesarROT1TransformStream(true);
const streamCaesarDecryption = new CaesarROT1TransformStream(false);

pipeline(
    process.stdin,
    streamCaesarEncryption,
    streamCaesarDecryption,
    process.stdout,
    (err => {
        console.log(err.message);
    })
);






