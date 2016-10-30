'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constants = exports.normalize = undefined;

var _mappings = require('./lib/mappings');

var _mappings2 = _interopRequireDefault(_mappings);

var _constants = require('./lib/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalize = function normalize() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      environment = _ref.environment,
      env = _ref.env,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === undefined ? _constants2.default.FALLBACK : _ref$fallback;

  var envInput = (environment || env || '').toLowerCase().trim();

  return _mappings2.default[envInput] || fallback;
};

exports.normalize = normalize;
exports.constants = _constants2.default;
//# sourceMappingURL=index.js.map