<div align="center">
  <p>
    <a href="https://github.com/wgumenyuk/jwt-promisify">
      <img
        src="https://user-images.githubusercontent.com/50965068/89028756-44d4b080-d32d-11ea-9e28-34f70d4c1634.png"
        alt="jwt-promisify"
        width="546px"
      />
    </a>
  </p>
  
  <br/>
  
  <p>
    <a href="https://npmjs.com/package/jwt-promisify"><img src="https://img.shields.io/npm/v/jwt-promisify?label=NPM&style=flat-square" alt="NPM version"/></a>
    <a href="https://github.com/wgumenyuk/jwt-promisify/issues"><img src="https://img.shields.io/github/issues/wgumenyuk/jwt-promisify?label=Issues&style=flat-square" alt="GitHub issues"/></a>
    <a href="https://travis-ci.org/wgumenyuk/jwt-promisify"><img src="https://img.shields.io/travis/wgumenyuk/jwt-promisify?label=Build&style=flat-square" alt="Build status"/></a>
    <a href="https://david-dm.org/wgumenyuk/jwt-promisify"><img src="https://img.shields.io/david/wgumenyuk/jwt-promisify?label=Dependencies&style=flat-square" alt="Dependencies"/></a>
    <a href="https://github.com/wgumenyuk/jwt-promisify/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"/></a>
  </p>
  
  <p>
    <a href="https://npmjs.com/package/jwt-promisify">
      <img src="https://nodei.co/npm/jwt-promisify.png" alt="NPM stats"/>
    </a>
  </p>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)

## About
`jwt-promisify` is a promisified version of [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken) with TypeScript support.
- Easy-to-use promises
- TypeScript support

## Installation
Install it using npm:
```
npm install jwt-promisify --save
```

## Usage
```javascript
var jwt = require("jwt-promisify");
```

<br/>

### `jwt.sign(payload, secretOrPrivateKey, [options])`
Signs the payload and returns a token.

