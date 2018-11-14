# AcademicEmailVerifier
Identifies email addresses or domains names that belong to colleges or universities.

[![licence](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/academic-email-verifier.svg)](https://www.npmjs.com/package/academic-email-verifier)
[![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/AcademicEmailVerifier)
![GitHub repository size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)

## Installation
```bash
npm install --save academic-email-verifier
```
## Usage

### Import library:
```javascript
const verifier = require('academic-email-verifier');
```

### Verify academic email address:
```javascript
// check if email address is a valid academic email address
verifier.isAcademic('benny@stanford.edu')
        .then(result => console.log(result))
        .catch(error => console.log(error));
```

### Get full institution name:
```javascript
// get full institution name
verifier.getInstitutionName('benny@stanford.edu')
        .then(result => console.log(result))
        .catch(error => console.log(error));
```


## Documentation ##  
- 👨🏼‍💻 [API](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/docs/API.md),  
- 👩🏼‍🏫 [Examples](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/docs/examples),  
- 📜 [Change log](https://github.com/bennymeg/AcademicEmailVerifier/blob/master/docs/CHANGELOG.md),  
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