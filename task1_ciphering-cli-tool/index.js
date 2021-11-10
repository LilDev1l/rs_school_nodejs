import {pipeline} from 'stream';
import {parseInputParameters} from './input_parameters/parseInputParameters.js';
import {tryCreateInputStreamFile, tryCreateOutputStreamFile} from './input_parameters/IO_files/tryCreateStreamFile.js'
import {createArrayStreamsFromConfig} from './input_parameters/config/configHandler.js';

let inputParameters, streamsTransform;
try {
    inputParameters = parseInputParameters(process.argv.slice(2));
    streamsTransform = createArrayStreamsFromConfig(inputParameters.config);
} catch (err) {
    console.error(err.message);
    process.exit(1);
}

(async () => {
    let inputStream, outputStream;
    try {
        if (inputParameters.inputFile !== undefined) {
            inputStream = await tryCreateInputStreamFile(inputParameters.inputFile);
        }
        if (inputParameters.outputFile !== undefined) {
            outputStream = await tryCreateOutputStreamFile(inputParameters.outputFile);
        }
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }


    pipeline(
        inputStream ?? process.stdin,
        ...streamsTransform,
        outputStream ?? process.stdout,
        (err => {
            if (err) {
                console.log(err.message);
            }
        })
    );
})();







