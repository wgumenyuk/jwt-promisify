var jwt = require("../index");

describe("verify() function", () => {
    // Invalid audience
    describe("invalid audience", () => {
        // { foo: "bar", aud: "user" }
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJhdWQiOiJ1c2VyIn0.-6WdAUZ_k_XRVXUD1vyxTrh5JXJog4XT2qgdKawC5aQ";
        var secret = "secret";
        var options = {
            audience: ["test", /^user1$/]
        };

        test("it should throw JsonWebTokenError \"jwt audience invalid\"", async () => {
            try {
                await jwt.verify(token, secret, options);
            } catch(error) {
                expect(error.name).toEqual("JsonWebTokenError");
                expect(error.message).toEqual("jwt audience invalid. expected: test or /^user1$/");
            }
        });
    });

    // Invalid signature
    describe("invalid signature", () => {
        // { foo: "bar" }
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.dtxWM6MIcgoeMgH87tGvsNDY6cHWL6MGW4LeYvnm1JA";
        var secret = "invalidSecret";

        test("it should throw JsonWebTokenError \"invalid signature\"", async () => {
            try {
                await jwt.verify(token, secret);
            } catch(error) {
                expect(error.name).toEqual("JsonWebTokenError");
                expect(error.message).toEqual("invalid signature");
            }
        });
    });

    // Token expiration
    describe("expiration", () => {
        // { foo: "bar", iat: 1476800100, exp: 1518092100 }
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NzY4MDAxMDAsImV4cCI6MTUxODA5MjEwMH0.vpnzctI-RFLz8Yq9rn9_GT8YHs9ZFfJmoAOdXnlMTRM";
        var secret = "secret";

        test("it should throw TokenExpiredError", async () => {
            try {
                await jwt.verify(token, secret);
            } catch(error) {
                expect(error.name).toEqual("TokenExpiredError");
                expect(error.message).toEqual("jwt expired");
            }
        });
    });
});