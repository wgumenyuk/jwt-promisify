<div align="center">
  <br/>
  <p>
    <img src="./assets/logo.png" alt="jwt-promisify" width="546px"/>
  </p>
  <br/>

  [![Travis CI](https://img.shields.io/travis/com/wgumenyuk/jwt-promisify?label=Build&style=flat-square)](https://travis-ci.com/github/wgumenyuk/jwt-promisify)
  [![NPM downloads](https://img.shields.io/npm/dt/jwt-promisify?label=Downloads&style=flat-square)](https://www.npmjs.com/package/jwt-promisify)
  [![Size](https://img.shields.io/bundlephobia/minzip/jwt-promisify?label=Size&style=flat-square)](https://github.com/wgumenyuk/jwt-promisify)
  [![License](https://img.shields.io/github/license/wgumenyuk/msn-weather?label=License&style=flat-square)](./LICENSE)

  [![NPM install info](https://nodei.co/npm/jwt-promisify.png?downloads=true&stars=true)](https://www.npmjs.com/package/jwt-promisify)
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [API Documentation](#api-documentation)

## About
`jwt-promisify` is a wrapper for [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)  with support for Promises and TypeScript.

## Installation
Install this package using NPM:

```sh-session
npm install jwt-promisify --save
```

## Usage
```ts
import jwt from "jwt-promisify";
```

Or using CommonJS:

```js
const jwt = require("jwt-promisify");
```

### API Documentation
#### `jwt.decode(token)`
Decodes a token without verifying the signature. Returns `null` if the token cannot be decoded.

| Parameter | Type            | Optional | Description           |
|-----------|-----------------|----------|-----------------------|
| `token`   | `string`        | ❌       | A signed token.       |
| `options` | `DecodeOptions` | ✔        | Options for decoding. |

> ⚠ This method does **not** verify the signature. You should **not** use this method to decode untrusted tokens. You most likely want to use [`jwt.verify()`](#jwtverifytoken-key-options) instead.

#### `jwt.sign(payload, key, options)`
Signs a payload and generates a token.

| Parameter | Type                         | Optional | Description           |
|-----------|------------------------------|----------|-----------------------|
| `payload` | `string`, `object`, `buffer` | ❌       | Token payload.        |
| `key`     | [`Key`](#key)                | ❌       | Secret key.           |
| `options` | `SignOptions`                | ✔        | Options for signing.  |

#### `jwt.verify(token, key, options)`
Verifies and decodes a given token.

| Parameter | Type            | Optional | Description           |
|-----------|-----------------|----------|-----------------------|
| `token`   | `string`        | ❌       | A signed token.       |
| `key`     | [`Key`](#key)   | ❌       | Secret key.           |
| `options` | `VerifyOptions` | ✔        | Options for signing.  |

#### `Key`
A secret key used for signing and verifying tokens. Can be one of the following:

- `string`
- [`Buffer`](https://nodejs.org/api/buffer.html#buffer)
- `{ key: string; passphrase: string; }`

## Resources
- [Changelog](./CHANGELOG.md)
- [NPM](https://npmjs.com/package/jwt-promisify)
- [GitHub](https://github.com/wgumenyuk/jwt-promisify)

## Acknowledgements
- TypeScript definitions adapted from [`@types/jsonwebtoken`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsonwebtoken)

## License
This project is licensed under [MIT](./LICENSE).