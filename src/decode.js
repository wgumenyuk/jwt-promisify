const jwt = require("jsonwebtoken");

/**
    Decodes a token without verifying the signature.
*/
const decode = (token, options = {}) => {
    return new Promise((resolve) => {
        const payload = jwt.decode(token, options);
        resolve(payload);
    });
};

module.exports = decode;