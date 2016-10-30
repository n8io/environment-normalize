'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mappings = require('./mappings');

var _mappings2 = _interopRequireDefault(_mappings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var specials = /[^\w\s]/gi;

var constants = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(_mappings2.default).map(function (key) {
  return _defineProperty({}, key.toUpperCase().replace(specials, '_'), _mappings2.default[key]);
}))));

constants.FALLBACK = _mappings2.default.production;

exports.default = constants;
//# sourceMappingURL=constants.js.map