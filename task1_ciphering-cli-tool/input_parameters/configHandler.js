import {validConfig} from './validConfig.js'
import {CaesarROT1TransformStream} from '../encrypt/caesar/caesarROT1TransformStream.js'
import {CaesarROT8TransformStream} from '../encrypt/caesar/caesarROT8TransformStream.js'
import {AtbashTransformStream} from '../encrypt/atbashTransformStream.js'

function createArrayStreamsFromConfig (config) {
    if(!validConfig(config)) {
        throw new Error('Невалидный конфиг');
    } else {
        const streams = [];
        config.split('-').forEach(configStream => streams.push(createStream(configStream)));

        return streams;
    }
}

function createStream(configStream) {
    let stream;

    switch(configStream[0]) {
        case 'C':
            stream = Boolean(+configStream[1]) ? new CaesarROT1TransformStream(true) : new CaesarROT1TransformStream(false);
            break;
        case 'R':
            stream = Boolean(+configStream[1]) ? new CaesarROT8TransformStream(true) : new CaesarROT8TransformStream(false);
            break;
        case 'A':
            stream = new AtbashTransformStream();
            break;
    }

    return stream
}

export {createArrayStreamsFromConfig};