const jwt = require("jsonwebtoken");

/**
    Verifies and decodes a given token.
*/
const verify = (token, key, options = {}) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, options, (error, payload) => {
            if(error) {
                reject(error);
                return;
            }

            resolve(payload);
        });
    });
};

module.exports = verify;