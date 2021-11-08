import {AtbashTransformStream} from './encrypt/atbashTransformStream.js';
import {pipeline} from 'stream';

const streamAtbash = new AtbashTransformStream();

pipeline(
    process.stdin,
    streamAtbash,
    process.stdout,
    (err => {
        console.log(err.message);
    })
);






