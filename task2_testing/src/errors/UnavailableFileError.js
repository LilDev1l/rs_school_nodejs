class UnavailableFileError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnavailableFileError";
    }
}

export {UnavailableFileError};