const jwt = require("jsonwebtoken");

/**
    Signs a payload and generates a token.
*/
const sign = (payload, key, options = {}) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, key, options, (error, token) => {
            if(error) {
                reject(error);
                return;
            }

            resolve(token);
        });
    });
};

module.exports = sign;