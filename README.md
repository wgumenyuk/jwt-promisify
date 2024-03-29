<div align="center">
  <br/>
  <p>
    <img src="./assets/logo.png" alt="jwt-promisify" width="546px"/>
  </p>
  <br/>

  [![Travis CI](https://img.shields.io/travis/com/wgumenyuk/jwt-promisify?label=Build&style=flat-square)](https://travis-ci.com/github/wgumenyuk/jwt-promisify)
  [![NPM downloads](https://img.shields.io/npm/dt/jwt-promisify?label=Downloads&style=flat-square)](https://www.npmjs.com/package/jwt-promisify)
  [![Size](https://img.shields.io/bundlephobia/minzip/jwt-promisify?label=Size&style=flat-square)](https://github.com/wgumenyuk/jwt-promisify)
  [![License](https://img.shields.io/github/license/wgumenyuk/jwt-promisify?label=License&style=flat-square)](./LICENSE)

  [![NPM install info](https://nodei.co/npm/jwt-promisify.png?downloads=true&stars=true)](https://www.npmjs.com/package/jwt-promisify)
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [API Documentation](#api-documentation)
- [Resources](#resources)
- [Acknowledgements](#acknowledgements)
- [License](#license)

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

| Parameter | Type                 | Optional | Description           |
|-----------|----------------------|----------|-----------------------|
| `token`   | `string`             | ❌       | A signed token.       |
| `options` | [`DecodeOptions`][2] | ✔        | Options for decoding. |

> **Warning**
> This method does **not** verify the signature. You should **not** use this method to decode untrusted tokens. You most likely want to use [`jwt.verify()`](#jwtverifytoken-key-options) instead.

#### `jwt.sign(payload, key, options)`
Signs a payload and generates a token.

| Parameter | Type                              | Optional | Description           |
|-----------|-----------------------------------|----------|-----------------------|
| `payload` | `string`, `object`, [`Buffer`][1] | ❌       | Token payload.        |
| `key`     | [`Key`](#key)                     | ❌       | Secret key.           |
| `options` | [`SignOptions`][3]                | ✔        | Options for signing.  |

#### `jwt.verify(token, key, options)`
Verifies and decodes a given token.

| Parameter | Type                 | Optional | Description           |
|-----------|----------------------|----------|-----------------------|
| `token`   | `string`             | ❌       | A signed token.       |
| `key`     | [`Key`](#key)        | ❌       | Secret key.           |
| `options` | [`VerifyOptions`][4] | ✔        | Options for signing.  |

#### `Key`
A secret key used for signing and verifying tokens. Can be one of the following:

- `string`
- [`Buffer`][1]
- `{ key: string; passphrase: string; }`

## Resources
- [Changelog](./CHANGELOG.md)
- [NPM](https://npmjs.com/package/jwt-promisify)
- [GitHub](https://github.com/wgumenyuk/jwt-promisify)

## Acknowledgements
- TypeScript definitions adapted from [`@types/jsonwebtoken`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsonwebtoken)

## License
This project is licensed under [MIT](./LICENSE).

<!-- Links -->
[1]: https://nodejs.org/api/buffer.html#buffer
[2]: https://github.com/wgumenyuk/jwt-promisify/blob/main/index.d.ts#L76
[3]: https://github.com/wgumenyuk/jwt-promisify/blob/main/index.d.ts#L46
[4]: https://github.com/wgumenyuk/jwt-promisify/blob/main/index.d.ts#L61