/**
    Type definitions for jwt-promisify.
    @author Wlad Gumenyuk
*/

// Types
type Payload = string | object | Buffer;

type Secret = string | Buffer | { key: string; passphrase: string };

type Algorithm =
    "HS256" | "HS384" | "HS512" |
    "RS256" | "RS384" | "RS512" |
    "PS256" | "PS384" | "PS512" |
    "ES256" | "ES384" | "ES512" |
    "none";

// Interfaces
export interface SignOptions {
    algorithm?: Algorithm;
    audience?: string | string[];
    encoding?: string;
    /**
        Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).
        E.g. 1000, "2 days", "10h", "7d"
    */
    expiresIn?: string | number;
    header?: object;
    issuer?: string;
    jwtid?: string;
    keyid?: string;
    noTimestamp?: boolean;
    /**
        Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).
        E.g. 1000, "2 days", "10h", "7d"
    */
    notBefore?: string | number;
    subject?: string;
}

export interface VerifyOptions {
    algorithms?: Algorithm[];
    audience?: string | string[];
    clockTolerance?: number;
    complete?: boolean;
    issuer?: string;
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    /**
        Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).
        E.g. 1000, "2 days", "10h", "7d"
    */
    maxAge?: string | number;
    nonce?: string;
}

export interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
}

// Classes
export class JsonWebTokenError extends Error {
    inner: Error;
    constructor(message: string, error?: Error);
}

export class TokenExpiredError extends JsonWebTokenError {
    expiredAt: number;
    constructor(message: string, expiredAt: number);
}

export class NotBeforeError extends JsonWebTokenError {
    date: Date;
    constructor(message: string, date: Date);
}

// Functions
/**
    Signs the payload and returns a token.
    @param payload              Token payload.
    @param secretOrPrivateKey   Key or certificate to sign token.
    @param [options]            Options for the signature.
*/
export function sign(
    payload: Payload,
    secretOrPrivateKey: Secret,
    options?: SignOptions
): Promise<string>;

/**
    Verifies a token with a secret or public key and returns the payload.
    @param token                Token to be verified.
    @param secretOrPublicKeyKey Key or certificate to verify token against.
    @param [options]            Options for the verification.
*/
export function verify(
    token: string,
    secretOrPublicKey: Secret,
    options?: VerifyOptions
): Promise<Payload>;

/**
    Returns the decoded payload without verifying if the signature is valid.
    @param token                Token to be decoded.
    @param [options]            Options for decoding.
*/
export function decode(
    token: string,
    options?: DecodeOptions
): Promise<Payload>;