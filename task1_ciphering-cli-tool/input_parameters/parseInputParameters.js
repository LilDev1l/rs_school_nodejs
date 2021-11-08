function parseInputParameters(args) {
    let config, input, output;

    args.forEach((parameter, index) => {
        switch (parameter) {
            case '-c':
            case '--config':
                config = args[index + 1];
                break;
            case '-i':
            case '--input':
                input = args[index + 1];
                break;
            case '-o':
            case '--output':
                output = args[index + 1];
                break;
        }
    })

    return {config, input, output};
}

export {parseInputParameters};