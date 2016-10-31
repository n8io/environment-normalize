# environment-normalize
[![npm](https://img.shields.io/npm/v/environment-normalize.svg)](https://www.npmjs.com/package/environment-normalize) [![Codeship](https://img.shields.io/codeship/fab2a050-810e-0134-279a-7e60ebb19227/master.svg)](https://app.codeship.com/projects/182146) [![bitHound](https://img.shields.io/bithound/code/github/n8io/environment-normalize.svg)](https://www.bithound.io/github/n8io/environment-normalize) [![Codecov master branch](https://img.shields.io/codecov/c/github/n8io/environment-normalize/master.svg)](https://codecov.io/gh/n8io/environment-normalize)

[![David](https://img.shields.io/david/n8io/environment-normalize.svg)](https://www.bithound.io/github/n8io/environment-normalize/master/dependencies/npm) [![David](https://img.shields.io/david/dev/n8io/environment-normalize.svg)](https://www.bithound.io/github/n8io/environment-normalize/master/dependencies/npm)

[![npm](https://nodei.co/npm/environment-normalize.png?downloads=true)](https://www.npmjs.com/package/environment-normalize)

A lightweight utility for normalizing environment names

[Demo](https://runkit.com/n8io/environment-normalize-v1-1-0)

## Install

* `yarn add environment-normalize # OR`
* `npm i -S environment-normalize`

## Usage

### normalize()

```javascript
import {normalize} from 'environment-normalize';

// normalize()
console.log(normalize(/* no params */)); // returns the default fallback: 'production'

let env = '';
let fallback = '';

env = 'prd';
console.log(normalize(options)); // returns 'production'
env = 'prod';
console.log(normalize(options)); // returns 'production'
env = 'production';
console.log(normalize(options)); // returns 'production'

env = '< not a typical environment name >';
fallback = 'my-custom-environment-name';
console.log(normalize(env, fallback)); // returns 'my-custom-environment-name'
```

The full list of conversions can be found here: [src/lib/aliases.js](src/lib/aliases.js)

### constants

```javascript
import {constants} from 'environment-normalize';

console.log(constants.PRD); // returns 'production'
console.log(constants.PROD); // returns 'production'
console.log(constants.PRODUCTION); // returns 'production'
console.log(constants.FALLBACK); // returns 'production'
console.log(JSON.stringify(constants, null, 2)); // Print'em out
```

**Note: Although examples here are ES6, environment-normalize is fully ES5 compatible**

### On the client

```html
<html>
  <body>
    <script src='lib/environment-normalize.js'></script>
    <script>
      (() => {
        const {
          normalize,
          constants
        } = window['environment-normalize'];

        const env = 'prod';

        console.log(normalize(env)); // returns 'production'
        console.log(JSON.stringify(constants, null, 2)); // Prints all the constants
      })();
    ...
```
