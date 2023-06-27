
export const errorMiddleware = (err, req, res, next) => {
    const error = {
        message: err.message || "Internal Server Error",
        statusCode: err.statusCode || 500,
    };

    if (err.code === 11000) {
        error.message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        error.statusCode = 400;
    }

    if (err.name === "CastError") {
        error.message = `Invalid ${err.path}`;
        error.statusCode = 400;
    }

    res.status(error.statusCode).json({ success: false, message: error.message });
};

export const asyncError = (passedFunc) => (req, res, next) => {
    Promise.resolve(passedFunc(req, res, next)).catch(next);
};