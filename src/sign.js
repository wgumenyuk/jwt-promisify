/**
    Signs the payload and returns a token.
    @author Wlad Gumenyuk
*/

var { sign } = require("jsonwebtoken");

module.exports = (payload, secretOrPrivateKey, options = {}) => new Promise((resolve, reject) => {
    sign(payload, secretOrPrivateKey, options, (error, token) => {
        // Return error if one occured
        if(error) {
            reject(error);
            return;
        }

        // Return encoded token
        resolve(token);
    });
});