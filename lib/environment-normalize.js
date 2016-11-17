(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("environment-normalize", [], factory);
	else if(typeof exports === 'object')
		exports["environment-normalize"] = factory();
	else
		root["environment-normalize"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.constants = exports.normalize = undefined;
	
	var _mappings = __webpack_require__(1);
	
	var _mappings2 = _interopRequireDefault(_mappings);
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var normalize = function normalize() {
	  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    params[_key - 1] = arguments[_key];
	  }
	
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var environment = options.environment,
	      env = options.env,
	      _options$fallback = options.fallback,
	      fallback = _options$fallback === undefined ? _constants2.default.FALLBACK : _options$fallback;
	
	  var isShorthand = typeof options === 'string';
	  var tEnv = (isShorthand ? options : environment || env || '').toLowerCase().trim();
	  var tFallback = isShorthand ? params && params[0] || _constants2.default.FALLBACK : fallback;
	
	  return _mappings2.default[tEnv] || tFallback;
	};
	
	exports.normalize = normalize;
	exports.constants = _constants2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _aliases = __webpack_require__(2);
	
	var _aliases2 = _interopRequireDefault(_aliases);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var props = Object.keys(_aliases2.default).map(function (key) {
	  var obj = _defineProperty({}, key, key);
	
	  _aliases2.default[key].forEach(function (variation) {
	    return obj[variation] = key;
	  }); // eslint-disable-line no-return-assign
	
	  return obj;
	});
	
	var mappings = Object.assign.apply(Object, [{}].concat(_toConsumableArray(props)));
	
	exports.default = mappings;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var aliases = {
	  local: ['loc', 'localhost', 'sbx', 'sandbox'],
	  development: ['dev', 'develop'],
	  integration: ['build', 'ci', 'int', 'integ'],
	  test: ['qa', 'qal', 'quality', 'qualityassurance', 'quality-assurance', 'tst', 'testing'],
	  'user-acceptance': ['uat', 'useracceptance', 'user-acceptance', 'user-acceptance-testing'],
	  staging: ['stg', 'stage', 'perf', 'performance', 'preprod', 'pre-prod'],
	  production: ['prd', 'prod']
	};
	
	exports.default = aliases;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mappings = __webpack_require__(1);
	
	var _mappings2 = _interopRequireDefault(_mappings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var specials = /[^\w\s]/gi;
	var props = Object.keys(_mappings2.default).map(function (key) {
	  return _defineProperty({}, key.toUpperCase().replace(specials, '_'), _mappings2.default[key]);
	});
	
	var constants = Object.assign.apply(Object, [{}].concat(_toConsumableArray(props)));
	
	constants.FALLBACK = _mappings2.default.production;
	
	exports.default = constants;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYjI3NGM4MDhiNDYzNzRmMjU1YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBwaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2FsaWFzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibm9ybWFsaXplIiwicGFyYW1zIiwib3B0aW9ucyIsImVudmlyb25tZW50IiwiZW52IiwiZmFsbGJhY2siLCJGQUxMQkFDSyIsImlzU2hvcnRoYW5kIiwidEVudiIsInRvTG93ZXJDYXNlIiwidHJpbSIsInRGYWxsYmFjayIsImNvbnN0YW50cyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm9iaiIsImtleSIsImZvckVhY2giLCJ2YXJpYXRpb24iLCJtYXBwaW5ncyIsImFzc2lnbiIsImFsaWFzZXMiLCJsb2NhbCIsImRldmVsb3BtZW50IiwiaW50ZWdyYXRpb24iLCJ0ZXN0Iiwic3RhZ2luZyIsInByb2R1Y3Rpb24iLCJzcGVjaWFscyIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLFNBQVpBLFNBQVksR0FBNkI7QUFBQSxxQ0FBWEMsTUFBVztBQUFYQSxXQUFXO0FBQUE7O0FBQUEsT0FBNUJDLE9BQTRCLHVFQUFsQixFQUFrQjtBQUFBLE9BQ3RDQyxXQURzQyxHQUNhRCxPQURiLENBQ3RDQyxXQURzQztBQUFBLE9BQ3pCQyxHQUR5QixHQUNhRixPQURiLENBQ3pCRSxHQUR5QjtBQUFBLDJCQUNhRixPQURiLENBQ3BCRyxRQURvQjtBQUFBLE9BQ3BCQSxRQURvQixxQ0FDVCxvQkFBVUMsUUFERDs7QUFFN0MsT0FBTUMsY0FBYyxPQUFPTCxPQUFQLEtBQW1CLFFBQXZDO0FBQ0EsT0FBTU0sT0FBTyxDQUFDRCxjQUFjTCxPQUFkLEdBQXlCQyxlQUFlQyxHQUFmLElBQXNCLEVBQWhELEVBQXFESyxXQUFyRCxHQUFtRUMsSUFBbkUsRUFBYjtBQUNBLE9BQU1DLFlBQWFKLGNBQWVOLFVBQVVBLE9BQU8sQ0FBUCxDQUFYLElBQXlCLG9CQUFVSyxRQUFqRCxHQUE0REQsUUFBL0U7O0FBRUEsVUFBTyxtQkFBU0csSUFBVCxLQUFrQkcsU0FBekI7QUFDRCxFQVBEOztTQVNRWCxTLEdBQUFBLFM7U0FBV1ksUzs7Ozs7Ozs7Ozs7O0FDWm5COzs7Ozs7Ozs7O0FBRUEsS0FBTUMsUUFBUUMsT0FDWEMsSUFEVyxvQkFFWEMsR0FGVyxDQUVQLGVBQU87QUFDVixPQUFNQywwQkFBUUMsR0FBUixFQUFjQSxHQUFkLENBQU47O0FBRUEscUJBQVFBLEdBQVIsRUFBYUMsT0FBYixDQUFxQjtBQUFBLFlBQWFGLElBQUlHLFNBQUosSUFBaUJGLEdBQTlCO0FBQUEsSUFBckIsRUFIVSxDQUcrQzs7QUFFekQsVUFBT0QsR0FBUDtBQUNELEVBUlcsQ0FBZDs7QUFVQSxLQUFNSSxXQUFXUCxPQUFPUSxNQUFQLGdCQUFjLEVBQWQsNEJBQXFCVCxLQUFyQixHQUFqQjs7bUJBRWVRLFE7Ozs7Ozs7Ozs7O0FDZGYsS0FBTUUsVUFBVTtBQUNkQyxVQUFPLENBQ0wsS0FESyxFQUVMLFdBRkssRUFHTCxLQUhLLEVBSUwsU0FKSyxDQURPO0FBT2RDLGdCQUFhLENBQ1gsS0FEVyxFQUVYLFNBRlcsQ0FQQztBQVdkQyxnQkFBYSxDQUNYLE9BRFcsRUFFWCxJQUZXLEVBR1gsS0FIVyxFQUlYLE9BSlcsQ0FYQztBQWlCZEMsU0FBTSxDQUNKLElBREksRUFFSixLQUZJLEVBR0osU0FISSxFQUlKLGtCQUpJLEVBS0osbUJBTEksRUFNSixLQU5JLEVBT0osU0FQSSxDQWpCUTtBQTBCZCxzQkFBbUIsQ0FDakIsS0FEaUIsRUFFakIsZ0JBRmlCLEVBR2pCLGlCQUhpQixFQUlqQix5QkFKaUIsQ0ExQkw7QUFnQ2RDLFlBQVMsQ0FDUCxLQURPLEVBRVAsT0FGTyxFQUdQLE1BSE8sRUFJUCxhQUpPLEVBS1AsU0FMTyxFQU1QLFVBTk8sQ0FoQ0s7QUF3Q2RDLGVBQVksQ0FDVixLQURVLEVBRVYsTUFGVTtBQXhDRSxFQUFoQjs7bUJBOENlTixPOzs7Ozs7Ozs7Ozs7QUM5Q2Y7Ozs7Ozs7Ozs7QUFFQSxLQUFNTyxXQUFXLFdBQWpCO0FBQ0EsS0FBTWpCLFFBQVFDLE9BQ1hDLElBRFcscUJBRVhDLEdBRlcsQ0FFUDtBQUFBLDhCQUFVRSxJQUFJYSxXQUFKLEdBQWtCQyxPQUFsQixDQUEwQkYsUUFBMUIsRUFBb0MsR0FBcEMsQ0FBVixFQUFxRCxtQkFBU1osR0FBVCxDQUFyRDtBQUFBLEVBRk8sQ0FBZDs7QUFJQSxLQUFNTixZQUFZRSxPQUFPUSxNQUFQLGdCQUFjLEVBQWQsNEJBQXFCVCxLQUFyQixHQUFsQjs7QUFFQUQsV0FBVU4sUUFBVixHQUFxQixtQkFBU3VCLFVBQTlCOzttQkFFZWpCLFMiLCJmaWxlIjoiZW52aXJvbm1lbnQtbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJlbnZpcm9ubWVudC1ub3JtYWxpemVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZW52aXJvbm1lbnQtbm9ybWFsaXplXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVudmlyb25tZW50LW5vcm1hbGl6ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYjI3NGM4MDhiNDYzNzRmMjU1YyIsImltcG9ydCBtYXBwaW5ncyBmcm9tICcuL2xpYi9tYXBwaW5ncyc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChvcHRpb25zID0ge30sIC4uLnBhcmFtcykgPT4ge1xuICBjb25zdCB7ZW52aXJvbm1lbnQsIGVudiwgZmFsbGJhY2sgPSBjb25zdGFudHMuRkFMTEJBQ0t9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNTaG9ydGhhbmQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZyc7XG4gIGNvbnN0IHRFbnYgPSAoaXNTaG9ydGhhbmQgPyBvcHRpb25zIDogKGVudmlyb25tZW50IHx8IGVudiB8fCAnJykpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICBjb25zdCB0RmFsbGJhY2sgPSAoaXNTaG9ydGhhbmQgPyAocGFyYW1zICYmIHBhcmFtc1swXSkgfHwgY29uc3RhbnRzLkZBTExCQUNLIDogZmFsbGJhY2spO1xuXG4gIHJldHVybiBtYXBwaW5nc1t0RW52XSB8fCB0RmFsbGJhY2s7XG59O1xuXG5leHBvcnQge25vcm1hbGl6ZSwgY29uc3RhbnRzfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBhbGlhc2VzIGZyb20gJy4vYWxpYXNlcyc7XG5cbmNvbnN0IHByb3BzID0gT2JqZWN0XG4gIC5rZXlzKGFsaWFzZXMpXG4gIC5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCBvYmogPSB7W2tleV06IGtleX07XG5cbiAgICBhbGlhc2VzW2tleV0uZm9yRWFjaCh2YXJpYXRpb24gPT4gb2JqW3ZhcmlhdGlvbl0gPSBrZXkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJldHVybi1hc3NpZ25cblxuICAgIHJldHVybiBvYmo7XG4gIH0pO1xuXG5jb25zdCBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLnByb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFwcGluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL21hcHBpbmdzLmpzIiwiY29uc3QgYWxpYXNlcyA9IHtcbiAgbG9jYWw6IFtcbiAgICAnbG9jJyxcbiAgICAnbG9jYWxob3N0JyxcbiAgICAnc2J4JyxcbiAgICAnc2FuZGJveCdcbiAgXSxcbiAgZGV2ZWxvcG1lbnQ6IFtcbiAgICAnZGV2JyxcbiAgICAnZGV2ZWxvcCdcbiAgXSxcbiAgaW50ZWdyYXRpb246IFtcbiAgICAnYnVpbGQnLFxuICAgICdjaScsXG4gICAgJ2ludCcsXG4gICAgJ2ludGVnJ1xuICBdLFxuICB0ZXN0OiBbXG4gICAgJ3FhJyxcbiAgICAncWFsJyxcbiAgICAncXVhbGl0eScsXG4gICAgJ3F1YWxpdHlhc3N1cmFuY2UnLFxuICAgICdxdWFsaXR5LWFzc3VyYW5jZScsXG4gICAgJ3RzdCcsXG4gICAgJ3Rlc3RpbmcnXG4gIF0sXG4gICd1c2VyLWFjY2VwdGFuY2UnOiBbXG4gICAgJ3VhdCcsXG4gICAgJ3VzZXJhY2NlcHRhbmNlJyxcbiAgICAndXNlci1hY2NlcHRhbmNlJyxcbiAgICAndXNlci1hY2NlcHRhbmNlLXRlc3RpbmcnXG4gIF0sXG4gIHN0YWdpbmc6IFtcbiAgICAnc3RnJyxcbiAgICAnc3RhZ2UnLFxuICAgICdwZXJmJyxcbiAgICAncGVyZm9ybWFuY2UnLFxuICAgICdwcmVwcm9kJyxcbiAgICAncHJlLXByb2QnXG4gIF0sXG4gIHByb2R1Y3Rpb246IFtcbiAgICAncHJkJyxcbiAgICAncHJvZCdcbiAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWxpYXNlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvYWxpYXNlcy5qcyIsImltcG9ydCBtYXBwaW5ncyBmcm9tICcuL21hcHBpbmdzJztcblxuY29uc3Qgc3BlY2lhbHMgPSAvW15cXHdcXHNdL2dpO1xuY29uc3QgcHJvcHMgPSBPYmplY3RcbiAgLmtleXMobWFwcGluZ3MpXG4gIC5tYXAoa2V5ID0+ICh7W2tleS50b1VwcGVyQ2FzZSgpLnJlcGxhY2Uoc3BlY2lhbHMsICdfJyldOiBtYXBwaW5nc1trZXldfSkpO1xuXG5jb25zdCBjb25zdGFudHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5wcm9wcyk7XG5cbmNvbnN0YW50cy5GQUxMQkFDSyA9IG1hcHBpbmdzLnByb2R1Y3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY29uc3RhbnRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==