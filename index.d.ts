/*
    Adapted from `@types/jsonwebtoken`.
    https://github.com/DefinitelyTyped/DefinitelyTyped
*/

// Types
export type Key = string | Buffer | { key: string | Buffer; passphrase: string; };

export type Algorithm =
    "HS256" | "HS384" | "HS512" |
    "RS256" | "RS384" | "RS512" |
    "PS256" | "PS384" | "PS512" |
    "ES256" | "ES384" | "ES512" |
    "none";

export type Header = {
    alg: string | Algorithm;
    typ?: string;
    cty?: string;
    crit?: Array<string | Exclude<keyof Header, "crit">>;
    kid?: string;
    jku?: string;
    x5u?: string | string[];
    "x5t#S256"?: string;
    x5t?: string;
    x5c?: string | string[];
};

export type Payload = {
    [ key: string ]: any;
    iss?: string;
    sub?: string;
    aud?: string | string[];
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
};

export type Token = {
    header: Header;
    payload: Payload | string;
    signature: string;
};

export type SignOptions = {
    algorithm?: Algorithm | undefined;
    keyid?: string | undefined;
    expiresIn?: string | number | undefined;
    notBefore?: string | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
    mutatePayload?: boolean | undefined;
    noTimestamp?: boolean | undefined;
    header?: Header | undefined;
    encoding?: string | undefined;
};

export type VerifyOptions = {
    algorithms?: Algorithm[];
    audience?: string | RegExp | Array<string | RegExp>;
    clockTimestamp?: number;
    clockTolerance?: number;
    complete?: boolean;
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    nonce?: string;
    subject?: string;
    maxAge?: number;
};

export type DecodeOptions = {
    complete?: boolean;
    json?: boolean;
};

// Classes
export class JsonWebTokenError extends Error {
    inner: Error;
    constructor(message: string, error?: Error);
}

export class TokenExpiredError extends JsonWebTokenError {
    expiredAt: Date;
    constructor(message: string, expiredAt: Date);
}

export class NotBeforeError extends JsonWebTokenError {
    date: Date;
    constructor(message: string, date: Date);
}

// Functions
/**
    Decodes a token without verifying the signature.
*/
export function decode(
    token: string,
    options: DecodeOptions & { complete: true }
): Promise<Token | null>;

/**
    Decodes a token without verifying the signature.
*/
export function decode(
    token: string,
    options?: DecodeOptions
): Promise<Record<string, any> | null>;

/**
    Signs a payload and generates a token.
*/
export function sign(
    payload: string | object | Buffer,
    key: Key,
    options?: SignOptions
): Promise<string>;

/**
    Verifies and decodes a given token.
*/
export function verify<T = Record<string, any>>(
    token: string,
    key: Key,
    options?: VerifyOptions
): Promise<T>;