const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("../index");
const { KEY, TOKEN, INVALID_TOKEN } = require("./constants");

describe("jwt-promisify#verify", () => {
    it("should be a function", (done) => {
        expect(typeof jwt.verify).toBe("function");
        done();
    });

    it("should return a promise", (done) => {
        const result = jwt.verify(TOKEN, KEY);
        expect(result instanceof Promise).toBe(true);
        done();
    });

    it("should verify and decode a token payload", async () => {
        const payload = await jwt.verify(TOKEN, KEY);
        
        expect(typeof payload).toBe("object");
        expect(payload).toHaveProperty("message");
        expect(payload.message).toBe("Hello World");
    });

    it("should throw an error if the token is invalid", async () => {
        await expect(jwt.verify(INVALID_TOKEN, KEY))
            .rejects
            .toThrow(JsonWebTokenError);
    });
});