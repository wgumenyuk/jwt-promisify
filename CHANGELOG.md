# Changelog
All notable changes to this project will be documented in this file starting from version **v1.0.1**.
<br/>
This project follows the [SemVer specification](https://semver.org).

### Unreleased
- Added links to `DecodeOptions`, `SignOptions` and `VerifyOptions` in README
- Improved warning in README

### 1.1.5 (May 19, 2022)
- Added `maxAge` to `VerifyOptions` [#2](https://github.com/wgumenyuk/jwt-promisify/issues/11)

### 1.1.4 (April 07, 2022)
- Refactored code
- Improved README
- Improved TypeScript definitions

### 1.1.3 (January 23, 2021)
- Removed `console.log()`

### 1.1.2 (January 19, 2021)
- Fixed issue [#1](https://github.com/wgumenyuk/jwt-promisify/issues/1)

### 1.1.1 (August 04, 2020)
- Fixed typo in README
- Fixed wrong documentation in README

### 1.1.0 (August 03, 2020)
- Improved type definitions for `VerifyOptions.audience`
    - Can now be a string, a regular expression or a list of strings and / or regular expressions.
- Fixed code style inconsistency inside `verify.js`
- Fixed broken `algorithm` hyperlink in README
- Added keywords to package.json
- Added another test to `verify.test.js`
    - Check for invalid audiences

### 1.0.1 (July 31, 2020)
- Improved README
    - Fix: Invalid nodei.co link
    - Added: Line breaks for better readability
- Improved package.json
    - Included `lib` to `files` field