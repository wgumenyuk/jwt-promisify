const jwt = require("../index");
const { TOKEN, INVALID_TOKEN } = require("./constants");

describe("jwt-promisify#decode", () => {
    it("should be a function", (done) => {
        expect(typeof jwt.decode).toBe("function");
        done();
    });

    it("should return a promise", (done) => {
        const result = jwt.decode(TOKEN);
        expect(result instanceof Promise).toBe(true);
        done();
    });

    it("should decode a token payload", async () => {
        const payload = await jwt.decode(TOKEN);
        
        expect(typeof payload).toBe("object");
        expect(payload).toHaveProperty("message");
        expect(payload.message).toBe("Hello World");
    });

    it("should decode the complete token when 'complete' is set", async () => {
        const decoded = await jwt.decode(TOKEN, { complete: true });

        expect(typeof decoded).toBe("object");
        expect(decoded).toHaveProperty("header");
        expect(decoded).toHaveProperty("payload");
        expect(decoded).toHaveProperty("signature");

        expect(decoded.payload).toHaveProperty("message");
        expect(decoded.payload.message).toBe("Hello World");
    });

    it("should return 'null' when the token is invalid", async () => {
        const payload = await jwt.decode(INVALID_TOKEN);
        expect(payload).toBe(null);
    });
});