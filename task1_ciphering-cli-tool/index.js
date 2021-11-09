import {pipeline} from 'stream';
import {parseInputParameters} from './input_parameters/parseInputParameters.js';
import {tryCreateInputStreamFile, tryCreateOutputStreamFile} from './input_parameters/IO_files/tryCreateStreamFile.js'
import {createArrayStreamsFromConfig} from './input_parameters/config/configHandler.js';

const inputParameters = parseInputParameters(process.argv.slice(2));
const streamsTransform = createArrayStreamsFromConfig(inputParameters.config);

(async () => {
    let inputStream, outputStream;
    inputStream = await tryCreateInputStreamFile(inputParameters.inputFile).catch(() => console.log("Не удалось открыть входной файл"));
    outputStream = await tryCreateOutputStreamFile(inputParameters.outputFile).catch(() => console.log("Не удалось открыть выходной файл"));

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







