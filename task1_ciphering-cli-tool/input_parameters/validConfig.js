function validConfig (config) {
    return /(([CR][10]|A)-)*([CR][10]|A)$/.test(config);
}

export {validConfig};