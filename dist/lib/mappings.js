'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aliases = require('./aliases');

var _aliases2 = _interopRequireDefault(_aliases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mappings = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(_aliases2.default).map(function (key) {
  var obj = _defineProperty({}, key, key);

  _aliases2.default[key].forEach(function (variation) {
    return obj[variation] = key;
  }); // eslint-disable-line no-return-assign

  return obj;
}))));

exports.default = mappings;
//# sourceMappingURL=mappings.js.map