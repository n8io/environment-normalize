!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("environment-normalize",[],t):"object"==typeof exports?exports["environment-normalize"]=t():e["environment-normalize"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.normalize=void 0;var o=r(1),a=n(o),u=r(3),i=n(u),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,r=e.env,n=e.fallback,o=void 0===n?i.default.FALLBACK:n,u=(t||r||"").toLowerCase().trim();return a.default[u]||o};t.normalize=c,t.constants=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var u=r(2),i=n(u),c=Object.keys(i.default).map(function(e){var t=a({},e,e);return i.default[e].forEach(function(r){return t[r]=e}),t}),l=Object.assign.apply(Object,[{}].concat(o(c)));t.default=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={local:["loc","localhost","sbx","sandbox"],development:["dev","develop"],integration:["build","ci","int","integ"],test:["qa","qal","quality","qualityassurance","quality-assurance","tst","testing"],"user-acceptance":["uat","useracceptance","user-acceptance","user-acceptance-testing"],staging:["stg","stage","perf","performance","preprod","pre-prod"],production:["prd","prod"]};t.default=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),i=n(u),c=/[^\w\s]/gi,l=Object.keys(i.default).map(function(e){return a({},e.toUpperCase().replace(c,"_"),i.default[e])}),f=Object.assign.apply(Object,[{}].concat(o(l)));f.FALLBACK=i.default.production,t.default=f}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy9lbnZpcm9ubWVudC1ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGJhYjAxNGJjMjA4YjRhMGZkNDQ5Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21hcHBpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvYWxpYXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwibW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImluc3RhbGxlZE1vZHVsZXMiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY29uc3RhbnRzIiwibm9ybWFsaXplIiwidW5kZWZpbmVkIiwiX21hcHBpbmdzIiwiX21hcHBpbmdzMiIsIl9jb25zdGFudHMiLCJfY29uc3RhbnRzMiIsIl9yZWYiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJlbnZpcm9ubWVudCIsImVudiIsIl9yZWYkZmFsbGJhY2siLCJmYWxsYmFjayIsIkZBTExCQUNLIiwiZW52SW5wdXQiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwiYXJyMiIsImZyb20iLCJfZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfYWxpYXNlcyIsIl9hbGlhc2VzMiIsInByb3BzIiwia2V5cyIsIm1hcCIsImZvckVhY2giLCJ2YXJpYXRpb24iLCJtYXBwaW5ncyIsImFzc2lnbiIsImFwcGx5IiwiY29uY2F0IiwiYWxpYXNlcyIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJpbnRlZ3JhdGlvbiIsInRlc3QiLCJ1c2VyLWFjY2VwdGFuY2UiLCJzdGFnaW5nIiwicHJvZHVjdGlvbiIsInNwZWNpYWxzIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUNBLGdCQUFBQyxVQUFBLGdCQUFBQyxRQUNBQSxPQUFBRCxRQUFBRCxJQUNBLGtCQUFBRyxnQkFBQUMsSUFDQUQsT0FBQSwyQkFBQUgsR0FDQSxnQkFBQUMsU0FDQUEsUUFBQSx5QkFBQUQsSUFFQUQsRUFBQSx5QkFBQUMsS0FDQ0ssS0FBQSxXQUNELE1DQWdCLFVBQVVDLEdDTjFCLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBUCxPQUdBLElBQUFDLEdBQUFPLEVBQUFELElBQ0FQLFdBQ0FTLEdBQUFGLEVBQ0FHLFFBQUEsRUFVQSxPQU5BTCxHQUFBRSxHQUFBSSxLQUFBVixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBTSxHQUdBTCxFQUFBUyxRQUFBLEVBR0FULEVBQUFELFFBdkJBLEdBQUFRLEtBcUNBLE9BVEFGLEdBQUFNLEVBQUFQLEVBR0FDLEVBQUFPLEVBQUFMLEVBR0FGLEVBQUFRLEVBQUEsR0FHQVIsRUFBQSxLRGdCTSxTQUFTTCxFQUFRRCxFQUFTTSxHQUUvQixZQWVBLFNBQVNTLEdBQXVCQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQVFFLFFBQVNGLEdBYnZGRyxPQUFPQyxlQUFlcEIsRUFBUyxjQUM3QnFCLE9BQU8sSUFFVHJCLEVBQVFzQixVQUFZdEIsRUFBUXVCLFVBQVlDLE1FN0R6QyxJQUFBQyxHQUFBbkIsRUFBQSxHRmlFS29CLEVBQWFYLEVBQXVCVSxHRWhFekNFLEVBQUFyQixFQUFBLEdGb0VL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QUFJLEdBQUFuQixFQUFBLEdMMEpLb0IsRUFBYVgsRUFBdUJVLEdLeEpuQzhDLEVBQVcsWUFDWGpCLEVBQVFuQyxPQUNYb0MsS0FEVzdCLEVBQUFSLFNBRVhzQyxJQUFJLFNBQUFSLEdBQUEsTUFBQUQsTUFBVUMsRUFBSXdCLGNBQWNDLFFBQVFGLEVBQVUsS0FBTzdDLEVBQUFSLFFBQVM4QixNQUUvRDFCLEVBQVlILE9BQU95QyxPQUFQQyxNQUFBMUMsWUFBQTJDLE9BQUF0QixFQUFxQmMsSUFFdkNoQyxHQUFVYyxTQUFXVixFQUFBUixRQUFTb0QsV0xrSzdCdEUsRUFBUWtCLFFLaEtNSSIsImZpbGUiOiJlbnZpcm9ubWVudC1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImVudmlyb25tZW50LW5vcm1hbGl6ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlbnZpcm9ubWVudC1ub3JtYWxpemVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZW52aXJvbm1lbnQtbm9ybWFsaXplXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZW52aXJvbm1lbnQtbm9ybWFsaXplXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVudmlyb25tZW50LW5vcm1hbGl6ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlbnZpcm9ubWVudC1ub3JtYWxpemVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmNvbnN0YW50cyA9IGV4cG9ydHMubm9ybWFsaXplID0gdW5kZWZpbmVkO1xuXHRcblx0dmFyIF9tYXBwaW5ncyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX21hcHBpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcHBpbmdzKTtcblx0XG5cdHZhciBfY29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfY29uc3RhbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnN0YW50cyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcblx0ICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG5cdCAgICAgIGVudmlyb25tZW50ID0gX3JlZi5lbnZpcm9ubWVudCxcblx0ICAgICAgZW52ID0gX3JlZi5lbnYsXG5cdCAgICAgIF9yZWYkZmFsbGJhY2sgPSBfcmVmLmZhbGxiYWNrLFxuXHQgICAgICBmYWxsYmFjayA9IF9yZWYkZmFsbGJhY2sgPT09IHVuZGVmaW5lZCA/IF9jb25zdGFudHMyLmRlZmF1bHQuRkFMTEJBQ0sgOiBfcmVmJGZhbGxiYWNrO1xuXHRcblx0ICB2YXIgZW52SW5wdXQgPSAoZW52aXJvbm1lbnQgfHwgZW52IHx8ICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0XG5cdCAgcmV0dXJuIF9tYXBwaW5nczIuZGVmYXVsdFtlbnZJbnB1dF0gfHwgZmFsbGJhY2s7XG5cdH07XG5cdFxuXHRleHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcblx0ZXhwb3J0cy5jb25zdGFudHMgPSBfY29uc3RhbnRzMi5kZWZhdWx0O1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2FsaWFzZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9hbGlhc2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FsaWFzZXMpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblx0XG5cdHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKF9hbGlhc2VzMi5kZWZhdWx0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHQgIHZhciBvYmogPSBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwga2V5KTtcblx0XG5cdCAgX2FsaWFzZXMyLmRlZmF1bHRba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYXRpb24pIHtcblx0ICAgIHJldHVybiBvYmpbdmFyaWF0aW9uXSA9IGtleTtcblx0ICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXR1cm4tYXNzaWduXG5cdFxuXHQgIHJldHVybiBvYmo7XG5cdH0pO1xuXHR2YXIgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgW3t9XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByb3BzKSkpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gbWFwcGluZ3M7XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGFsaWFzZXMgPSB7XG5cdCAgbG9jYWw6IFsnbG9jJywgJ2xvY2FsaG9zdCcsICdzYngnLCAnc2FuZGJveCddLFxuXHQgIGRldmVsb3BtZW50OiBbJ2RldicsICdkZXZlbG9wJ10sXG5cdCAgaW50ZWdyYXRpb246IFsnYnVpbGQnLCAnY2knLCAnaW50JywgJ2ludGVnJ10sXG5cdCAgdGVzdDogWydxYScsICdxYWwnLCAncXVhbGl0eScsICdxdWFsaXR5YXNzdXJhbmNlJywgJ3F1YWxpdHktYXNzdXJhbmNlJywgJ3RzdCcsICd0ZXN0aW5nJ10sXG5cdCAgJ3VzZXItYWNjZXB0YW5jZSc6IFsndWF0JywgJ3VzZXJhY2NlcHRhbmNlJywgJ3VzZXItYWNjZXB0YW5jZScsICd1c2VyLWFjY2VwdGFuY2UtdGVzdGluZyddLFxuXHQgIHN0YWdpbmc6IFsnc3RnJywgJ3N0YWdlJywgJ3BlcmYnLCAncGVyZm9ybWFuY2UnLCAncHJlcHJvZCcsICdwcmUtcHJvZCddLFxuXHQgIHByb2R1Y3Rpb246IFsncHJkJywgJ3Byb2QnXVxuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gYWxpYXNlcztcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9tYXBwaW5ncyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX21hcHBpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcHBpbmdzKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cdFxuXHR2YXIgc3BlY2lhbHMgPSAvW15cXHdcXHNdL2dpO1xuXHR2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhfbWFwcGluZ3MyLmRlZmF1bHQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdCAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LnRvVXBwZXJDYXNlKCkucmVwbGFjZShzcGVjaWFscywgJ18nKSwgX21hcHBpbmdzMi5kZWZhdWx0W2tleV0pO1xuXHR9KTtcblx0XG5cdHZhciBjb25zdGFudHMgPSBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgW3t9XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByb3BzKSkpO1xuXHRcblx0Y29uc3RhbnRzLkZBTExCQUNLID0gX21hcHBpbmdzMi5kZWZhdWx0LnByb2R1Y3Rpb247XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBjb25zdGFudHM7XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW52aXJvbm1lbnQtbm9ybWFsaXplLmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmFiMDE0YmMyMDhiNGEwZmQ0NDkiLCJpbXBvcnQgbWFwcGluZ3MgZnJvbSAnLi9saWIvbWFwcGluZ3MnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBub3JtYWxpemUgPSAoe2Vudmlyb25tZW50LCBlbnYsIGZhbGxiYWNrID0gY29uc3RhbnRzLkZBTExCQUNLfSA9IHt9KSA9PiB7XG4gIGNvbnN0IGVudklucHV0ID0gKGVudmlyb25tZW50IHx8IGVudiB8fCAnJykudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cbiAgcmV0dXJuIG1hcHBpbmdzW2VudklucHV0XSB8fCBmYWxsYmFjaztcbn07XG5cbmV4cG9ydCB7bm9ybWFsaXplLCBjb25zdGFudHN9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IGFsaWFzZXMgZnJvbSAnLi9hbGlhc2VzJztcblxuY29uc3QgcHJvcHMgPSBPYmplY3RcbiAgLmtleXMoYWxpYXNlcylcbiAgLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHtba2V5XToga2V5fTtcblxuICAgIGFsaWFzZXNba2V5XS5mb3JFYWNoKHZhcmlhdGlvbiA9PiBvYmpbdmFyaWF0aW9uXSA9IGtleSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSk7XG5jb25zdCBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLnByb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFwcGluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL21hcHBpbmdzLmpzIiwiY29uc3QgYWxpYXNlcyA9IHtcbiAgbG9jYWw6IFtcbiAgICAnbG9jJyxcbiAgICAnbG9jYWxob3N0JyxcbiAgICAnc2J4JyxcbiAgICAnc2FuZGJveCdcbiAgXSxcbiAgZGV2ZWxvcG1lbnQ6IFtcbiAgICAnZGV2JyxcbiAgICAnZGV2ZWxvcCdcbiAgXSxcbiAgaW50ZWdyYXRpb246IFtcbiAgICAnYnVpbGQnLFxuICAgICdjaScsXG4gICAgJ2ludCcsXG4gICAgJ2ludGVnJ1xuICBdLFxuICB0ZXN0OiBbXG4gICAgJ3FhJyxcbiAgICAncWFsJyxcbiAgICAncXVhbGl0eScsXG4gICAgJ3F1YWxpdHlhc3N1cmFuY2UnLFxuICAgICdxdWFsaXR5LWFzc3VyYW5jZScsXG4gICAgJ3RzdCcsXG4gICAgJ3Rlc3RpbmcnXG4gIF0sXG4gICd1c2VyLWFjY2VwdGFuY2UnOiBbXG4gICAgJ3VhdCcsXG4gICAgJ3VzZXJhY2NlcHRhbmNlJyxcbiAgICAndXNlci1hY2NlcHRhbmNlJyxcbiAgICAndXNlci1hY2NlcHRhbmNlLXRlc3RpbmcnXG4gIF0sXG4gIHN0YWdpbmc6IFtcbiAgICAnc3RnJyxcbiAgICAnc3RhZ2UnLFxuICAgICdwZXJmJyxcbiAgICAncGVyZm9ybWFuY2UnLFxuICAgICdwcmVwcm9kJyxcbiAgICAncHJlLXByb2QnXG4gIF0sXG4gIHByb2R1Y3Rpb246IFtcbiAgICAncHJkJyxcbiAgICAncHJvZCdcbiAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWxpYXNlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvYWxpYXNlcy5qcyIsImltcG9ydCBtYXBwaW5ncyBmcm9tICcuL21hcHBpbmdzJztcblxuY29uc3Qgc3BlY2lhbHMgPSAvW15cXHdcXHNdL2dpO1xuY29uc3QgcHJvcHMgPSBPYmplY3RcbiAgLmtleXMobWFwcGluZ3MpXG4gIC5tYXAoa2V5ID0+ICh7W2tleS50b1VwcGVyQ2FzZSgpLnJlcGxhY2Uoc3BlY2lhbHMsICdfJyldOiBtYXBwaW5nc1trZXldfSkpO1xuXG5jb25zdCBjb25zdGFudHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5wcm9wcyk7XG5cbmNvbnN0YW50cy5GQUxMQkFDSyA9IG1hcHBpbmdzLnByb2R1Y3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY29uc3RhbnRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==