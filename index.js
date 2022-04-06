const { JsonWebTokenError, NotBeforeError, TokenExpiredError } = require("jsonwebtoken");
const decode = require("./src/decode");
const sign = require("./src/sign");
const verify = require("./src/verify");

module.exports = {
    JsonWebTokenError,
    NotBeforeError,
    TokenExpiredError,
    decode,
    sign,
    verify
};