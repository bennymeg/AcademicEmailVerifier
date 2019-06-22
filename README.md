# Academic Email Verifier
Identifies email addresses or domains names that belong to colleges or universities.
Retrieves institution name and owner role (i.e. faculty, student) if available.
[🌌 Service Demo](https://bennymeg.github.io/AcademicEmailVerifier/).

[![licence](https://img.shields.io/github/license/bennymeg/AcademicEmailVerifier.svg)](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/academic-email-verifier.svg)](https://www.npmjs.com/package/academic-email-verifier)
[![Dependencies status](https://david-dm.org/bennymeg/AcademicEmailVerifier/status.svg)](https://david-dm.org/bennymeg/AcademicEmailVerifier)

## Installation
```bash
npm install --save academic-email-verifier
```
## Usage

### Import library:
```javascript
import { Verifier } from 'academic-email-verifier';
```

### Verify academic email address asynchronically:
```javascript
// check if email address is a valid academic email address
let isAcademic = await Verifier.isAcademic('benny@stanford.edu');
```

### Get full institution name asynchronically:
```javascript
// get full institution name
let institutionName = await Verifier.getInstitutionName('megidish@mit.edu');
```

## Supported Environments ##
- 🖥  Node.js

## Documentation ##  
- 👨🏼‍💻 [API](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/API.md),  
- 👩🏼‍🏫 [Examples](https://github.com/bennymeg/AcademicEmailVerifier/blob/masterexamples),  
- 📜 [Change log](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/CHANGELOG.md),  
- 🖋 [Licence](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/LICENSE)

## Support ##
If you're having any problem, please [raise an issue](https://github.com/bennymeg/AcademicEmailVerifier/issues/new) on GitHub and we'll be happy to help.


## Contribute ##
- 👾 [Issue Tracker](https://github.com/bennymeg/AcademicEmailVerifier/issues),
- 📦 [Source Code](https://github.com/bennymeg/AcademicEmailVerifier/)

Before submitting a pull request, please make sure that you include tests, and that [jshint](http://jshint.com) runs without any warnings: [Download VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint).

## Test ## 
Run the test suite by executing:

```sh
$ npm test
```

## Attribution ## 
The database of this project is based on the ruby gem [swot](https://github.com/leereilly/swot) database. this database constitutes a significant part of this project. 

___

**Author:** Benny Megidish.