/* eslint-disable no-console */
import {normalize, constants} from 'environment-normalize';

// normalize()
console.log(normalize(/* no params */)); // returns the default fallback: 'production'

const options = {};

options.env = 'prd';
console.log(normalize(options)); // returns 'production'
options.env = 'prod';
console.log(normalize(options)); // returns 'production'
options.env = 'production';
console.log(normalize(options)); // returns 'production'

options.env = '< not a typical environment name >';
options.fallback = 'my-custom-environment-name';
console.log(normalize(options)); // returns 'my-custom-environment-name'

// constants
console.log(constants.PRD); // returns 'production'
console.log(constants.PROD); // returns 'production'
console.log(constants.PRODUCTION); // returns 'production'
console.log(constants.FALLBACK); // returns 'production'

console.log(constants);
