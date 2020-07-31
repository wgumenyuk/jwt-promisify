/**
    Returns the payload without verifying if the signature is valid. 
    @author Wlad Gumenyuk
*/

var { decode } = require("jsonwebtoken");

module.exports = async (token, options = {}) => {
    try {
        var payload = await decode(token, options);

        // Return decoded payload
        return Promise.resolve(payload);
    } catch(error) {
        // Return error if one occured
        return Promise.reject(error);
    }
};