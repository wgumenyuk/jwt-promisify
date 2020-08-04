# Changelog
All notable changes to this project will be documented in this file starting from version **v1.0.1**.
<br/>
This project follows the [SemVer specification](https://semver.org).

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