var normalizer = require('environment-normalize');

// normalizer.normalize()
console.log(normalizer.normalize(/* no params */)); // returns the default fallback: 'production'

var options = {};

options.env = 'prd';
console.log(normalizer.normalize(options)); // returns 'production'
options.env = 'prod';
console.log(normalizer.normalize(options)); // returns 'production'
options.env = 'production';
console.log(normalizer.normalize(options)); // returns 'production'

options.env = '< not a typical environment name >';
options.fallback = 'my-custom-environment-name';
console.log(normalizer.normalize(options)); // returns 'my-custom-environment-name'

// normalizer.constants
console.log(normalizer.constants.PRD); // returns 'production'
console.log(normalizer.constants.PROD); // returns 'production'
console.log(normalizer.constants.PRODUCTION); // returns 'production'
console.log(normalizer.constants.FALLBACK); // returns 'production'

console.log(normalizer.constants);
