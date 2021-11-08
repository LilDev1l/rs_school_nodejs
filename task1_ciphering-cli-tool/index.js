import {pipeline} from 'stream';
import {parseInputParameters} from './input_parameters/parseInputParameters.js';
import {createArrayStreamsFromConfig} from './input_parameters/configHandler.js';

const inputParameters = parseInputParameters(process.argv.slice(2));
const streamsTransform = createArrayStreamsFromConfig(inputParameters.config);

pipeline(
    process.stdin,
    ...streamsTransform,
    process.stdout,
    (err => {
        console.log(err.message);
    })
);






