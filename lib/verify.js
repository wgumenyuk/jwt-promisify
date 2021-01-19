/**
    Verifies a token with a secret or public key and returns the payload.
    @author Wlad Gumenyuk
*/

var { verify } = require("jsonwebtoken");

module.exports = async (token, secretOrPublicKey, options = {}) => new Promise((resolve, reject) => {
    verify(token, secretOrPublicKey, options, (error, payload) => {
        // Return error if one occured
        if(error) {
            reject(error);
            return;
        }

        // Return decoded payload
        resolve(payload);
    });
});