| Parameter         | Type                                  | Optional | Default | Description                       |
|-------------------|---------------------------------------|----------|---------|-----------------------------------|
| payload           | String, Buffer, Object                | ❌        | None    | Token payload.                    |
| secretOrPublicKey | String, Buffer, `{ key, passphrase }` | ❌        | None    | Key or certificate to sing token. |
| options           | [SignOptions](#signoptions)           | ✔        | None    | Options for signing.              |

<br/>

### `jwt.validate(token, secretOrPublicKey, [options])`
Verifies a token with a secret or public key and returns the payload.

| Parameter         | Type                            | Optional | Default | Description                                 |
|-------------------|---------------------------------|----------|---------|---------------------------------------------|
| token             | String                          | ❌        | None    | Token to be verified.                       |
| secretOrPublicKey | String, Buffer                  | ❌        | None    | Key or certificate to verify token against. |
| options           | [VerifyOptions](#verifyoptions) | ✔        | None    | Options for the verification.               |

<br/>

### `jwt.decode(token, [options])`
Returns the payload without verifying if the signature is valid. 

| Parameter | Type                            | Optional | Default | Description           |
|-----------|---------------------------------|----------|---------|-----------------------|
| token     | String                          | ❌        | None    | Token to be decoded.  |
| options   | [DecodeOptions](#decodeoptions) | ✔        | None    | Options for decoding. |

<br/>

### `SignOptions`
Options for signing the token.

| Parameter     | Type                     | Optional | Default | Description                                                                                        |
|---------------|--------------------------|----------|---------|----------------------------------------------------------------------------------------------------|
| algorithm     | [Algorithm](#algorithms) | ✔        | HS256   | Signing algorithm.                                                                                 |
| audience      | String, Array<String>    | ✔        | None    | The token's audience.                                                                              |
| encoding      | String                   | ✔        | None    | The token's encoding.                                                                              |
| expiresIn     | String, Number           | ✔        | None    | Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms). |
| header        | Object                   | ✔        | None    | The token's header.                                                                                |
| Issuer        | String                   | ✔        | None    | The token's issuer.                                                                                |
| jwtid         | String                   | ✔        | None    | JWTID.                                                                                             |
| keyid         | String                   | ✔        | None    | KeyID.                                                                                             |
| noTimestamp   | Boolean                  | ✔        | None    | Whether the token has a timestamp or not.                                                          |
| notBefore     | String, Number           | ✔        | None    | Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms). |
| mutatePayload | Boolean                  | ✔        | false   | Whether the payload will be modified by signing or not.                                            |
| subject       | String                   | ✔        | None    | The token's subject.                                                                               |

<br/>

### `VerifyOptions`
Options for the validation.

| Parameter        | Type                            | Optional | Default | Description                                                                                        |
|------------------|---------------------------------|----------|---------|----------------------------------------------------------------------------------------------------|
| algorithms       | Array<[Algorithm](#algorithms)> | ✔        | None    | List of the names of allowed algorithms.                                                           |
| audience         | String, Array<String>           | ✔        | None    | The token's expected audience.                                                                     |
| clockTolerance   | Number                          | ✔        | 0       | Number of seconds to tolerate when checking `nbf` and `exp` claims.                                |
| complete         | Boolean                         | ✔        | false   | Return an object `{ header, payload, signature }` instead of only the content of the payload.      |
| issuer           | String                          | ✔        | None    | The token's expected issuer.                                                                       |
| ignoreExpiration | Boolean                         | ✔        | false   | Whether to ignore the expiration or not.                                                           |
| ignoreNotBefore  | Boolean                         | ✔        | false   | Whether to ignore the activation timestamp or not.                                                 |
| jwtid            | String                          | ✔        | None    | If you want to check the JWTID, provide a value here.                                              |
| maxAge           | String, Number                  | ✔        | None    | Expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms). |
| nonce            | String                          | ✔        | None    | If you want to check the `nonce` claim, provide a value here.                                      |

<br/>

### `DecodeOptions`
Options for decoding.

| Parameter | Type    | Optional | Default | Description                                                                                   |
|-----------|---------|----------|---------|-----------------------------------------------------------------------------------------------|
| complete  | Boolean | ✔        | false   | Whether to force `JSON.parse()` on payload or not.                                            |
| json      | Boolean | ✔        | false   | Return an object `{ header, payload, signature }` instead of only the content of the payload. |

<br/>

### `Algorithm`
List of supported algorithms:

| Algorithm | Digital signature or MAC algorithm                                      |
|-----------|-------------------------------------------------------------------------|
| HS256     | HMAC using SHA-256 hash algorithm.                                      |
| HS384     | HMAC using SHA-384 hash algorithm.                                      |
| HS512     | HMAC using SHA-512 hash algorithm.                                      |
| RS256     | RSASSA-PKCS1-v1_5 using SHA-256 hash algorithm.                         |
| RS384     | RSASSA-PKCS1-v1_5 using SHA-384 hash algorithm.                         |
| RS512     | RSASSA-PKCS1-v1_5 using SHA-512 hash algorithm.                         |
| PS256     | RSASSA-PSS using SHA-256 hash algorithm (only node ^6.12.0 OR >=8.0.0). |
| PS384     | RSASSA-PSS using SHA-384 hash algorithm (only node ^6.12.0 OR >=8.0.0). |
| PS512     | RSASSA-PSS using SHA-512 hash algorithm (only node ^6.12.0 OR >=8.0.0). |
| ES256     | ECDSA using P-256 curve and SHA-256 hash algorithm.                     |
| ES384     | ECDSA using P-384 curve and SHA-384 hash algorithm.                     |
| ES512     | ECDSA using P-521 curve and SHA-512 hash algorithm.                     |
| none      | No digital signature or MAC value included.                             |

<br/>

## Links
- [NPM](https://npmjs.com/package/jwt-promisify)
- [GitHub](https://github.com/wgumenyuk/jwt-promisify)

## License
This project ist licensed under [MIT](./LICENSE).

&copy; 2020 [Wlad Gumenyuk](https://github.com/wgumenyuk)
