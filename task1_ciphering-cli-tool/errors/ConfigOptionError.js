class ConfigOptionError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConfigOptionError";
    }
}

export {ConfigOptionError};