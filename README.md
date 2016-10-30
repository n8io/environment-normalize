# environment-normalize
[ ![Codeship Status for n8io/environment-normalize](https://app.codeship.com/projects/fab2a050-810e-0134-279a-7e60ebb19227/status?branch=master)](https://app.codeship.com/projects/182146) [![bitHound Overall Score](https://www.bithound.io/github/n8io/environment-normalize/badges/score.svg)](https://www.bithound.io/github/n8io/environment-normalize)

A lightweight utility for normalizing environment names

[Demo](https://runkit.com/npm/environment-normalize)

## Install

* `npm i -S environment-normalize`
* OR `yarn add environment-normalize`

## Usage

See [example.es5.js](example.es5.js) for ES5 examples.

### `normalize()`

```
import {normalize} from 'environment-normalize';

console.log(normalize(/* no params */)); // returns the default fallback: 'production'

let options = {};

options.env = 'prd';
console.log(normalize(options)); // returns 'production'
options.env = 'prod';
console.log(normalize(options)); // returns 'production'
options.env = 'production';
console.log(normalize(options)); // returns 'production'

options.env = '< not a typical environment name >';
options.fallback = 'my-custom-environment-name';
console.log(normalize(options)); // returns 'my-custom-environment-name'
```

The full list of translations can be found here: [src/lib/aliases.js](src/lib/aliases.js)

### `constants`

```
import {constants} from 'environment-normalize';

console.log(constants.PRD); // returns 'production'
console.log(constants.PROD); // returns 'production'
console.log(constants.PRODUCTION); // returns 'production'
console.log(constants.FALLBACK); // returns 'production'
```

The full list of constants can befound here: [src/lib/aliases.js](src/lib/aliases.js)
