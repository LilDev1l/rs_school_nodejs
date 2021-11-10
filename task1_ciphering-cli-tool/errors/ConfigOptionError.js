class ConfigOptionError extends Error {
    constructor(message) {
        super(message);
        this.name = "DuplicateOptionError";
    }
}

export {ConfigOptionError};