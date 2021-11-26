import {ConfigOptionError} from "../errors/ConfigOptionError.js";

function parseInputParameters(args) {
    let config, inputFile, outputFile;

    args.forEach((parameter, index) => {
        switch (parameter) {
            case '-c':
            case '--config':
                if (config !== undefined) {
                    throw new ConfigOptionError('Duplicate config');
                } else {
                    config = args[index + 1];
                }
                break;
            case '-i':
            case '--input':
                if (inputFile !== undefined) {
                    throw new ConfigOptionError('Duplicate input file');
                } else {
                    inputFile = args[index + 1];
                }
                break;
            case '-o':
            case '--output':
                if (outputFile !== undefined) {
                    throw new ConfigOptionError('Duplicate output file');
                } else {
                    outputFile = args[index + 1];
                }
                break;
        }
    })

    if (config === undefined) {
        throw new ConfigOptionError('Config option not set');
    }

    return {config, inputFile, outputFile};
}

export {parseInputParameters};