const jwt = require("../index");
const { KEY, PAYLOAD } = require("./constants");

describe("jwt-promisify#sign", () => {
    it("should be a function", (done) => {
        expect(typeof jwt.sign).toBe("function");
        done();
    });

    it("should return a promise", (done) => {
        const result = jwt.sign(PAYLOAD, KEY);
        expect(result instanceof Promise).toBe(true);
        done();
    });

    it("should sign a token payload", async () => {
        const token = await jwt.sign(PAYLOAD, KEY);
        const decoded = await jwt.decode(token);

        expect(typeof token).toBe("string");
        expect(typeof decoded).toBe("object");
        expect(decoded).toHaveProperty("iat");
        expect(decoded).toHaveProperty("message");
        expect(typeof decoded.iat).toBe("number");
        expect(typeof decoded.message).toBe("string");
        expect(decoded.message).toBe("Hello World");
    });
});