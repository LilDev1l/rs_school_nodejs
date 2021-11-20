import {validConfig} from './validConfig.js'
import * as Encrypt from '../../encrypt/index.js'
import {InvalidConfigError} from '../../errors/InvalidConfigError.js';

function createArrayStreamsFromConfig (config) {
    if(!validConfig(config)) {
        throw new InvalidConfigError('Invalid config');
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
            stream = Boolean(+configStream[1]) ? new Encrypt.CaesarROT1TransformStream(true) : new Encrypt.CaesarROT1TransformStream(false);
            break;
        case 'R':
            stream = Boolean(+configStream[1]) ? new Encrypt.CaesarROT8TransformStream(true) : new Encrypt.CaesarROT8TransformStream(false);
            break;
        case 'A':
            stream = new Encrypt.AtbashTransformStream();
            break;
    }

    return stream
}

export {createArrayStreamsFromConfig};