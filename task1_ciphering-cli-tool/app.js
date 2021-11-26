import {pipeline} from 'stream';
import * as Parameters from './src/input_parameters/index.js';

(async () => {
    try {
        const inputParameters = Parameters.parseInputParameters(process.argv.slice(2));
        const streamsTransform = Parameters.createArrayStreamsFromConfig(inputParameters.config);

        let inputStream, outputStream;
        if (inputParameters.inputFile !== undefined) {
            inputStream = await Parameters.createInputStreamFile(inputParameters.inputFile);
        }
        if (inputParameters.outputFile !== undefined) {
            outputStream = await Parameters.createOutputStreamFile(inputParameters.outputFile);
        }
        pipeline(
            inputStream ?? process.stdin,
            ...streamsTransform,
            outputStream ?? process.stdout,
            (err => {
                if (err) {
                    console.error(err.message);
                    process.exit(1);
                }
            })
        );
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})();







