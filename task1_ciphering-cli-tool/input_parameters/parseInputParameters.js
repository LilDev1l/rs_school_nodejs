function parseInputParameters(args) {
    let config, inputFile, outputFile;

    args.forEach((parameter, index) => {
        switch (parameter) {
            case '-c':
            case '--config':
                config = args[index + 1];
                break;
            case '-i':
            case '--input':
                inputFile = args[index + 1];
                break;
            case '-o':
            case '--output':
                outputFile = args[index + 1];
                break;
        }
    })

    return {config, inputFile, outputFile};
}

export {parseInputParameters};