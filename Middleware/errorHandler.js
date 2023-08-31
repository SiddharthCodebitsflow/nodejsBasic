const constant = require('../constant');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
console.log(constant.VALIDATION_ERROR);
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({
                title: "Please Fill correct inforamtion",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constant.UNAUTHORIZED:
            res.json({
                title: "Something is wrong",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constant.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constant.NOT_FOUND:
            res.json({
                title: "User not found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }

}

module.exports = errorHandler;