var normalizer = require('environment-normalize');

// normalizer.normalize()
console.log(normalizer.normalize(/* no params */)); // returns the default fallback: 'production'

var env = '';
var fallback = 'production';

env = 'prd';
console.log(normalizer.normalize(env)); // returns 'production'
env = 'prod';
console.log(normalizer.normalize(env)); // returns 'production'
env = 'production';
console.log(normalizer.normalize(env)); // returns 'production'

env = '< not a typical environment name >';
fallback = 'my-custom-environment-name';
console.log(normalizer.normalize(env)); // returns 'my-custom-environment-name'

// normalizer.constants
console.log(normalizer.constants.PRD); // returns 'production'
console.log(normalizer.constants.PROD); // returns 'production'
console.log(normalizer.constants.PRODUCTION); // returns 'production'
console.log(normalizer.constants.FALLBACK); // returns 'production'

console.log(normalizer.constants);
