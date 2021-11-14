import {pipeline} from 'stream';
import {parseInputParameters} from './input_parameters/parseInputParameters.js';
import {tryCreateInputStreamFile, tryCreateOutputStreamFile} from './input_parameters/IO_files/tryCreateStreamFile.js'
import {createArrayStreamsFromConfig} from './input_parameters/config/configHandler.js';

(async () => {
    try {
        const inputParameters = parseInputParameters(process.argv.slice(2));
        const streamsTransform = createArrayStreamsFromConfig(inputParameters.config);

        let inputStream, outputStream;
        if (inputParameters.inputFile !== undefined) {
            inputStream = await tryCreateInputStreamFile(inputParameters.inputFile);
        }
        if (inputParameters.outputFile !== undefined) {
            outputStream = await tryCreateOutputStreamFile(inputParameters.outputFile);
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
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})();







