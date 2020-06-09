(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ActionSearchTestWidget"] = factory();
	else
		root["ActionSearchTestWidget"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "index.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpActionSearchTestWidget"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpActionSearchTestWidget"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "dd63");
/******/ })
/************************************************************************/
/******/ ({

/***/ "03d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e4b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "03dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3732");
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment_vue__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment_vue__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0446":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("da06");
var Iterators = __webpack_require__("5bb7");
var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "047a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("19c5");
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex_vue__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex_vue__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "07d9":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("a0d5");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "083f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "0a1e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("5428");
var definePropertyModule = __webpack_require__("abdf");
var wellKnownSymbol = __webpack_require__("7d53");
var DESCRIPTORS = __webpack_require__("d4cb");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "0a6e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("f3b8");
var $ = __webpack_require__("6b1d");
var DESCRIPTORS = __webpack_require__("d4cb");
var USE_NATIVE_URL = __webpack_require__("5e39");
var global = __webpack_require__("f498");
var defineProperties = __webpack_require__("b99b");
var redefine = __webpack_require__("b8ba");
var anInstance = __webpack_require__("4cce");
var has = __webpack_require__("f1a7");
var assign = __webpack_require__("174d");
var arrayFrom = __webpack_require__("ccae");
var codeAt = __webpack_require__("b7fb").codeAt;
var toASCII = __webpack_require__("2dd8");
var setToStringTag = __webpack_require__("fa46");
var URLSearchParamsModule = __webpack_require__("2abb");
var InternalStateModule = __webpack_require__("cdcd");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "0b38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6de");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2d6d");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8f0b");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("75a4");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("16d1");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f8a5");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fa8c");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ce37");









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "0c47":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("c91c");
var enumBugKeys = __webpack_require__("b17e");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "0d9f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("b8ba");
var anObject = __webpack_require__("157c");
var fails = __webpack_require__("72df");
var flags = __webpack_require__("abfd");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "0df8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $every = __webpack_require__("d054").every;
var arrayMethodIsStrict = __webpack_require__("7f8a");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "0e39":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("f1a7");
var toObject = __webpack_require__("37d1");
var sharedKey = __webpack_require__("332c");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("802e");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "0e4b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aed7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("4b9152c0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0e93":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "0ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "0edb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9942");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("22f16730", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "130d":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "137d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".feedback-text[data-v-36b9899c]{padding:1em 2em 1em 2em}.feedback[data-v-36b9899c]{background-color:#f5f5f5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "14d0":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "157c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "16d1":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var DESCRIPTORS = __webpack_require__("d4cb");
var ownKeys = __webpack_require__("a03e");
var toIndexedObject = __webpack_require__("378c");
var getOwnPropertyDescriptorModule = __webpack_require__("185a");
var createProperty = __webpack_require__("dac6");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "16d15":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var objectDefinePropertyModule = __webpack_require__("abdf");
var regExpFlags = __webpack_require__("abfd");
var UNSUPPORTED_Y = __webpack_require__("2f6a").UNSUPPORTED_Y;

// `RegExp.prototype.flags` getter
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });
}


/***/ }),

/***/ "174d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("d4cb");
var fails = __webpack_require__("72df");
var objectKeys = __webpack_require__("0c47");
var getOwnPropertySymbolsModule = __webpack_require__("2402");
var propertyIsEnumerableModule = __webpack_require__("e129");
var toObject = __webpack_require__("37d1");
var IndexedObject = __webpack_require__("83a6");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "185a":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var propertyIsEnumerableModule = __webpack_require__("e129");
var createPropertyDescriptor = __webpack_require__("9618");
var toIndexedObject = __webpack_require__("378c");
var toPrimitive = __webpack_require__("083f");
var has = __webpack_require__("f1a7");
var IE8_DOM_DEFINE = __webpack_require__("7c3f");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "189b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var wellKnownSymbol = __webpack_require__("7d53");
var V8_VERSION = __webpack_require__("4fed");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "194e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $forEach = __webpack_require__("d054").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "19c5":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"deleted":"Deleted","draft":"New","rejected":"Rejected","published":"Published","showing":"showing","to":"to","of":"of","filters":"Filters","search":"Search","action":"Action","actor":"Actor","viewAction":"View Action"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "1ae5":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;__webpack_require__("d6de");

__webpack_require__("8d0f");

__webpack_require__("68b8");

__webpack_require__("d86f");

__webpack_require__("beb4");

__webpack_require__("9531");

__webpack_require__("33ef");

__webpack_require__("2169");

__webpack_require__("b257");

__webpack_require__("868d");

__webpack_require__("ef1f");

__webpack_require__("26d3");

__webpack_require__("2aa5");

__webpack_require__("0d9f");

__webpack_require__("f3b8");

__webpack_require__("58d3");

__webpack_require__("32f5");

__webpack_require__("6708");

__webpack_require__("4a20");

__webpack_require__("3d5d");

__webpack_require__("f271");

__webpack_require__("5ecb");

__webpack_require__("5a6a");

__webpack_require__("8b83");

__webpack_require__("596a");

__webpack_require__("ba92");

__webpack_require__("4258");

__webpack_require__("5d84");

__webpack_require__("ffd0");

__webpack_require__("1dc1");

__webpack_require__("523f");

__webpack_require__("829e");

__webpack_require__("194e");

__webpack_require__("69a7");

__webpack_require__("655c");

__webpack_require__("4a04");

__webpack_require__("f28a");

__webpack_require__("d0d3");

__webpack_require__("d9d9");

__webpack_require__("7de7");

__webpack_require__("53fc");

__webpack_require__("8b79");

__webpack_require__("e890");

__webpack_require__("56c2");

__webpack_require__("3c4c");

__webpack_require__("9e77");

__webpack_require__("7846");

__webpack_require__("cecc");

__webpack_require__("d9ce");

__webpack_require__("918c");

__webpack_require__("258f");

var _typeof2 = __webpack_require__("4f46");

/*!
    localForage -- Offline Storage, Improved
    Version 1.7.3
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function (f) {
  if (( false ? undefined : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var g; }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (_dereq_, module, exports) {
      (function (global) {
        'use strict';

        var Mutation = global.MutationObserver || global.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global.document.createTextNode('');
            observer.observe(element, {
              characterData: true
            });

            scheduleDrain = function scheduleDrain() {
              element.data = called = ++called % 2;
            };
          } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
            var channel = new global.MessageChannel();
            channel.port1.onmessage = nextTick;

            scheduleDrain = function scheduleDrain() {
              channel.port2.postMessage(0);
            };
          } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
            scheduleDrain = function scheduleDrain() {
              // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
              // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
              var scriptEl = global.document.createElement('script');

              scriptEl.onreadystatechange = function () {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };

              global.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function scheduleDrain() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = []; //named nextTick for less confusing stack traces

        function nextTick() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;

          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;

            while (++i < len) {
              oldQueue[i]();
            }

            len = queue.length;
          }

          draining = false;
        }

        module.exports = immediate;

        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    2: [function (_dereq_, module, exports) {
      'use strict';

      var immediate = _dereq_(1);
      /* istanbul ignore next */


      function INTERNAL() {}

      var handlers = {};
      var REJECTED = ['REJECTED'];
      var FULFILLED = ['FULFILLED'];
      var PENDING = ['PENDING'];
      module.exports = Promise;

      function Promise(resolver) {
        if (typeof resolver !== 'function') {
          throw new TypeError('resolver must be a function');
        }

        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;

        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }

      Promise.prototype["catch"] = function (onRejected) {
        return this.then(null, onRejected);
      };

      Promise.prototype.then = function (onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function' && this.state === FULFILLED || typeof onRejected !== 'function' && this.state === REJECTED) {
          return this;
        }

        var promise = new this.constructor(INTERNAL);

        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }

        return promise;
      };

      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;

        if (typeof onFulfilled === 'function') {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }

        if (typeof onRejected === 'function') {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }

      QueueItem.prototype.callFulfilled = function (value) {
        handlers.resolve(this.promise, value);
      };

      QueueItem.prototype.otherCallFulfilled = function (value) {
        unwrap(this.promise, this.onFulfilled, value);
      };

      QueueItem.prototype.callRejected = function (value) {
        handlers.reject(this.promise, value);
      };

      QueueItem.prototype.otherCallRejected = function (value) {
        unwrap(this.promise, this.onRejected, value);
      };

      function unwrap(promise, func, value) {
        immediate(function () {
          var returnValue;

          try {
            returnValue = func(value);
          } catch (e) {
            return handlers.reject(promise, e);
          }

          if (returnValue === promise) {
            handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }

      handlers.resolve = function (self, value) {
        var result = tryCatch(getThen, value);

        if (result.status === 'error') {
          return handlers.reject(self, result.value);
        }

        var thenable = result.value;

        if (thenable) {
          safelyResolveThenable(self, thenable);
        } else {
          self.state = FULFILLED;
          self.outcome = value;
          var i = -1;
          var len = self.queue.length;

          while (++i < len) {
            self.queue[i].callFulfilled(value);
          }
        }

        return self;
      };

      handlers.reject = function (self, error) {
        self.state = REJECTED;
        self.outcome = error;
        var i = -1;
        var len = self.queue.length;

        while (++i < len) {
          self.queue[i].callRejected(error);
        }

        return self;
      };

      function getThen(obj) {
        // Make sure we only access the accessor once as required by the spec
        var then = obj && obj.then;

        if (obj && (_typeof2(obj) === 'object' || typeof obj === 'function') && typeof then === 'function') {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }

      function safelyResolveThenable(self, thenable) {
        // Either fulfill, reject or reject with error
        var called = false;

        function onError(value) {
          if (called) {
            return;
          }

          called = true;
          handlers.reject(self, value);
        }

        function onSuccess(value) {
          if (called) {
            return;
          }

          called = true;
          handlers.resolve(self, value);
        }

        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }

        var result = tryCatch(tryToUnwrap);

        if (result.status === 'error') {
          onError(result.value);
        }
      }

      function tryCatch(func, value) {
        var out = {};

        try {
          out.value = func(value);
          out.status = 'success';
        } catch (e) {
          out.status = 'error';
          out.value = e;
        }

        return out;
      }

      Promise.resolve = resolve;

      function resolve(value) {
        if (value instanceof this) {
          return value;
        }

        return handlers.resolve(new this(INTERNAL), value);
      }

      Promise.reject = reject;

      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }

      Promise.all = all;

      function all(iterable) {
        var self = this;

        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
          return this.reject(new TypeError('must be an array'));
        }

        var len = iterable.length;
        var called = false;

        if (!len) {
          return this.resolve([]);
        }

        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);

        while (++i < len) {
          allResolver(iterable[i], i);
        }

        return promise;

        function allResolver(value, i) {
          self.resolve(value).then(resolveFromAll, function (error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });

          function resolveFromAll(outValue) {
            values[i] = outValue;

            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }

      Promise.race = race;

      function race(iterable) {
        var self = this;

        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
          return this.reject(new TypeError('must be an array'));
        }

        var len = iterable.length;
        var called = false;

        if (!len) {
          return this.resolve([]);
        }

        var i = -1;
        var promise = new this(INTERNAL);

        while (++i < len) {
          resolver(iterable[i]);
        }

        return promise;

        function resolver(value) {
          self.resolve(value).then(function (response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function (error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, {
      "1": 1
    }],
    3: [function (_dereq_, module, exports) {
      (function (global) {
        'use strict';

        if (typeof global.Promise !== 'function') {
          global.Promise = _dereq_(2);
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "2": 2
    }],
    4: [function (_dereq_, module, exports) {
      'use strict';

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function getIDB() {
        /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
        try {
          if (typeof indexedDB !== 'undefined') {
            return indexedDB;
          }

          if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
          }

          if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
          }

          if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
          }

          if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
          }
        } catch (e) {
          return;
        }
      }

      var idb = getIDB();

      function isIndexedDBValid() {
        try {
          // Initialize IndexedDB; fall back to vendor-prefixed versions
          // if needed.
          if (!idb) {
            return false;
          } // We mimic PouchDB here;
          //
          // We test for openDatabase because IE Mobile identifies itself
          // as Safari. Oh the lulz...


          var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1; // Safari <10.1 does not meet our requirements for IDB support (#5572)
          // since Safari 10.1 shipped with fetch, we can use that to detect it

          return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange !== 'undefined';
        } catch (e) {
          return false;
        }
      } // Abstracts constructing a Blob object, so it also works in older
      // browsers that don't support the native Blob constructor. (i.e.
      // old QtWebKit versions, at least).
      // Abstracts constructing a Blob object, so it also works in older
      // browsers that don't support the native Blob constructor. (i.e.
      // old QtWebKit versions, at least).


      function createBlob(parts, properties) {
        /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
        parts = parts || [];
        properties = properties || {};

        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }

          var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();

          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }

          return builder.getBlob(properties.type);
        }
      } // This is CommonJS because lie is an external dependency, so Rollup
      // can just ignore it.


      if (typeof Promise === 'undefined') {
        // In the "nopromises" build this will just throw if you don't have
        // a global promise object, but it would throw anyway later.
        _dereq_(3);
      }

      var Promise$1 = Promise;

      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function (result) {
            callback(null, result);
          }, function (error) {
            callback(error);
          });
        }
      }

      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === 'function') {
          promise.then(callback);
        }

        if (typeof errorCallback === 'function') {
          promise["catch"](errorCallback);
        }
      }

      function normalizeKey(key) {
        // Cast the key to a string, as that's all we can set as a key.
        if (typeof key !== 'string') {
          console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        return key;
      }

      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
          return arguments[arguments.length - 1];
        }
      } // Some code originally from async_storage.js in
      // [Gaia](https://github.com/mozilla-b2g/gaia).


      var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString; // Transaction Modes

      var READ_ONLY = 'readonly';
      var READ_WRITE = 'readwrite'; // Transform a binary string to an array buffer, because otherwise
      // weird stuff happens when you try to work with the binary string directly.
      // It is known.
      // From http://stackoverflow.com/questions/14967647/ (continues on next line)
      // encode-decode-image-with-base64-breaks-image (2013-04-21)

      function _binStringToArrayBuffer(bin) {
        var length = bin.length;
        var buf = new ArrayBuffer(length);
        var arr = new Uint8Array(buf);

        for (var i = 0; i < length; i++) {
          arr[i] = bin.charCodeAt(i);
        }

        return buf;
      } //
      // Blobs are not supported in all versions of IndexedDB, notably
      // Chrome <37 and Android <5. In those versions, storing a blob will throw.
      //
      // Various other blob bugs exist in Chrome v37-42 (inclusive).
      // Detecting them is expensive and confusing to users, and Chrome 37-42
      // is at very low usage worldwide, so we do a hacky userAgent check instead.
      //
      // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
      // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
      // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
      //
      // Code borrowed from PouchDB. See:
      // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
      //


      function _checkBlobSupportWithoutCaching(idb) {
        return new Promise$1(function (resolve) {
          var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob(['']);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

          txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
          };

          txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//); // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx

            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function () {
          return false; // error, so assume unsupported
        });
      }

      function _checkBlobSupport(idb) {
        if (typeof supportsBlobs === 'boolean') {
          return Promise$1.resolve(supportsBlobs);
        }

        return _checkBlobSupportWithoutCaching(idb).then(function (value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }

      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name]; // Create a deferred object representing the current database operation.

        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function (resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        }); // Enqueue the deferred operation.

        dbContext.deferredOperations.push(deferredOperation); // Chain its promise to the database readiness.

        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
          });
        }
      }

      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

        var deferredOperation = dbContext.deferredOperations.pop(); // Resolve its promise (which is part of the database readiness
        // chain of promises).

        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }

      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

        var deferredOperation = dbContext.deferredOperations.pop(); // Reject its promise (which is part of the database readiness
        // chain of promises).

        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }

      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function (resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);

              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }

          var dbArgs = [dbInfo.name];

          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }

          var openreq = idb.open.apply(idb, dbArgs);

          if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
              var db = openreq.result;

              try {
                db.createObjectStore(dbInfo.storeName);

                if (e.oldVersion <= 1) {
                  // Added when support for blob shims was added
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === 'ConstraintError') {
                  console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }

          openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
          };

          openreq.onsuccess = function () {
            resolve(openreq.result);

            _advanceReadiness(dbInfo);
          };
        });
      }

      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }

      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }

      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }

        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;

        if (isDowngrade) {
          // If the version is not the default one
          // then warn for impossible downgrade.
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
          } // Align the versions to prevent errors.


          dbInfo.version = dbInfo.db.version;
        }

        if (isUpgrade || isNewStore) {
          // If the store is new then increment the version (if needed).
          // This will trigger an "upgradeneeded" event which is required
          // for creating a store.
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;

            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }

          return true;
        }

        return false;
      } // encode a blob for indexeddb engines that don't support blobs


      function _encodeBlob(blob) {
        return new Promise$1(function (resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;

          reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };

          reader.readAsBinaryString(blob);
        });
      } // decode an encoded blob


      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));

        return createBlob([arrayBuff], {
          type: encodedBlob.type
        });
      } // is this one of our fancy encoded blobs?


      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      } // Specialize the default `ready()` function by making it dependent
      // on the current database operations. Thus, the driver will be actually
      // ready when it's been initialized (default) *and* there are no pending
      // operations on the database (initiated by some other instances).


      function _fullyReady(callback) {
        var self = this;

        var promise = self._initReady().then(function () {
          var dbContext = dbContexts[self._dbInfo.name];

          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
      } // Try to establish a new db connection to replace the
      // current one which is broken (i.e. experiencing
      // InvalidStateError while creating a transaction).


      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);

        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;

        for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];

          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();

            forage._dbInfo.db = null;
          }
        }

        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function (db) {
          dbInfo.db = db;

          if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
          }

          return db;
        }).then(function (db) {
          // store the latest db reference
          // in case the db was upgraded
          dbInfo.db = dbContext.db = db;

          for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
          }
        })["catch"](function (err) {
          _rejectReadiness(dbInfo, err);

          throw err;
        });
      } // FF doesn't like Promises (micro-tasks) and IDDB store operations,
      // so we have to do it with callbacks


      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === undefined) {
          retries = 1;
        }

        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
              if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                // increase the db version, to create the new ObjectStore
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                } // Reopen the database for upgrading.


                return _getUpgradedConnection(dbInfo);
              }
            }).then(function () {
              return _tryReconnect(dbInfo).then(function () {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }

          callback(err);
        }
      }

      function createDbContext() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      } // Open the IndexedDB database (automatically creates one if one didn't
      // previously exist), using any options set in the config.


      function _initStorage(options) {
        var self = this;
        var dbInfo = {
          db: null
        };

        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        } // Get the current context of the database;


        var dbContext = dbContexts[dbInfo.name]; // ...or create a new context.

        if (!dbContext) {
          dbContext = createDbContext(); // Register the new context in the global container.

          dbContexts[dbInfo.name] = dbContext;
        } // Register itself as a running localForage in the current context.


        dbContext.forages.push(self); // Replace the default `ready()` function with the specialized one.

        if (!self._initReady) {
          self._initReady = self.ready;
          self.ready = _fullyReady;
        } // Create an array of initialization states of the related localForages.


        var initPromises = [];

        function ignoreErrors() {
          // Don't handle errors here,
          // just makes sure related localForages aren't pending.
          return Promise$1.resolve();
        }

        for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];

          if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        } // Take a snapshot of the related localForages.


        var forages = dbContext.forages.slice(0); // Initialize the connection process only when
        // all the related localForages aren't pending.

        return Promise$1.all(initPromises).then(function () {
          dbInfo.db = dbContext.db; // Get the connection or open a new one without upgrade.

          return _getOriginalConnection(dbInfo);
        }).then(function (db) {
          dbInfo.db = db;

          if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
          }

          return db;
        }).then(function (db) {
          dbInfo.db = dbContext.db = db;
          self._dbInfo = dbInfo; // Share the final connection amongst related localForages.

          for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];

            if (forage !== self) {
              // Self is already up-to-date.
              forage._dbInfo.db = dbInfo.db;
              forage._dbInfo.version = dbInfo.version;
            }
          }
        });
      }

      function getItem(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var req = store.get(key);

                req.onsuccess = function () {
                  var value = req.result;

                  if (value === undefined) {
                    value = null;
                  }

                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }

                  resolve(value);
                };

                req.onerror = function () {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      } // Iterate over all items stored in database.


      function iterate(iterator, callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var req = store.openCursor();
                var iterationNumber = 1;

                req.onsuccess = function () {
                  var cursor = req.result;

                  if (cursor) {
                    var value = cursor.value;

                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }

                    var result = iterator(value, cursor.key, iterationNumber++); // when the iterator callback retuns any
                    // (non-`undefined`) value, then we stop
                    // the iteration immediately

                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };

                req.onerror = function () {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function setItem(key, value, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          var dbInfo;
          self.ready().then(function () {
            dbInfo = self._dbInfo;

            if (toString.call(value) === '[object Blob]') {
              return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                if (blobSupport) {
                  return value;
                }

                return _encodeBlob(value);
              });
            }

            return value;
          }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName); // The reason we don't _save_ null is because IE 10 does
                // not support saving the `null` type in IndexedDB. How
                // ironic, given the bug below!
                // See: https://github.com/mozilla/localForage/issues/161

                if (value === null) {
                  value = undefined;
                }

                var req = store.put(value, key);

                transaction.oncomplete = function () {
                  // Cast to undefined so the value passed to
                  // callback/promise is the same as what one would get out
                  // of `getItem()` later. This leads to some weirdness
                  // (setItem('foo', undefined) will return `null`), but
                  // it's not my fault localStorage is our baseline and that
                  // it's weird.
                  if (value === undefined) {
                    value = null;
                  }

                  resolve(value);
                };

                transaction.onabort = transaction.onerror = function () {
                  var err = req.error ? req.error : req.transaction.error;
                  reject(err);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function removeItem(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName); // We use a Grunt task to make this safe for IE and some
                // versions of Android (including those used by Cordova).
                // Normally IE won't like `.delete()` and will insist on
                // using `['delete']()`, but we have a build step that
                // fixes this for us now.

                var req = store["delete"](key);

                transaction.oncomplete = function () {
                  resolve();
                };

                transaction.onerror = function () {
                  reject(req.error);
                }; // The request will be also be aborted if we've exceeded our storage
                // space.


                transaction.onabort = function () {
                  var err = req.error ? req.error : req.transaction.error;
                  reject(err);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function clear(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var req = store.clear();

                transaction.oncomplete = function () {
                  resolve();
                };

                transaction.onabort = transaction.onerror = function () {
                  var err = req.error ? req.error : req.transaction.error;
                  reject(err);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function length(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var req = store.count();

                req.onsuccess = function () {
                  resolve(req.result);
                };

                req.onerror = function () {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function key(n, callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          if (n < 0) {
            resolve(null);
            return;
          }

          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var advanced = false;
                var req = store.openCursor();

                req.onsuccess = function () {
                  var cursor = req.result;

                  if (!cursor) {
                    // this means there weren't enough keys
                    resolve(null);
                    return;
                  }

                  if (n === 0) {
                    // We have the first key, return it if that's what they
                    // wanted.
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      // Otherwise, ask the cursor to skip ahead n
                      // records.
                      advanced = true;
                      cursor.advance(n);
                    } else {
                      // When we get here, we've got the nth key.
                      resolve(cursor.key);
                    }
                  }
                };

                req.onerror = function () {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function keys(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
              if (err) {
                return reject(err);
              }

              try {
                var store = transaction.objectStore(self._dbInfo.storeName);
                var req = store.openCursor();
                var keys = [];

                req.onsuccess = function () {
                  var cursor = req.result;

                  if (!cursor) {
                    resolve(keys);
                    return;
                  }

                  keys.push(cursor.key);
                  cursor["continue"]();
                };

                req.onerror = function () {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== 'function' && options || {};

        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }

        var self = this;
        var promise;

        if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
        } else {
          var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;

            for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
            }

            return db;
          });

          if (!options.storeName) {
            promise = dbPromise.then(function (db) {
              _deferReadiness(options);

              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();

              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
              }

              var dropDBPromise = new Promise$1(function (resolve, reject) {
                var req = idb.deleteDatabase(options.name);

                req.onerror = req.onblocked = function (err) {
                  var db = req.result;

                  if (db) {
                    db.close();
                  }

                  reject(err);
                };

                req.onsuccess = function () {
                  var db = req.result;

                  if (db) {
                    db.close();
                  }

                  resolve(db);
                };
              });
              return dropDBPromise.then(function (db) {
                dbContext.db = db;

                for (var i = 0; i < forages.length; i++) {
                  var _forage = forages[i];

                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function (err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function (db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }

              var newVersion = db.version + 1;

              _deferReadiness(options);

              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();

              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }

              var dropObjectPromise = new Promise$1(function (resolve, reject) {
                var req = idb.open(options.name, newVersion);

                req.onerror = function (err) {
                  var db = req.result;
                  db.close();
                  reject(err);
                };

                req.onupgradeneeded = function () {
                  var db = req.result;
                  db.deleteObjectStore(options.storeName);
                };

                req.onsuccess = function () {
                  var db = req.result;
                  db.close();
                  resolve(db);
                };
              });
              return dropObjectPromise.then(function (db) {
                dbContext.db = db;

                for (var j = 0; j < forages.length; j++) {
                  var _forage2 = forages[j];
                  _forage2._dbInfo.db = db;

                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function (err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                throw err;
              });
            });
          }
        }

        executeCallback(promise, callback);
        return promise;
      }

      var asyncStorage = {
        _driver: 'asyncStorage',
        _initStorage: _initStorage,
        _support: isIndexedDBValid(),
        iterate: iterate,
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem,
        clear: clear,
        length: length,
        key: key,
        keys: keys,
        dropInstance: dropInstance
      };

      function isWebSQLValid() {
        return typeof openDatabase === 'function';
      } // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
      // it to Base64, so this is how we store it to prevent very strange errors with less
      // verbose ways of binary <-> string data storage.


      var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var BLOB_TYPE_PREFIX = '~~local_forage_type~';
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = '__lfsc__:';
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length; // OMG the serializations!

      var TYPE_ARRAYBUFFER = 'arbf';
      var TYPE_BLOB = 'blob';
      var TYPE_INT8ARRAY = 'si08';
      var TYPE_UINT8ARRAY = 'ui08';
      var TYPE_UINT8CLAMPEDARRAY = 'uic8';
      var TYPE_INT16ARRAY = 'si16';
      var TYPE_INT32ARRAY = 'si32';
      var TYPE_UINT16ARRAY = 'ur16';
      var TYPE_UINT32ARRAY = 'ui32';
      var TYPE_FLOAT32ARRAY = 'fl32';
      var TYPE_FLOAT64ARRAY = 'fl64';
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;

      function stringToBuffer(serializedString) {
        // Fill the string into a ArrayBuffer.
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i;
        var p = 0;
        var encoded1, encoded2, encoded3, encoded4;

        if (serializedString[serializedString.length - 1] === '=') {
          bufferLength--;

          if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
          }
        }

        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);

        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
          /*jslint bitwise: true */

          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }

        return buffer;
      } // Converts a buffer to a string to store, serialized, in the backend
      // storage library.


      function bufferToString(buffer) {
        // base64-arraybuffer
        var bytes = new Uint8Array(buffer);
        var base64String = '';
        var i;

        for (i = 0; i < bytes.length; i += 3) {
          /*jslint bitwise: true */
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }

        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + '=';
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + '==';
        }

        return base64String;
      } // Serialize a value, afterwards executing a callback (which usually
      // instructs the `setItem()` callback/promise to be executed). This is how
      // we store binary data with localStorage.


      function serialize(value, callback) {
        var valueType = '';

        if (value) {
          valueType = toString$1.call(value);
        } // Cannot use `value instanceof ArrayBuffer` or such here, as these
        // checks fail when running the tests using casper.js...
        //
        // TODO: See why those tests fail and use a better solution.


        if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
          // Convert binary arrays to a string and prefix the string with
          // a special marker.
          var buffer;
          var marker = SERIALIZED_MARKER;

          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error('Failed to get type for BinaryArray'));
            }
          }

          callback(marker + bufferToString(buffer));
        } else if (valueType === '[object Blob]') {
          // Conver the blob to a binaryArray and then to a string.
          var fileReader = new FileReader();

          fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };

          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e);
          }
        }
      } // Deserialize data we've inserted into a value column/field. We place
      // special markers into our strings to mark them as encoded; this isn't
      // as nice as a meta field, but it's the only sane thing we can do whilst
      // keeping localStorage support intact.
      //
      // Oftentimes this will just deserialize JSON content, but if we have a
      // special marker (SERIALIZED_MARKER, defined above), we will extract
      // some kind of arraybuffer/binary data/typed array out of the string.


      function deserialize(value) {
        // If we haven't marked this string as being specially serialized (i.e.
        // something other than serialized JSON), we can just return it and be
        // done with it.
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        } // The following code deals with deserializing some kind of Blob or
        // TypedArray. First we separate out the type of data we're dealing
        // with from the data itself.


        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType; // Backwards-compatible blob type serialization strategy.
        // DBs created with older versions of localForage will simply not have the blob type.

        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }

        var buffer = stringToBuffer(serializedString); // Return the right type based on the code/type set during
        // serialization.

        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;

          case TYPE_BLOB:
            return createBlob([buffer], {
              type: blobType
            });

          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);

          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);

          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);

          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);

          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);

          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);

          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);

          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);

          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);

          default:
            throw new Error('Unkown type: ' + type);
        }
      }

      var localforageSerializer = {
        serialize: serialize,
        deserialize: deserialize,
        stringToBuffer: stringToBuffer,
        bufferToString: bufferToString
      };
      /*
       * Includes code from:
       *
       * base64-arraybuffer
       * https://github.com/niklasvh/base64-arraybuffer
       *
       * Copyright (c) 2012 Niklas von Hertzen
       * Licensed under the MIT license.
       */

      function createDbTable(t, dbInfo, callback, errorCallback) {
        t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
      } // Open the WebSQL database (automatically creates one if one didn't
      // previously exist), using any options set in the config.


      function _initStorage$1(options) {
        var self = this;
        var dbInfo = {
          db: null
        };

        if (options) {
          for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
          }
        }

        var dbInfoPromise = new Promise$1(function (resolve, reject) {
          // Open the database; the openDatabase API will automatically
          // create it for us if it doesn't exist.
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
            return reject(e);
          } // Create our key/value table if it doesn't exist.


          dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
              self._dbInfo = dbInfo;
              resolve();
            }, function (t, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }

      function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
        t.executeSql(sqlStatement, args, callback, function (t, error) {
          if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
              if (!results.rows.length) {
                // if the table is missing (was deleted)
                // re-create it table and retry
                createDbTable(t, dbInfo, function () {
                  t.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t, error);
          }
        }, errorCallback);
      }

      function getItem$1(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                var result = results.rows.length ? results.rows.item(0).value : null; // Check to see if this is serialized content we need to
                // unpack.

                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }

                resolve(result);
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function iterate$1(iterator, callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                var rows = results.rows;
                var length = rows.length;

                for (var i = 0; i < length; i++) {
                  var item = rows.item(i);
                  var result = item.value; // Check to see if this is serialized content
                  // we need to unpack.

                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }

                  result = iterator(result, item.key, i + 1); // void(0) prevents problems with redefinition
                  // of `undefined`.

                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }

                resolve();
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function _setItem(key, value, callback, retriesLeft) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
              value = null;
            } // Save the original value to pass to the callback.


            var originalValue = value;
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                    resolve(originalValue);
                  }, function (t, error) {
                    reject(error);
                  });
                }, function (sqlError) {
                  // The transaction failed; check
                  // to see if it's a quota error.
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    // We reject the callback outright for now, but
                    // it's worth trying to re-run the transaction.
                    // Even if the user accepts the prompt to use
                    // more storage on Safari, this error will
                    // be called.
                    //
                    // Try to re-run the transaction.
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                      return;
                    }

                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function setItem$1(key, value, callback) {
        return _setItem.apply(this, [key, value, callback, 1]);
      }

      function removeItem$1(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                resolve();
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      } // Deletes every item in the table.
      // TODO: Find out if this resets the AUTO_INCREMENT number.


      function clear$1(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                resolve();
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      } // Does a simple `COUNT(key)` to get the number of items stored in
      // localForage.


      function length$1(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              // Ahhh, SQL makes this one soooooo easy.
              tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      } // Return the key located at key index X; essentially gets the key from a
      // `WHERE id = ?`. This is the most efficient way I can think to implement
      // this rarely-used (in my experience) part of the API, but it can seem
      // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
      // the ID of each key will change every time it's updated. Perhaps a stored
      // procedure for the `setItem()` SQL would solve this problem?
      // TODO: Don't change ID on `setItem()`.


      function key$1(n, callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }

      function keys$1(callback) {
        var self = this;
        var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
              tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                var keys = [];

                for (var i = 0; i < results.rows.length; i++) {
                  keys.push(results.rows.item(i).key);
                }

                resolve(keys);
              }, function (t, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      } // https://www.w3.org/TR/webdatabase/#databases
      // > There is no way to enumerate or delete the databases available for an origin from this API.


      function getAllStoreNames(db) {
        return new Promise$1(function (resolve, reject) {
          db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
              var storeNames = [];

              for (var i = 0; i < results.rows.length; i++) {
                storeNames.push(results.rows.item(i).name);
              }

              resolve({
                db: db,
                storeNames: storeNames
              });
            }, function (t, error) {
              reject(error);
            });
          }, function (sqlError) {
            reject(sqlError);
          });
        });
      }

      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== 'function' && options || {};

        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }

        var self = this;
        var promise;

        if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
        } else {
          promise = new Promise$1(function (resolve) {
            var db;

            if (options.name === currentConfig.name) {
              // use the db reference of the current instance
              db = self._dbInfo.db;
            } else {
              db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
              // drop all database tables
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db: db,
                storeNames: [options.storeName]
              });
            }
          }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
              operationInfo.db.transaction(function (t) {
                function dropTable(storeName) {
                  return new Promise$1(function (resolve, reject) {
                    t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                      resolve();
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                }

                var operations = [];

                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                  operations.push(dropTable(operationInfo.storeNames[i]));
                }

                Promise$1.all(operations).then(function () {
                  resolve();
                })["catch"](function (e) {
                  reject(e);
                });
              }, function (sqlError) {
                reject(sqlError);
              });
            });
          });
        }

        executeCallback(promise, callback);
        return promise;
      }

      var webSQLStorage = {
        _driver: 'webSQLStorage',
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };

      function isLocalStorageValid() {
        try {
          return typeof localStorage !== 'undefined' && 'setItem' in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch (e) {
          return false;
        }
      }

      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + '/';

        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + '/';
        }

        return keyPrefix;
      } // Check if localStorage throws when saving an item


      function checkIfLocalStorageThrows() {
        var localStorageTestKey = '_localforage_support_test';

        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e) {
          return true;
        }
      } // Check if localStorage is usable and allows to save an item
      // This method checks if localStorage is usable in Safari Private Browsing
      // mode, or in any other case where the available quota for localStorage
      // is 0 and there wasn't any saved items yet.


      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      } // Config the localStorage backend, using options set in the config.


      function _initStorage$2(options) {
        var self = this;
        var dbInfo = {};

        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }

        dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }

        self._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      } // Remove all keys from the datastore, effectively destroying all data in
      // the app's key/value store!


      function clear$2(callback) {
        var self = this;
        var promise = self.ready().then(function () {
          var keyPrefix = self._dbInfo.keyPrefix;

          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      } // Retrieve an item from the store. Unlike the original async_storage
      // library in Gaia, we don't modify return values at all. If a key's value
      // is `undefined`, we pass that value to the callback function.


      function getItem$2(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key); // If a result was found, parse it from the serialized
          // string into a JS object. If result isn't truthy, the key
          // is likely undefined and we'll pass it straight to the
          // callback.

          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }

          return result;
        });
        executeCallback(promise, callback);
        return promise;
      } // Iterate over all items in the store.


      function iterate$2(iterator, callback) {
        var self = this;
        var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length = localStorage.length; // We use a dedicated iterator instead of the `i` variable below
          // so other keys we fetch in localStorage aren't counted in
          // the `iterationNumber` argument passed to the `iterate()`
          // callback.
          //
          // See: github.com/mozilla/localForage/pull/435#discussion_r38061530

          var iterationNumber = 1;

          for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) !== 0) {
              continue;
            }

            var value = localStorage.getItem(key); // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.

            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      } // Same as localStorage's key() method, except takes a callback.


      function key$2(n, callback) {
        var self = this;
        var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var result;

          try {
            result = localStorage.key(n);
          } catch (error) {
            result = null;
          } // Remove the prefix from the key, if a key is found.


          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }

          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }

      function keys$2(callback) {
        var self = this;
        var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var length = localStorage.length;
          var keys = [];

          for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);

            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }

          return keys;
        });
        executeCallback(promise, callback);
        return promise;
      } // Supply the number of keys in the datastore to the callback function.


      function length$2(callback) {
        var self = this;
        var promise = self.keys().then(function (keys) {
          return keys.length;
        });
        executeCallback(promise, callback);
        return promise;
      } // Remove an item from the store, nice and simple.


      function removeItem$2(key, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key);
        });
        executeCallback(promise, callback);
        return promise;
      } // Set a key's value and run an optional callback once the value is set.
      // Unlike Gaia's implementation, the callback function is passed the value,
      // in case you want to operate on that value only after you're sure it
      // saved, or something like that.


      function setItem$2(key, value, callback) {
        var self = this;
        key = normalizeKey(key);
        var promise = self.ready().then(function () {
          // Convert undefined values to null.
          // https://github.com/mozilla/localForage/pull/42
          if (value === undefined) {
            value = null;
          } // Save the original value to pass to the callback.


          var originalValue = value;
          return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key, value);
                  resolve(originalValue);
                } catch (e) {
                  // localStorage capacity exceeded.
                  // TODO: Make this a specific error/event.
                  if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                    reject(e);
                  }

                  reject(e);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }

      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== 'function' && options || {};

        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }

        var self = this;
        var promise;

        if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
        } else {
          promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
              resolve(options.name + '/');
            } else {
              resolve(_getKeyPrefix(options, self._defaultConfig));
            }
          }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key = localStorage.key(i);

              if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
              }
            }
          });
        }

        executeCallback(promise, callback);
        return promise;
      }

      var localStorageWrapper = {
        _driver: 'localStorageWrapper',
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };

      var sameValue = function sameValue(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      };

      var includes = function includes(array, searchElement) {
        var len = array.length;
        var i = 0;

        while (i < len) {
          if (sameValue(array[i], searchElement)) {
            return true;
          }

          i++;
        }

        return false;
      };

      var isArray = Array.isArray || function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      }; // Drivers are stored here when `defineDriver()` is called.
      // They are shared across all instances of localForage.


      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ['dropInstance'];
      var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: '',
        driver: DefaultDriverOrder.slice(),
        name: 'localforage',
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: 'keyvaluepairs',
        version: 1.0
      };

      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function () {
          var _args = arguments;
          return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }

      function extend() {
        for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];

          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }

        return arguments[0];
      }

      var LocalForage = function () {
        function LocalForage(options) {
          _classCallCheck(this, LocalForage);

          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;

              if (!DefinedDrivers[driverName]) {
                // we don't need to wait for the promise,
                // since the default drivers can be defined
                // in a blocking manner
                this.defineDriver(driver);
              }
            }
          }

          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;

          this._wrapLibraryMethodsWithReady();

          this.setDriver(this._config.driver)["catch"](function () {});
        } // Set any config values for localForage; can be called anytime before
        // the first API call (e.g. `getItem`, `setItem`).
        // We loop through options so we don't overwrite existing config
        // values.


        LocalForage.prototype.config = function config(options) {
          // If the options argument is an object, we use it to set values.
          // Otherwise, we return either a specified config value or all
          // config values.
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
              return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
              if (i === 'storeName') {
                options[i] = options[i].replace(/\W/g, '_');
              }

              if (i === 'version' && typeof options[i] !== 'number') {
                return new Error('Database version must be a number.');
              }

              this._config[i] = options[i];
            } // after all config options are set and
            // the driver option is used, try setting it


            if ('driver' in options && options.driver) {
              return this.setDriver(this._config.driver);
            }

            return true;
          } else if (typeof options === 'string') {
            return this._config[options];
          } else {
            return this._config;
          }
        }; // Used to define a custom driver, shared across all instances of
        // localForage.


        LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function (resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver'); // A driver name should be defined and not overlap with the
              // library-defined, default drivers.

              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }

              var driverMethods = LibraryMethods.concat('_initStorage');

              for (var i = 0, len = driverMethods.length; i < len; i++) {
                var driverMethodName = driverMethods[i]; // when the property is there,
                // it should be a method even when optional

                var isRequired = !includes(OptionalDriverMethods, driverMethodName);

                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                  reject(complianceError);
                  return;
                }
              }

              var configureMissingMethods = function configureMissingMethods() {
                var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                  return function () {
                    var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                    var promise = Promise$1.reject(error);
                    executeCallback(promise, arguments[arguments.length - 1]);
                    return promise;
                  };
                };

                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];

                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };

              configureMissingMethods();

              var setDriverSupport = function setDriverSupport(support) {
                if (DefinedDrivers[driverName]) {
                  console.info('Redefining LocalForage driver: ' + driverName);
                }

                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support; // don't use a then, so that we can define
                // drivers that have simple _support methods
                // in a blocking manner

                resolve();
              };

              if ('_support' in driverObject) {
                if (driverObject._support && typeof driverObject._support === 'function') {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e) {
              reject(e);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };

        LocalForage.prototype.driver = function driver() {
          return this._driver || null;
        };

        LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };

        LocalForage.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };

        LocalForage.prototype.ready = function ready(callback) {
          var self = this;

          var promise = self._driverSet.then(function () {
            if (self._ready === null) {
              self._ready = self._initDriver();
            }

            return self._ready;
          });

          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };

        LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self = this;

          if (!isArray(drivers)) {
            drivers = [drivers];
          }

          var supportedDrivers = this._getSupportedDrivers(drivers);

          function setDriverToConfig() {
            self._config.driver = self.driver();
          }

          function extendSelfWithDriver(driver) {
            self._extend(driver);

            setDriverToConfig();
            self._ready = self._initStorage(self._config);
            return self._ready;
          }

          function initDriver(supportedDrivers) {
            return function () {
              var currentDriverIndex = 0;

              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers.length) {
                  var driverName = supportedDrivers[currentDriverIndex];
                  currentDriverIndex++;
                  self._dbInfo = null;
                  self._ready = null;
                  return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }

                setDriverToConfig();
                var error = new Error('No available storage method found.');
                self._driverSet = Promise$1.reject(error);
                return self._driverSet;
              }

              return driverPromiseLoop();
            };
          } // There might be a driver initialization in progress
          // so wait for it to finish in order to avoid a possible
          // race condition to set _dbInfo


          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;
            return self.getDriver(driverName).then(function (driver) {
              self._driver = driver._driver;
              setDriverToConfig();

              self._wrapLibraryMethodsWithReady();

              self._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };

        LocalForage.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };

        LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };

        LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];

          for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];

            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }

          return supportedDrivers;
        };

        LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          // Add a stub for each driver API method that delays the call to the
          // corresponding driver method until localForage is ready. These stubs
          // will be replaced by the driver methods as soon as the driver is
          // loaded, so there is no performance impact.
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        };

        LocalForage.prototype.createInstance = function createInstance(options) {
          return new LocalForage(options);
        };

        return LocalForage;
      }(); // The actual localForage object that we expose as a module or via a
      // global. It's extended by pulling in one of our other libraries.


      var localforage_js = new LocalForage();
      module.exports = localforage_js;
    }, {
      "3": 3
    }]
  }, {}, [4])(4);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "1b53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e0318d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8cba");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e0318d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e0318d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e0318d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1c53":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pointer[data-v-376739eb]{cursor:pointer}.filter-nav[data-v-376739eb]{background-color:#f8f9fa}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1cef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8423");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("33ef");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("868d");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0d9f");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9446");







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "1d8a":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "1dc1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $filter = __webpack_require__("d054").filter;
var speciesConstructor = __webpack_require__("433a");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),

/***/ "1ee0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7d89");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("6743fe1c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1f5e":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("378c");
var toLength = __webpack_require__("b495");
var toAbsoluteIndex = __webpack_require__("9a0f");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "2007":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var assign = __webpack_require__("174d");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "2117":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("8697");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "2169":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var arrayBufferModule = __webpack_require__("cf50");
var setSpecies = __webpack_require__("0a1e");

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),

/***/ "2402":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2435":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var fails = __webpack_require__("72df");
var classof = __webpack_require__("6a61");
var bind = __webpack_require__("2117");
var html = __webpack_require__("9324");
var createElement = __webpack_require__("f2bf");
var IS_IOS = __webpack_require__("e03e");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2514":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "258f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var task = __webpack_require__("2435");

var FORCED = !global.setImmediate || !global.clearImmediate;

// http://w3c.github.io/setImmediate/
$({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  setImmediate: task.set,
  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  clearImmediate: task.clear
});


/***/ }),

/***/ "26d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var IS_PURE = __webpack_require__("0e93");
var global = __webpack_require__("f498");
var getBuiltIn = __webpack_require__("5428");
var NativePromise = __webpack_require__("2903");
var redefine = __webpack_require__("b8ba");
var redefineAll = __webpack_require__("b203");
var setToStringTag = __webpack_require__("fa46");
var setSpecies = __webpack_require__("0a1e");
var isObject = __webpack_require__("7526");
var aFunction = __webpack_require__("8697");
var anInstance = __webpack_require__("4cce");
var classof = __webpack_require__("6a61");
var inspectSource = __webpack_require__("df6f");
var iterate = __webpack_require__("b578");
var checkCorrectnessOfIteration = __webpack_require__("3211");
var speciesConstructor = __webpack_require__("433a");
var task = __webpack_require__("2435").set;
var microtask = __webpack_require__("8573");
var promiseResolve = __webpack_require__("9c36");
var hostReportErrors = __webpack_require__("422d");
var newPromiseCapabilityModule = __webpack_require__("881c");
var perform = __webpack_require__("42ba");
var InternalStateModule = __webpack_require__("cdcd");
var isForced = __webpack_require__("ebac");
var wellKnownSymbol = __webpack_require__("7d53");
var V8_VERSION = __webpack_require__("4fed");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "28eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $reduce = __webpack_require__("98f3").left;
var arrayMethodIsStrict = __webpack_require__("7f8a");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2903":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = global.Promise;


/***/ }),

/***/ "29cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("37d1");
var toAbsoluteIndex = __webpack_require__("9a0f");
var toLength = __webpack_require__("b495");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "2aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var exec = __webpack_require__("42c5");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "2abb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("9531");
var $ = __webpack_require__("6b1d");
var getBuiltIn = __webpack_require__("5428");
var USE_NATIVE_URL = __webpack_require__("5e39");
var redefine = __webpack_require__("b8ba");
var redefineAll = __webpack_require__("b203");
var setToStringTag = __webpack_require__("fa46");
var createIteratorConstructor = __webpack_require__("2e3f");
var InternalStateModule = __webpack_require__("cdcd");
var anInstance = __webpack_require__("4cce");
var hasOwn = __webpack_require__("f1a7");
var bind = __webpack_require__("2117");
var classof = __webpack_require__("da06");
var anObject = __webpack_require__("157c");
var isObject = __webpack_require__("7526");
var create = __webpack_require__("82e8");
var createPropertyDescriptor = __webpack_require__("9618");
var getIterator = __webpack_require__("3f5a");
var getIteratorMethod = __webpack_require__("0446");
var wellKnownSymbol = __webpack_require__("7d53");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "2ac2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".list[data-v-1e0318d9]{margin:60px 0 0 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2c93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var anObject = __webpack_require__("157c");
var requireObjectCoercible = __webpack_require__("730c");
var sameValue = __webpack_require__("14d0");
var regExpExec = __webpack_require__("df8c");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "2d4c":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var setPrototypeOf = __webpack_require__("c1a2");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "2d6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $filter = __webpack_require__("d054").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2dd7":
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__("e01a");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "2dd8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "2df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var createIteratorConstructor = __webpack_require__("2e3f");
var getPrototypeOf = __webpack_require__("0e39");
var setPrototypeOf = __webpack_require__("c1a2");
var setToStringTag = __webpack_require__("fa46");
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var wellKnownSymbol = __webpack_require__("7d53");
var IS_PURE = __webpack_require__("0e93");
var Iterators = __webpack_require__("5bb7");
var IteratorsCore = __webpack_require__("ff89");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "2e3f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ff89").IteratorPrototype;
var create = __webpack_require__("82e8");
var createPropertyDescriptor = __webpack_require__("9618");
var setToStringTag = __webpack_require__("fa46");
var Iterators = __webpack_require__("5bb7");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "2ea2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("8aef");
var collectionStrong = __webpack_require__("3ad5");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "2f6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("72df");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "30c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "30cf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("137d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("53e6ff20", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "31c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var DESCRIPTORS = __webpack_require__("d4cb");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("d328");
var ArrayBufferViewCore = __webpack_require__("aaf2");
var ArrayBufferModule = __webpack_require__("cf50");
var anInstance = __webpack_require__("4cce");
var createPropertyDescriptor = __webpack_require__("9618");
var createNonEnumerableProperty = __webpack_require__("5b12");
var toLength = __webpack_require__("b495");
var toIndex = __webpack_require__("ff5c");
var toOffset = __webpack_require__("2dd7");
var toPrimitive = __webpack_require__("083f");
var has = __webpack_require__("f1a7");
var classof = __webpack_require__("da06");
var isObject = __webpack_require__("7526");
var create = __webpack_require__("82e8");
var setPrototypeOf = __webpack_require__("c1a2");
var getOwnPropertyNames = __webpack_require__("65d0").f;
var typedArrayFrom = __webpack_require__("7d23");
var forEach = __webpack_require__("d054").forEach;
var setSpecies = __webpack_require__("0a1e");
var definePropertyModule = __webpack_require__("abdf");
var getOwnPropertyDescriptorModule = __webpack_require__("185a");
var InternalStateModule = __webpack_require__("cdcd");
var inheritIfRequired = __webpack_require__("8fa9");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "3211":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "32f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var anObject = __webpack_require__("157c");
var toObject = __webpack_require__("37d1");
var toLength = __webpack_require__("b495");
var toInteger = __webpack_require__("8bb2");
var requireObjectCoercible = __webpack_require__("730c");
var advanceStringIndex = __webpack_require__("e3f6");
var regExpExec = __webpack_require__("df8c");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "332c":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("4cdd");
var uid = __webpack_require__("1d8a");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "33ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var isObject = __webpack_require__("7526");
var isArray = __webpack_require__("c6de");
var toAbsoluteIndex = __webpack_require__("9a0f");
var toLength = __webpack_require__("b495");
var toIndexedObject = __webpack_require__("378c");
var createProperty = __webpack_require__("dac6");
var wellKnownSymbol = __webpack_require__("7d53");
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "3732":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"deleted":"Deleted","draft":"New","rejected":"Rejected","published":"Published","showing":"showing","to":"to","of":"of","filters":"Filters","search":"Search","action":"Action","actor":"Actor","viewAction":"View Action"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "378c":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("83a6");
var requireObjectCoercible = __webpack_require__("730c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "37d1":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("730c");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "396b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("85ef");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("737aadd8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3ad5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("abdf").f;
var create = __webpack_require__("82e8");
var redefineAll = __webpack_require__("b203");
var bind = __webpack_require__("2117");
var anInstance = __webpack_require__("4cce");
var iterate = __webpack_require__("b578");
var defineIterator = __webpack_require__("2df4");
var setSpecies = __webpack_require__("0a1e");
var DESCRIPTORS = __webpack_require__("d4cb");
var fastKey = __webpack_require__("e023").fastKey;
var InternalStateModule = __webpack_require__("cdcd");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "3b90":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#scbd-search[data-v-ef3896de]{position:relative;width:100%}.loading[data-v-ef3896de]{position:fixed;bottom:0;left:50%;background-color:#deb887}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $some = __webpack_require__("d054").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "3cec":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "3d5d":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Int8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "3e32":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "3e34":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var createNonEnumerableProperty = __webpack_require__("5b12");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "3e36":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = global;


/***/ }),

/***/ "3f5a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var getIteratorMethod = __webpack_require__("0446");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "4003":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://cdn.cbd.int/vue-multiselect@2.1.6/dist/vue-multiselect.min.css);"]);
// Module
exports.push([module.i, ".fix{padding:0 0 0 0;background-color:#ddd;border-radius:5px;border-color:transparent}.fix.is-invalid{border-color:#dc3545}.fix.is-invalid,.fix.is-valid{border-width:1px;border-style:solid}.fix.is-valid{border-color:#28a745}.option-image{max-height:30px}.filter-label{font-weight:bolder}.option-filter{padding-left:2em}.high-light{font-weight:900}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "405b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "422d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "4258":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $copyWithin = __webpack_require__("93ab");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "42ba":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "42c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("378c");
var toInteger = __webpack_require__("8bb2");
var toLength = __webpack_require__("b495");
var arrayMethodIsStrict = __webpack_require__("7f8a");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "42c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("26d3");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "42c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("abfd");
var stickyHelpers = __webpack_require__("2f6a");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "42c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_style_index_0_id_7be58bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b833");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_style_index_0_id_7be58bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_style_index_0_id_7be58bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_style_index_0_id_7be58bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "433a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var aFunction = __webpack_require__("8697");
var wellKnownSymbol = __webpack_require__("7d53");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "48e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllFiltersSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a40b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllFiltersSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllFiltersSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllFiltersSelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4a04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("f498");
var ArrayBufferViewCore = __webpack_require__("aaf2");
var ArrayIterators = __webpack_require__("9531");
var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),

/***/ "4a20":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Float64Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "4ba7":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__("d6de");

__webpack_require__("8d0f");

__webpack_require__("68b8");

__webpack_require__("d86f");

__webpack_require__("0df8");

__webpack_require__("2d6d");

__webpack_require__("841a");

__webpack_require__("8423");

__webpack_require__("beb4");

__webpack_require__("9531");

__webpack_require__("ef14");

__webpack_require__("cfce");

__webpack_require__("28eb");

__webpack_require__("33ef");

__webpack_require__("868d");

__webpack_require__("e94e");

__webpack_require__("75a4");

__webpack_require__("9396");

__webpack_require__("e68e");

__webpack_require__("f8a5");

__webpack_require__("2d4c");

__webpack_require__("ef1f");

__webpack_require__("88a1");

__webpack_require__("2aa5");

__webpack_require__("16d15");

__webpack_require__("0d9f");

__webpack_require__("f3b8");

__webpack_require__("32f5");

__webpack_require__("2c93");

__webpack_require__("62c8");

__webpack_require__("b55a");

__webpack_require__("918c");

var _typeof = __webpack_require__("4f46");

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/", e(e.s = 60);
  }([function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e, n) {
    var i = n(49)("wks"),
        r = n(30),
        o = n(0).Symbol,
        s = "function" == typeof o;
    (t.exports = function (t) {
      return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t));
    }).store = i;
  }, function (t, e, n) {
    var i = n(5);

    t.exports = function (t) {
      if (!i(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e, n) {
    var i = n(0),
        r = n(10),
        o = n(8),
        s = n(6),
        u = n(11),
        a = function a(t, e, n) {
      var l,
          c,
          f,
          p,
          h = t & a.F,
          d = t & a.G,
          v = t & a.S,
          g = t & a.P,
          y = t & a.B,
          m = d ? i : v ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
          b = d ? r : r[e] || (r[e] = {}),
          _ = b.prototype || (b.prototype = {});

      d && (n = e);

      for (l in n) {
        c = !h && m && void 0 !== m[l], f = (c ? m : n)[l], p = y && c ? u(f, i) : g && "function" == typeof f ? u(Function.call, f) : f, m && s(m, l, f, t & a.U), b[l] != f && o(b, l, p), g && _[l] != f && (_[l] = f);
      }
    };

    i.core = r, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
  }, function (t, e, n) {
    t.exports = !n(7)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    };
  }, function (t, e, n) {
    var i = n(0),
        r = n(8),
        o = n(12),
        s = n(30)("src"),
        u = Function.toString,
        a = ("" + u).split("toString");
    n(10).inspectSource = function (t) {
      return u.call(t);
    }, (t.exports = function (t, e, n, u) {
      var l = "function" == typeof n;
      l && (o(n, "name") || r(n, "name", e)), t[e] !== n && (l && (o(n, s) || r(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === i ? t[e] = n : u ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[s] || u.call(this);
    });
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var i = n(13),
        r = n(25);
    t.exports = n(4) ? function (t, e, n) {
      return i.f(t, e, r(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e) {
    var n = t.exports = {
      version: "2.5.7"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    var i = n(14);

    t.exports = function (t, e, n) {
      if (i(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, i) {
            return t.call(e, n, i);
          };

        case 3:
          return function (n, i, r) {
            return t.call(e, n, i, r);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var i = n(2),
        r = n(41),
        o = n(29),
        s = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty : function (t, e, n) {
      if (i(t), e = o(e, !0), i(n), r) try {
        return s(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e) {
    t.exports = {};
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(7);

    t.exports = function (t, e) {
      return !!t && i(function () {
        e ? t.call(null, function () {}, 1) : t.call(null);
      });
    };
  }, function (t, e, n) {
    var i = n(23),
        r = n(16);

    t.exports = function (t) {
      return i(r(t));
    };
  }, function (t, e, n) {
    var i = n(53),
        r = Math.min;

    t.exports = function (t) {
      return t > 0 ? r(i(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    var i = n(11),
        r = n(23),
        o = n(28),
        s = n(19),
        u = n(64);

    t.exports = function (t, e) {
      var n = 1 == t,
          a = 2 == t,
          l = 3 == t,
          c = 4 == t,
          f = 6 == t,
          p = 5 == t || f,
          h = e || u;
      return function (e, u, d) {
        for (var v, g, y = o(e), m = r(y), b = i(u, d, 3), _ = s(m.length), x = 0, w = n ? h(e, _) : a ? h(e, 0) : void 0; _ > x; x++) {
          if ((p || x in m) && (v = m[x], g = b(v, x, y), t)) if (n) w[x] = g;else if (g) switch (t) {
            case 3:
              return !0;

            case 5:
              return v;

            case 6:
              return x;

            case 2:
              w.push(v);
          } else if (c) return !1;
        }

        return f ? -1 : l || c ? c : w;
      };
    };
  }, function (t, e, n) {
    var i = n(5),
        r = n(0).document,
        o = i(r) && i(r.createElement);

    t.exports = function (t) {
      return o ? r.createElement(t) : {};
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var i = n(9);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == i(t) ? t.split("") : Object(t);
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e, n) {
    var i = n(13).f,
        r = n(12),
        o = n(1)("toStringTag");

    t.exports = function (t, e, n) {
      t && !r(t = n ? t : t.prototype, o) && i(t, o, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var i = n(49)("keys"),
        r = n(30);

    t.exports = function (t) {
      return i[t] || (i[t] = r(t));
    };
  }, function (t, e, n) {
    var i = n(16);

    t.exports = function (t) {
      return Object(i(t));
    };
  }, function (t, e, n) {
    var i = n(5);

    t.exports = function (t, e) {
      if (!i(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e) {
    var n = 0,
        i = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(0),
        r = n(12),
        o = n(9),
        s = n(67),
        u = n(29),
        a = n(7),
        l = n(77).f,
        c = n(45).f,
        f = n(13).f,
        p = n(51).trim,
        _h = i.Number,
        d = _h,
        v = _h.prototype,
        g = "Number" == o(n(44)(v)),
        y = ("trim" in String.prototype),
        m = function m(t) {
      var e = u(t, !1);

      if ("string" == typeof e && e.length > 2) {
        e = y ? e.trim() : p(e, 3);
        var n,
            i,
            r,
            o = e.charCodeAt(0);

        if (43 === o || 45 === o) {
          if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === o) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              i = 2, r = 49;
              break;

            case 79:
            case 111:
              i = 8, r = 55;
              break;

            default:
              return +e;
          }

          for (var s, a = e.slice(2), l = 0, c = a.length; l < c; l++) {
            if ((s = a.charCodeAt(l)) < 48 || s > r) return NaN;
          }

          return parseInt(a, i);
        }
      }

      return +e;
    };

    if (!_h(" 0o1") || !_h("0b1") || _h("+0x1")) {
      _h = function h(t) {
        var e = arguments.length < 1 ? 0 : t,
            n = this;
        return n instanceof _h && (g ? a(function () {
          v.valueOf.call(n);
        }) : "Number" != o(n)) ? s(new d(m(e)), n, _h) : m(e);
      };

      for (var b, _ = n(4) ? l(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; _.length > x; x++) {
        r(d, b = _[x]) && !r(_h, b) && f(_h, b, c(d, b));
      }

      _h.prototype = v, v.constructor = _h, n(6)(i, "Number", _h);
    }
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return 0 !== t && (!(!Array.isArray(t) || 0 !== t.length) || !t);
    }

    function r(t) {
      return function () {
        return !t.apply(void 0, arguments);
      };
    }

    function o(t, e) {
      return void 0 === t && (t = "undefined"), null === t && (t = "null"), !1 === t && (t = "false"), -1 !== t.toString().toLowerCase().indexOf(e.trim());
    }

    function s(t, e, n, i) {
      return t.filter(function (t) {
        return o(i(t, n), e);
      });
    }

    function u(t) {
      return t.filter(function (t) {
        return !t.$isLabel;
      });
    }

    function a(t, e) {
      return function (n) {
        return n.reduce(function (n, i) {
          return i[t] && i[t].length ? (n.push({
            $groupLabel: i[e],
            $isLabel: !0
          }), n.concat(i[t])) : n;
        }, []);
      };
    }

    function l(t, e, i, r, o) {
      return function (u) {
        return u.map(function (u) {
          var a;
          if (!u[i]) return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
          var l = s(u[i], t, e, o);
          return l.length ? (a = {}, n.i(d.a)(a, r, u[r]), n.i(d.a)(a, i, l), a) : [];
        });
      };
    }

    var c = n(59),
        f = n(54),
        p = (n.n(f), n(95)),
        h = (n.n(p), n(31)),
        d = (n.n(h), n(58)),
        v = n(91),
        g = (n.n(v), n(98)),
        y = (n.n(g), n(92)),
        m = (n.n(y), n(88)),
        b = (n.n(m), n(97)),
        _ = (n.n(b), n(89)),
        x = (n.n(_), n(96)),
        w = (n.n(x), n(93)),
        S = (n.n(w), n(90)),
        O = (n.n(S), function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }

      return function (t) {
        return e.reduce(function (t, e) {
          return e(t);
        }, t);
      };
    });

    e.a = {
      data: function data() {
        return {
          search: "",
          isOpen: !1,
          preferredOpenDirection: "below",
          optimizedHeight: this.maxHeight
        };
      },
      props: {
        internalSearch: {
          type: Boolean,
          default: !0
        },
        options: {
          type: Array,
          required: !0
        },
        multiple: {
          type: Boolean,
          default: !1
        },
        value: {
          type: null,
          default: function _default() {
            return [];
          }
        },
        trackBy: {
          type: String
        },
        label: {
          type: String
        },
        searchable: {
          type: Boolean,
          default: !0
        },
        clearOnSelect: {
          type: Boolean,
          default: !0
        },
        hideSelected: {
          type: Boolean,
          default: !1
        },
        placeholder: {
          type: String,
          default: "Select option"
        },
        allowEmpty: {
          type: Boolean,
          default: !0
        },
        resetAfter: {
          type: Boolean,
          default: !1
        },
        closeOnSelect: {
          type: Boolean,
          default: !0
        },
        customLabel: {
          type: Function,
          default: function _default(t, e) {
            return i(t) ? "" : e ? t[e] : t;
          }
        },
        taggable: {
          type: Boolean,
          default: !1
        },
        tagPlaceholder: {
          type: String,
          default: "Press enter to create a tag"
        },
        tagPosition: {
          type: String,
          default: "top"
        },
        max: {
          type: [Number, Boolean],
          default: !1
        },
        id: {
          default: null
        },
        optionsLimit: {
          type: Number,
          default: 1e3
        },
        groupValues: {
          type: String
        },
        groupLabel: {
          type: String
        },
        groupSelect: {
          type: Boolean,
          default: !1
        },
        blockKeys: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        preserveSearch: {
          type: Boolean,
          default: !1
        },
        preselectFirst: {
          type: Boolean,
          default: !1
        }
      },
      mounted: function mounted() {
        !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
      },
      computed: {
        internalValue: function internalValue() {
          return this.value || 0 === this.value ? Array.isArray(this.value) ? this.value : [this.value] : [];
        },
        filteredOptions: function filteredOptions() {
          var t = this.search || "",
              e = t.toLowerCase().trim(),
              n = this.options.concat();
          return n = this.internalSearch ? this.groupValues ? this.filterAndFlat(n, e, this.label) : s(n, e, this.label, this.customLabel) : this.groupValues ? a(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter(r(this.isSelected)) : n, this.taggable && e.length && !this.isExistingOption(e) && ("bottom" === this.tagPosition ? n.push({
            isTag: !0,
            label: t
          }) : n.unshift({
            isTag: !0,
            label: t
          })), n.slice(0, this.optionsLimit);
        },
        valueKeys: function valueKeys() {
          var t = this;
          return this.trackBy ? this.internalValue.map(function (e) {
            return e[t.trackBy];
          }) : this.internalValue;
        },
        optionKeys: function optionKeys() {
          var t = this;
          return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map(function (e) {
            return t.customLabel(e, t.label).toString().toLowerCase();
          });
        },
        currentOptionLabel: function currentOptionLabel() {
          return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
        }
      },
      watch: {
        internalValue: function internalValue() {
          this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("input", this.multiple ? [] : null));
        },
        search: function search() {
          this.$emit("search-change", this.search, this.id);
        }
      },
      methods: {
        getValue: function getValue() {
          return this.multiple ? this.internalValue : 0 === this.internalValue.length ? null : this.internalValue[0];
        },
        filterAndFlat: function filterAndFlat(t, e, n) {
          return O(l(e, n, this.groupValues, this.groupLabel, this.customLabel), a(this.groupValues, this.groupLabel))(t);
        },
        flatAndStrip: function flatAndStrip(t) {
          return O(a(this.groupValues, this.groupLabel), u)(t);
        },
        updateSearch: function updateSearch(t) {
          this.search = t;
        },
        isExistingOption: function isExistingOption(t) {
          return !!this.options && this.optionKeys.indexOf(t) > -1;
        },
        isSelected: function isSelected(t) {
          var e = this.trackBy ? t[this.trackBy] : t;
          return this.valueKeys.indexOf(e) > -1;
        },
        isOptionDisabled: function isOptionDisabled(t) {
          return !!t.$isDisabled;
        },
        getOptionLabel: function getOptionLabel(t) {
          if (i(t)) return "";
          if (t.isTag) return t.label;
          if (t.$isLabel) return t.$groupLabel;
          var e = this.customLabel(t, this.label);
          return i(e) ? "" : e;
        },
        select: function select(t, e) {
          if (t.$isLabel && this.groupSelect) return void this.selectGroup(t);

          if (!(-1 !== this.blockKeys.indexOf(e) || this.disabled || t.$isDisabled || t.$isLabel) && (!this.max || !this.multiple || this.internalValue.length !== this.max) && ("Tab" !== e || this.pointerDirty)) {
            if (t.isTag) this.$emit("tag", t.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();else {
              if (this.isSelected(t)) return void ("Tab" !== e && this.removeElement(t));
              this.$emit("select", t, this.id), this.multiple ? this.$emit("input", this.internalValue.concat([t]), this.id) : this.$emit("input", t, this.id), this.clearOnSelect && (this.search = "");
            }
            this.closeOnSelect && this.deactivate();
          }
        },
        selectGroup: function selectGroup(t) {
          var e = this,
              n = this.options.find(function (n) {
            return n[e.groupLabel] === t.$groupLabel;
          });
          if (n) if (this.wholeGroupSelected(n)) {
            this.$emit("remove", n[this.groupValues], this.id);
            var i = this.internalValue.filter(function (t) {
              return -1 === n[e.groupValues].indexOf(t);
            });
            this.$emit("input", i, this.id);
          } else {
            var r = n[this.groupValues].filter(function (t) {
              return !(e.isOptionDisabled(t) || e.isSelected(t));
            });
            this.$emit("select", r, this.id), this.$emit("input", this.internalValue.concat(r), this.id);
          }
        },
        wholeGroupSelected: function wholeGroupSelected(t) {
          var e = this;
          return t[this.groupValues].every(function (t) {
            return e.isSelected(t) || e.isOptionDisabled(t);
          });
        },
        wholeGroupDisabled: function wholeGroupDisabled(t) {
          return t[this.groupValues].every(this.isOptionDisabled);
        },
        removeElement: function removeElement(t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

          if (!this.disabled && !t.$isDisabled) {
            if (!this.allowEmpty && this.internalValue.length <= 1) return void this.deactivate();
            var i = "object" === n.i(c.a)(t) ? this.valueKeys.indexOf(t[this.trackBy]) : this.valueKeys.indexOf(t);

            if (this.$emit("remove", t, this.id), this.multiple) {
              var r = this.internalValue.slice(0, i).concat(this.internalValue.slice(i + 1));
              this.$emit("input", r, this.id);
            } else this.$emit("input", null, this.id);

            this.closeOnSelect && e && this.deactivate();
          }
        },
        removeLastElement: function removeLastElement() {
          -1 === this.blockKeys.indexOf("Delete") && 0 === this.search.length && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
        },
        activate: function activate() {
          var t = this;
          this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && 0 === this.pointer && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.$nextTick(function () {
            return t.$refs.search.focus();
          })) : this.$el.focus(), this.$emit("open", this.id));
        },
        deactivate: function deactivate() {
          this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search.blur() : this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
        },
        toggle: function toggle() {
          this.isOpen ? this.deactivate() : this.activate();
        },
        adjustPosition: function adjustPosition() {
          if ("undefined" != typeof window) {
            var t = this.$el.getBoundingClientRect().top,
                e = window.innerHeight - this.$el.getBoundingClientRect().bottom;
            e > this.maxHeight || e > t || "below" === this.openDirection || "bottom" === this.openDirection ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(e - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(t - 40, this.maxHeight));
          }
        }
      }
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(54),
        r = (n.n(i), n(31));
    n.n(r);
    e.a = {
      data: function data() {
        return {
          pointer: 0,
          pointerDirty: !1
        };
      },
      props: {
        showPointer: {
          type: Boolean,
          default: !0
        },
        optionHeight: {
          type: Number,
          default: 40
        }
      },
      computed: {
        pointerPosition: function pointerPosition() {
          return this.pointer * this.optionHeight;
        },
        visibleElements: function visibleElements() {
          return this.optimizedHeight / this.optionHeight;
        }
      },
      watch: {
        filteredOptions: function filteredOptions() {
          this.pointerAdjust();
        },
        isOpen: function isOpen() {
          this.pointerDirty = !1;
        }
      },
      methods: {
        optionHighlight: function optionHighlight(t, e) {
          return {
            "multiselect__option--highlight": t === this.pointer && this.showPointer,
            "multiselect__option--selected": this.isSelected(e)
          };
        },
        groupHighlight: function groupHighlight(t, e) {
          var n = this;
          if (!this.groupSelect) return ["multiselect__option--group", "multiselect__option--disabled"];
          var i = this.options.find(function (t) {
            return t[n.groupLabel] === e.$groupLabel;
          });
          return i && !this.wholeGroupDisabled(i) ? ["multiselect__option--group", {
            "multiselect__option--highlight": t === this.pointer && this.showPointer
          }, {
            "multiselect__option--group-selected": this.wholeGroupSelected(i)
          }] : "multiselect__option--disabled";
        },
        addPointerElement: function addPointerElement() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Enter",
              e = t.key;
          this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
        },
        pointerForward: function pointerForward() {
          this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
        },
        pointerBackward: function pointerBackward() {
          this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
        },
        pointerReset: function pointerReset() {
          this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
        },
        pointerAdjust: function pointerAdjust() {
          this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
        },
        pointerSet: function pointerSet(t) {
          this.pointer = t, this.pointerDirty = !0;
        }
      }
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(36),
        r = n(74),
        o = n(15),
        s = n(18);
    t.exports = n(72)(Array, "Array", function (t, e) {
      this._t = s(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]]);
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
  }, function (t, e, n) {
    "use strict";

    var i = n(31),
        r = (n.n(i), n(32)),
        o = n(33);
    e.a = {
      name: "vue-multiselect",
      mixins: [r.a, o.a],
      props: {
        name: {
          type: String,
          default: ""
        },
        selectLabel: {
          type: String,
          default: "Press enter to select"
        },
        selectGroupLabel: {
          type: String,
          default: "Press enter to select group"
        },
        selectedLabel: {
          type: String,
          default: "Selected"
        },
        deselectLabel: {
          type: String,
          default: "Press enter to remove"
        },
        deselectGroupLabel: {
          type: String,
          default: "Press enter to deselect group"
        },
        showLabels: {
          type: Boolean,
          default: !0
        },
        limit: {
          type: Number,
          default: 99999
        },
        maxHeight: {
          type: Number,
          default: 300
        },
        limitText: {
          type: Function,
          default: function _default(t) {
            return "and ".concat(t, " more");
          }
        },
        loading: {
          type: Boolean,
          default: !1
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        openDirection: {
          type: String,
          default: ""
        },
        showNoOptions: {
          type: Boolean,
          default: !0
        },
        showNoResults: {
          type: Boolean,
          default: !0
        },
        tabindex: {
          type: Number,
          default: 0
        }
      },
      computed: {
        isSingleLabelVisible: function isSingleLabelVisible() {
          return (this.singleValue || 0 === this.singleValue) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
        },
        isPlaceholderVisible: function isPlaceholderVisible() {
          return !(this.internalValue.length || this.searchable && this.isOpen);
        },
        visibleValues: function visibleValues() {
          return this.multiple ? this.internalValue.slice(0, this.limit) : [];
        },
        singleValue: function singleValue() {
          return this.internalValue[0];
        },
        deselectLabelText: function deselectLabelText() {
          return this.showLabels ? this.deselectLabel : "";
        },
        deselectGroupLabelText: function deselectGroupLabelText() {
          return this.showLabels ? this.deselectGroupLabel : "";
        },
        selectLabelText: function selectLabelText() {
          return this.showLabels ? this.selectLabel : "";
        },
        selectGroupLabelText: function selectGroupLabelText() {
          return this.showLabels ? this.selectGroupLabel : "";
        },
        selectedLabelText: function selectedLabelText() {
          return this.showLabels ? this.selectedLabel : "";
        },
        inputStyle: function inputStyle() {
          if (this.searchable || this.multiple && this.value && this.value.length) return this.isOpen ? {
            width: "100%"
          } : {
            width: "0",
            position: "absolute",
            padding: "0"
          };
        },
        contentStyle: function contentStyle() {
          return this.options.length ? {
            display: "inline-block"
          } : {
            display: "block"
          };
        },
        isAbove: function isAbove() {
          return "above" === this.openDirection || "top" === this.openDirection || "below" !== this.openDirection && "bottom" !== this.openDirection && "above" === this.preferredOpenDirection;
        },
        showSearchInput: function showSearchInput() {
          return this.searchable && (!this.hasSingleSelectedSlot || !this.visibleSingleValue && 0 !== this.visibleSingleValue || this.isOpen);
        }
      }
    };
  }, function (t, e, n) {
    var i = n(1)("unscopables"),
        r = Array.prototype;
    void 0 == r[i] && n(8)(r, i, {}), t.exports = function (t) {
      r[i][t] = !0;
    };
  }, function (t, e, n) {
    var i = n(18),
        r = n(19),
        o = n(85);

    t.exports = function (t) {
      return function (e, n, s) {
        var u,
            a = i(e),
            l = r(a.length),
            c = o(s, l);

        if (t && n != n) {
          for (; l > c;) {
            if ((u = a[c++]) != u) return !0;
          }
        } else for (; l > c; c++) {
          if ((t || c in a) && a[c] === n) return t || c || 0;
        }

        return !t && -1;
      };
    };
  }, function (t, e, n) {
    var i = n(9),
        r = n(1)("toStringTag"),
        o = "Arguments" == i(function () {
      return arguments;
    }()),
        s = function s(t, e) {
      try {
        return t[e];
      } catch (t) {}
    };

    t.exports = function (t) {
      var e, n, u;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (u = i(e)) && "function" == typeof e.callee ? "Arguments" : u;
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(2);

    t.exports = function () {
      var t = i(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  }, function (t, e, n) {
    var i = n(0).document;
    t.exports = i && i.documentElement;
  }, function (t, e, n) {
    t.exports = !n(4) && !n(7)(function () {
      return 7 != Object.defineProperty(n(21)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var i = n(9);

    t.exports = Array.isArray || function (t) {
      return "Array" == i(t);
    };
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      var e, n;
      this.promise = new t(function (t, i) {
        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
        e = t, n = i;
      }), this.resolve = r(e), this.reject = r(n);
    }

    var r = n(14);

    t.exports.f = function (t) {
      return new i(t);
    };
  }, function (t, e, n) {
    var i = n(2),
        r = n(76),
        o = n(22),
        s = n(27)("IE_PROTO"),
        u = function u() {},
        _a = function a() {
      var t,
          e = n(21)("iframe"),
          i = o.length;

      for (e.style.display = "none", n(40).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), _a = t.F; i--;) {
        delete _a.prototype[o[i]];
      }

      return _a();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (u.prototype = i(t), n = new u(), u.prototype = null, n[s] = t) : n = _a(), void 0 === e ? n : r(n, e);
    };
  }, function (t, e, n) {
    var i = n(79),
        r = n(25),
        o = n(18),
        s = n(29),
        u = n(12),
        a = n(41),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(4) ? l : function (t, e) {
      if (t = o(t), e = s(e, !0), a) try {
        return l(t, e);
      } catch (t) {}
      if (u(t, e)) return r(!i.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    var i = n(12),
        r = n(18),
        o = n(37)(!1),
        s = n(27)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          u = r(t),
          a = 0,
          l = [];

      for (n in u) {
        n != s && i(u, n) && l.push(n);
      }

      for (; e.length > a;) {
        i(u, n = e[a++]) && (~o(l, n) || l.push(n));
      }

      return l;
    };
  }, function (t, e, n) {
    var i = n(46),
        r = n(22);

    t.exports = Object.keys || function (t) {
      return i(t, r);
    };
  }, function (t, e, n) {
    var i = n(2),
        r = n(5),
        o = n(43);

    t.exports = function (t, e) {
      if (i(t), r(e) && e.constructor === t) return e;
      var n = o.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  }, function (t, e, n) {
    var i = n(10),
        r = n(0),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: i.version,
      mode: n(24) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var i = n(2),
        r = n(14),
        o = n(1)("species");

    t.exports = function (t, e) {
      var n,
          s = i(t).constructor;
      return void 0 === s || void 0 == (n = i(s)[o]) ? e : r(n);
    };
  }, function (t, e, n) {
    var i = n(3),
        r = n(16),
        o = n(7),
        s = n(84),
        u = "[" + s + "]",
        a = "​",
        l = RegExp("^" + u + u + "*"),
        c = RegExp(u + u + "*$"),
        f = function f(t, e, n) {
      var r = {},
          u = o(function () {
        return !!s[t]() || a[t]() != a;
      }),
          l = r[t] = u ? e(p) : s[t];
      n && (r[n] = l), i(i.P + i.F * u, "String", r);
    },
        p = f.trim = function (t, e) {
      return t = String(r(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t;
    };

    t.exports = f;
  }, function (t, e, n) {
    var i,
        r,
        o,
        s = n(11),
        u = n(68),
        a = n(40),
        l = n(21),
        c = n(0),
        f = c.process,
        p = c.setImmediate,
        h = c.clearImmediate,
        d = c.MessageChannel,
        v = c.Dispatch,
        g = 0,
        y = {},
        m = function m() {
      var t = +this;

      if (y.hasOwnProperty(t)) {
        var e = y[t];
        delete y[t], e();
      }
    },
        b = function b(t) {
      m.call(t.data);
    };

    p && h || (p = function p(t) {
      for (var e = [], n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }

      return y[++g] = function () {
        u("function" == typeof t ? t : Function(t), e);
      }, i(g), g;
    }, h = function h(t) {
      delete y[t];
    }, "process" == n(9)(f) ? i = function i(t) {
      f.nextTick(s(m, t, 1));
    } : v && v.now ? i = function i(t) {
      v.now(s(m, t, 1));
    } : d ? (r = new d(), o = r.port2, r.port1.onmessage = b, i = s(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (i = function i(t) {
      c.postMessage(t + "", "*");
    }, c.addEventListener("message", b, !1)) : i = "onreadystatechange" in l("script") ? function (t) {
      a.appendChild(l("script")).onreadystatechange = function () {
        a.removeChild(this), m.call(t);
      };
    } : function (t) {
      setTimeout(s(m, t, 1), 0);
    }), t.exports = {
      set: p,
      clear: h
    };
  }, function (t, e) {
    var n = Math.ceil,
        i = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t);
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(20)(5),
        o = !0;
    "find" in [] && Array(1).find(function () {
      o = !1;
    }), i(i.P + i.F * o, "Array", {
      find: function find(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(36)("find");
  }, function (t, e, n) {
    "use strict";

    var i,
        r,
        o,
        s,
        u = n(24),
        a = n(0),
        l = n(11),
        c = n(38),
        f = n(3),
        p = n(5),
        h = n(14),
        d = n(61),
        v = n(66),
        g = n(50),
        y = n(52).set,
        m = n(75)(),
        b = n(43),
        _ = n(80),
        x = n(86),
        w = n(48),
        S = a.TypeError,
        O = a.process,
        L = O && O.versions,
        k = L && L.v8 || "",
        _P = a.Promise,
        T = "process" == c(O),
        V = function V() {},
        E = r = b.f,
        A = !!function () {
      try {
        var t = _P.resolve(1),
            e = (t.constructor = {})[n(1)("species")] = function (t) {
          t(V, V);
        };

        return (T || "function" == typeof PromiseRejectionEvent) && t.then(V) instanceof e && 0 !== k.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
      } catch (t) {}
    }(),
        C = function C(t) {
      var e;
      return !(!p(t) || "function" != typeof (e = t.then)) && e;
    },
        D = function D(t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        m(function () {
          for (var i = t._v, r = 1 == t._s, o = 0; n.length > o;) {
            !function (e) {
              var n,
                  o,
                  s,
                  u = r ? e.ok : e.fail,
                  a = e.resolve,
                  l = e.reject,
                  c = e.domain;

              try {
                u ? (r || (2 == t._h && $(t), t._h = 1), !0 === u ? n = i : (c && c.enter(), n = u(i), c && (c.exit(), s = !0)), n === e.promise ? l(S("Promise-chain cycle")) : (o = C(n)) ? o.call(n, a, l) : a(n)) : l(i);
              } catch (t) {
                c && !s && c.exit(), l(t);
              }
            }(n[o++]);
          }

          t._c = [], t._n = !1, e && !t._h && j(t);
        });
      }
    },
        j = function j(t) {
      y.call(a, function () {
        var e,
            n,
            i,
            r = t._v,
            o = N(t);
        if (o && (e = _(function () {
          T ? O.emit("unhandledRejection", r, t) : (n = a.onunhandledrejection) ? n({
            promise: t,
            reason: r
          }) : (i = a.console) && i.error && i.error("Unhandled promise rejection", r);
        }), t._h = T || N(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v;
      });
    },
        N = function N(t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    },
        $ = function $(t) {
      y.call(a, function () {
        var e;
        T ? O.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        });
      });
    },
        F = function F(t) {
      var e = this;
      e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), D(e, !0));
    },
        M = function M(t) {
      var e,
          n = this;

      if (!n._d) {
        n._d = !0, n = n._w || n;

        try {
          if (n === t) throw S("Promise can't be resolved itself");
          (e = C(t)) ? m(function () {
            var i = {
              _w: n,
              _d: !1
            };

            try {
              e.call(t, l(M, i, 1), l(F, i, 1));
            } catch (t) {
              F.call(i, t);
            }
          }) : (n._v = t, n._s = 1, D(n, !1));
        } catch (t) {
          F.call({
            _w: n,
            _d: !1
          }, t);
        }
      }
    };

    A || (_P = function P(t) {
      d(this, _P, "Promise", "_h"), h(t), i.call(this);

      try {
        t(l(M, this, 1), l(F, this, 1));
      } catch (t) {
        F.call(this, t);
      }
    }, i = function i(t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    }, i.prototype = n(81)(_P.prototype, {
      then: function then(t, e) {
        var n = E(g(this, _P));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), n.promise;
      },
      catch: function _catch(t) {
        return this.then(void 0, t);
      }
    }), o = function o() {
      var t = new i();
      this.promise = t, this.resolve = l(M, t, 1), this.reject = l(F, t, 1);
    }, b.f = E = function E(t) {
      return t === _P || t === s ? new o(t) : r(t);
    }), f(f.G + f.W + f.F * !A, {
      Promise: _P
    }), n(26)(_P, "Promise"), n(83)("Promise"), s = n(10).Promise, f(f.S + f.F * !A, "Promise", {
      reject: function reject(t) {
        var e = E(this);
        return (0, e.reject)(t), e.promise;
      }
    }), f(f.S + f.F * (u || !A), "Promise", {
      resolve: function resolve(t) {
        return w(u && this === s ? _P : this, t);
      }
    }), f(f.S + f.F * !(A && n(73)(function (t) {
      _P.all(t).catch(V);
    })), "Promise", {
      all: function all(t) {
        var e = this,
            n = E(e),
            i = n.resolve,
            r = n.reject,
            o = _(function () {
          var n = [],
              o = 0,
              s = 1;
          v(t, !1, function (t) {
            var u = o++,
                a = !1;
            n.push(void 0), s++, e.resolve(t).then(function (t) {
              a || (a = !0, n[u] = t, --s || i(n));
            }, r);
          }), --s || i(n);
        });

        return o.e && r(o.v), n.promise;
      },
      race: function race(t) {
        var e = this,
            n = E(e),
            i = n.reject,
            r = _(function () {
          v(t, !1, function (t) {
            e.resolve(t).then(n.resolve, i);
          });
        });

        return r.e && i(r.v), n.promise;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(10),
        o = n(0),
        s = n(50),
        u = n(48);
    i(i.P + i.R, "Promise", {
      finally: function _finally(t) {
        var e = s(this, r.Promise || o.Promise),
            n = "function" == typeof t;
        return this.then(n ? function (n) {
          return u(e, t()).then(function () {
            return n;
          });
        } : t, n ? function (n) {
          return u(e, t()).then(function () {
            throw n;
          });
        } : t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      n(99);
    }

    var r = n(35),
        o = n(101),
        s = n(100),
        u = i,
        a = s(r.a, o.a, !1, u, null, null);
    e.a = a.exports;
  }, function (t, e, n) {
    "use strict";

    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    e.a = i;
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function r(t) {
      return (r = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function (t) {
        return i(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t);
      })(t);
    }

    e.a = r;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(34),
        r = (n.n(i), n(55)),
        o = (n.n(r), n(56)),
        s = (n.n(o), n(57)),
        u = n(32),
        a = n(33);
    n.d(e, "Multiselect", function () {
      return s.a;
    }), n.d(e, "multiselectMixin", function () {
      return u.a;
    }), n.d(e, "pointerMixin", function () {
      return a.a;
    }), e.default = s.a;
  }, function (t, e) {
    t.exports = function (t, e, n, i) {
      if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
      return t;
    };
  }, function (t, e, n) {
    var i = n(14),
        r = n(28),
        o = n(23),
        s = n(19);

    t.exports = function (t, e, n, u, a) {
      i(e);
      var l = r(t),
          c = o(l),
          f = s(l.length),
          p = a ? f - 1 : 0,
          h = a ? -1 : 1;
      if (n < 2) for (;;) {
        if (p in c) {
          u = c[p], p += h;
          break;
        }

        if (p += h, a ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; a ? p >= 0 : f > p; p += h) {
        p in c && (u = e(u, c[p], p, l));
      }

      return u;
    };
  }, function (t, e, n) {
    var i = n(5),
        r = n(42),
        o = n(1)("species");

    t.exports = function (t) {
      var e;
      return r(t) && (e = t.constructor, "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e;
    };
  }, function (t, e, n) {
    var i = n(63);

    t.exports = function (t, e) {
      return new (i(t))(e);
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(8),
        r = n(6),
        o = n(7),
        s = n(16),
        u = n(1);

    t.exports = function (t, e, n) {
      var a = u(t),
          l = n(s, a, ""[t]),
          c = l[0],
          f = l[1];
      o(function () {
        var e = {};
        return e[a] = function () {
          return 7;
        }, 7 != ""[t](e);
      }) && (r(String.prototype, t, c), i(RegExp.prototype, a, 2 == e ? function (t, e) {
        return f.call(t, this, e);
      } : function (t) {
        return f.call(t, this);
      }));
    };
  }, function (t, e, n) {
    var i = n(11),
        r = n(70),
        o = n(69),
        s = n(2),
        u = n(19),
        a = n(87),
        l = {},
        c = {},
        e = t.exports = function (t, e, n, f, p) {
      var h,
          d,
          v,
          g,
          y = p ? function () {
        return t;
      } : a(t),
          m = i(n, f, e ? 2 : 1),
          b = 0;
      if ("function" != typeof y) throw TypeError(t + " is not iterable!");

      if (o(y)) {
        for (h = u(t.length); h > b; b++) {
          if ((g = e ? m(s(d = t[b])[0], d[1]) : m(t[b])) === l || g === c) return g;
        }
      } else for (v = y.call(t); !(d = v.next()).done;) {
        if ((g = r(v, m, d.value, e)) === l || g === c) return g;
      }
    };

    e.BREAK = l, e.RETURN = c;
  }, function (t, e, n) {
    var i = n(5),
        r = n(82).set;

    t.exports = function (t, e, n) {
      var o,
          s = e.constructor;
      return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(t, o), t;
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var i = void 0 === n;

      switch (e.length) {
        case 0:
          return i ? t() : t.call(n);

        case 1:
          return i ? t(e[0]) : t.call(n, e[0]);

        case 2:
          return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

        case 3:
          return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

        case 4:
          return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }

      return t.apply(n, e);
    };
  }, function (t, e, n) {
    var i = n(15),
        r = n(1)("iterator"),
        o = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || o[r] === t);
    };
  }, function (t, e, n) {
    var i = n(2);

    t.exports = function (t, e, n, r) {
      try {
        return r ? e(i(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw void 0 !== o && i(o.call(t)), e;
      }
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(44),
        r = n(25),
        o = n(26),
        s = {};
    n(8)(s, n(1)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = i(s, {
        next: r(1, n)
      }), o(t, e + " Iterator");
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(24),
        r = n(3),
        o = n(6),
        s = n(8),
        u = n(15),
        a = n(71),
        l = n(26),
        c = n(78),
        f = n(1)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function h() {
      return this;
    };

    t.exports = function (t, e, n, d, v, g, y) {
      a(n, e, d);

      var m,
          b,
          _,
          x = function x(t) {
        if (!p && t in L) return L[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          w = e + " Iterator",
          S = "values" == v,
          O = !1,
          L = t.prototype,
          k = L[f] || L["@@iterator"] || v && L[v],
          P = k || x(v),
          T = v ? S ? x("entries") : P : void 0,
          V = "Array" == e ? L.entries || k : k;

      if (V && (_ = c(V.call(new t()))) !== Object.prototype && _.next && (l(_, w, !0), i || "function" == typeof _[f] || s(_, f, h)), S && k && "values" !== k.name && (O = !0, P = function P() {
        return k.call(this);
      }), i && !y || !p && !O && L[f] || s(L, f, P), u[e] = P, u[w] = h, v) if (m = {
        values: S ? P : x("values"),
        keys: g ? P : x("keys"),
        entries: T
      }, y) for (b in m) {
        b in L || o(L, b, m[b]);
      } else r(r.P + r.F * (p || O), e, m);
      return m;
    };
  }, function (t, e, n) {
    var i = n(1)("iterator"),
        r = !1;

    try {
      var o = [7][i]();
      o.return = function () {
        r = !0;
      }, Array.from(o, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, e) {
      if (!e && !r) return !1;
      var n = !1;

      try {
        var o = [7],
            s = o[i]();
        s.next = function () {
          return {
            done: n = !0
          };
        }, o[i] = function () {
          return s;
        }, t(o);
      } catch (t) {}

      return n;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    var i = n(0),
        r = n(52).set,
        o = i.MutationObserver || i.WebKitMutationObserver,
        s = i.process,
        u = i.Promise,
        a = "process" == n(9)(s);

    t.exports = function () {
      var t,
          e,
          n,
          l = function l() {
        var i, r;

        for (a && (i = s.domain) && i.exit(); t;) {
          r = t.fn, t = t.next;

          try {
            r();
          } catch (i) {
            throw t ? n() : e = void 0, i;
          }
        }

        e = void 0, i && i.enter();
      };

      if (a) n = function n() {
        s.nextTick(l);
      };else if (!o || i.navigator && i.navigator.standalone) {
        if (u && u.resolve) {
          var c = u.resolve(void 0);

          n = function n() {
            c.then(l);
          };
        } else n = function n() {
          r.call(i, l);
        };
      } else {
        var f = !0,
            p = document.createTextNode("");
        new o(l).observe(p, {
          characterData: !0
        }), n = function n() {
          p.data = f = !f;
        };
      }
      return function (i) {
        var r = {
          fn: i,
          next: void 0
        };
        e && (e.next = r), t || (t = r, n()), e = r;
      };
    };
  }, function (t, e, n) {
    var i = n(13),
        r = n(2),
        o = n(47);
    t.exports = n(4) ? Object.defineProperties : function (t, e) {
      r(t);

      for (var n, s = o(e), u = s.length, a = 0; u > a;) {
        i.f(t, n = s[a++], e[n]);
      }

      return t;
    };
  }, function (t, e, n) {
    var i = n(46),
        r = n(22).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return i(t, r);
    };
  }, function (t, e, n) {
    var i = n(12),
        r = n(28),
        o = n(27)("IE_PROTO"),
        s = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return {
          e: !1,
          v: t()
        };
      } catch (t) {
        return {
          e: !0,
          v: t
        };
      }
    };
  }, function (t, e, n) {
    var i = n(6);

    t.exports = function (t, e, n) {
      for (var r in e) {
        i(t, r, e[r], n);
      }

      return t;
    };
  }, function (t, e, n) {
    var i = n(5),
        r = n(2),
        o = function o(t, e) {
      if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    };

    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, i) {
        try {
          i = n(11)(Function.call, n(45).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array);
        } catch (t) {
          e = !0;
        }

        return function (t, n) {
          return o(t, n), e ? t.__proto__ = n : i(t, n), t;
        };
      }({}, !1) : void 0),
      check: o
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(0),
        r = n(13),
        o = n(4),
        s = n(1)("species");

    t.exports = function (t) {
      var e = i[t];
      o && e && !e[s] && r.f(e, s, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  }, function (t, e) {
    t.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, function (t, e, n) {
    var i = n(53),
        r = Math.max,
        o = Math.min;

    t.exports = function (t, e) {
      return t = i(t), t < 0 ? r(t + e, 0) : o(t, e);
    };
  }, function (t, e, n) {
    var i = n(0),
        r = i.navigator;
    t.exports = r && r.userAgent || "";
  }, function (t, e, n) {
    var i = n(38),
        r = n(1)("iterator"),
        o = n(15);

    t.exports = n(10).getIteratorMethod = function (t) {
      if (void 0 != t) return t[r] || t["@@iterator"] || o[i(t)];
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(20)(2);
    i(i.P + i.F * !n(17)([].filter, !0), "Array", {
      filter: function filter(t) {
        return r(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(37)(!1),
        o = [].indexOf,
        s = !!o && 1 / [1].indexOf(1, -0) < 0;
    i(i.P + i.F * (s || !n(17)(o)), "Array", {
      indexOf: function indexOf(t) {
        return s ? o.apply(this, arguments) || 0 : r(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    var i = n(3);
    i(i.S, "Array", {
      isArray: n(42)
    });
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(20)(1);
    i(i.P + i.F * !n(17)([].map, !0), "Array", {
      map: function map(t) {
        return r(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var i = n(3),
        r = n(62);
    i(i.P + i.F * !n(17)([].reduce, !0), "Array", {
      reduce: function reduce(t) {
        return r(this, t, arguments.length, arguments[1], !1);
      }
    });
  }, function (t, e, n) {
    var i = Date.prototype,
        r = i.toString,
        o = i.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(6)(i, "toString", function () {
      var t = o.call(this);
      return t === t ? r.call(this) : "Invalid Date";
    });
  }, function (t, e, n) {
    n(4) && "g" != /./g.flags && n(13).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: n(39)
    });
  }, function (t, e, n) {
    n(65)("search", 1, function (t, e, n) {
      return [function (n) {
        "use strict";

        var i = t(this),
            r = void 0 == n ? void 0 : n[e];
        return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i));
      }, n];
    });
  }, function (t, e, n) {
    "use strict";

    n(94);

    var i = n(2),
        r = n(39),
        o = n(4),
        s = /./.toString,
        u = function u(t) {
      n(6)(RegExp.prototype, "toString", t, !0);
    };

    n(7)(function () {
      return "/a/b" != s.call({
        source: "a",
        flags: "b"
      });
    }) ? u(function () {
      var t = i(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0);
    }) : "toString" != s.name && u(function () {
      return s.call(this);
    });
  }, function (t, e, n) {
    "use strict";

    n(51)("trim", function (t) {
      return function () {
        return t(this, 3);
      };
    });
  }, function (t, e, n) {
    for (var i = n(34), r = n(47), o = n(6), s = n(0), u = n(8), a = n(15), l = n(1), c = l("iterator"), f = l("toStringTag"), p = a.Array, h = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, d = r(h), v = 0; v < d.length; v++) {
      var g,
          y = d[v],
          m = h[y],
          b = s[y],
          _ = b && b.prototype;

      if (_ && (_[c] || u(_, c, p), _[f] || u(_, f, y), a[y] = p, m)) for (g in i) {
        _[g] || o(_, g, i[g], !0);
      }
    }
  }, function (t, e) {}, function (t, e) {
    t.exports = function (t, e, n, i, r, o) {
      var s,
          u = t = t || {},
          a = _typeof(t.default);

      "object" !== a && "function" !== a || (s = t, u = t.default);
      var l = "function" == typeof u ? u.options : u;
      e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0), n && (l.functional = !0), r && (l._scopeId = r);
      var c;

      if (o ? (c = function c(t) {
        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o);
      }, l._ssrRegister = c) : i && (c = i), c) {
        var f = l.functional,
            p = f ? l.render : l.beforeCreate;
        f ? (l._injectStyles = c, l.render = function (t, e) {
          return c.call(e), p(t, e);
        }) : l.beforeCreate = p ? [].concat(p, c) : [c];
      }

      return {
        esModule: s,
        exports: u,
        options: l
      };
    };
  }, function (t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("div", {
        staticClass: "multiselect",
        class: {
          "multiselect--active": t.isOpen,
          "multiselect--disabled": t.disabled,
          "multiselect--above": t.isAbove
        },
        attrs: {
          tabindex: t.searchable ? -1 : t.tabindex
        },
        on: {
          focus: function focus(e) {
            t.activate();
          },
          blur: function blur(e) {
            !t.searchable && t.deactivate();
          },
          keydown: [function (e) {
            return "button" in e || !t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? e.target !== e.currentTarget ? null : (e.preventDefault(), void t.pointerForward()) : null;
          }, function (e) {
            return "button" in e || !t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? e.target !== e.currentTarget ? null : (e.preventDefault(), void t.pointerBackward()) : null;
          }],
          keypress: function keypress(e) {
            return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") || !t._k(e.keyCode, "tab", 9, e.key, "Tab") ? (e.stopPropagation(), e.target !== e.currentTarget ? null : void t.addPointerElement(e)) : null;
          },
          keyup: function keyup(e) {
            if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
            t.deactivate();
          }
        }
      }, [t._t("caret", [n("div", {
        staticClass: "multiselect__select",
        on: {
          mousedown: function mousedown(e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          }
        }
      })], {
        toggle: t.toggle
      }), t._v(" "), t._t("clear", null, {
        search: t.search
      }), t._v(" "), n("div", {
        ref: "tags",
        staticClass: "multiselect__tags"
      }, [t._t("selection", [n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.visibleValues.length > 0,
          expression: "visibleValues.length > 0"
        }],
        staticClass: "multiselect__tags-wrap"
      }, [t._l(t.visibleValues, function (e, i) {
        return [t._t("tag", [n("span", {
          key: i,
          staticClass: "multiselect__tag"
        }, [n("span", {
          domProps: {
            textContent: t._s(t.getOptionLabel(e))
          }
        }), t._v(" "), n("i", {
          staticClass: "multiselect__tag-icon",
          attrs: {
            "aria-hidden": "true",
            tabindex: "1"
          },
          on: {
            keypress: function keypress(n) {
              if (!("button" in n) && t._k(n.keyCode, "enter", 13, n.key, "Enter")) return null;
              n.preventDefault(), t.removeElement(e);
            },
            mousedown: function mousedown(n) {
              n.preventDefault(), t.removeElement(e);
            }
          }
        })])], {
          option: e,
          search: t.search,
          remove: t.removeElement
        })];
      })], 2), t._v(" "), t.internalValue && t.internalValue.length > t.limit ? [t._t("limit", [n("strong", {
        staticClass: "multiselect__strong",
        domProps: {
          textContent: t._s(t.limitText(t.internalValue.length - t.limit))
        }
      })])] : t._e()], {
        search: t.search,
        remove: t.removeElement,
        values: t.visibleValues,
        isOpen: t.isOpen
      }), t._v(" "), n("transition", {
        attrs: {
          name: "multiselect__loading"
        }
      }, [t._t("loading", [n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.loading,
          expression: "loading"
        }],
        staticClass: "multiselect__spinner"
      })])], 2), t._v(" "), t.searchable ? n("input", {
        ref: "search",
        staticClass: "multiselect__input",
        style: t.inputStyle,
        attrs: {
          name: t.name,
          id: t.id,
          type: "text",
          autocomplete: "nope",
          placeholder: t.placeholder,
          disabled: t.disabled,
          tabindex: t.tabindex
        },
        domProps: {
          value: t.search
        },
        on: {
          input: function input(e) {
            t.updateSearch(e.target.value);
          },
          focus: function focus(e) {
            e.preventDefault(), t.activate();
          },
          blur: function blur(e) {
            e.preventDefault(), t.deactivate();
          },
          keyup: function keyup(e) {
            if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
            t.deactivate();
          },
          keydown: [function (e) {
            if (!("button" in e) && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])) return null;
            e.preventDefault(), t.pointerForward();
          }, function (e) {
            if (!("button" in e) && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])) return null;
            e.preventDefault(), t.pointerBackward();
          }, function (e) {
            if (!("button" in e) && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete"])) return null;
            e.stopPropagation(), t.removeLastElement();
          }],
          keypress: function keypress(e) {
            return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") ? (e.preventDefault(), e.stopPropagation(), e.target !== e.currentTarget ? null : void t.addPointerElement(e)) : null;
          }
        }
      }) : t._e(), t._v(" "), t.isSingleLabelVisible ? n("span", {
        staticClass: "multiselect__single",
        on: {
          mousedown: function mousedown(e) {
            return e.preventDefault(), t.toggle(e);
          }
        }
      }, [t._t("singleLabel", [[t._v(t._s(t.currentOptionLabel))]], {
        option: t.singleValue
      })], 2) : t._e(), t._v(" "), t.isPlaceholderVisible ? n("span", {
        staticClass: "multiselect__placeholder",
        on: {
          mousedown: function mousedown(e) {
            return e.preventDefault(), t.toggle(e);
          }
        }
      }, [t._t("placeholder", [t._v("\n          " + t._s(t.placeholder) + "\n        ")])], 2) : t._e()], 2), t._v(" "), n("transition", {
        attrs: {
          name: "multiselect"
        }
      }, [n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.isOpen,
          expression: "isOpen"
        }],
        ref: "list",
        staticClass: "multiselect__content-wrapper",
        style: {
          maxHeight: t.optimizedHeight + "px"
        },
        attrs: {
          tabindex: "-1"
        },
        on: {
          focus: t.activate,
          mousedown: function mousedown(t) {
            t.preventDefault();
          }
        }
      }, [n("ul", {
        staticClass: "multiselect__content",
        style: t.contentStyle
      }, [t._t("beforeList"), t._v(" "), t.multiple && t.max === t.internalValue.length ? n("li", [n("span", {
        staticClass: "multiselect__option"
      }, [t._t("maxElements", [t._v("Maximum of " + t._s(t.max) + " options selected. First remove a selected option to select another.")])], 2)]) : t._e(), t._v(" "), !t.max || t.internalValue.length < t.max ? t._l(t.filteredOptions, function (e, i) {
        return n("li", {
          key: i,
          staticClass: "multiselect__element"
        }, [e && (e.$isLabel || e.$isDisabled) ? t._e() : n("span", {
          staticClass: "multiselect__option",
          class: t.optionHighlight(i, e),
          attrs: {
            "data-select": e && e.isTag ? t.tagPlaceholder : t.selectLabelText,
            "data-selected": t.selectedLabelText,
            "data-deselect": t.deselectLabelText
          },
          on: {
            click: function click(n) {
              n.stopPropagation(), t.select(e);
            },
            mouseenter: function mouseenter(e) {
              if (e.target !== e.currentTarget) return null;
              t.pointerSet(i);
            }
          }
        }, [t._t("option", [n("span", [t._v(t._s(t.getOptionLabel(e)))])], {
          option: e,
          search: t.search
        })], 2), t._v(" "), e && (e.$isLabel || e.$isDisabled) ? n("span", {
          staticClass: "multiselect__option",
          class: t.groupHighlight(i, e),
          attrs: {
            "data-select": t.groupSelect && t.selectGroupLabelText,
            "data-deselect": t.groupSelect && t.deselectGroupLabelText
          },
          on: {
            mouseenter: function mouseenter(e) {
              if (e.target !== e.currentTarget) return null;
              t.groupSelect && t.pointerSet(i);
            },
            mousedown: function mousedown(n) {
              n.preventDefault(), t.selectGroup(e);
            }
          }
        }, [t._t("option", [n("span", [t._v(t._s(t.getOptionLabel(e)))])], {
          option: e,
          search: t.search
        })], 2) : t._e()]);
      }) : t._e(), t._v(" "), n("li", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.showNoResults && 0 === t.filteredOptions.length && t.search && !t.loading,
          expression: "showNoResults && (filteredOptions.length === 0 && search && !loading)"
        }]
      }, [n("span", {
        staticClass: "multiselect__option"
      }, [t._t("noResult", [t._v("No elements found. Consider changing the search query.")], {
        search: t.search
      })], 2)]), t._v(" "), n("li", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.showNoOptions && 0 === t.options.length && !t.search && !t.loading,
          expression: "showNoOptions && (options.length === 0 && !search && !loading)"
        }]
      }, [n("span", {
        staticClass: "multiselect__option"
      }, [t._t("noOptions", [t._v("List is empty.")])], 2)]), t._v(" "), t._t("afterList")], 2)])])], 2);
    },
        r = [],
        o = {
      render: i,
      staticRenderFns: r
    };

    e.a = o;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("6984")(module)))

/***/ }),

/***/ "4cce":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "4cdd":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("0e93");
var store = __webpack_require__("c607");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "4db4":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("e7a0");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "4e41":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "4f46":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d6de");

__webpack_require__("8d0f");

__webpack_require__("68b8");

__webpack_require__("9531");

__webpack_require__("ef1f");

__webpack_require__("f3b8");

__webpack_require__("918c");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "4fcd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ef3896de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ec1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ef3896de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ef3896de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ef3896de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4fed":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var userAgent = __webpack_require__("64e4");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "523f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $find = __webpack_require__("d054").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "5268":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var classof = __webpack_require__("da06");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "53fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $reduceRight = __webpack_require__("98f3").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "5428":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("3e36");
var global = __webpack_require__("f498");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "56c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var speciesConstructor = __webpack_require__("433a");
var fails = __webpack_require__("72df");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "58d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var anObject = __webpack_require__("157c");
var toLength = __webpack_require__("b495");
var requireObjectCoercible = __webpack_require__("730c");
var advanceStringIndex = __webpack_require__("e3f6");
var regExpExec = __webpack_require__("df8c");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "58ec":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"deleted":"Deleted","draft":"New","rejected":"Rejected","published":"Published","showing":"showing","to":"to","of":"of","filters":"Filters","search":"Search","action":"Action","actor":"Actor","viewAction":"View Action"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "596a":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Uint16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "5a6a":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "5acf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".entity-badge[data-v-7be58bc0]{position:absolute;top:0;left:0;border-top-left-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5b12":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var definePropertyModule = __webpack_require__("abdf");
var createPropertyDescriptor = __webpack_require__("9618");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "5b3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_1429599b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0edb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_1429599b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_1429599b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_1429599b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5bb7":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "5c08":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"deleted":"Deleted","draft":"New","rejected":"Rejected","published":"Published","showing":"showing","to":"to","of":"of","filters":"Filters","search":"Search","action":"Action","actor":"Actor","viewAction":"View Action"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "5d3c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cont[data-v-b636fc54]{position:relative;width:45px;height:47px;background-color:transparent}.slot-hold[data-v-b636fc54]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.lds-ring[data-v-b636fc54]{display:inline-block;position:relative;width:30px;height:30px;margin-bottom:-5px}.lds-ring div[data-v-b636fc54]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:95%;height:95%;margin:3px;border:3px solid;border-radius:50%;-webkit-animation:lds-ring-data-v-b636fc54 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-b636fc54 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div[data-v-b636fc54]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-b636fc54]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-b636fc54]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-b636fc54{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-b636fc54{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5d84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $every = __webpack_require__("d054").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "5e39":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var wellKnownSymbol = __webpack_require__("7d53");
var IS_PURE = __webpack_require__("0e93");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "5ecb":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Int32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "6009":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var objectKeys = __webpack_require__("0c47");
var toIndexedObject = __webpack_require__("378c");
var propertyIsEnumerable = __webpack_require__("e129").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "61ad":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("730c");
var whitespaces = __webpack_require__("fbf7");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "62c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var isRegExp = __webpack_require__("8e5d");
var anObject = __webpack_require__("157c");
var requireObjectCoercible = __webpack_require__("730c");
var speciesConstructor = __webpack_require__("433a");
var advanceStringIndex = __webpack_require__("e3f6");
var toLength = __webpack_require__("b495");
var callRegExpExec = __webpack_require__("df8c");
var regexpExec = __webpack_require__("42c5");
var fails = __webpack_require__("72df");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "64e4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "6559":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var $entries = __webpack_require__("6009").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "655c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $indexOf = __webpack_require__("1f5e").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "65d0":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("c91c");
var enumBugKeys = __webpack_require__("b17e");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "6708":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "680e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("2aa5");

Object.defineProperty(exports, "__esModule", {
  value: true
});

function extractIEVersion(variant, userAgent) {
  var edgeRegex = /Edge\/(\d*\.\d*)/g;
  var revisionRegex = /rv:(\d*\.\d*)/g;
  var msieRegex = /MSIE (\d*\.\d*)/g;
  var version;

  switch (variant) {
    case 'edge':
      version = edgeRegex.exec(userAgent);
      break;

    case '11':
      version = revisionRegex.exec(userAgent);
      break;

    case '10':
      version = msieRegex.exec(userAgent);
      break;
  }

  return version !== null ? version[1] : '';
}

exports.default = extractIEVersion;

/***/ }),

/***/ "68b8":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("6a89");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "692e":
/***/ (function(module, exports) {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ "6984":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "69a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $includes = __webpack_require__("1f5e").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "69bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f0b");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9531");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f7d3");
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("f8a5");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("26d3");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fa8c");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("918c");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0a6e");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("df26");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("42c2");
/* harmony import */ var check_ie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("79e8");
/* harmony import */ var check_ie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(check_ie__WEBPACK_IMPORTED_MODULE_12__);













/*!
* @scbd/load-http 0.0.2
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/load-http
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/


var e = /*#__PURE__*/function () {
  var _ref = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!("undefined" == typeof window)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      _context.t0 = ("function" == typeof check_ie__WEBPACK_IMPORTED_MODULE_12___default.a ? check_ie__WEBPACK_IMPORTED_MODULE_12___default.a : check_ie__WEBPACK_IMPORTED_MODULE_12___default.a.default)(window.navigator.userAgent).isIE && !window.polyfillFetch;

                      if (!_context.t0) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "1e8a"));

                    case 6:
                      window.polyfillFetch = _context.sent;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 2:
            _context2.t0 = i().$http;

            if (_context2.t0) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "a528"));

          case 6:
            i().$http = _context2.sent.default;

          case 7:
            return _context2.abrupt("return", i().$http);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function e() {
    return _ref.apply(this, arguments);
  };
}(),
    n = function n(t) {
  if (!t) return;
  var e = {};
  return Object.keys(t).forEach(function (n) {
    var i = t[n];
    i instanceof Object ? i = JSON.stringify(i, null, "") : i instanceof Date && (i = i.toISOString()), e[n] = i;
  }), new URLSearchParams(e);
};

function i() {
  if ("undefined" != typeof globalThis) return globalThis;
  if ("undefined" != typeof window) return window;
  if ("undefined" != typeof global) return global;
  if ("undefined" != typeof self) return self;
  throw new Error("getGlobal: failed to retrieve global object");
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "6a61":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6a86":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");
var isArray = __webpack_require__("c6de");
var wellKnownSymbol = __webpack_require__("7d53");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6a89":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("3e36");
var has = __webpack_require__("f1a7");
var wrappedWellKnownSymbolModule = __webpack_require__("4e41");
var defineProperty = __webpack_require__("abdf").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "6a91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_style_index_0_id_3ec6316d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("396b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_style_index_0_id_3ec6316d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_style_index_0_id_3ec6316d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_style_index_0_id_3ec6316d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6b1d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var setGlobal = __webpack_require__("3e34");
var copyConstructorProperties = __webpack_require__("b634");
var isForced = __webpack_require__("ebac");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "6ec1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3b90");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("acc3f8b8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6f5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterNav_vue_vue_type_style_index_0_id_376739eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d107");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterNav_vue_vue_type_style_index_0_id_376739eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterNav_vue_vue_type_style_index_0_id_376739eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterNav_vue_vue_type_style_index_0_id_376739eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7297":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var inspectSource = __webpack_require__("df6f");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "72df":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "730c":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "7526":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "75a4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var fails = __webpack_require__("72df");
var toIndexedObject = __webpack_require__("378c");
var nativeGetOwnPropertyDescriptor = __webpack_require__("185a").f;
var DESCRIPTORS = __webpack_require__("d4cb");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "7846":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var toLength = __webpack_require__("b495");
var toAbsoluteIndex = __webpack_require__("9a0f");
var speciesConstructor = __webpack_require__("433a");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "79e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var detectors_1 = __webpack_require__("a240");

var detectors = {
  ie10: detectors_1.detectMSIE,
  ie11: detectors_1.detectTrident,
  edge: detectors_1.detectEdge
};

function checkIE(userAgent, options) {
  var notIE = {
    isIE: false,
    name: '',
    version: ''
  };
  if (!userAgent) throw new Error('No user agent supplied.');else {
    for (var check in detectors) {
      if (options && !options[check]) continue;
      var result = detectors[check](userAgent);
      if (result.isIE) return result;
    }

    return notIE;
  }
}

exports.default = checkIE;

/***/ }),

/***/ "7c3f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var fails = __webpack_require__("72df");
var createElement = __webpack_require__("f2bf");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "7c4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b0787b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ee0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b0787b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b0787b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b0787b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7c6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("9446");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6de");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("8d0f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("68b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("8423");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("9531");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("1cef");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "7d15":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "7d23":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("37d1");
var toLength = __webpack_require__("b495");
var getIteratorMethod = __webpack_require__("0446");
var isArrayIteratorMethod = __webpack_require__("c965");
var bind = __webpack_require__("2117");
var aTypedArrayConstructor = __webpack_require__("aaf2").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "7d53":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var shared = __webpack_require__("4cdd");
var has = __webpack_require__("f1a7");
var uid = __webpack_require__("1d8a");
var NATIVE_SYMBOL = __webpack_require__("e7a0");
var USE_SYMBOL_AS_UID = __webpack_require__("4db4");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "7d89":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav-item[data-v-0b0787b9]{cursor:pointer}.tabs[data-v-0b0787b9]{max-width:50%}.action-icon[data-v-0b0787b9]{max-width:1.5em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7de7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $reduce = __webpack_require__("98f3").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "7f8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("72df");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "8016":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"deleted":"Deleted","draft":"New","rejected":"Rejected","published":"Published","showing":"showing","to":"to","of":"of","filters":"Filters","search":"Search","action":"Action","actor":"Actor","viewAction":"View Action"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "802e":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "829e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $findIndex = __webpack_require__("d054").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "82e8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var defineProperties = __webpack_require__("b99b");
var enumBugKeys = __webpack_require__("b17e");
var hiddenKeys = __webpack_require__("d687");
var html = __webpack_require__("9324");
var documentCreateElement = __webpack_require__("f2bf");
var sharedKey = __webpack_require__("332c");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "83a6":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var classof = __webpack_require__("6a61");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "841a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $find = __webpack_require__("d054").find;
var addToUnscopables = __webpack_require__("ed2b");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "8423":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var from = __webpack_require__("ccae");
var checkCorrectnessOfIteration = __webpack_require__("3211");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "8573":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var classof = __webpack_require__("6a61");
var macrotask = __webpack_require__("2435").set;
var IS_IOS = __webpack_require__("e03e");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "85ef":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".action-img[data-v-3ec6316d]{max-height:250px}.desc[data-v-3ec6316d]{white-space:pre-wrap}.action-icon[data-v-3ec6316d]{max-width:2em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "868d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var defineProperty = __webpack_require__("abdf").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "8697":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "881c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("8697");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "88a1":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var global = __webpack_require__("f498");
var isForced = __webpack_require__("ebac");
var inheritIfRequired = __webpack_require__("8fa9");
var defineProperty = __webpack_require__("abdf").f;
var getOwnPropertyNames = __webpack_require__("65d0").f;
var isRegExp = __webpack_require__("8e5d");
var getFlags = __webpack_require__("abfd");
var stickyHelpers = __webpack_require__("2f6a");
var redefine = __webpack_require__("b8ba");
var fails = __webpack_require__("72df");
var setInternalState = __webpack_require__("cdcd").set;
var setSpecies = __webpack_require__("0a1e");
var wellKnownSymbol = __webpack_require__("7d53");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "8aef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var isForced = __webpack_require__("ebac");
var redefine = __webpack_require__("b8ba");
var InternalMetadataModule = __webpack_require__("e023");
var iterate = __webpack_require__("b578");
var anInstance = __webpack_require__("4cce");
var isObject = __webpack_require__("7526");
var fails = __webpack_require__("72df");
var checkCorrectnessOfIteration = __webpack_require__("3211");
var setToStringTag = __webpack_require__("fa46");
var inheritIfRequired = __webpack_require__("8fa9");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "8b79":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "8b83":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "8bb2":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "8cba":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2ac2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("5897a8c6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8d0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $includes = __webpack_require__("1f5e").includes;
var addToUnscopables = __webpack_require__("ed2b");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "8d0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("6b1d");
var DESCRIPTORS = __webpack_require__("d4cb");
var global = __webpack_require__("f498");
var has = __webpack_require__("f1a7");
var isObject = __webpack_require__("7526");
var defineProperty = __webpack_require__("abdf").f;
var copyConstructorProperties = __webpack_require__("b634");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "8e5d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");
var classof = __webpack_require__("6a61");
var wellKnownSymbol = __webpack_require__("7d53");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "8f0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var forEach = __webpack_require__("e8e5");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "8fa9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");
var setPrototypeOf = __webpack_require__("c1a2");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "918c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var DOMIterables = __webpack_require__("130d");
var ArrayIteratorMethods = __webpack_require__("9531");
var createNonEnumerableProperty = __webpack_require__("5b12");
var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "91f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c08");
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback_vue__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback_vue__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"@scbd/action-search\",\"b\":\"0.0.21\"}");

/***/ }),

/***/ "9310":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "9310";

/***/ }),

/***/ "9324":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "9396":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var fails = __webpack_require__("72df");
var nativeGetOwnPropertyNames = __webpack_require__("ee58").f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),

/***/ "93ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("37d1");
var toAbsoluteIndex = __webpack_require__("9a0f");
var toLength = __webpack_require__("b495");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "9446":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "9531":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("378c");
var addToUnscopables = __webpack_require__("ed2b");
var Iterators = __webpack_require__("5bb7");
var InternalStateModule = __webpack_require__("cdcd");
var defineIterator = __webpack_require__("2df4");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "95ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "95b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("2aa5");
var redefine = __webpack_require__("b8ba");
var fails = __webpack_require__("72df");
var wellKnownSymbol = __webpack_require__("7d53");
var regexpExec = __webpack_require__("42c5");
var createNonEnumerableProperty = __webpack_require__("5b12");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "9618":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "98f3":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("8697");
var toObject = __webpack_require__("37d1");
var IndexedObject = __webpack_require__("83a6");
var toLength = __webpack_require__("b495");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "9942":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading[data-v-1429599b]{min-height:3em}.cont[data-v-1429599b]{position:relative;height:45px;width:47px}.ring[data-v-1429599b]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.percent[data-v-1429599b]{font-size:1.5em;font-weight:700;color:#009b48;display:inline-block}.leaf[data-v-1429599b]{margin-left:.25em;max-height:35px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9951":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var whitespaces = __webpack_require__("fbf7");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "9a0f":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8bb2");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "9a51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var toLength = __webpack_require__("b495");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var correctIsRegExpLogic = __webpack_require__("3e32");
var IS_PURE = __webpack_require__("0e93");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "9bd2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("8aef");
var collectionStrong = __webpack_require__("3ad5");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "9c36":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var isObject = __webpack_require__("7526");
var newPromiseCapability = __webpack_require__("881c");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "9e77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),

/***/ "9eea":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("8e5d");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "a03e":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");
var getOwnPropertyNamesModule = __webpack_require__("65d0");
var getOwnPropertySymbolsModule = __webpack_require__("2402");
var anObject = __webpack_require__("157c");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "a0d5":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("07d9")))

/***/ }),

/***/ "a240":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("8d0d");

__webpack_require__("c78b");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectEdge = exports.detectTrident = exports.detectMSIE = void 0;

var extractIEVersion_1 = __importDefault(__webpack_require__("680e"));

var notIE = {
  isIE: false,
  name: '',
  version: ''
};

function detectMSIE(userAgent) {
  var hasMsie = userAgent.includes('MSIE ');
  return hasMsie ? {
    isIE: true,
    name: 'Internet Explorer',
    version: extractIEVersion_1.default('10', userAgent)
  } : notIE;
}

exports.detectMSIE = detectMSIE;

function detectTrident(userAgent) {
  var hasTrident = userAgent.includes('Trident/');
  var hasRevision = userAgent.includes('rv:');
  return hasTrident && hasRevision ? {
    isIE: true,
    name: 'Internet Explorer',
    version: extractIEVersion_1.default('11', userAgent)
  } : notIE;
}

exports.detectTrident = detectTrident;

function detectEdge(userAgent) {
  var hasEdge = userAgent.includes('Edge');
  return hasEdge ? {
    isIE: true,
    name: 'Edge',
    version: extractIEVersion_1.default('edge', userAgent)
  } : notIE;
}

exports.detectEdge = detectEdge;

/***/ }),

/***/ "a40b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4003");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("548c8a08", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a7ab":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".entity-badge[data-v-50db6d86]{position:absolute;top:0;left:0;border-top-left-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "aaf2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("bd10");
var DESCRIPTORS = __webpack_require__("d4cb");
var global = __webpack_require__("f498");
var isObject = __webpack_require__("7526");
var has = __webpack_require__("f1a7");
var classof = __webpack_require__("da06");
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var defineProperty = __webpack_require__("abdf").f;
var getPrototypeOf = __webpack_require__("0e39");
var setPrototypeOf = __webpack_require__("c1a2");
var wellKnownSymbol = __webpack_require__("7d53");
var uid = __webpack_require__("1d8a");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "abdf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var IE8_DOM_DEFINE = __webpack_require__("7c3f");
var anObject = __webpack_require__("157c");
var toPrimitive = __webpack_require__("083f");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "abfd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("157c");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "aed7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".icon{display:inline-block;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon,.icon-search{width:1em}.icon-menu{width:1.6em}.icon-close{font-size:1.5em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "af43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_id_36b9899c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("30cf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_id_36b9899c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_id_36b9899c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_id_36b9899c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b17e":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "b203":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("b8ba");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "b257":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var fails = __webpack_require__("72df");
var ArrayBufferModule = __webpack_require__("cf50");
var anObject = __webpack_require__("157c");
var toAbsoluteIndex = __webpack_require__("9a0f");
var toLength = __webpack_require__("b495");
var speciesConstructor = __webpack_require__("433a");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});


/***/ }),

/***/ "b495":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8bb2");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "b55a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $trim = __webpack_require__("61ad").trim;
var forcedStringTrimMethod = __webpack_require__("9951");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "b578":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var isArrayIteratorMethod = __webpack_require__("c965");
var toLength = __webpack_require__("b495");
var bind = __webpack_require__("2117");
var getIteratorMethod = __webpack_require__("0446");
var callWithSafeIterationClosing = __webpack_require__("2514");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "b634":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("f1a7");
var ownKeys = __webpack_require__("a03e");
var getOwnPropertyDescriptorModule = __webpack_require__("185a");
var definePropertyModule = __webpack_require__("abdf");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "b67c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8016");
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav_vue__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav_vue__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b705":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c12b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("19f8a310", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b7fb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8bb2");
var requireObjectCoercible = __webpack_require__("730c");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "b833":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5acf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("03048b8d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b8ba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var createNonEnumerableProperty = __webpack_require__("5b12");
var has = __webpack_require__("f1a7");
var setGlobal = __webpack_require__("3e34");
var inspectSource = __webpack_require__("df6f");
var InternalStateModule = __webpack_require__("cdcd");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "b99b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var definePropertyModule = __webpack_require__("abdf");
var anObject = __webpack_require__("157c");
var objectKeys = __webpack_require__("0c47");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "ba92":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Uint32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "bc30":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5d3c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("ceb430f8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bd10":
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "beb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $indexOf = __webpack_require__("1f5e").indexOf;
var arrayMethodIsStrict = __webpack_require__("7f8a");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "c12b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".entity-badge[data-v-782814cd]{position:absolute;top:0;left:0;border-top-left-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c19e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_782814cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b705");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_782814cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_782814cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Organization_vue_vue_type_style_index_0_id_782814cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c1a2":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var aPossiblePrototype = __webpack_require__("f3e4");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "c1d1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a7ab");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("c3f8821c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c607":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var setGlobal = __webpack_require__("3e34");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c6de":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6a61");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "c78b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var correctIsRegExpLogic = __webpack_require__("3e32");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "c87f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var FREEZING = __webpack_require__("95ad");
var fails = __webpack_require__("72df");
var isObject = __webpack_require__("7526");
var onFreeze = __webpack_require__("e023").onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "c91c":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("f1a7");
var toIndexedObject = __webpack_require__("378c");
var indexOf = __webpack_require__("1f5e").indexOf;
var hiddenKeys = __webpack_require__("d687");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "c965":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");
var Iterators = __webpack_require__("5bb7");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "cab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Government_vue_vue_type_style_index_0_id_50db6d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1d1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Government_vue_vue_type_style_index_0_id_50db6d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Government_vue_vue_type_style_index_0_id_50db6d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Government_vue_vue_type_style_index_0_id_50db6d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ccae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("2117");
var toObject = __webpack_require__("37d1");
var callWithSafeIterationClosing = __webpack_require__("2514");
var isArrayIteratorMethod = __webpack_require__("c965");
var toLength = __webpack_require__("b495");
var createProperty = __webpack_require__("dac6");
var getIteratorMethod = __webpack_require__("0446");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "cdcd":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7297");
var global = __webpack_require__("f498");
var isObject = __webpack_require__("7526");
var createNonEnumerableProperty = __webpack_require__("5b12");
var objectHas = __webpack_require__("f1a7");
var sharedKey = __webpack_require__("332c");
var hiddenKeys = __webpack_require__("d687");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "ce37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "ce71":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var fails = __webpack_require__("72df");
var has = __webpack_require__("f1a7");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ceb7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_b636fc54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc30");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_b636fc54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_b636fc54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_b636fc54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cecc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("f498");
var ArrayBufferViewCore = __webpack_require__("aaf2");
var fails = __webpack_require__("72df");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),

/***/ "cf28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6de");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("8d0f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("68b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("9531");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("1cef");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "cf50":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("f498");
var DESCRIPTORS = __webpack_require__("d4cb");
var NATIVE_ARRAY_BUFFER = __webpack_require__("bd10");
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefineAll = __webpack_require__("b203");
var fails = __webpack_require__("72df");
var anInstance = __webpack_require__("4cce");
var toInteger = __webpack_require__("8bb2");
var toLength = __webpack_require__("b495");
var toIndex = __webpack_require__("ff5c");
var IEEE754 = __webpack_require__("f028");
var getPrototypeOf = __webpack_require__("0e39");
var setPrototypeOf = __webpack_require__("c1a2");
var getOwnPropertyNames = __webpack_require__("65d0").f;
var defineProperty = __webpack_require__("abdf").f;
var arrayFill = __webpack_require__("29cd");
var setToStringTag = __webpack_require__("fa46");
var InternalStateModule = __webpack_require__("cdcd");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "cfce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $map = __webpack_require__("d054").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d054":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("2117");
var IndexedObject = __webpack_require__("83a6");
var toObject = __webpack_require__("37d1");
var toLength = __webpack_require__("b495");
var arraySpeciesCreate = __webpack_require__("6a86");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "d0d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $lastIndexOf = __webpack_require__("42c0");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "d107":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1c53");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("993a49ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d328":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__("f498");
var fails = __webpack_require__("72df");
var checkCorrectnessOfIteration = __webpack_require__("3211");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__("aaf2").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "d4cb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "d687":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d6de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var getBuiltIn = __webpack_require__("5428");
var IS_PURE = __webpack_require__("0e93");
var DESCRIPTORS = __webpack_require__("d4cb");
var NATIVE_SYMBOL = __webpack_require__("e7a0");
var USE_SYMBOL_AS_UID = __webpack_require__("4db4");
var fails = __webpack_require__("72df");
var has = __webpack_require__("f1a7");
var isArray = __webpack_require__("c6de");
var isObject = __webpack_require__("7526");
var anObject = __webpack_require__("157c");
var toObject = __webpack_require__("37d1");
var toIndexedObject = __webpack_require__("378c");
var toPrimitive = __webpack_require__("083f");
var createPropertyDescriptor = __webpack_require__("9618");
var nativeObjectCreate = __webpack_require__("82e8");
var objectKeys = __webpack_require__("0c47");
var getOwnPropertyNamesModule = __webpack_require__("65d0");
var getOwnPropertyNamesExternal = __webpack_require__("ee58");
var getOwnPropertySymbolsModule = __webpack_require__("2402");
var getOwnPropertyDescriptorModule = __webpack_require__("185a");
var definePropertyModule = __webpack_require__("abdf");
var propertyIsEnumerableModule = __webpack_require__("e129");
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var shared = __webpack_require__("4cdd");
var sharedKey = __webpack_require__("332c");
var hiddenKeys = __webpack_require__("d687");
var uid = __webpack_require__("1d8a");
var wellKnownSymbol = __webpack_require__("7d53");
var wrappedWellKnownSymbolModule = __webpack_require__("4e41");
var defineWellKnownSymbol = __webpack_require__("6a89");
var setToStringTag = __webpack_require__("fa46");
var InternalStateModule = __webpack_require__("cdcd");
var $forEach = __webpack_require__("d054").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "d790":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* unused harmony export validateOptions */
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d86f");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8d0d");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("868d");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2007");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f8a5");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c78b");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("e300");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("f5f2");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("30c6");










/*!
* @scbd/default-options 0.1.9
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/default-options
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/
var t = {
  host: "https://www.cbddev.xyz",
  basePath: "/"
},
    n = {
  host: "https://www.staging.cbd.int",
  basePath: "/"
},
    e = {
  host: "https://www.cbd.int",
  basePath: "/"
},
    o = {
  host: String,
  basePath: String
};

var s = /*#__PURE__*/function () {
  function s(_ref) {
    var _s = _ref.environments,
        i = _ref.validationMap,
        r = _ref.forceEnv,
        c = _ref.name;

    Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, s);

    _s = function (o) {
      var s = Object.assign(t, o.dev || o.development || {}),
          i = Object.assign(n, o.stg || o.staging || {}),
          r = Object.assign(e, o.prod || o.production || {});
      return {
        development: s,
        dev: s,
        staging: i,
        stg: i,
        production: r,
        prod: r
      };
    }(_s), i = Object.assign(o, i), this.props = {
      environments: _s,
      validationMap: i,
      forceEnv: r,
      name: c
    };
  }

  Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(s, [{
    key: "get",
    value: function get() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.env;
      var e = this.props.environments;

      for (var _o in t) {
        e[n][_o] = t[_o];
      }

      return this.validate(e[n]), e[n];
    }
  }, {
    key: "validate",
    value: function validate(t) {
      return d(t, this.props.validationMap);
    }
  }, {
    key: "env",
    get: function get() {
      return this.props.forceEnv ? this.props.forceEnv : "undefined" == typeof window && "undefined" != typeof process && Object({"NODE_ENV":"production","VUE_APP_I18N_LOCALE":"y","VUE_APP_I18N_FALLBACK_LOCALE":"en","BASE_URL":"/"}) ? "production" || false : function () {
        var t = window.location.href;
        return t.includes("staging.cbd.int") ? "stg" : t.includes("cbddev.xyz") ? "dev" : (t.includes("www.cbd.int"), "prod");
      }();
    }
  }]);

  return s;
}();

var i = {},
    r = function r(_ref2) {
  var t = _ref2.environments,
      n = _ref2.validationMap,
      e = _ref2.forceEnv,
      o = _ref2.name;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : o;
  if (!r) throw new Error("@scbd/default-options.setDefaultOptions: no name/nameSpace passed to setDefaultOptions");
  i[r] = new s({
    environments: t,
    validationMap: n,
    forceEnv: e,
    name: o
  });
},
    c = function c(t) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var e = arguments.length > 1 ? arguments[1] : undefined;
    return i[t].get(n, e);
  };
},
    a = d;

function d(t, n) {
  for (var _e in t) {
    var _o2 = t[_e].constructor ? t[_e].constructor : "object" == Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(t[_e]) ? Object : void 0,
        _s2 = n[_e];

    Object.keys(n).includes(_e) || p(t, _e), _o2 !== _s2 && v(_e, _o2.name, _s2.name);
  }
}

function p(t, n) {
  throw new Error(n + " not permitted in  component: options");
}

function v(t, n, e) {
  throw new Error("".concat(t, " has incorrect type.  Received: ").concat(n, " Expected: ").concat(e));
}

/* unused harmony default export */ var _unused_webpack_default_export = (s);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("07d9")))

/***/ }),

/***/ "d86f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var fails = __webpack_require__("72df");
var isArray = __webpack_require__("c6de");
var isObject = __webpack_require__("7526");
var toObject = __webpack_require__("37d1");
var toLength = __webpack_require__("b495");
var createProperty = __webpack_require__("dac6");
var arraySpeciesCreate = __webpack_require__("6a86");
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");
var wellKnownSymbol = __webpack_require__("7d53");
var V8_VERSION = __webpack_require__("4fed");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "d9ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__("aaf2").exportTypedArrayMethod;
var fails = __webpack_require__("72df");
var global = __webpack_require__("f498");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "d9d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $map = __webpack_require__("d054").map;
var speciesConstructor = __webpack_require__("433a");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),

/***/ "da06":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var classofRaw = __webpack_require__("6a61");
var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "da1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6de");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8d0f");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("68b8");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9531");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("918c");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1cef");








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "dac6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("083f");
var definePropertyModule = __webpack_require__("abdf");
var createPropertyDescriptor = __webpack_require__("9618");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "dd63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("405b")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("2aa5");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("32f5");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=ef3896de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"scbd-search"}},[_c('Icons'),_c('div',{staticStyle:{"position":"sticky","top":"0","z-index":"5"}},[_c('FilterNav',{attrs:{"get-counts":_vm.getCounts,"adminRole":"ActionAdmin"},on:{"$scbdFilterChange":_vm.onScbdFilterChange}}),_c('Feedback',_vm._b({},'Feedback',{ total: _vm.total, page: _vm.page, totalPages: _vm.totalPages, loading: _vm.loading },false))],1),(_vm.total && _vm.rows.length)?_c('List',{attrs:{"rows":_vm.rows,"options":_vm.opts,"on-scroll":_vm.onScroll}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index.vue?vue&type=template&id=ef3896de&scoped=true&

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("7c6c");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("df26");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("0b38");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("42c2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("d86f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("2d6d");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("8f0b");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("8423");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("8d0d");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("9531");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("cfce");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("868d");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("e94e");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f8a5");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("26d3");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("2ea2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("c78b");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("fa8c");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("e300");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("da1e");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__("1ae5");
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/lodash.isnil/index.js
var lodash_isnil = __webpack_require__("692e");
var lodash_isnil_default = /*#__PURE__*/__webpack_require__.n(lodash_isnil);

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/lodash.omitby/index.js
var lodash_omitby = __webpack_require__("fd08");
var lodash_omitby_default = /*#__PURE__*/__webpack_require__.n(lodash_omitby);

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("33ef");

// CONCATENATED MODULE: ../locale/dist/esm/index.min.js












/*!
* @scbd/locale 0.0.7
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/locale
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/
var index_min_e = ["ar", "en", "es", "fr", "ru", "zh"],
    index_min_n = new Set(index_min_e),
    index_min_t = function t() {
  if ("undefined" == typeof window) return "";
  var e = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, "$1");
  return e ? e.replace("Locale=", "") : "";
},
    index_min_r = function r() {
  if ("undefined" == typeof window) return "";
  var e = document.querySelector("html");
  return e && e.getAttribute("lang") || "";
},
    index_min_o = function o() {
  if ("undefined" == typeof window || "undefined" == typeof document) return "";
  var e = document.querySelector("meta[http-equiv=content-language]");
  return e && e.getAttribute("content") || "";
},
    index_min_a = function a() {
  return "undefined" == typeof navigator ? "" : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || "";
},
    u = function u() {
  return "undefined" == typeof Intl ? "" : new Intl.NumberFormat() ? new Intl.NumberFormat().resolvedOptions().locale : "";
},
    index_min_i = function i() {
  var e = index_min_t() || index_min_r() || index_min_o() || index_min_a() || u();
  return e ? e.toLowerCase().slice(0, 2) : "en";
},
    index_min_g = function g() {
  var n = index_min_i();

  var _iterator = Object(createForOfIteratorHelper["a" /* default */])(index_min_e),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _t = _step.value;
      if (n.includes(_t)) return _t;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return "en";
},
    c = index_min_g;


// EXTERNAL MODULE: ../load-http/dist/esm/index.min.js
var index_min = __webpack_require__("69bf");

// EXTERNAL MODULE: ../default-options/dist/esm/index.min.js
var esm_index_min = __webpack_require__("d790");

// CONCATENATED MODULE: ../cached-apis/dist/esm/index.min.js


























/*!
* @scbd/cached-apis 0.0.14
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/cached-apis
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/







var esm_index_min_o = "@scbd/cached-apis".replace("https://cdn.cbd.int/", ""),
    index_min_c = {
  regions: "https://api.cbd.int/api/v2013/thesaurus/domains/regions/terms",
  countries: "https://api.cbd.int/api/v2013/thesaurus/domains/countries/terms",
  orgTypes: "https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms",
  govTypes: "https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms",
  aichis: "https://api.cbd.int/api/v2013/thesaurus/domains/AICHI-TARGETS/terms",
  subjects: "https://api.cbd.int/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms",
  jurisdictions: "https://api.cbd.int/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms",
  sdgs: "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false"
},
    d = {
  name: esm_index_min_o,
  expiry: 30,
  apisUrls: index_min_c,
  dataSources: [].concat(Object(toConsumableArray["a" /* default */])(Object.keys(index_min_c)), ["geoLocations", "actionCategories", "all", "documentStates"]),
  version: "0.0.14"
},
    index_min_u = Object(objectSpread2["a" /* default */])({}, d);

Object(esm_index_min["b" /* setDefaultOptions */])({
  environments: {
    prod: Object(objectSpread2["a" /* default */])({}, index_min_u),
    stg: index_min_u,
    dev: d
  },
  validationMap: {
    expiry: Number,
    name: String,
    apisUrls: Object,
    dataSources: Array,
    version: String
  },
  name: esm_index_min_o
}, esm_index_min_o);
var index_min_m = Object(esm_index_min["a" /* getDefaultOptionsFunction */])(esm_index_min_o);

var l = "https://api.cbd.int/api/v2013/thesaurus/terms?termCode=",
    index_min_f = "https://attachments.cbd.int/action-agenda-categories",
    esm_index_min_g = new Set([{
  identifier: "FOOD-AND-HEALTH",
  image: index_min_f + "/FOOD-AND-HEALTH.svg",
  sameAs: [l + "CBD-SUBJECT-HH"],
  name: {
    en: "Food systems and health"
  },
  alternateName: {
    en: "Food and health"
  }
}, {
  identifier: "FRESHWATER-COSTAL-AND-OCEAN-ECOSYSTEMS",
  image: index_min_f + "/FRESHWATER-COSTAL-AND-OCEAN-ECOSYSTEMS.svg",
  sameAs: [l + "CBD-SUBJECT-WTR", l + "CBD-SUBJECT-MAR"],
  name: {
    en: "Freshwater, coastal and ocean ecosystems"
  },
  alternateName: {
    en: " Freshwater, coastal and ocean"
  }
}, {
  identifier: "LAND-ECOSYSTEMS",
  image: index_min_f + "/LAND-ECOSYSTEMS.svg",
  sameAs: [l + "CBD-SUBJECT-ECOA", l + "CBD-SUBJECT-ECORES"],
  name: {
    en: "Conservation and restoration of land ecosystems"
  },
  alternateName: {
    en: "Land ecosystems"
  }
}, {
  identifier: "CLIMATE-MITIGATION-AND-ADAPTATION",
  image: index_min_f + "/CLIMATE-MITIGATION-AND-ADAPTATION.svg",
  sameAs: [l + "CBD-SUBJECT-CC"],
  name: {
    en: "Climate change mitigation and adaptation "
  },
  alternateName: {
    en: "Climate mitigation and adaptation"
  }
}, {
  identifier: "SPECIES",
  image: index_min_f + "/SPECIES.svg",
  sameAs: [l + "CBD-SUBJECT-IAS", l + "CBD-SUBJECT-ENDS"],
  name: {
    en: "Conservation and sustainable use of species"
  },
  alternateName: {
    en: "Species"
  }
}, {
  identifier: "SUSTAINABLE-CONSUMPTION-AND-PRODUCTION",
  image: index_min_f + "/SUSTAINABLE-CONSUMPTION-AND-PRODUCTION.svg",
  sameAs: [l + "CBD-SUBJECT-SUSE", l + "CBD-SUBJECT-SDEV"],
  name: {
    en: "Sustainable consumption and production"
  }
}, {
  identifier: "STEWARDSHIP",
  image: index_min_f + "/STEWARDSHIP.svg",
  name: {
    en: "Stewardship"
  }
}, {
  identifier: "URBAN-SUSTAINABILITY",
  image: index_min_f + "/URBAN-SUSTAINABILITY.svg",
  name: {
    en: "Urban sustainability"
  }
}, {
  identifier: "GREEN-FINANCE",
  image: index_min_f + "/GREEN-FINANCE.svg",
  sameAs: [l + "CBD-SUBJECT-FIN"],
  name: {
    en: "Green finance"
  }
}, {
  identifier: "ACCESS-TO-BENEFIT-SHARING",
  image: index_min_f + "/ACCESS-TO-BENEFIT-SHARING.svg",
  sameAs: [l + "CBD-SUBJECT-ABS"],
  name: {
    en: "Access to Benefit Sharing"
  },
  alternateName: {
    en: "Access to benefit-sharing"
  }
}, {
  identifier: "BIOSAFETY",
  image: index_min_f + "/BIOSAFETY.svg",
  sameAs: [l + "CBD-SUBJECT-CPB", l + "CBD-SUBJECT-BTB"],
  name: {
    en: "Biosafety"
  }
}]),
    index_min_A = function A(e) {
  var t = [];

  var _iterator = Object(createForOfIteratorHelper["a" /* default */])(esm_index_min_g),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          _i = _step$value.sameAs,
          _n = _step$value.identifier;

      if (_i && (!Array.isArray(_i) || _i.length)) {
        !Array.isArray(_i) && _i.includes(e) && t.push(_n);

        var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(_i),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _a = _step2.value;
            _a.includes(e) && t.push(_n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var i = t.length;
  if (i) return t;
},
    p = function p(e) {
  if (!S(e)) return;
  var t = C(e).sameAs;
  return t ? t.map(function (e) {
    return e.replace(l, "");
  }) : void 0;
},
    S = C;

function C(e) {
  var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(esm_index_min_g),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _t = _step3.value;
      if (_t.identifier.includes(e) || (_t.sameAs || []).includes(e)) return _t;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

var E = {
  en: ["1. No Poverty", "2. Zero Hunger", "3. Good Health and Well-being", "4. Quality Education", "5. Gender Equality", "6. Clean Water and Sanitation", "7. Affordable and Clean Energy", "8. Decent Work and Economic Growth", "9. Industry, Innovation and Infrastructure", "10. Reduced Inequality", "11. Sustainable Cities and Communities", "12. Responsible Consumption and Production", "13. Climate Action", "14. Life Below Water", "15. Life on Land", "16. Peace and Justice Strong Institutions", "17. Partnerships to achieve the Goal"]
},
    h = {
  identifier: "ORG-TYPE-OTHER",
  name: "Other",
  title: {
    en: "Other"
  }
},
    T = [{
  identifier: "draft",
  name: {
    en: "Draft"
  }
}, {
  identifier: "published",
  name: {
    en: "Published"
  }
}, {
  identifier: "rejected",
  name: {
    en: "Rejected"
  }
}, {
  identifier: "deleted",
  name: {
    en: "Deleted"
  }
}];
var y = {};

var index_min_N = function N() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  y = index_min_m(t);
  var _y = y,
      i = _y.name,
      n = _y.version;
  localforage_default.a.config({
    name: "".concat(i, "-").concat(n),
    version: n,
    size: 4980736,
    storeName: i + "KeyValuePairs"
  });
},
    B = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
    var i,
        s,
        r,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            i = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : !1;
            _context5.t0 = i;

            if (_context5.t0) {
              _context5.next = 6;
              break;
            }

            _context5.next = 5;
            return function () {
              var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
                var i, a;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        i = c(), a = "".concat(t, "-").concat(i);
                        _context2.next = 3;
                        return function () {
                          var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
                            var i, n;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    i = new Date();
                                    _context.next = 3;
                                    return localforage_default.a.getItem(t + "-expiry");

                                  case 3:
                                    n = _context.sent;

                                    if (n) {
                                      _context.next = 6;
                                      break;
                                    }

                                    return _context.abrupt("return", (i.setDate(i.getDate() + y.expiry), localforage_default.a.setItem(t + "-expiry", i.toISOString()), !1));

                                  case 6:
                                    if (!(new Date(n) < i)) {
                                      _context.next = 11;
                                      break;
                                    }

                                    console.warn(y.name + " is expired");
                                    _context.next = 10;
                                    return localforage_default.a.clear();

                                  case 10:
                                    return _context.abrupt("return", !0);

                                  case 11:
                                    return _context.abrupt("return", !1);

                                  case 12:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x3) {
                            return _ref3.apply(this, arguments);
                          };
                        }()(a);

                      case 3:
                        _context2.t0 = !_context2.sent;

                        if (!_context2.t0) {
                          _context2.next = 6;
                          break;
                        }

                        _context2.t0 = localforage_default.a.getItem(a);

                      case 6:
                        return _context2.abrupt("return", _context2.t0);

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()(function (e) {
              var _y2 = y,
                  t = _y2.dataSources;
              if (!t) throw new Error("@scbd/cached-apis: failed to initialize module.  ensure to call initializeApiStore()");
              if (!t.includes(e)) throw new Error("Data source not valide: ".concat(e, " - must be one of"), JSON.stringify(t));
              return e;
            }(t));

          case 5:
            _context5.t0 = _context5.sent;

          case 6:
            s = _context5.t0;
            r = "aichis" === t || "sdgs" === t;
            return _context5.abrupt("return", s || ("geoLocations" === t ? Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _t2, _i2;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return Promise.all([j(), F()]);

                    case 3:
                      _t2 = _context3.sent;
                      _i2 = [].concat(Object(toConsumableArray["a" /* default */])(_t2[0]), Object(toConsumableArray["a" /* default */])(_t2[1]));
                      return _context3.abrupt("return", (localforage_default.a.setItem("geoLocations", _i2), _i2));

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](0);
                      console.error(_context3.t0);

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, null, [[0, 8]]);
            }))() : "actionCategories" === t ? Array.from(esm_index_min_g).map(te).sort(function (e, t) {
              return e.name.localeCompare(t.name);
            }) : "documentStates" === t ? T.map(te) : "all" === t ? X() : function () {
              var _ref5 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
                var i,
                    _s,
                    _r,
                    _y3,
                    _o,
                    _c,
                    _args4 = arguments;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        i = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "name";
                        _context4.prev = 1;
                        _context4.next = 4;
                        return Object(index_min["a" /* get$http */])();

                      case 4:
                        _s = _context4.sent;
                        _r = c();
                        _y3 = y;
                        _o = _y3.apisUrls;
                        _context4.next = 10;
                        return _s.get(_o[t]);

                      case 10:
                        _context4.next = 12;
                        return _context4.sent.json();

                      case 12:
                        _c = _context4.sent.map(_[t]).filter(function (e) {
                          return e;
                        }).sort(function (e, t) {
                          return e[i].localeCompare(t[i]);
                        });
                        return _context4.abrupt("return", (localforage_default.a.setItem("".concat(t, "-").concat(_r), _c), _c));

                      case 16:
                        _context4.prev = 16;
                        _context4.t0 = _context4["catch"](1);
                        console.error(_context4.t0);

                      case 19:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 16]]);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()(t, r ? "identifier" : void 0).then(function (e) {
              return "orgTypes" === t && e.push(ne(h)), e;
            })));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function B(_x) {
    return _ref.apply(this, arguments);
  };
}(),
    b = /*#__PURE__*/function () {
  var _ref6 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
    var i,
        n,
        a,
        s,
        _args7 = arguments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            i = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : !1;

            if (!("all" === e)) {
              _context7.next = 7;
              break;
            }

            _context7.next = 4;
            return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var e, t;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return B("all");

                    case 2:
                      e = _context6.sent;
                      t = [];
                      return _context6.abrupt("return", (e.forEach(function (_ref8) {
                        var e = _ref8.data;
                        return t = [].concat(Object(toConsumableArray["a" /* default */])(t), Object(toConsumableArray["a" /* default */])(e));
                      }), t));

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }))();

          case 4:
            _context7.t0 = _context7.sent;
            _context7.next = 10;
            break;

          case 7:
            _context7.next = 9;
            return B(e);

          case 9:
            _context7.t0 = _context7.sent;

          case 10:
            n = _context7.t0;

            a = function (e) {
              if ("string" == typeof e) return [e];
              if (Array.isArray(e) && function (e) {
                return ee(e, "string");
              }(e)) return e;
              if (Array.isArray(e) && function (e) {
                return ee(e, "object");
              }(e)) return e.map(function (e) {
                return e.identifier;
              });
              if (Array.isArray(e) && function (e) {
                return ee(e, "array");
              }(e)) return e.map(function (e) {
                return e[0];
              });
              if ("object" == Object(esm_typeof["a" /* default */])(e)) return [e.identifier];
            }(t) || [];

            s = n.filter(function (_ref9) {
              var e = _ref9.identifier;
              return Array.isArray(e) ? a.filter(function (t) {
                return e.includes(t);
              }).length : a.includes(e);
            });
            return _context7.abrupt("return", s && 1 === s.length && i ? s[0] : s && s.length ? s : void 0);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function b(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}(),
    D = /*#__PURE__*/function () {
  var _ref10 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return b("documentStates", e);

          case 2:
            if (!_context8.sent) {
              _context8.next = 6;
              break;
            }

            _context8.t0 = "documentStates";
            _context8.next = 70;
            break;

          case 6:
            _context8.next = 8;
            return b("actionCategories", e);

          case 8:
            if (!_context8.sent) {
              _context8.next = 12;
              break;
            }

            _context8.t1 = "actionCategories";
            _context8.next = 69;
            break;

          case 12:
            _context8.next = 14;
            return b("aichis", e);

          case 14:
            if (!_context8.sent) {
              _context8.next = 18;
              break;
            }

            _context8.t2 = "aichis";
            _context8.next = 68;
            break;

          case 18:
            _context8.next = 20;
            return b("sdgs", e);

          case 20:
            if (!_context8.sent) {
              _context8.next = 24;
              break;
            }

            _context8.t3 = "sdgs";
            _context8.next = 67;
            break;

          case 24:
            _context8.next = 26;
            return b("orgTypes", e);

          case 26:
            if (!_context8.sent) {
              _context8.next = 30;
              break;
            }

            _context8.t4 = "orgTypes";
            _context8.next = 66;
            break;

          case 30:
            _context8.next = 32;
            return b("govTypes", e);

          case 32:
            if (!_context8.sent) {
              _context8.next = 36;
              break;
            }

            _context8.t5 = "govTypes";
            _context8.next = 65;
            break;

          case 36:
            _context8.next = 38;
            return b("jurisdictions", e);

          case 38:
            if (!_context8.sent) {
              _context8.next = 42;
              break;
            }

            _context8.t6 = "jurisdictions";
            _context8.next = 64;
            break;

          case 42:
            _context8.next = 44;
            return b("subjects", e);

          case 44:
            if (!_context8.sent) {
              _context8.next = 48;
              break;
            }

            _context8.t7 = "subjects";
            _context8.next = 63;
            break;

          case 48:
            _context8.next = 50;
            return b("countries", e);

          case 50:
            if (!_context8.sent) {
              _context8.next = 54;
              break;
            }

            _context8.t8 = "countries";
            _context8.next = 62;
            break;

          case 54:
            _context8.next = 56;
            return b("regions", e);

          case 56:
            if (!_context8.sent) {
              _context8.next = 60;
              break;
            }

            _context8.t9 = "regions";
            _context8.next = 61;
            break;

          case 60:
            _context8.t9 = void 0;

          case 61:
            _context8.t8 = _context8.t9;

          case 62:
            _context8.t7 = _context8.t8;

          case 63:
            _context8.t6 = _context8.t7;

          case 64:
            _context8.t5 = _context8.t6;

          case 65:
            _context8.t4 = _context8.t5;

          case 66:
            _context8.t3 = _context8.t4;

          case 67:
            _context8.t2 = _context8.t3;

          case 68:
            _context8.t1 = _context8.t2;

          case 69:
            _context8.t0 = _context8.t1;

          case 70:
            return _context8.abrupt("return", _context8.t0);

          case 71:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function D(_x7) {
    return _ref10.apply(this, arguments);
  };
}(),
    I = function I(e) {
  return function (e) {
    return p(e) || index_min_A(e);
  }(e);
},
    v = function v() {
  return B("all");
},
    index_min_w = function w() {
  return B("jurisdictions");
},
    O = function O() {
  return B("aichis");
},
    U = function U() {
  return B("subjects");
},
    F = function F() {
  return B("countries");
},
    L = function L() {
  return B("orgTypes");
},
    R = function R() {
  return B("govTypes");
},
    j = function j() {
  return B("regions");
},
    P = function P() {
  return B("geoLocations");
},
    G = function G() {
  return B("sdgs");
},
    J = function J() {
  return B("actionCategories");
},
    H = function H() {
  return B("documentStates");
},
    M = function M(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("all", e, t);
},
    W = function W(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("jurisdictions", e, t);
},
    Y = function Y(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("aichis", e, t);
},
    $ = function $(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("subjects", e, t);
},
    x = function x(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("countries", e, t);
},
    z = function z(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("orgTypes", e, t);
},
    k = function k(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("govTypes", e, t);
},
    index_min_q = function q(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("regions", e, t);
},
    V = function V(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("geoLocations", e, t);
},
    K = function K(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("sdgs", e, t);
},
    Q = function Q(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("actionCategories", e, t);
},
    Z = function Z(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return b("documentStates", e, t);
},
    X = /*#__PURE__*/function () {
  var _ref11 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var t, i, a;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            t = c();
            _context9.next = 3;
            return Promise.all([B("documentStates"), B("actionCategories"), B("orgTypes"), B("govTypes"), B("aichis"), B("sdgs"), B("jurisdictions"), B("subjects"), B("countries"), B("regions")]);

          case 3:
            i = _context9.sent;
            a = [{
              filter: "Document States",
              data: i[0]
            }, {
              filter: "Action Categories",
              data: i[1]
            }, {
              filter: "Organization Types",
              data: i[2]
            }, {
              filter: "Governments Types",
              data: i[3]
            }, {
              filter: "Aichi Targets",
              data: i[4]
            }, {
              filter: "SDGs",
              data: i[5]
            }, {
              filter: "Jurisdictions",
              data: i[6]
            }, {
              filter: "Subjects",
              data: i[7]
            }, {
              filter: "Countries",
              data: i[8]
            }, {
              filter: "Regions",
              data: i[9]
            }];
            return _context9.abrupt("return", (localforage_default.a.setItem("all-" + t, a), a));

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function X() {
    return _ref11.apply(this, arguments);
  };
}(),
    _ = {
  jurisdictions: te,
  aichis: function aichis(e) {
    var t = e.identifier,
        i = t.substring(13),
        n = "https://attachments.cbd.int/".concat(i, ".svg"),
        a = "https://www.cbd.int/aichi-targets/target/" + i;
    return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, te(e)), {}, {
      image: n,
      url: a
    });
  },
  subjects: te,
  countries: te,
  orgTypes: ne,
  govTypes: function govTypes(e) {
    var t = e.identifier;
    return ie.includes(t) ? te(e) : void 0;
  },
  regions: te,
  geoLocations: te,
  sdgs: function sdgs(e) {
    var t = e.code,
        i = function (e) {
      var t = e.length;
      if (!["string", "number"].includes(Object(esm_typeof["a" /* default */])(e)) || !t) throw new Error("@scbd/cached-apis.padCode: cade passed must be string or number");
      return 1 === t ? "0" + e : e;
    }(t);

    return Object(objectSpread2["a" /* default */])({
      identifier: "SDG-GOAL-" + i,
      image: "https://attachments.cbd.int/sdg-".concat(i, ".svg"),
      url: "https://sustainabledevelopment.un.org/sdg" + t
    }, se(e));
  }
};

function ee(e, t) {
  var i = !1;
  return e.forEach(function (e) {
    i = function (e, t) {
      return !(!Array.isArray(e) || "array" !== t) || Object(esm_typeof["a" /* default */])(e) === t && !Array.isArray(e) && null !== e;
    }(e, t);
  }), i;
}

function te(e) {
  var n = e.identifier,
      a = e.image,
      _ref12 = function (e) {
    var t = e.name,
        i = e.title,
        n = e.alternateName,
        a = ae(t) || ae(i),
        s = ae(n);
    return {
      name: a,
      alternateName: s
    };
  }(e),
      s = _ref12.name,
      r = _ref12.alternateName;

  return lodash_omitby_default()({
    identifier: n,
    name: s,
    alternateName: r,
    image: a
  }, lodash_isnil_default.a);
}

var ie = ["1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32", "8830904C-8AF4-4C2F-AADB-363D98D854DA", "B3699A74-EF2E-467A-A82F-EF2149A2EFC5"];

function ne(e) {
  var t = e.identifier;
  if (!ie.includes(t)) return te(e);
}

function ae(e) {
  if (!e) return;
  if ("string" == typeof e) return e;
  if (!function (e) {
    var t = Object(esm_typeof["a" /* default */])(e);

    return e && "object" === t && e.en;
  }(e)) throw new Error("property is not an lstring");
  return e[c()] || e.en;
}

function se(_ref13) {
  var e = _ref13.code,
      t = _ref13.title;
  var i = Number(e) - 1,
      a = c();
  return {
    name: (E[a] || E.en)[i],
    alternateName: t
  };
}


// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("c87f");

// CONCATENATED MODULE: ./src/components/actions-api/options.js




var globalProps = {}; //required { api, getToken }

var getOptions = function getOptions() {
  return new Promise(loadingIntervalOptions);
};
var options_updateOptions = function updateOptions(options) {
  return globalProps.options = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, globalProps.options), options);
};
var initializeOptions = function initializeOptions(options) {
  return globalProps.options = options;
}; //priavte

function loadingIntervalOptions(resolve, reject) {
  var timeOut = setTimeout(function () {
    clearInterval(getTimer());
    reject('Error loading actions api- globalProps.options not set via initializeApi');
  }, 5000);
  var timer = setInterval(function () {
    var options = globalProps.options;
    if (!options) return;
    var api = options.api,
        getToken = options.getToken;
    clearInterval(getTimer());
    clearTimeout(getTimeOut());
    if (!api) throw new Error('actions-api: you must pass an \'api\' param too initializeApi');
    if (!getToken) throw new Error('actions-api: you must pass a \'getToken\' function as a param too initializeApi');
    return resolve(Object.freeze(options));
  }, 100);

  function getTimer() {
    return timer;
  }

  function getTimeOut() {
    return timeOut;
  }
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("9bd2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("0d9f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("cf28");

// CONCATENATED MODULE: ./src/components/actions-api/paging.js

var paging_globalProps = {
  page: {
    sk: 0,
    l: 10
  }
};

var clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var getIsPageZero = function getIsPageZero() {
  return paging_globalProps.page.sk < paging_globalProps.page.l;
};
var resetPaging = function resetPaging() {
  return paging_globalProps.page = {
    sk: 0,
    l: 10
  };
};
var getPage = function getPage() {
  return Object.freeze(clone(paging_globalProps.page));
};
var getNextPage = function getNextPage() {
  paging_globalProps.page.sk += paging_globalProps.page.l;
  return getPage();
};
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("2007");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("0a6e");

// CONCATENATED MODULE: ./src/components/actions-api/filter-to-schema-property-map.js
/* harmony default export */ var filter_to_schema_property_map = ({
  documentStates: ['meta.status'],
  actionCategories: ['actionDetails.actionCategories'],
  aichis: ['actionDetails.aichiTargets'],
  sdgs: ['actionDetails.sdgs'],
  orgTypes: ['actor.types'],
  govTypes: ['actor.types'],
  subjects: ['actionDetails.thematicAreas'],
  countries: ['actionDetails.operationalAreas', 'actor.country.identifier', 'contacts.country.identifier'],
  regions: ['actionDetails.operationalAreas']
});
// CONCATENATED MODULE: ./src/components/actions-api/query.js





















 //primary module api

/* harmony default export */ var query = (function () {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Promise.all([getApi(), getHeaders(), getSearchParams(page)]);
});
var getCountsQuery = function getCountsQuery() {
  return Promise.all([getApi(), getHeaders(), getCountsSearchParams()]);
}; //secondary module api

var getHeaders = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$getOptions, getToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getOptions();

          case 2:
            _yield$getOptions = _context.sent;
            getToken = _yield$getOptions.getToken;
            _context.next = 6;
            return getToken();

          case 6:
            if (!_context.sent) {
              _context.next = 15;
              break;
            }

            _context.t1 = "Ticket ";
            _context.next = 10;
            return getToken();

          case 10:
            _context.t2 = _context.sent;
            _context.t3 = _context.t1.concat.call(_context.t1, _context.t2);
            _context.t0 = {
              Authorization: _context.t3
            };
            _context.next = 16;
            break;

          case 15:
            _context.t0 = {};

          case 16:
            return _context.abrupt("return", _context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getHeaders() {
    return _ref.apply(this, arguments);
  };
}();
var getApi = /*#__PURE__*/function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$getOptions2, api;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getOptions();

          case 2:
            _yield$getOptions2 = _context2.sent;
            api = _yield$getOptions2.api;
            return _context2.abrupt("return", "".concat(api, "/v2019/actions"));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getApi() {
    return _ref2.apply(this, arguments);
  };
}();
var getSearchParams = /*#__PURE__*/function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var page,
        params,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            page = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            _context3.t0 = objectSpread2["a" /* default */];
            _context3.next = 4;
            return query_query();

          case 4:
            _context3.t1 = _context3.sent;
            _context3.t2 = {
              q: _context3.t1
            };
            _context3.t3 = page;
            params = (0, _context3.t0)(_context3.t2, _context3.t3);
            return _context3.abrupt("return", Object(index_min["b" /* toURLSearchParams */])(Object.assign(defaultQuery(), params)));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSearchParams() {
    return _ref3.apply(this, arguments);
  };
}();
var getCountsSearchParams = /*#__PURE__*/function () {
  var _ref4 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return query_query();

          case 2:
            _context4.t0 = _context4.sent;
            params = {
              q: _context4.t0
            };
            return _context4.abrupt("return", Object(index_min["b" /* toURLSearchParams */])(Object.assign(defaultCountsQuery(), params)));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getCountsSearchParams() {
    return _ref4.apply(this, arguments);
  };
}(); // private function

function query_query() {
  return _query.apply(this, arguments);
}

function _query() {
  _query = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var filters, q, _iterator2, _step2, key, type;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            filters = readSearchParams();
            q = {};
            _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(filters);
            _context5.prev = 3;

            _iterator2.s();

          case 5:
            if ((_step2 = _iterator2.n()).done) {
              _context5.next = 15;
              break;
            }

            key = _step2.value;
            _context5.next = 9;
            return getFilterType(key);

          case 9:
            type = _context5.sent;

            if (type) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("continue", 13);

          case 12:
            if (type === '$text') q = addTextQuery(key, q);else q = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, q), getMongoPropertyQuery(type, key));

          case 13:
            _context5.next = 5;
            break;

          case 15:
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](3);

            _iterator2.e(_context5.t0);

          case 20:
            _context5.prev = 20;

            _iterator2.f();

            return _context5.finish(20);

          case 23:
            return _context5.abrupt("return", q);

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 17, 20, 23]]);
  }));
  return _query.apply(this, arguments);
}

function getFilterType(key) {
  if (key.includes('FREETEXT-')) return '$text';
  return D(key);
}

function readSearchParams() {
  var params = new URL(document.location).searchParams;
  return params.getAll('filter');
}

function defaultQuery() {
  var f = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, getMongoFilterFields()), {}, {
    meta: 1,
    'action.name': 1,
    'action.description': 1,
    'action.image': 1,
    actor: 1
  });

  delete f['meta.status'];
  delete f['actor.country.identifier'];
  delete f['actor.types'];
  return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, defaultCountsQuery()), {}, {
    f: f
  });
}

function defaultCountsQuery() {
  var q = {};
  var sk = 0;
  var s = {
    'meta.modifiedOn': -1
  };
  var f = getMongoFilterFields();
  return {
    q: q,
    sk: sk,
    s: s,
    f: f
  };
}

function getMongoFilterFields() {
  var f = {};

  for (var type in filter_to_schema_property_map) {
    var _iterator = Object(createForOfIteratorHelper["a" /* default */])(filter_to_schema_property_map[type]),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        f[prop] = 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return f;
}

function getMongoPropertyQuery(type, key) {
  var q = {};
  var propertyPaths = filter_to_schema_property_map[type];
  propertyPaths.forEach(function (pPath) {
    var noElemMatch = pPath.includes('status') || pPath.includes('identifier');
    q[pPath] = noElemMatch ? key : {
      $elemMatch: {
        identifier: key
      }
    };
  });
  return q;
}

function addTextQuery(key, q) {
  var text = key.replace('FREETEXT-', '');
  if (q && !q.$text) q.$text = {
    $search: "\"".concat(text, "\"")
  };else q.$text.$search += " \"".concat(text, "\"");
  return q;
}
// CONCATENATED MODULE: ./src/components/actions-api/list.js













var list_globalProps = {
  cache: new Map(),
  lastQuery: undefined
};
var list = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var next,
        cache,
        $http,
        isNewQuery,
        page,
        _yield$getQuery,
        _yield$getQuery2,
        api,
        headers,
        searchParams,
        rows,
        msg,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            cache = list_globalProps.cache;
            _context.next = 5;
            return Object(index_min["a" /* get$http */])();

          case 5:
            $http = _context.sent;
            isNewQuery = !next && !getIsPageZero();
            if (isNewQuery) resetPaging();
            page = next ? getNextPage() : getPage();
            _context.next = 11;
            return query(page);

          case 11:
            _yield$getQuery = _context.sent;
            _yield$getQuery2 = Object(slicedToArray["a" /* default */])(_yield$getQuery, 3);
            api = _yield$getQuery2[0];
            headers = _yield$getQuery2[1];
            searchParams = _yield$getQuery2[2];

            if (!cache.has(searchParams.toString())) {
              _context.next = 20;
              break;
            }

            _context.t0 = cache.get(searchParams.toString());
            _context.next = 23;
            break;

          case 20:
            _context.next = 22;
            return $http.get(api, {
              headers: headers,
              searchParams: searchParams
            }).then(function (res) {
              return res.json();
            });

          case 22:
            _context.t0 = _context.sent;

          case 23:
            rows = _context.t0;
            updateCache(searchParams, rows);
            if (next) setTimeout(function () {
              return emitNextPageLoaded();
            }, 250); //$nextPageLoaded

            return _context.abrupt("return", rows);

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](1);
            msg = _context.t1.response ? _context.t1.response.status : '';

            if (!msg) {
              _context.next = 34;
              break;
            }

            return _context.abrupt("return", console.error(msg, _context.t1));

          case 34:
            return _context.abrupt("return", console.error(_context.t1));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 29]]);
  }));

  return function list() {
    return _ref.apply(this, arguments);
  };
}();
var resetListCache = list_reset;

function list_reset() {
  list_globalProps.lastQuery = undefined;
  list_globalProps.cache.clear();
}

function emitNextPageLoaded() {
  return _emitNextPageLoaded.apply(this, arguments);
}

function _emitNextPageLoaded() {
  _emitNextPageLoaded = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$getOptions, $el, event;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getOptions();

          case 2:
            _yield$getOptions = _context2.sent;
            $el = _yield$getOptions.$el;

            if ($el) {
              _context2.next = 6;
              break;
            }

            throw new Error('actions-api->list->emitNextPageLoaded: error $el not set vie actions-api->options->');

          case 6:
            event = new Event('$nextPageLoaded', {
              bubbles: true
            });
            event.$page = getPage();
            $el.dispatchEvent(event);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _emitNextPageLoaded.apply(this, arguments);
}

function updateCache(searchParams, rows) {
  var cache = list_globalProps.cache;
  list_globalProps.lastQuery = searchParams;
  if (cache.has(searchParams.toString())) return;
  cache.set(searchParams.toString(), rows);
}
// CONCATENATED MODULE: ./src/components/actions-api/counts.js

















var counts_globalProps = {
  cache: new Map(),
  lastQuery: undefined,
  total: 0
};
var counts_counts = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var cache, $http, _yield$getCountsQuery, _yield$getCountsQuery2, api, headers, searchParams, _ref2, filterCounts, total, msg;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            cache = counts_globalProps.cache;
            _context2.next = 4;
            return Object(index_min["a" /* get$http */])();

          case 4:
            $http = _context2.sent;
            _context2.next = 7;
            return getCountsQuery();

          case 7:
            _yield$getCountsQuery = _context2.sent;
            _yield$getCountsQuery2 = Object(slicedToArray["a" /* default */])(_yield$getCountsQuery, 3);
            api = _yield$getCountsQuery2[0];
            headers = _yield$getCountsQuery2[1];
            searchParams = _yield$getCountsQuery2[2];

            if (!cache.has(searchParams.toString())) {
              _context2.next = 16;
              break;
            }

            _context2.t0 = cache.get(searchParams.toString());
            _context2.next = 19;
            break;

          case 16:
            _context2.next = 18;
            return $http.get(api, {
              headers: headers,
              searchParams: searchParams
            }).then( /*#__PURE__*/function () {
              var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = calculateCounts;
                        _context.next = 3;
                        return res.json();

                      case 3:
                        _context.t1 = _context.sent;
                        return _context.abrupt("return", (0, _context.t0)(_context.t1));

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 18:
            _context2.t0 = _context2.sent;

          case 19:
            _ref2 = _context2.t0;
            filterCounts = _ref2.filterCounts;
            total = _ref2.total;
            counts_updateCache(searchParams, {
              filterCounts: filterCounts,
              total: total
            });
            return _context2.abrupt("return", {
              filterCounts: filterCounts,
              total: total
            });

          case 26:
            _context2.prev = 26;
            _context2.t1 = _context2["catch"](0);
            msg = _context2.t1.response ? _context2.t1.response.status : '';
            console.error(msg, _context2.t1);

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 26]]);
  }));

  return function counts() {
    return _ref.apply(this, arguments);
  };
}();
var resetCountsCache = counts_reset;

function counts_reset() {
  counts_globalProps.lastQuery = undefined;
  counts_globalProps.cache.clear();
}

function counts_updateCache(searchParams, counts) {
  var cache = counts_globalProps.cache;
  counts_globalProps.lastQuery = searchParams;
  if (cache.has(searchParams.toString())) return;
  cache.set(searchParams.toString(), counts);
} //export const getAllFiltersUsed = async () => new Set(Object.keys(await getCounts()))


function calculateCounts() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var total = data.length;
  var allKeysUsed = extractKeys(data);
  var filterCounts = {};

  var _iterator = Object(createForOfIteratorHelper["a" /* default */])(allKeysUsed),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (filterCounts[key]) filterCounts[key]++;else filterCounts[key] = 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    filterCounts: filterCounts,
    total: total
  };
}

function extractKeys(data) {
  var allKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // eslint-disable-line
  var allKeysUsed = allKeys;
  if (!data) return undefined;

  for (var key in data) {
    if (key === '_id') continue;
    var value = data[key];
    var hasIdentifier = value ? !!value.identifier : false;
    var isString = typeof value === 'string';

    if (isString && isFilterProp(key)) {
      allKeysUsed.push(value);
      continue;
    }

    if (!hasIdentifier) if (Array.isArray(value) && isFilterProp(key)) {
      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          if (element.identifier) allKeysUsed.push(element.identifier);else extractKeys(element, allKeysUsed);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (value instanceof Object) extractKeys(value, allKeysUsed);
    if (hasIdentifier && isFilterProp(key)) allKeysUsed.push(value.identifier);
  }

  return allKeysUsed;
}

function isFilterProp(prop) {
  if (!prop || prop.length < 4) return false;
  var filterProps = [];

  for (var type in filter_to_schema_property_map) {
    filterProps = [].concat(Object(toConsumableArray["a" /* default */])(filterProps), Object(toConsumableArray["a" /* default */])(filter_to_schema_property_map[type]));
  }

  var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(filterProps),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var filterProp = _step3.value;
      if (filterProp.includes(prop)) return true;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return false;
}
// CONCATENATED MODULE: ./src/components/actions-api/index.js




 // eslint-disable-line

var getList = list;
var getCounts = counts_counts;
var actions_api_initializeApi = function initializeApi(options) {
  index_min_N();
  initializeOptions(options);
};
var actions_api_resetCache = function resetCache() {
  resetListCache();
  resetCountsCache();
};
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/index.vue?vue&type=template&id=1e0318d9&scoped=true&
var Listvue_type_template_id_1e0318d9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list"},_vm._l((_vm.rows),function(action,index){return _c('card',_vm._b({key:index},'card',_vm.cardProps(action),false))}),1)}
var Listvue_type_template_id_1e0318d9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/index.vue?vue&type=template&id=1e0318d9&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/index.vue?vue&type=template&id=0b0787b9&scoped=true&
var Cardvue_type_template_id_0b0787b9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card card-row mb-5"},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8 col-sm-4"},[_c('ul',{staticClass:"nav nav-tabs card-header-tabs"},[_c('li',{staticClass:"nav-item",on:{"click":function($event){return _vm.changeTab(1)}}},[_c('a',{staticClass:"nav-link",class:{active:_vm.isActiveTab(1)}},[_vm._v(_vm._s(_vm.$t('action')))])]),_c('li',{staticClass:"nav-item",on:{"click":function($event){return _vm.changeTab(2)}}},[_c('a',{staticClass:"nav-link",class:{active:_vm.isActiveTab(2)}},[_vm._v(_vm._s(_vm.$t('actor')))])])])]),_c('div',{staticClass:"col-sm-4 col-md-4 col-lg-4 text-center d-none d-sm-block"},[(_vm.$me && _vm.$me.hasRole('ActionAdmin'))?_c('State',{attrs:{"status":_vm.meta.status}}):_vm._e()],1),_c('div',{staticClass:"col-4 text-right"},[(_vm.icons.length)?_c('span',_vm._l((_vm.icons),function(icon,index){return _c('span',{key:index},[(icon.image && !icon.url)?_c('img',{staticClass:"action-icon mx-1",attrs:{"src":icon.image,"alt":icon.name}}):_vm._e(),(icon.image && icon.url)?_c('a',{attrs:{"href":icon.url,"hreflang":"en","title":icon.name}},[_c('img',{staticClass:"action-icon mx-1",attrs:{"src":icon.image,"alt":icon.name}})]):_vm._e()])}),0):_vm._e(),(_vm.$me && _vm.$me.hasRole('ActionAdmin'))?_c('State',{staticClass:".d-block .d-sm-none",attrs:{"status":_vm.meta.status}}):_vm._e()],1)])]),(_vm.isActiveTab(1))?_c('HorzCardAction',_vm._b({},'HorzCardAction',Object.assign({}, _vm.action, {actionDetails: _vm.actionDetails}),false)):_vm._e(),(_vm.isActiveTab(2))?_c('EntityView',{attrs:{"entity":_vm.actor}}):_vm._e(),_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"btn-group",attrs:{"role":"group","aria-label":"Card actions, view, edit publish, reject"}},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.go(_vm._id)}}},[_vm._v(_vm._s(_vm.$t('viewAction')))]),(_vm.$me && _vm.$me.hasRole('ActionAdmin') && _vm.status!=='published')?_c('button',{staticClass:"btn btn-outline-dark btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.changeStatus(_vm._id,'publish')}}},[_vm._v("Publish")]):_vm._e(),(_vm.$me && _vm.$me.hasRole('ActionAdmin') && _vm.status!=='draft')?_c('button',{staticClass:"btn btn-outline-dark btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.changeStatus(_vm._id,'draft')}}},[_vm._v("Unpublish")]):_vm._e(),(_vm.$me && _vm.$me.hasRole('ActionAdmin') && _vm.status!=='rejected')?_c('button',{staticClass:"btn btn-outline-dark btn-sm",attrs:{"type":"button"},on:{"click":function($event){return _vm.changeStatus(_vm._id,'reject')}}},[_vm._v("Reject")]):_vm._e()]),_c('small',{staticClass:"text-muted float-right"},[_vm._v(_vm._s(_vm._f("dateFormat")(_vm.meta.modifiedOn)))])])],1)}
var Cardvue_type_template_id_0b0787b9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/index.vue?vue&type=template&id=0b0787b9&scoped=true&

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("9a51");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/index.vue?vue&type=template&id=4aa22f6d&
var Actorvue_type_template_id_4aa22f6d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(_vm.isOrg)?_c('Organization',_vm._b({},'Organization',_vm.entity,false)):_vm._e(),(_vm.isPerson)?_c('Person',_vm._b({},'Person',_vm.entity,false)):_vm._e(),(_vm.isGov)?_c('Government',_vm._b({},'Government',_vm.entity,false)):_vm._e()],1)}
var Actorvue_type_template_id_4aa22f6d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/Actor/index.vue?vue&type=template&id=4aa22f6d&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Organization.vue?vue&type=template&id=782814cd&scoped=true&
var Organizationvue_type_template_id_782814cd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row no-gutters"},[_c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.name.en)+" ")]),(_vm.cleanUrl)?_c('p',{staticClass:"card-text"},[_c('a',{attrs:{"href":_vm.cleanUrl,"target":"_blank","rel":"noopener noreferrer"}},[_vm._v(_vm._s(_vm.url))])]):_vm._e(),_c('p',{staticClass:"card-text"},[_c('span',{staticClass:"badge badge-pill badge-secondary"},[_vm._v(_vm._s(_vm.getCountry.name))])]),(_vm.getOrgTypes.length)?_c('p',{staticClass:"card-text"},_vm._l((_vm.getOrgTypes),function(t,index){return _c('span',{key:index,staticClass:"badge badge-pill badge-dark mx-1"},[_vm._v(" "+_vm._s(t.name)+" ")])}),0):_vm._e()])])])}
var Organizationvue_type_template_id_782814cd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/Actor/Organization.vue?vue&type=template&id=782814cd&scoped=true&

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("2c93");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Organization.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Organizationvue_type_script_lang_js_ = ({
  name: 'Organization',
  props: {
    name: {
      type: Object,
      required: true
    },
    types: {
      type: Array,
      required: true
    },
    image: {
      type: Object
    },
    url: {
      type: String,
      required: false
    },
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    trimHyperTextProtocol: trimHyperTextProtocol
  },
  data: Organizationvue_type_script_lang_js_data,
  mounted: Organizationvue_type_script_lang_js_mounted,
  created: created
});

function Organizationvue_type_script_lang_js_data() {
  return {
    getOrgTypes: [],
    getCountry: {},
    cleanUrl: ''
  };
}

function created() {
  return _created.apply(this, arguments);
}

function _created() {
  _created = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return addProtocol(this.url);

          case 2:
            this.cleanUrl = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _created.apply(this, arguments);
}

function Organizationvue_type_script_lang_js_mounted() {
  return Actor_Organizationvue_type_script_lang_js_mounted.apply(this, arguments);
}

function Actor_Organizationvue_type_script_lang_js_mounted() {
  Actor_Organizationvue_type_script_lang_js_mounted = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return b('countries', this.country, true);

          case 2:
            this.getCountry = _context2.sent;
            _context2.next = 5;
            return b('orgTypes', this.types);

          case 5:
            this.getOrgTypes = _context2.sent;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return Actor_Organizationvue_type_script_lang_js_mounted.apply(this, arguments);
}

function testUri(_x) {
  return _testUri.apply(this, arguments);
}

function _testUri() {
  _testUri = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
    var $http, headers, _yield$$http$post, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(index_min["a" /* get$http */])();

          case 2:
            $http = _context3.sent;
            headers = {
              Authorization: 'Bearer svOIo5CkADUxtddDIQsmSufMxrntG6WtIGDAQEuGMV1HGKM1RS1F5BmPspcL0YSK'
            };
            _context3.next = 6;
            return $http.post('https://injo3jyxlb.execute-api.us-east-1.amazonaws.com/stg/test', {
              json: {
                body: {
                  url: url
                }
              },
              headers: headers
            });

          case 6:
            _yield$$http$post = _context3.sent;
            data = _yield$$http$post.data;
            return _context3.abrupt("return", data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _testUri.apply(this, arguments);
}

function trimHyperTextProtocol(urlStr) {
  try {
    var _URL = new URL(urlStr),
        host = _URL.host,
        pathname = _URL.pathname,
        search = _URL.search;

    var cleanPath = pathname.length === 1 ? '' : pathname;
    return "".concat(host).concat(cleanPath).concat(search);
  } catch (ex) {
    return urlStr;
  }
}

function addProtocol(_x2) {
  return _addProtocol.apply(this, arguments);
}

function _addProtocol() {
  _addProtocol = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(urlStr) {
    var url, https, http;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (urlStr) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", '');

          case 2:
            url = trimHyperTextProtocol(urlStr);
            https = "https://".concat(url);
            http = "http://".concat(url);
            _context4.next = 7;
            return testUri(https);

          case 7:
            if (!_context4.sent) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", https);

          case 9:
            _context4.next = 11;
            return testUri(http);

          case 11:
            if (!_context4.sent) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", http);

          case 13:
            return _context4.abrupt("return", '');

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addProtocol.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/components/List/Card/Actor/Organization.vue?vue&type=script&lang=js&
 /* harmony default export */ var Actor_Organizationvue_type_script_lang_js_ = (Organizationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/Card/Actor/Organization.vue?vue&type=style&index=0&id=782814cd&scoped=true&lang=css&
var Organizationvue_type_style_index_0_id_782814cd_scoped_true_lang_css_ = __webpack_require__("c19e");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./src/locales/index.json?vue&type=custom&index=0&blockType=i18n&issuerPath=%2FUsers%2Frandyhoulahan%2Fprojects%2F%40scbd%2Fecosystem%2Fpackages%2Faction-search%2Fsrc%2Fcomponents%2FList%2FCard%2FActor%2FOrganization.vue
var localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization = __webpack_require__("e3fb");

// CONCATENATED MODULE: ./src/components/List/Card/Actor/Organization.vue






/* normalize component */

var component = normalizeComponent(
  Actor_Organizationvue_type_script_lang_js_,
  Organizationvue_type_template_id_782814cd_scoped_true_render,
  Organizationvue_type_template_id_782814cd_scoped_true_staticRenderFns,
  false,
  null,
  "782814cd",
  null
  
)

/* custom blocks */

if (typeof localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization["default"] === 'function') Object(localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization["default"])(component)

/* harmony default export */ var Organization = (component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Person.vue?vue&type=template&id=7be58bc0&scoped=true&
var Personvue_type_template_id_7be58bc0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row no-gutters"},[_c('div',{class:{'col-sm-11':_vm.image,'col-sm-12':!_vm.image}},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(" "+_vm._s(_vm.name[_vm.$i18n.locale])+" ")]),(_vm.department)?_c('p',{staticClass:"card-text text-muted"},[_vm._v(" "+_vm._s((_vm.department||{}).en)+" ")]):_vm._e(),_c('p',{staticClass:"card-text"},[_c('span',{staticClass:"badge badge-pill badge-secondary"},[_vm._v(_vm._s(_vm.getCountry.name))])]),_c('p',{staticClass:"card-text"},[_c('a',{staticClass:"badge badge-pill badge-dark",attrs:{"href":("mailto:" + _vm.email)}},[_vm._v(_vm._s(_vm.email))]),_c('a',{staticClass:"badge badge-pill badge-dark",attrs:{"href":("tel:" + _vm.phone)}},[_vm._v(_vm._s(_vm.phone))])])])]),(_vm.image)?_c('div',{staticClass:"col-sm-1"},[_c('img',{staticClass:"card-img rounded-0",attrs:{"src":_vm.image,"alt":_vm.name}})]):_vm._e()])}
var Personvue_type_template_id_7be58bc0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/Actor/Person.vue?vue&type=template&id=7be58bc0&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Person.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Personvue_type_script_lang_js_ = ({
  name: 'Person',
  props: {
    prefix: {
      type: [Object],
      default: function _default() {}
    },
    firstName: {
      type: [Object],
      default: function _default() {}
    },
    lastName: {
      type: Object
    },
    name: {
      type: [Object],
      default: function _default() {}
    },
    department: {
      type: [Object],
      default: function _default() {}
    },
    country: {
      type: Object,
      identifier: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    image: {
      type: String
    }
  },
  data: Personvue_type_script_lang_js_data,
  mounted: Personvue_type_script_lang_js_mounted
});

function Personvue_type_script_lang_js_data() {
  return {
    getCountry: {}
  };
}

function Personvue_type_script_lang_js_mounted() {
  return Actor_Personvue_type_script_lang_js_mounted.apply(this, arguments);
}

function Actor_Personvue_type_script_lang_js_mounted() {
  Actor_Personvue_type_script_lang_js_mounted = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return b('countries', this.country, true);

          case 2:
            this.getCountry = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return Actor_Personvue_type_script_lang_js_mounted.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/components/List/Card/Actor/Person.vue?vue&type=script&lang=js&
 /* harmony default export */ var Actor_Personvue_type_script_lang_js_ = (Personvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/Card/Actor/Person.vue?vue&type=style&index=0&id=7be58bc0&scoped=true&lang=css&
var Personvue_type_style_index_0_id_7be58bc0_scoped_true_lang_css_ = __webpack_require__("42c9");

// CONCATENATED MODULE: ./src/components/List/Card/Actor/Person.vue






/* normalize component */

var Person_component = normalizeComponent(
  Actor_Personvue_type_script_lang_js_,
  Personvue_type_template_id_7be58bc0_scoped_true_render,
  Personvue_type_template_id_7be58bc0_scoped_true_staticRenderFns,
  false,
  null,
  "7be58bc0",
  null
  
)

/* harmony default export */ var Person = (Person_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Government.vue?vue&type=template&id=50db6d86&scoped=true&
var Governmentvue_type_template_id_50db6d86_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row no-gutters"},[_c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.getCountry.name)+" ")]),_c('p',{staticClass:"card-text"},[_vm._v(" "+_vm._s(_vm.name.en)+" ")]),_c('p',{staticClass:"card-text"},[_c('a',{attrs:{"href":_vm.url}},[_vm._v(_vm._s(_vm.url))])]),_c('p',{staticClass:"card-text"},_vm._l((_vm.getOrgTypes),function(t,index){return _c('span',{key:index,staticClass:"badge badge-pill badge-dark mx-1"},[_vm._v(" "+_vm._s(t.name)+" ")])}),0)])])])}
var Governmentvue_type_template_id_50db6d86_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/Actor/Government.vue?vue&type=template&id=50db6d86&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/Government.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Governmentvue_type_script_lang_js_ = ({
  name: 'OrganizationView',
  props: {
    name: {
      type: Object,
      required: true
    },
    types: {
      type: Array,
      required: true
    },
    image: {
      type: Object
    },
    url: {
      type: String,
      required: false
    },
    country: {
      type: Object,
      required: true
    }
  },
  data: Governmentvue_type_script_lang_js_data,
  mounted: Governmentvue_type_script_lang_js_mounted
});

function Governmentvue_type_script_lang_js_data() {
  return {
    getOrgTypes: [],
    getCountry: {}
  };
}

function Governmentvue_type_script_lang_js_mounted() {
  return Actor_Governmentvue_type_script_lang_js_mounted.apply(this, arguments);
}

function Actor_Governmentvue_type_script_lang_js_mounted() {
  Actor_Governmentvue_type_script_lang_js_mounted = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return b('countries', this.country, true);

          case 2:
            this.getCountry = _context.sent;
            _context.next = 5;
            return b('orgTypes', this.types);

          case 5:
            this.getOrgTypes = _context.sent;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return Actor_Governmentvue_type_script_lang_js_mounted.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/components/List/Card/Actor/Government.vue?vue&type=script&lang=js&
 /* harmony default export */ var Actor_Governmentvue_type_script_lang_js_ = (Governmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/Card/Actor/Government.vue?vue&type=style&index=0&id=50db6d86&scoped=true&lang=css&
var Governmentvue_type_style_index_0_id_50db6d86_scoped_true_lang_css_ = __webpack_require__("cab4");

// EXTERNAL MODULE: ./src/locales/index.json?vue&type=custom&index=0&blockType=i18n&issuerPath=%2FUsers%2Frandyhoulahan%2Fprojects%2F%40scbd%2Fecosystem%2Fpackages%2Faction-search%2Fsrc%2Fcomponents%2FList%2FCard%2FActor%2FGovernment.vue
var localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment = __webpack_require__("03dd");

// CONCATENATED MODULE: ./src/components/List/Card/Actor/Government.vue






/* normalize component */

var Government_component = normalizeComponent(
  Actor_Governmentvue_type_script_lang_js_,
  Governmentvue_type_template_id_50db6d86_scoped_true_render,
  Governmentvue_type_template_id_50db6d86_scoped_true_staticRenderFns,
  false,
  null,
  "50db6d86",
  null
  
)

/* custom blocks */

if (typeof localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment["default"] === 'function') Object(localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FGovernment["default"])(Government_component)

/* harmony default export */ var Government = (Government_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/Actor/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//



/* harmony default export */ var Actorvue_type_script_lang_js_ = ({
  name: 'Entity',
  components: {
    Person: Person,
    Organization: Organization,
    Government: Government
  },
  props: {
    entity: {
      type: Object
    }
  },
  computed: {
    isPerson: isPerson,
    isOrg: isOrg,
    isGov: isGov
  },
  data: Actorvue_type_script_lang_js_data
});

function Actorvue_type_script_lang_js_data() {
  return {
    actorType: this.entity.actorType
  };
}

function isPerson() {
  return this.actorType.includes('person');
}

function isOrg() {
  return this.actorType.includes('organization');
}

function isGov() {
  return this.actorType.includes('government');
}
// CONCATENATED MODULE: ./src/components/List/Card/Actor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Actorvue_type_script_lang_js_ = (Actorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/List/Card/Actor/index.vue





/* normalize component */

var Actor_component = normalizeComponent(
  Card_Actorvue_type_script_lang_js_,
  Actorvue_type_template_id_4aa22f6d_render,
  Actorvue_type_template_id_4aa22f6d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Actor = (Actor_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/CardAction.vue?vue&type=template&id=3ec6316d&scoped=true&
var CardActionvue_type_template_id_3ec6316d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row no-gutters"},[_c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.nameComp))]),_c('p',{staticClass:"card-text desc"},[_vm._v(" "+_vm._s(_vm.descriptionComp)+" ")]),(_vm.icons.length)?_c('span',_vm._l((_vm.icons),function(icon,index){return _c('span',{key:index},[(icon.image && !icon.url)?_c('img',{staticClass:"action-icon mx-1",attrs:{"src":icon.image,"alt":icon.name}}):_vm._e(),(icon.image && icon.url)?_c('a',{attrs:{"href":icon.url,"hreflang":"en","title":icon.name}},[_c('img',{staticClass:"action-icon mx-1",attrs:{"src":icon.image,"alt":icon.name}})]):_vm._e()])}),0):_vm._e()])])])])}
var CardActionvue_type_template_id_3ec6316d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/CardAction.vue?vue&type=template&id=3ec6316d&scoped=true&

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("d6de");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("8d0f");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/CardAction.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CardActionvue_type_script_lang_js_ = ({
  name: 'CardAction',
  props: {
    name: {
      type: Object,
      required: true
    },
    description: {
      type: Object,
      required: true
    },
    actionDetails: {
      type: Object
    }
  },
  computed: {
    nameComp: nameComp,
    descriptionComp: descriptionComp
  },
  methods: {
    loadIcons: loadIcons
  },
  updated: updated,
  created: CardActionvue_type_script_lang_js_created,
  data: CardActionvue_type_script_lang_js_data
});

function CardActionvue_type_script_lang_js_data() {
  return {
    icons: []
  };
}

function updated() {
  return _updated.apply(this, arguments);
}

function _updated() {
  _updated = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.loadIcons();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _updated.apply(this, arguments);
}

function CardActionvue_type_script_lang_js_created() {
  return Card_CardActionvue_type_script_lang_js_created.apply(this, arguments);
}

function Card_CardActionvue_type_script_lang_js_created() {
  Card_CardActionvue_type_script_lang_js_created = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.loadIcons();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return Card_CardActionvue_type_script_lang_js_created.apply(this, arguments);
}

function loadIcons() {
  return _loadIcons.apply(this, arguments);
}

function _loadIcons() {
  _loadIcons = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _this$actionDetails, aichiTargets, sdgs, iconData, _iterator, _step, _step$value, index, identifier;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (this.actionDetails) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return");

          case 2:
            _this$actionDetails = this.actionDetails, aichiTargets = _this$actionDetails.aichiTargets, sdgs = _this$actionDetails.sdgs;
            iconData = [].concat(Object(toConsumableArray["a" /* default */])(aichiTargets || []), Object(toConsumableArray["a" /* default */])(sdgs || [])).concat();

            if (iconData.length) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            _iterator = Object(createForOfIteratorHelper["a" /* default */])(iconData.entries());
            _context3.prev = 7;

            _iterator.s();

          case 9:
            if ((_step = _iterator.n()).done) {
              _context3.next = 16;
              break;
            }

            _step$value = Object(slicedToArray["a" /* default */])(_step.value, 2), index = _step$value[0], identifier = _step$value[1].identifier;
            _context3.next = 13;
            return b('all', identifier, true);

          case 13:
            iconData[index] = _context3.sent;

          case 14:
            _context3.next = 9;
            break;

          case 16:
            _context3.next = 21;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](7);

            _iterator.e(_context3.t0);

          case 21:
            _context3.prev = 21;

            _iterator.f();

            return _context3.finish(21);

          case 24:
            this.icons = iconData;

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[7, 18, 21, 24]]);
  }));
  return _loadIcons.apply(this, arguments);
}

function nameComp() {
  var locale = c();
  return this.name[locale] || this.name['en'];
}

function descriptionComp() {
  var locale = c();
  return this.description[locale] || this.description['en'];
}
// CONCATENATED MODULE: ./src/components/List/Card/CardAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardActionvue_type_script_lang_js_ = (CardActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/Card/CardAction.vue?vue&type=style&index=0&id=3ec6316d&scoped=true&lang=css&
var CardActionvue_type_style_index_0_id_3ec6316d_scoped_true_lang_css_ = __webpack_require__("6a91");

// CONCATENATED MODULE: ./src/components/List/Card/CardAction.vue






/* normalize component */

var CardAction_component = normalizeComponent(
  Card_CardActionvue_type_script_lang_js_,
  CardActionvue_type_template_id_3ec6316d_scoped_true_render,
  CardActionvue_type_template_id_3ec6316d_scoped_true_staticRenderFns,
  false,
  null,
  "3ec6316d",
  null
  
)

/* harmony default export */ var CardAction = (CardAction_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/State.vue?vue&type=template&id=17da42b6&
var Statevue_type_template_id_17da42b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(_vm.is('published'))?_c('span',{staticClass:"badge badge-success "},[_vm._v(" Published ")]):_vm._e(),(_vm.is('draft'))?_c('span',{staticClass:"badge badge-danger "},[_vm._v(" New ")]):_vm._e(),(_vm.is('rejected'))?_c('span',{staticClass:"badge badge-warning "},[_vm._v(" Rejected ")]):_vm._e(),(_vm.is('deleted'))?_c('span',{staticClass:"badge badge-warning "},[_vm._v(" Deleted ")]):_vm._e()])}
var Statevue_type_template_id_17da42b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List/Card/State.vue?vue&type=template&id=17da42b6&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/State.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Statevue_type_script_lang_js_ = ({
  name: 'State',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  methods: {
    is: is
  }
});

function is(status) {
  return this.status === status;
}
// CONCATENATED MODULE: ./src/components/List/Card/State.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Statevue_type_script_lang_js_ = (Statevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/List/Card/State.vue





/* normalize component */

var State_component = normalizeComponent(
  Card_Statevue_type_script_lang_js_,
  Statevue_type_template_id_17da42b6_render,
  Statevue_type_template_id_17da42b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var State = (State_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/Card/index.vue?vue&type=script&lang=js&











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'SearchListCard',
  components: {
    HorzCardAction: CardAction,
    EntityView: Actor,
    State: State
  },
  props: {
    _id: {
      type: String,
      required: true
    },
    actor: {
      type: Object,
      required: true
    },
    action: {
      type: Object,
      required: true
    },
    actionDetails: {
      type: Object
    },
    meta: {
      type: Object
    },
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    status: Cardvue_type_script_lang_js_status
  },
  methods: {
    changeTab: changeTab,
    isActiveTab: isActiveTab,
    getStatusUrl: getStatusUrl,
    changeStatus: changeStatus,
    go: go,
    loadIcons: Cardvue_type_script_lang_js_loadIcons
  },
  filters: {
    dateFormat: dateFormat
  },
  data: Cardvue_type_script_lang_js_data,
  created: Cardvue_type_script_lang_js_created,
  updated: Cardvue_type_script_lang_js_updated
});

function Cardvue_type_script_lang_js_data() {
  return {
    activeTab: 1,
    icons: []
  };
}

function Cardvue_type_script_lang_js_updated() {
  return List_Cardvue_type_script_lang_js_updated.apply(this, arguments);
}

function List_Cardvue_type_script_lang_js_updated() {
  List_Cardvue_type_script_lang_js_updated = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.loadIcons();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return List_Cardvue_type_script_lang_js_updated.apply(this, arguments);
}

function Cardvue_type_script_lang_js_created() {
  return List_Cardvue_type_script_lang_js_created.apply(this, arguments);
}

function List_Cardvue_type_script_lang_js_created() {
  List_Cardvue_type_script_lang_js_created = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.loadIcons();

          case 2:
            this.activeTab = 1;

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return List_Cardvue_type_script_lang_js_created.apply(this, arguments);
}

function Cardvue_type_script_lang_js_status() {
  return this.meta.status;
}

function changeTab(tab) {
  this.activeTab = tab;
}

function isActiveTab(tab) {
  return this.activeTab === tab;
}

function go(_id) {
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname;
  window.location.href = "".concat(origin).concat(stripTrailingSlash(pathname), "/action?action-id=").concat(_id);
}

function stripTrailingSlash(str) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

function getStatusUrl(id, status) {
  return "".concat(this.options.api, "/v2019/actions/").concat(id, "/status/").concat(status);
}

function dateFormat(date) {
  var d = new Date(date);
  return "".concat(d.getUTCFullYear(), "-").concat(monthFormat(d.getUTCMonth()), "-").concat(dayFormat(d.getUTCDate()), "  ");
}

function monthFormat(month) {
  if (month < 10) return "0".concat(month + 1);
  return month + 1;
}

function dayFormat(day) {
  if (day < 10) return "0".concat(day);
  return day;
}

function changeStatus(_x, _x2) {
  return _changeStatus.apply(this, arguments);
}

function _changeStatus() {
  _changeStatus = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_id, status) {
    var $http, apiUrl, headers, result, event;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(index_min["a" /* get$http */])();

          case 3:
            $http = _context3.sent;
            apiUrl = this.getStatusUrl(_id, status);
            headers = this.$auth.token ? {
              Authorization: "Ticket ".concat(this.$auth.token)
            } : {};
            _context3.next = 8;
            return $http.post(apiUrl, {
              json: {},
              headers: headers
            });

          case 8:
            result = _context3.sent.data;
            this.$emit('status-change', {
              _id: _id,
              status: status
            });
            event = new Event('$me', {
              bubbles: true
            });
            event.$me = this.$me;
            event.$auth = this.$auth;
            this.$el.dispatchEvent(event);
            return _context3.abrupt("return", result);

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            console.error('AAList card.changeStatus: ', _context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 17]]);
  }));
  return _changeStatus.apply(this, arguments);
}

function Cardvue_type_script_lang_js_loadIcons() {
  return List_Cardvue_type_script_lang_js_loadIcons.apply(this, arguments);
}

function List_Cardvue_type_script_lang_js_loadIcons() {
  List_Cardvue_type_script_lang_js_loadIcons = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var iconData, _iterator, _step, _step$value, index, identifier;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            iconData = Object(toConsumableArray["a" /* default */])((this.actionDetails || {}).actionCategories || []);

            if (iconData.length) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return");

          case 3:
            _iterator = Object(createForOfIteratorHelper["a" /* default */])(iconData.entries());
            _context4.prev = 4;

            _iterator.s();

          case 6:
            if ((_step = _iterator.n()).done) {
              _context4.next = 17;
              break;
            }

            _step$value = Object(slicedToArray["a" /* default */])(_step.value, 2), index = _step$value[0], identifier = _step$value[1].identifier;
            _context4.next = 10;
            return b('all', identifier, true);

          case 10:
            iconData[index] = _context4.sent;

            if (iconData[index]) {
              _context4.next = 15;
              break;
            }

            console.error('id', this._id);
            console.error('iconData', iconData);
            throw new Error('identifier not found');

          case 15:
            _context4.next = 6;
            break;

          case 17:
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](4);

            _iterator.e(_context4.t0);

          case 22:
            _context4.prev = 22;

            _iterator.f();

            return _context4.finish(22);

          case 25:
            this.icons = iconData;

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[4, 19, 22, 25]]);
  }));
  return List_Cardvue_type_script_lang_js_loadIcons.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/components/List/Card/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var List_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/Card/index.vue?vue&type=style&index=0&id=0b0787b9&scoped=true&lang=css&
var Cardvue_type_style_index_0_id_0b0787b9_scoped_true_lang_css_ = __webpack_require__("7c4f");

// EXTERNAL MODULE: ./src/locales/index.json?vue&type=custom&index=0&blockType=i18n&issuerPath=%2FUsers%2Frandyhoulahan%2Fprojects%2F%40scbd%2Fecosystem%2Fpackages%2Faction-search%2Fsrc%2Fcomponents%2FList%2FCard%2Findex.vue
var localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex = __webpack_require__("047a");

// CONCATENATED MODULE: ./src/components/List/Card/index.vue






/* normalize component */

var Card_component = normalizeComponent(
  List_Cardvue_type_script_lang_js_,
  Cardvue_type_template_id_0b0787b9_scoped_true_render,
  Cardvue_type_template_id_0b0787b9_scoped_true_staticRenderFns,
  false,
  null,
  "0b0787b9",
  null
  
)

/* custom blocks */

if (typeof localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex["default"] === 'function') Object(localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2Findex["default"])(Card_component)

/* harmony default export */ var Card = (Card_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/List/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//

/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  name: 'SearchList',
  components: {
    Card: Card
  },
  props: {
    rows: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    onScroll: {
      type: Function,
      required: true
    }
  },
  methods: {
    cardProps: cardProps
  },
  mounted: Listvue_type_script_lang_js_mounted,
  beforeDestroy: beforeDestroy
});

function Listvue_type_script_lang_js_mounted() {
  window.addEventListener('scroll', this.onScroll(this.$el));
}

function beforeDestroy() {
  window.removeEventListener('scroll', this.onScroll(this.$el));
}

function cardProps(action) {
  return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, action), {}, {
    options: this.options
  });
}
// CONCATENATED MODULE: ./src/components/List/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/List/index.vue?vue&type=style&index=0&id=1e0318d9&scoped=true&lang=css&
var Listvue_type_style_index_0_id_1e0318d9_scoped_true_lang_css_ = __webpack_require__("1b53");

// CONCATENATED MODULE: ./src/components/List/index.vue






/* normalize component */

var List_component = normalizeComponent(
  components_Listvue_type_script_lang_js_,
  Listvue_type_template_id_1e0318d9_scoped_true_render,
  Listvue_type_template_id_1e0318d9_scoped_true_staticRenderFns,
  false,
  null,
  "1e0318d9",
  null
  
)

/* harmony default export */ var List = (List_component.exports);
// CONCATENATED MODULE: ./src/default-options.js



var default_options_name = '@scbd/search';
var basePath = '/';
var default_options_locale = c();
var dev = {
  api: 'https://api.cbddev.xyz/api',
  basePath: basePath,
  locale: default_options_locale
};

var stg = Object(objectSpread2["a" /* default */])({}, dev);

var prod = Object(objectSpread2["a" /* default */])({
  api: 'https://www.cbd.int/api'
}, stg);

var environments = {
  prod: prod,
  stg: stg,
  dev: dev
};
var validationMap = {
  forceEnv: String,
  basePath: String,
  locale: String,
  api: String,
  listenExternally: Boolean
};
Object(esm_index_min["b" /* setDefaultOptions */])({
  environments: environments,
  validationMap: validationMap,
  name: default_options_name
}, default_options_name);
/* harmony default export */ var default_options = (Object(esm_index_min["a" /* getDefaultOptionsFunction */])(default_options_name));
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/FilterNav.vue?vue&type=template&id=376739eb&scoped=true&
var FilterNavvue_type_template_id_376739eb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"filter-nav"},[_c('nav',{staticClass:"navbar navbar-light bg-light px-0 px-sm-2"},[_c('div',{staticClass:"col-12"},[_c('AllFiltersSelect',{ref:"allFiltersSelect",attrs:{"id":"filter-all","placeholder":'Search or Filter'.split(' '),"options":_vm.options,"add-text-search":_vm.addTextSearch,"on-change":_vm.onChange,"countsMap":_vm.countsMap},model:{value:(_vm.filters),callback:function ($$v) {_vm.filters=$$v},expression:"filters"}})],1)])])}
var FilterNavvue_type_template_id_376739eb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FilterNav.vue?vue&type=template&id=376739eb&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/AllFiltersSelect.vue?vue&type=template&id=79e86dfd&
var AllFiltersSelectvue_type_template_id_79e86dfd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('multiselect',{ref:"multiSelect",staticClass:"fix",attrs:{"id":_vm.id,"placeholder":_vm.placeholder.join(' '),"track-by":"identifier","label":"name","options":_vm.options,"multiple":true,"taggable":true,"group-values":"data","group-label":"filter","group-select":false,"searchable":true,"tag-placeholder":"Press enter to apply free text search or click the Search button","hide-selected":true},on:{"tag":_vm.addTextSearch,"input":_vm.update,"select":_vm.onChange,"close":_vm.onClose,"remove":_vm.onChange},scopedSlots:_vm._u([{key:"option",fn:function(props){return [(props.option.$groupLabel)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('span',{staticClass:"filter-label"},[_vm._v(_vm._s(props.option.$groupLabel))])])]):_vm._e(),(!props.option.$groupLabel)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-1 text-center"},[(!props.option.image)?_c('span'):_vm._e(),(props.option.image)?_c('img',{staticClass:"option-image",attrs:{"src":props.option.image,"alt":props.option.name}}):_vm._e()]),_c('div',{staticClass:"col-11"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.highLight(props))}}),(props.option.desc)?_c('span',{staticClass:"small muted"},[_vm._v(_vm._s(props.option.description))]):_vm._e(),_c('span',[_vm._v(" "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v(_vm._s(_vm.counts(props.option)))])])])]):_vm._e()]}}]),model:{value:(_vm.values),callback:function ($$v) {_vm.values=$$v},expression:"values"}},[_c('template',{slot:"beforeList"},[(_vm.latestSearchText)?_c('div',[_c('button',{staticClass:"btn btn-outline-info my-3 mx-3",attrs:{"type":"button"},on:{"click":function($event){_vm.addTextSearch(_vm.latestSearchText); _vm.$refs.multiSelect.deactivate()}}},[_vm._v(_vm._s(_vm.$t('search')))])]):_vm._e()]),_c('template',{slot:"placeholder"},[_c('Icon',{attrs:{"name":"search"}}),_vm._v(" "+_vm._s(_vm.placeholder[0])+" "+_vm._s(_vm.placeholder[1])+" "),_c('Icon',{attrs:{"name":"filter"}}),_vm._v(" "+_vm._s(_vm.placeholder[2])+" ")],1)],2)}
var AllFiltersSelectvue_type_template_id_79e86dfd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AllFiltersSelect.vue?vue&type=template&id=79e86dfd&

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("88a1");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("4ba7");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=template&id=1586e178&functional=true&
var Iconvue_type_template_id_1586e178_functional_true_render = function (_h,_vm) {
var _obj;
var _c=_vm._c;return _c('svg',{staticClass:"icon",class:( _obj = {}, _obj[("icon-" + (_vm.props.name))] = true, _obj )},[_c('use',{attrs:{"xlink:href":("#icon-" + (_vm.props.name))}})])}
var Iconvue_type_template_id_1586e178_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=template&id=1586e178&functional=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  name: 'Icon',
  props: ['name']
});
// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Icon.vue





/* normalize component */

var Icon_component = normalizeComponent(
  components_Iconvue_type_script_lang_js_,
  Iconvue_type_template_id_1586e178_functional_true_render,
  Iconvue_type_template_id_1586e178_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var Icon = (Icon_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/AllFiltersSelect.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AllFiltersSelectvue_type_script_lang_js_ = ({
  name: 'SCBDSelect',
  components: {
    Multiselect: vue_multiselect_min_default.a,
    Icon: Icon
  },
  props: {
    name: {},
    id: {
      type: String,
      required: true
    },
    value: {
      type: [Array, Object, String],
      required: true
    },
    placeholder: {
      type: Array
    },
    options: {
      type: Array,
      required: true
    },
    addTextSearch: {
      type: Function,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    },
    countsMap: {
      type: Object
    }
  },
  methods: {
    update: update,
    highLight: highLight,
    onClose: onClose
  },
  computed: {
    counts: AllFiltersSelectvue_type_script_lang_js_counts
  },
  data: AllFiltersSelectvue_type_script_lang_js_data
});

function AllFiltersSelectvue_type_script_lang_js_counts() {
  var _this = this;

  return function (_ref) {
    var identifier = _ref.identifier;
    if (!_this.countsMap) return 'ZERO';
    return _this.countsMap[identifier];
  };
}

function AllFiltersSelectvue_type_script_lang_js_data() {
  return {
    values: this.value,
    isLoading: false,
    latestSearchText: ''
  };
}

function update() {
  this.$emit('input', this.values);
}

function onClose() {
  this.latestSearchText = '';
}

function highLight(_ref2) {
  var search = _ref2.search,
      option = _ref2.option;
  if (search) this.latestSearchText = search; // catch current search value

  if (!search || !option.name) return option.name;
  var regEx = new RegExp(search, 'ig');
  return option.name.replace(regEx, "<span style=\"font-weight: 900;\">".concat(search, "</span>"));
}
// CONCATENATED MODULE: ./src/components/AllFiltersSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AllFiltersSelectvue_type_script_lang_js_ = (AllFiltersSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AllFiltersSelect.vue?vue&type=style&index=0&lang=css&
var AllFiltersSelectvue_type_style_index_0_lang_css_ = __webpack_require__("48e2");

// CONCATENATED MODULE: ./src/components/AllFiltersSelect.vue






/* normalize component */

var AllFiltersSelect_component = normalizeComponent(
  components_AllFiltersSelectvue_type_script_lang_js_,
  AllFiltersSelectvue_type_template_id_79e86dfd_render,
  AllFiltersSelectvue_type_template_id_79e86dfd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AllFiltersSelect = (AllFiltersSelect_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/FilterNav.vue?vue&type=script&lang=js&






















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FilterNavvue_type_script_lang_js_ = ({
  name: 'SearchFilterNav',
  props: {
    getCounts: {
      type: Function,
      required: true
    },
    adminRole: {
      type: [Array, String]
    }
  },
  components: {
    AllFiltersSelect: AllFiltersSelect
  },
  methods: {
    initialize: initialize,
    addTextSearch: addTextSearch,
    updateSearchQuery: updateSearchQuery,
    onChange: onChange,
    readSearchParams: FilterNavvue_type_script_lang_js_readSearchParams,
    addFilter: addFilter,
    injectTextAsOption: injectTextAsOption
  },
  data: FilterNavvue_type_script_lang_js_data,
  created: FilterNavvue_type_script_lang_js_created,
  errorCaptured: errorCaptured
});

function FilterNavvue_type_script_lang_js_created() {
  return components_FilterNavvue_type_script_lang_js_created.apply(this, arguments);
}

function components_FilterNavvue_type_script_lang_js_created() {
  components_FilterNavvue_type_script_lang_js_created = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _this4 = this;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.initialize();

          case 2:
            this.readSearchParams();
            window.document.addEventListener('$me', function () {
              if (_this4.$me && _this4.$me.isAuthenticated) _this4.initialize();
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return components_FilterNavvue_type_script_lang_js_created.apply(this, arguments);
}

function FilterNavvue_type_script_lang_js_data() {
  return {
    inputText: '',
    filters: [],
    options: [],
    textFilterOptionGroup: {
      filter: '',
      data: []
    },
    countsMap: undefined
  };
}

function onChange() {
  var _this = this;

  setTimeout(this.updateSearchQuery, 100);
  setTimeout(function () {
    return _this.$emit('$scbdFilterChange');
  }, 600);
  setTimeout(function () {
    return _this.initialize();
  }, 800);
}

function initialize() {
  return _initialize.apply(this, arguments);
}

function _initialize() {
  _initialize = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$Promise$all, _yield$Promise$all2, counts, allOptionGroups, allFiltersUsed, onlyOptionsUsed, _i, _arr, _arr$_i, filter, _data, cloneGroup;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.all([this.getCounts(), B('all')]);

          case 2:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = Object(slicedToArray["a" /* default */])(_yield$Promise$all, 2);
            counts = _yield$Promise$all2[0];
            allOptionGroups = _yield$Promise$all2[1];
            allFiltersUsed = new Set(Object.keys(counts.filterCounts));
            onlyOptionsUsed = []; //only show filters if at least one record is tagged

            for (_i = 0, _arr = Object(toConsumableArray["a" /* default */])(allOptionGroups); _i < _arr.length; _i++) {
              _arr$_i = _arr[_i], filter = _arr$_i.filter, _data = _arr$_i.data;
              cloneGroup = {
                filter: filter
              };
              cloneGroup.data = _data.filter(function (_ref2) {
                var identifier = _ref2.identifier;
                return allFiltersUsed.has(identifier);
              });
              onlyOptionsUsed.push(cloneGroup);
            }

            this.textFilterOptionGroup.filter = this.$t('Free Text Searches');
            this.options = [].concat(onlyOptionsUsed, [this.textFilterOptionGroup]);
            if (!isAdmin(this.$me, this.adminRole)) this.options.shift();
            this.countsMap = counts.filterCounts;

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _initialize.apply(this, arguments);
}

function isAdmin() {
  var $me = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var role = arguments.length > 1 ? arguments[1] : undefined;
  if (!$me.hasRole || role && !role.length) return false;

  if (Array.isArray(role)) {
    var _iterator = Object(createForOfIteratorHelper["a" /* default */])(role),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var aRole = _step.value;
        if ($me.hasRole(aRole)) return true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (typeof role === 'string') return $me.hasRole(role);
  return false;
}

function updateSearchQuery() {
  resetSearchParams();
  this.filters.forEach(function (_ref) {
    var identifier = _ref.identifier;
    return addParam(identifier);
  });
}

function addFilter(_x) {
  return _addFilter.apply(this, arguments);
}

function _addFilter() {
  _addFilter = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(identifier) {
    var foundFilter;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return b('all', identifier, true);

          case 2:
            foundFilter = _context3.sent;
            if (foundFilter && !Array.isArray(foundFilter)) this.filters.push(foundFilter);
            if (identifier.includes('FREETEXT-')) this.injectTextAsOption(identifier.replace('FREETEXT-', ''));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _addFilter.apply(this, arguments);
}

function FilterNavvue_type_script_lang_js_readSearchParams() {
  var _this2 = this;

  var params = new URL(document.location).searchParams;
  var filters = params.getAll('filter');
  filters.forEach(function (identifier) {
    return _this2.addFilter(identifier);
  });
}

function resetSearchParams() {
  var _window$location = window.location,
      href = _window$location.href,
      search = _window$location.search;
  var newUrl = href.replace(search, '');
  window.history.pushState({
    path: newUrl
  }, '', newUrl);
}

function addParam(value) {
  var _URL = new URL(window.location),
      origin = _URL.origin,
      search = _URL.search,
      pathname = _URL.pathname;

  var newSearchParam = "filter=".concat(encodeURIComponent(value));
  var newSearch = !search ? "?".concat(newSearchParam) : "".concat(search, "&").concat(newSearchParam);
  var newUrl = "".concat(origin).concat(pathname).concat(newSearch);
  window.history.pushState({
    path: newUrl
  }, '', newUrl);
}

function injectTextAsOption(text) {
  var textFilter = createTextFilterObject(text);
  this.textFilterOptionGroup.data.push(textFilter);
  this.filters.push(textFilter);
}

function addTextSearch(text) {
  var _this3 = this;

  this.injectTextAsOption(text);
  setTimeout(function () {
    return _this3.updateSearchQuery();
  }, 100);
  setTimeout(function () {
    return _this3.$emit('$scbdFilterChange');
  }, 600);
}

function createTextFilterObject(name) {
  return {
    identifier: "FREETEXT-".concat(name),
    name: name
  };
}

function errorCaptured(err) {
  console.error('@scbd/search.SearchFilterNav error:', err);
  console.error(err);
}
// CONCATENATED MODULE: ./src/components/FilterNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FilterNavvue_type_script_lang_js_ = (FilterNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FilterNav.vue?vue&type=style&index=0&id=376739eb&scoped=true&lang=css&
var FilterNavvue_type_style_index_0_id_376739eb_scoped_true_lang_css_ = __webpack_require__("6f5d");

// EXTERNAL MODULE: ./src/locales/index.json?vue&type=custom&index=0&blockType=i18n&issuerPath=%2FUsers%2Frandyhoulahan%2Fprojects%2F%40scbd%2Fecosystem%2Fpackages%2Faction-search%2Fsrc%2Fcomponents%2FFilterNav.vue
var localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav = __webpack_require__("b67c");

// CONCATENATED MODULE: ./src/components/FilterNav.vue






/* normalize component */

var FilterNav_component = normalizeComponent(
  components_FilterNavvue_type_script_lang_js_,
  FilterNavvue_type_template_id_376739eb_scoped_true_render,
  FilterNavvue_type_template_id_376739eb_scoped_true_staticRenderFns,
  false,
  null,
  "376739eb",
  null
  
)

/* custom blocks */

if (typeof localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav["default"] === 'function') Object(localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFilterNav["default"])(FilterNav_component)

/* harmony default export */ var FilterNav = (FilterNav_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Feedback.vue?vue&type=template&id=36b9899c&scoped=true&
var Feedbackvue_type_template_id_36b9899c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"feedback mb-3"},[_c('hr',{staticClass:"my-0"}),_c('div',{staticClass:"row px-3 px-sm-4",staticStyle:{"min-height":"3em"}},[_c('div',{staticClass:"col-4 my-auto"},[_vm._v(" "+_vm._s(_vm.total)+" results ")]),_c('div',{staticClass:"col-4"},[_c('Loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]})],1),_c('div',{staticClass:"col-4 my-auto text-right "},[(_vm.totalPages && _vm.totalPages>1)?_c('span',{staticClass:"text-nowrap"},[_c('span',{staticClass:"d-none d-sm-inline"},[_vm._v("page: ")]),(_vm.page>1)?_c('span',[_vm._v("1 -")]):_vm._e(),_vm._v(" "+_vm._s(_vm.page)+" of "+_vm._s(_vm.totalPages))]):_vm._e()])]),_c('hr',{staticClass:"my-0"})])}
var Feedbackvue_type_template_id_36b9899c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Feedback.vue?vue&type=template&id=36b9899c&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=template&id=1429599b&scoped=true&
var Loadingvue_type_template_id_1429599b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_c('div',{staticClass:"cont mx-auto"},[_c('div',{staticClass:"ring"},[_c('Spinner',{attrs:{"size":40,"color":"#009b48"}},[_c('div',{staticClass:"text-cont"},[_c('img',{staticClass:"leaf",attrs:{"src":"https://attachments.cbd.int/cbd-leaf-green.svg"}}),_c('br'),(_vm.percent)?_c('span',{staticClass:"percent"},[_vm._v(" "+_vm._s(_vm.percent)+"%")]):_vm._e()])])],1)])])}
var Loadingvue_type_template_id_1429599b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=template&id=1429599b&scoped=true&

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=template&id=b636fc54&scoped=true&functional=true&
var Spinnervue_type_template_id_b636fc54_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"cont"},[_c('div',{staticClass:"lds-ring",style:({width:((Number(_vm.props.size)+5) + "px"), height:((Number(_vm.props.size)+5) + "px")})},[_c('div',{style:({'border-width':(((_vm.props.size/100)*3) + "px"),'border-top-color':_vm.props.color})}),_c('div',{style:({'border-width':(((_vm.props.size/100)*3) + "px"),'border-top-color':_vm.props.color})}),_c('div',{style:({'border-width':(((_vm.props.size/100)*3) + "px"),'border-top-color':_vm.props.color})}),_c('div',{style:({'border-width':(((_vm.props.size/100)*3) + "px"),'border-top-color':_vm.props.color})})]),_c('div',{staticClass:"slot-hold"},[_vm._t("default")],2)])}
var Spinnervue_type_template_id_b636fc54_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=template&id=b636fc54&scoped=true&functional=true&

// EXTERNAL MODULE: ./src/components/Spinner.vue?vue&type=style&index=0&id=b636fc54&scoped=true&lang=css&
var Spinnervue_type_style_index_0_id_b636fc54_scoped_true_lang_css_ = __webpack_require__("ceb7");

// CONCATENATED MODULE: ./src/components/Spinner.vue

var script = {}



/* normalize component */

var Spinner_component = normalizeComponent(
  script,
  Spinnervue_type_template_id_b636fc54_scoped_true_functional_true_render,
  Spinnervue_type_template_id_b636fc54_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "b636fc54",
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'Loading',
  components: {
    Spinner: Spinner
  },
  props: ['percent']
});
// CONCATENATED MODULE: ./src/components/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Loading.vue?vue&type=style&index=0&id=1429599b&scoped=true&lang=css&
var Loadingvue_type_style_index_0_id_1429599b_scoped_true_lang_css_ = __webpack_require__("5b3e");

// CONCATENATED MODULE: ./src/components/Loading.vue






/* normalize component */

var Loading_component = normalizeComponent(
  components_Loadingvue_type_script_lang_js_,
  Loadingvue_type_template_id_1429599b_scoped_true_render,
  Loadingvue_type_template_id_1429599b_scoped_true_staticRenderFns,
  false,
  null,
  "1429599b",
  null
  
)

/* harmony default export */ var Loading = (Loading_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Feedback.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Feedbackvue_type_script_lang_js_ = ({
  name: 'Feedback',
  components: {
    Loading: Loading
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Feedbackvue_type_script_lang_js_ = (Feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Feedback.vue?vue&type=style&index=0&id=36b9899c&scoped=true&lang=css&
var Feedbackvue_type_style_index_0_id_36b9899c_scoped_true_lang_css_ = __webpack_require__("af43");

// EXTERNAL MODULE: ./src/locales/index.json?vue&type=custom&index=0&blockType=i18n&issuerPath=%2FUsers%2Frandyhoulahan%2Fprojects%2F%40scbd%2Fecosystem%2Fpackages%2Faction-search%2Fsrc%2Fcomponents%2FFeedback.vue
var localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback = __webpack_require__("91f3");

// CONCATENATED MODULE: ./src/components/Feedback.vue






/* normalize component */

var Feedback_component = normalizeComponent(
  components_Feedbackvue_type_script_lang_js_,
  Feedbackvue_type_template_id_36b9899c_scoped_true_render,
  Feedbackvue_type_template_id_36b9899c_scoped_true_staticRenderFns,
  false,
  null,
  "36b9899c",
  null
  
)

/* custom blocks */

if (typeof localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback["default"] === 'function') Object(localesvue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FFeedback["default"])(Feedback_component)

/* harmony default export */ var Feedback = (Feedback_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25445135-vue-loader-template"}!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/components/Icons.vue?vue&type=template&id=fdf9ae72&functional=true&
var Iconsvue_type_template_id_fdf9ae72_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticStyle:{"position":"absolute","width":"0","height":"0","overflow":"hidden"},attrs:{"aria-hidden":"true","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('defs',[_c('symbol',{attrs:{"id":"icon-close","viewBox":"0 0 22 28"}},[_c('title',[_vm._v("close")]),_c('path',{attrs:{"d":"M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"}})]),_c('symbol',{attrs:{"id":"icon-edit","viewBox":"0 0 28 28"}},[_c('title',[_vm._v("edit")]),_c('path',{attrs:{"d":"M13.875 18.5l1.813-1.813-2.375-2.375-1.813 1.813v0.875h1.5v1.5h0.875zM20.75 7.25c-0.141-0.141-0.375-0.125-0.516 0.016l-5.469 5.469c-0.141 0.141-0.156 0.375-0.016 0.516s0.375 0.125 0.516-0.016l5.469-5.469c0.141-0.141 0.156-0.375 0.016-0.516zM22 16.531v2.969c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h13c0.625 0 1.25 0.125 1.828 0.391 0.141 0.063 0.25 0.203 0.281 0.359 0.031 0.172-0.016 0.328-0.141 0.453l-0.766 0.766c-0.141 0.141-0.328 0.187-0.5 0.125-0.234-0.063-0.469-0.094-0.703-0.094h-13c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-1.969c0-0.125 0.047-0.25 0.141-0.344l1-1c0.156-0.156 0.359-0.187 0.547-0.109s0.313 0.25 0.313 0.453zM20.5 5l4.5 4.5-10.5 10.5h-4.5v-4.5zM27.438 7.063l-1.437 1.437-4.5-4.5 1.437-1.437c0.578-0.578 1.547-0.578 2.125 0l2.375 2.375c0.578 0.578 0.578 1.547 0 2.125z"}})]),_c('symbol',{attrs:{"id":"icon-question-circle","viewBox":"0 0 24 28"}},[_c('title',[_vm._v("question-circle")]),_c('path',{attrs:{"d":"M14 21.5v-3c0-0.281-0.219-0.5-0.5-0.5h-3c-0.281 0-0.5 0.219-0.5 0.5v3c0 0.281 0.219 0.5 0.5 0.5h3c0.281 0 0.5-0.219 0.5-0.5zM18 11c0-2.859-3-5-5.688-5-2.547 0-4.453 1.094-5.797 3.328-0.141 0.219-0.078 0.5 0.125 0.656l2.063 1.563c0.078 0.063 0.187 0.094 0.297 0.094 0.141 0 0.297-0.063 0.391-0.187 0.734-0.938 1.047-1.219 1.344-1.437 0.266-0.187 0.781-0.375 1.344-0.375 1 0 1.922 0.641 1.922 1.328 0 0.812-0.422 1.219-1.375 1.656-1.109 0.5-2.625 1.797-2.625 3.313v0.562c0 0.281 0.219 0.5 0.5 0.5h3c0.281 0 0.5-0.219 0.5-0.5v0c0-0.359 0.453-1.125 1.188-1.547 1.188-0.672 2.812-1.578 2.812-3.953zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"}})]),_c('symbol',{attrs:{"id":"icon-earth","viewBox":"0 0 32 32"}},[_c('title',[_vm._v("earth")]),_c('path',{attrs:{"d":"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 30c-1.967 0-3.84-0.407-5.538-1.139l7.286-8.197c0.163-0.183 0.253-0.419 0.253-0.664v-3c0-0.552-0.448-1-1-1-3.531 0-7.256-3.671-7.293-3.707-0.188-0.188-0.442-0.293-0.707-0.293h-4c-0.552 0-1 0.448-1 1v6c0 0.379 0.214 0.725 0.553 0.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147 0.484-4.181 1.348-6h3.652c0.265 0 0.52-0.105 0.707-0.293l4-4c0.188-0.188 0.293-0.442 0.293-0.707v-2.419c1.268-0.377 2.61-0.581 4-0.581 2.2 0 4.281 0.508 6.134 1.412-0.13 0.109-0.256 0.224-0.376 0.345-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.139 1.139 2.663 1.758 4.239 1.758 0.099 0 0.198-0.002 0.297-0.007 0.432 1.619 1.211 5.833-0.263 11.635-0.014 0.055-0.022 0.109-0.026 0.163-2.541 2.596-6.084 4.208-10.004 4.208z"}})]),_c('symbol',{attrs:{"id":"icon-trash-o","viewBox":"0 0 22 28"}},[_c('title',[_vm._v("trash-o")]),_c('path',{attrs:{"d":"M8 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM12 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM16 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM18 22.813v-14.812h-14v14.812c0 0.75 0.422 1.188 0.5 1.188h13c0.078 0 0.5-0.438 0.5-1.188zM7.5 6h7l-0.75-1.828c-0.047-0.063-0.187-0.156-0.266-0.172h-4.953c-0.094 0.016-0.219 0.109-0.266 0.172zM22 6.5v1c0 0.281-0.219 0.5-0.5 0.5h-1.5v14.812c0 1.719-1.125 3.187-2.5 3.187h-13c-1.375 0-2.5-1.406-2.5-3.125v-14.875h-1.5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h4.828l1.094-2.609c0.313-0.766 1.25-1.391 2.078-1.391h5c0.828 0 1.766 0.625 2.078 1.391l1.094 2.609h4.828c0.281 0 0.5 0.219 0.5 0.5z"}})]),_c('symbol',{attrs:{"id":"icon-file","viewBox":"0 0 24 28"}},[_c('title',[_vm._v("file")]),_c('path',{attrs:{"d":"M16 8v-7.375c0.219 0.141 0.406 0.281 0.562 0.438l6.375 6.375c0.156 0.156 0.297 0.344 0.438 0.562h-7.375zM14 8.5c0 0.828 0.672 1.5 1.5 1.5h8.5v16.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-25c0-0.828 0.672-1.5 1.5-1.5h12.5v8.5z"}})]),_c('symbol',{attrs:{"id":"icon-cloud-upload","viewBox":"0 0 30 28"}},[_c('title',[_vm._v("cloud-upload")]),_c('path',{attrs:{"d":"M20 13.5c0-0.125-0.047-0.266-0.141-0.359l-5.5-5.5c-0.094-0.094-0.219-0.141-0.359-0.141-0.125 0-0.266 0.047-0.359 0.141l-5.484 5.484c-0.094 0.109-0.156 0.234-0.156 0.375 0 0.281 0.219 0.5 0.5 0.5h3.5v5.5c0 0.266 0.234 0.5 0.5 0.5h3c0.266 0 0.5-0.234 0.5-0.5v-5.5h3.5c0.281 0 0.5-0.234 0.5-0.5zM30 18c0 3.313-2.688 6-6 6h-17c-3.859 0-7-3.141-7-7 0-2.719 1.578-5.187 4.031-6.328-0.016-0.234-0.031-0.453-0.031-0.672 0-4.422 3.578-8 8-8 3.25 0 6.172 1.969 7.406 4.969 0.719-0.625 1.641-0.969 2.594-0.969 2.203 0 4 1.797 4 4 0 0.766-0.219 1.516-0.641 2.156 2.719 0.641 4.641 3.063 4.641 5.844z"}})]),_c('symbol',{attrs:{"id":"icon-chevron-down","viewBox":"0 0 28 28"}},[_c('title',[_vm._v("chevron-down")]),_c('path',{attrs:{"d":"M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z"}})]),_c('symbol',{attrs:{"id":"icon-search","viewBox":"0 0 250 270","preserveAspectRatio":"xMidYMid meet"}},[_c('title',[_vm._v(_vm._s(_vm.parent.$t('Search')))]),_c('path',{attrs:{"d":"M16 254 c-20 -20 -20 -22 5 -63 14 -24 19 -44 15 -63 -7 -37 15 -90 45 -112 13 -9 43 -16 67 -16 62 0 102 40 102 104 0 64 -40 109 -100 112 -31 1 -49 9 -67 28 -27 30 -45 33 -67 10z m164 -104 c36 -36 14 -100 -34 -100 -60 1 -81 79 -29 109 26 15 41 13 63 -9z"}})]),_c('symbol',{attrs:{"id":"icon-filter","viewBox":"0 0 14 18"}},[_c('path',{attrs:{"d":"M14.093 2.963c0.1 0.241 0.050 0.522-0.141 0.703l-4.952 4.952v7.453c0 0.261-0.161 0.492-0.392 0.593-0.080 0.030-0.171 0.050-0.251 0.050-0.171 0-0.331-0.060-0.452-0.191l-2.571-2.571c-0.121-0.121-0.191-0.281-0.191-0.452v-4.882l-4.952-4.952c-0.191-0.181-0.241-0.462-0.141-0.703 0.1-0.231 0.331-0.392 0.593-0.392h12.857c0.261 0 0.492 0.161 0.593 0.392z"}})])])])}
var Iconsvue_type_template_id_fdf9ae72_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Icons.vue?vue&type=template&id=fdf9ae72&functional=true&

// EXTERNAL MODULE: ./src/components/Icons.vue?vue&type=style&index=0&lang=css&
var Iconsvue_type_style_index_0_lang_css_ = __webpack_require__("03d1");

// CONCATENATED MODULE: ./src/components/Icons.vue

var Icons_script = {}



/* normalize component */

var Icons_component = normalizeComponent(
  Icons_script,
  Iconsvue_type_template_id_fdf9ae72_functional_true_render,
  Iconsvue_type_template_id_fdf9ae72_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var Icons = (Icons_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/thread-loader/dist/cjs.js!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/babel-loader/lib!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var lib_vue_loader_options_srcvue_type_script_lang_js_ = ({
  name: 'ScbdSearch',
  components: {
    FilterNav: FilterNav,
    Feedback: Feedback,
    List: List,
    Icons: Icons
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    forceEnv: {
      type: String,
      required: false,
      default: 'production'
    }
  },
  methods: {
    onScbdFilterChange: onScbdFilterChange,
    getCounts: getCounts,
    setRowsAndTotal: setRowsAndTotal,
    onScroll: onScroll,
    onNextPageLoaded: onNextPageLoaded
  },
  computed: {
    opts: opts,
    totalPages: totalPages
  },
  created: lib_vue_loader_options_srcvue_type_script_lang_js_created,
  data: lib_vue_loader_options_srcvue_type_script_lang_js_data,
  errorCaptured: lib_vue_loader_options_srcvue_type_script_lang_js_errorCaptured
});

function lib_vue_loader_options_srcvue_type_script_lang_js_created() {
  return vue_loader_lib_vue_loader_options_srcvue_type_script_lang_js_created.apply(this, arguments);
}

function vue_loader_lib_vue_loader_options_srcvue_type_script_lang_js_created() {
  vue_loader_lib_vue_loader_options_srcvue_type_script_lang_js_created = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _this2 = this;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            actions_api_initializeApi(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.opts), {}, {
              getToken: function getToken() {
                return (_this2.$auth || {}).token;
              }
            }));
            _context3.next = 3;
            return this.setRowsAndTotal();

          case 3:
            window.document.addEventListener('$me', /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(!_this2.$me || !_this2.$me.isAuthenticated)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      actions_api_resetCache();
                      _context2.next = 5;
                      return _this2.setRowsAndTotal();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })));
            if (this.opts.listenExternally) window.document.addEventListener('$scbdFilterChange', this.onScbdFilterChange);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return vue_loader_lib_vue_loader_options_srcvue_type_script_lang_js_created.apply(this, arguments);
}

function lib_vue_loader_options_srcvue_type_script_lang_js_data() {
  return {
    rows: [],
    total: 0,
    page: 1,
    loading: false
  };
}

function opts() {
  return Object(objectSpread2["a" /* default */])({}, default_options(this.options, this.forceEnv));
}

function onScroll($el) {
  var self = this;
  options_updateOptions({
    $el: $el
  });
  return /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _self$rows;

    var _window, pageYOffset, _window$document$docu, scrollHeight, scrollTopDocEl, offsetHeight, scrollTopBody, scrollTop, currentScrollPosition, isLessThanHalfScrolled, isListComplete, nextPageRows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _window = window, pageYOffset = _window.pageYOffset;
            _window$document$docu = window.document.documentElement, scrollHeight = _window$document$docu.scrollHeight, scrollTopDocEl = _window$document$docu.scrollTop, offsetHeight = _window$document$docu.offsetHeight;
            scrollTopBody = window.document.body.scrollTop;
            scrollTop = scrollTopBody || scrollTopDocEl;
            currentScrollPosition = (pageYOffset || scrollTop) - offsetHeight;
            isLessThanHalfScrolled = currentScrollPosition <= scrollHeight / 2;
            isListComplete = self.page === self.totalPages;

            if (!(isListComplete || isLessThanHalfScrolled || self.loading)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return");

          case 9:
            //do nothing
            self.loading = true;
            window.addEventListener('$nextPageLoaded', self.onNextPageLoaded);
            _context.next = 13;
            return getList(true);

          case 13:
            nextPageRows = _context.sent;

            (_self$rows = self.rows).push.apply(_self$rows, Object(toConsumableArray["a" /* default */])(nextPageRows));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

function onNextPageLoaded($event) {
  var _this = this;

  var sk = $event.$page.sk;
  this.page = sk / 10 + 1;
  window.removeEventListener('$nextPageLoaded', this.onNextPageLoaded);
  setTimeout(function () {
    return _this.loading = false;
  }, 100);
}

function totalPages() {
  return Math.ceil(this.total / 10);
}

function onScbdFilterChange() {
  return _onScbdFilterChange.apply(this, arguments);
}

function _onScbdFilterChange() {
  _onScbdFilterChange = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            this.page = 1;
            this.total = 0;
            _context4.next = 4;
            return this.setRowsAndTotal();

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _onScbdFilterChange.apply(this, arguments);
}

function setRowsAndTotal() {
  return _setRowsAndTotal.apply(this, arguments);
}

function _setRowsAndTotal() {
  _setRowsAndTotal = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _yield$getCounts, total;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            this.loading = true;
            _context5.next = 3;
            return getCounts();

          case 3:
            _yield$getCounts = _context5.sent;
            total = _yield$getCounts.total;
            this.total = total;
            _context5.next = 8;
            return getList();

          case 8:
            this.rows = _context5.sent;
            this.loading = false;

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _setRowsAndTotal.apply(this, arguments);
}

function lib_vue_loader_options_srcvue_type_script_lang_js_errorCaptured(err) {
  console.error('ActionSearch error:', err);
  console.error(err);
}
// CONCATENATED MODULE: ./src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var srcvue_type_script_lang_js_ = (lib_vue_loader_options_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index.vue?vue&type=style&index=0&id=ef3896de&scoped=true&lang=css&
var srcvue_type_style_index_0_id_ef3896de_scoped_true_lang_css_ = __webpack_require__("4fcd");

// CONCATENATED MODULE: ./src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ef3896de",
  null
  
)

/* harmony default export */ var src_0 = (src_component.exports);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/lower-case/dist.es2015/index.js
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/no-case/dist.es2015/index.js

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result
        .slice(start, end)
        .split("\0")
        .map(transform)
        .join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/pascal-case/dist.es2015/index.js


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/index.js





var NAME = pascalCase(package_0["a" /* name */].replace('@scbd/', ''));
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(NAME, src_0);
}
var src_plugin = {
  install: install,
  NAME: NAME
};
/* harmony default export */ var src_1 = (src_0);
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("6559");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("16d1");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("e68e");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("f5f2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("30c6");

// CONCATENATED MODULE: ../sso-vue-plugin-scbd/dist/esm/index.min.js























/*!
* @scbd/sso-vue-plugin-scbd 0.1.3
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/sso-vue-plugin-scbd
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/



var esm_index_min_r = "@scbd/sso-vue-plugin-scbd";

function dist_esm_index_min_o(t, e, n, s, r, o, i, a, u, c) {
  "boolean" != typeof i && (u = a, a = i, i = !1);
  var l = "function" == typeof n ? n.options : n;
  var m;
  if (t && t.render && (l.render = t.render, l.staticRenderFns = t.staticRenderFns, l._compiled = !0, r && (l.functional = !0)), s && (l._scopeId = s), o ? (m = function m(t) {
    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, u(t)), t && t._registeredComponents && t._registeredComponents.add(o);
  }, l._ssrRegister = m) : e && (m = i ? function (t) {
    e.call(this, c(t, this.$root.$options.shadowRoot));
  } : function (t) {
    e.call(this, a(t));
  }), m) if (l.functional) {
    var _t = l.render;

    l.render = function (e, n) {
      return m.call(n), _t(e, n);
    };
  } else {
    var _t2 = l.beforeCreate;
    l.beforeCreate = _t2 ? [].concat(_t2, m) : [m];
  }
  return n;
}

var esm_index_min_i = dist_esm_index_min_o({
  render: function render() {
    var t = this.$createElement;
    return (this._self._c || t)("iframe", {
      ref: "authFrame",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "authFrame",
        src: this.url + "/app/authorize.html"
      }
    }, []);
  },
  staticRenderFns: []
}, void 0, {
  name: "AuthIFrame",
  computed: {
    url: function url() {
      return this.$auth.accountsUrl;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$isServer) return;
    if (!this.$refs || !this.$refs.authFrame) return !1;
    window.addEventListener("message", this.$auth.receivePostMessage), this.$refs.authFrame.onload = function () {
      var t = _this.$refs.authFrame.contentWindow,
          e = JSON.stringify({
        type: "getAuthenticationToken"
      });
      return t.postMessage(e, _this.url);
    };
  }
}, void 0, !1, "data-v-4a25eb47", !1, void 0, void 0, void 0),
    esm_index_min_a = ["https://accounts.cbddev.xyz", "https://accounts.staging.cbd.int", "https://accounts.cbd.int"],
    esm_index_min_u = {
  accountsUrl: esm_index_min_a[0],
  admins: [],
  _admins: ["Administrator"],
  govRoles: [],
  _govRoles: ["NFP-CBD", "ChmNrNationalFocalPoint", "ChmNrNationalAuthorizedUser"],
  allAccountUrls: esm_index_min_a
},
    esm_index_min_c = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, esm_index_min_u), {}, {
  accountsUrl: esm_index_min_a[1]
});

Object(esm_index_min["b" /* setDefaultOptions */])({
  environments: {
    stg: esm_index_min_c,
    dev: esm_index_min_u,
    prod: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, esm_index_min_c), {}, {
      accountsUrl: esm_index_min_a[2]
    })
  },
  validationMap: {
    allAccountUrls: Array,
    forceEnv: String,
    accountsUrl: String,
    admins: Array,
    _admins: Array,
    govRoles: Array,
    _govRoles: Array
  },
  name: esm_index_min_r
}, esm_index_min_r);
var index_min_l = Object(esm_index_min["a" /* getDefaultOptionsFunction */])(esm_index_min_r);

var esm_index_min_m = {},
    index_min_d = function d() {
  return new Promise(index_min_h);
};

function index_min_h(t, e) {
  var n = void 0;
  var s = setTimeout(function () {
    clearInterval(n), e("Error loading $me instance");
  }, 5e3);
  n = setInterval(function () {
    if (esm_index_min_m.store.instance) return clearInterval(n), clearTimeout(s), t(esm_index_min_m.store.instance);
  }, 100);
}

var esm_index_min_f = /*#__PURE__*/function () {
  function f() {
    Object(classCallCheck["a" /* default */])(this, f);
  }

  Object(createClass["a" /* default */])(f, [{
    key: "hasRole",
    value: function hasRole(t) {
      var _ref = this || (esm_index_min_m.opts || {}).store,
          e = _ref.roles;

      return !!e && e.includes(t);
    }
  }, {
    key: "logOut",
    value: function logOut() {
      esm_index_min_m.store.me = this.anonymous();
    }
  }, {
    key: "set",
    value: function set(t) {
      return esm_index_min_m.store.me = t || this.anonymous(), this.makeGettersEnumerable(this), this;
    }
  }, {
    key: "makeGettersEnumerable",
    value: function makeGettersEnumerable(t) {
      var e = Object.getPrototypeOf(t),
          n = Object.getOwnPropertyDescriptors(e);

      for (var _i = 0, _Object$entries = Object.entries(n); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = Object(slicedToArray["a" /* default */])(_Object$entries[_i], 2),
            _e = _Object$entries$_i[0],
            _s = _Object$entries$_i[1];

        "function" == typeof _s.get && (_s.enumerable = !0, Object.defineProperty(t, _e, _s));
      }
    }
  }, {
    key: "anonymous",
    value: function anonymous() {
      return {
        userID: 1,
        name: "anonymous",
        email: "anonymous@domain",
        government: null,
        userGroups: null,
        isAuthenticated: !1,
        isOffline: !0,
        roles: []
      };
    }
  }, {
    key: "userID",
    get: function get() {
      return esm_index_min_m.store.me.userID;
    }
  }, {
    key: "userId",
    get: function get() {
      return esm_index_min_m.store.me.userID;
    }
  }, {
    key: "name",
    get: function get() {
      return esm_index_min_m.store.me.name;
    }
  }, {
    key: "email",
    get: function get() {
      return esm_index_min_m.store.me.email;
    }
  }, {
    key: "government",
    get: function get() {
      return esm_index_min_m.store.me.government;
    }
  }, {
    key: "institution",
    get: function get() {
      return esm_index_min_m.store.me.institution;
    }
  }, {
    key: "userGroups",
    get: function get() {
      return esm_index_min_m.store.me.userGroups;
    }
  }, {
    key: "isAuthenticated",
    get: function get() {
      return esm_index_min_m.store.me.isAuthenticated;
    }
  }, {
    key: "roles",
    get: function get() {
      return esm_index_min_m.store.me.roles;
    }
  }, {
    key: "isEmailVerified",
    get: function get() {
      return esm_index_min_m.store.me.isEmailVerified;
    }
  }, {
    key: "isSet",
    get: function get() {
      return esm_index_min_m.store.me.userID && 1 !== esm_index_min_m.store.me.userID;
    }
  }, {
    key: "isAdmin",
    get: function get() {
      var t = this.roles;
      if (!t || !esm_index_min_m.opts) return !1;

      var e = esm_index_min_m.opts._admins.concat(esm_index_min_m.opts.admins);

      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(e),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _n = _step.value;
          if (t.includes(_n)) return !0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return !1;
    }
  }, {
    key: "isStaff",
    get: function get() {
      var t = this.userGroups;
      return !!t && t.includes("SCBD");
    }
  }, {
    key: "isGov",
    get: function get() {
      var t = this.roles,
          e = this.government;
      if (!e || !t || !esm_index_min_m.opts) return !1;

      var n = esm_index_min_m.opts._govRoles.concat(esm_index_min_m.opts.govRoles);

      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(n),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _t3 = _step2.value;
          if (this.roles.includes(_t3)) return !0;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return !1;
    }
  }]);

  return f;
}();

var index_min_p = {};

var dist_esm_index_min_g = /*#__PURE__*/function () {
  function g() {
    Object(classCallCheck["a" /* default */])(this, g);
  }

  Object(createClass["a" /* default */])(g, [{
    key: "logOut",
    value: function logOut() {
      index_min_p.store.token = "";
    }
  }, {
    key: "isAuthLoaded",
    value: function isAuthLoaded() {
      return new Promise(index_min_$.bind(this));
    }
  }, {
    key: "receivePostMessage",
    value: function receivePostMessage(t) {
      if (!function () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = _ref2.origin;

        return t === index_min_p.opts.accountsUrl;
      }(t)) return null;

      var _JSON$parse = JSON.parse(t.data),
          e = _JSON$parse.type,
          n = _JSON$parse.authenticationToken;

      if ("authenticationToken" !== e) throw new Error("unsupported authentication message type");
      return index_min_p.store.token = n;
    }
  }, {
    key: "dispatchUser",
    value: function dispatchUser(t, e) {
      index_min_p.elm || (index_min_p.elm = t);
      var n = new Event("$me", {
        bubbles: !0
      });
      n.$me = e, n.$auth = index_min_p.store, index_min_p.elm.dispatchEvent(n), this.onRequestMeEvent(index_min_p.elm);
    }
  }, {
    key: "onRequestMeEvent",
    value: function onRequestMeEvent(t) {
      var _this2 = this;

      this.onRequestMeEvent.installed || (this.onRequestMeEvent.installed = !0, index_min_p.elm || (index_min_p.elm = t), window.document.addEventListener("$requestMe", function () {
        return _this2.dispatchUser(index_min_p.elm);
      }));
    }
  }, {
    key: "isAccountsUrl",
    value: function isAccountsUrl(t) {
      return index_min_p.opts.allAccountUrls.includes(t);
    }
  }, {
    key: "token",
    set: function set(t) {
      index_min_p.store.token = t;
    },
    get: function get() {
      return index_min_p.store.token;
    }
  }, {
    key: "accountsBaseUrl",
    get: function get() {
      return this.accountsUrl;
    }
  }, {
    key: "accountsUrl",
    get: function get() {
      var t = index_min_p.opts.accountsUrl;
      if (!t) throw new Error("options.accountsUrl var not set");
      return t;
    }
  }, {
    key: "baseReqOpts",
    get: function get() {
      return index_min_p.store.token ? {
        headers: this.formatedHeader
      } : {};
    }
  }, {
    key: "formatedHeader",
    get: function get() {
      return index_min_p.store.token ? {
        Authorization: "Ticket " + index_min_p.store.token
      } : {};
    }
  }]);

  return g;
}();

function index_min_$(t) {
  var e = setTimeout(function () {
    clearInterval(n), t(index_min_p.store.token);
  }, 5e3),
      n = setInterval(function () {
    if (index_min_p.store.token) return clearInterval(n), clearTimeout(e), t(index_min_p.store.token);
  }, 100);
}

function index_min_v(t, e) {
  var n = void 0;
  var s = setTimeout(function () {
    clearInterval(n), e("Error loading $auth instance");
  }, 5e3);
  n = setInterval(function () {
    if (index_min_p.store.instance) return clearInterval(n), clearTimeout(s), t(index_min_p.store.instance);
  }, 100);
}

var index_min_y = pascalCase(esm_index_min_r.replace("@scbd/", "")),
    esm_index_min_w = {};
var index_min_U = {
  install: function t(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (t.installed) return;
    t.installed = !0;

    var s = n.forceEnv,
        r = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, index_min_l({}, s)), n);

    (function (t, e) {
      esm_index_min_m.opts = e, esm_index_min_m.store = new t({
        data: {
          me: {},
          instance: {}
        }
      }), esm_index_min_m.store.instance = new esm_index_min_f();
    })(e, r), function (t, e) {
      index_min_p.opts = e, index_min_p.store = new t({
        data: {
          token: "",
          instance: {}
        }
      }), index_min_p.store.instance = new dist_esm_index_min_g();
    }(e, r), esm_index_min_w.opts = r, esm_index_min_w.Vue = e, new Promise(index_min_v).then( /*#__PURE__*/function () {
      var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", esm_index_min_w.auth = t);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()).then(index_min_d).then( /*#__PURE__*/function () {
      var _ref4 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", esm_index_min_w.me = t);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()), e.mixin(index_min_E);
  },
  NAME: index_min_y
};
var index_min_E = {
  computed: {
    $me: function $me() {
      return esm_index_min_w.me;
    },
    $auth: function $auth() {
      return esm_index_min_w.auth;
    }
  },
  methods: {
    $loadUser: function () {
      var _$loadUser = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this3 = this;

        var t, _yield, n, s, r, o, i, a;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!esm_index_min_w.me.isSet) {
                            _context3.next = 2;
                            break;
                          }

                          return _context3.abrupt("return", esm_index_min_w.me);

                        case 2:
                          if (esm_index_min_w.auth.token) {
                            _context3.next = 4;
                            break;
                          }

                          return _context3.abrupt("return", esm_index_min_w.me.set());

                        case 4:
                          _context3.next = 6;
                          return Object(index_min["a" /* get$http */])();

                        case 6:
                          return _context3.abrupt("return", _context3.sent.get(esm_index_min_w.opts.accountsUrl + "/api/v2013/authentication/user", esm_index_min_w.auth.baseReqOpts).json());

                        case 7:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }))();

              case 2:
                t = _context5.sent;
                _context5.next = 5;
                return function () {
                  var _ref6 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return Object(index_min["a" /* get$http */])();

                          case 2:
                            return _context4.abrupt("return", _context4.sent.get("".concat(esm_index_min_w.opts.accountsUrl, "/api/v2013/users/").concat(t), esm_index_min_w.auth.baseReqOpts).json());

                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x3) {
                    return _ref6.apply(this, arguments);
                  };
                }()(t.userID);

              case 5:
                _yield = _context5.sent;
                n = _yield.FirstName;
                s = _yield.LastName;
                r = _yield.Country;
                o = n;
                i = s;
                a = r;
                return _context5.abrupt("return", (esm_index_min_w.Vue.nextTick(function () {
                  return esm_index_min_w.me.set(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, t), {}, {
                    firstName: o,
                    lastName: i,
                    country: a
                  }));
                }), setTimeout(function () {
                  return _this3.$forceUpdate();
                }, 100), esm_index_min_w.me));

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function $loadUser() {
        return _$loadUser.apply(this, arguments);
      }

      return $loadUser;
    }(),
    $logOut: function $logOut() {
      var _this4 = this;

      if (esm_index_min_w.me.logOut(), esm_index_min_w.auth.logOut(), !esm_index_min_w.Vue.$AuthIFrame) return;
      var t = JSON.stringify({
        type: "setAuthenticationToken",
        authenticationToken: null,
        authenticationEmail: null,
        expiration: null
      });
      esm_index_min_w.Vue.$AuthIFrame.contentWindow.postMessage(t, esm_index_min_w.auth.accountsUrl), setTimeout(function () {
        esm_index_min_w.auth.dispatchUser(esm_index_min_w.Vue.$AuthIFrame, _this4.$me), _this4.$root.$emit("$me", _this4.$me);
      }, 1500);
    }
  },
  mounted: function () {
    var _mounted = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var _this5 = this;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return index_min_d();

            case 2:
              if (!esm_index_min_w.$el) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return");

            case 4:
              esm_index_min_w.$el = index_min_b(), !esm_index_min_w.$el && "AuthIFrame" !== this.$options.name && this.$options.name && function () {
                var t = new (esm_index_min_w.Vue.extend(esm_index_min_i))();
                t.$mount(), document.getElementsByTagName("body")[0].appendChild(t.$el), esm_index_min_w.$el = t.$el;
              }();
              _context6.prev = 5;
              _context6.next = 8;
              return this.$auth.isAuthLoaded();

            case 8:
              _context6.next = 10;
              return this.$loadUser();

            case 10:
              _context6.next = 12;
              return this.$auth.dispatchUser(esm_index_min_w.$el, this.$me);

            case 12:
              window.document.addEventListener("$requestMe", function () {
                _this5.$auth.dispatchUser(esm_index_min_w.$el, _this5.$me), _this5.$root.$emit("$me", _this5.$me);
              });
              _context6.next = 18;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](5);
              esm_index_min_w.me.set(), this.$auth.dispatchUser(esm_index_min_w.$el, esm_index_min_w.me), this.$root.$emit("$me", this.$me);

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[5, 15]]);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
};

function index_min_b() {
  var t = window.document.getElementsByTagName("iframe");

  var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(t),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _e2 = _step3.value;

      var _URL = new URL(_e2.getAttribute("src")),
          _t4 = _URL.origin;

      if (esm_index_min_w.auth.accountsBaseUrl === _t4) return esm_index_min_A(_e2);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function esm_index_min_A(t) {
  window.addEventListener("message", esm_index_min_w.auth.receivePostMessage);
  var e = t.contentWindow,
      n = JSON.stringify({
    type: "getAuthenticationToken"
  });
  return e.postMessage(n, esm_index_min_w.auth.accountsBaseUrl), t;
}

/* harmony default export */ var dist_esm_index_min = (index_min_U);

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/camel-case/dist.es2015/index.js


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransform(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransformMerge(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ../self-embedding-component/dist/esm/index.min.js




















/*!
* @scbd/self-embedding-component 0.0.23
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/self-embedding-component
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/


var index_min_s = "@scbd/self-embedding-component";
var dist_esm_index_min_i = "https://cdn.cbd.int";
var esm_index_min_d = Object(esm_index_min["a" /* getDefaultOptionsFunction */])(index_min_s);

var dist_esm_index_min_a = {
  VUE: {
    url: dist_esm_index_min_i + "/vue/dist/vue.esm.browser.min.js",
    name: "Vue"
  },
  VUE_I18N: {
    url: dist_esm_index_min_i + "/vue-i18n/dist/vue-i18n.esm.browser.min.js",
    name: "VueI18n"
  },
  SCBD_SSO_AUTH: {
    url: dist_esm_index_min_i + "/@scbd/sso-vue-plugin-scbd",
    name: "sso-vue-plugin-scbd"
  },
  legacy: {
    VUE: {
      url: dist_esm_index_min_i + "/vue",
      name: "Vue"
    },
    VUE_I18N: {
      url: dist_esm_index_min_i + "/vue-i18n",
      name: "VueI18n"
    },
    SCBD_SSO_AUTH: {
      url: dist_esm_index_min_i + "/@scbd/sso-vue-plugin-scbd/dist/legacy/umd/index.umd.js",
      name: "sso-vue-plugin-scbd"
    }
  }
},
    esm_index_min_l = {
  id: String,
  appId: String,
  name: String,
  selfId: String,
  compName: String,
  version: String,
  propsData: Object,
  cdnUrl: String,
  cdn: String,
  dependencies: Object,
  dependencyRef: Object,
  selfUrl: String
},
    dist_esm_index_min_r = {
  dependencyRef: dist_esm_index_min_a,
  cdn: dist_esm_index_min_i,
  dependencies: {
    all: [],
    css: [],
    vuePlugins: [],
    legacy: []
  }
},
    dist_esm_index_min_u = Object(objectSpread2["a" /* default */])({}, dist_esm_index_min_r);

Object(esm_index_min["b" /* setDefaultOptions */])({
  environments: {
    prod: Object(objectSpread2["a" /* default */])({}, dist_esm_index_min_u),
    stg: dist_esm_index_min_u,
    dev: dist_esm_index_min_r
  },
  validationMap: esm_index_min_l,
  name: index_min_s
});
var dist_esm_index_min_c = {};

var esm_index_min_p = function p() {
  var e = document.createElement("div");
  e.id = dist_esm_index_min_c.appId, dist_esm_index_min_f(e);
},
    dist_esm_index_min_f = function f(e) {
  dist_esm_index_min_c.parentNode.insertBefore(e, dist_esm_index_min_c.selfElement);
},
    dist_esm_index_min_m = function m(n) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  if (!n.name) throw new Error("EmbedComponent requires name to be set in options");
  return dist_esm_index_min_c = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, esm_index_min_d(n)), {}, {
    parentNode: "",
    selfElement: "",

    get selfId() {
      return this.id ? this.id : this.name.replace("@scbd/", "");
    },

    set selfId(e) {
      this.id = e;
    },

    get appId() {
      return "appId-" + this.selfId;
    },

    get compName() {
      return pascalCase(this.selfId);
    },

    get cdnUrl() {
      return this.version ? "".concat(this.cdn, "/").concat(this.name, "@").concat(this.version) : "".concat(this.cdn, "/").concat(this.name);
    }

  }), function () {
    var _c = dist_esm_index_min_c,
        _c$dependencies = _c.dependencies,
        e = _c$dependencies.all,
        n = _c$dependencies.vuePlugins;
    if (!n || !n.length) return;
    var t = e.map(self_embedding_component_dist_esm_index_min_g);

    var _iterator = Object(createForOfIteratorHelper["a" /* default */])(n),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _o = _step.value;
        t.includes(_o.name) || e.push(_o);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }(), dist_esm_index_min_w(t), function () {
    var _c2 = dist_esm_index_min_c,
        e = _c2.dependencies.css;
    e && e.length && e.forEach(function (e) {
      return function (e) {
        var n = document.createElement("link");
        n.rel = "stylesheet", n.charset = "utf-8", n.href = e, dist_esm_index_min_f(n);
      }(e);
    });
  }(), dist_esm_index_min_c;
},
    dist_esm_index_min_w = function w(e) {
  var t = e ? dist_esm_index_min_c.selfId + "-legacy" : dist_esm_index_min_c.selfId;
  if (dist_esm_index_min_c.selfElement = document.getElementById(t), !dist_esm_index_min_c.selfElement) throw new Error("Id on script tag not found: id=\"".concat(t, "\""));
  dist_esm_index_min_c.propsData.options = function () {
    var e = dist_esm_index_min_c.selfElement,
        t = dist_esm_index_min_c.propsData.options,
        o = e.attributes,
        s = {};
    if (!e.hasAttributes()) return t;

    var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(o),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
            _e = _step2$value.name,
            _t = _step2$value.value;
        ["id", "src", "type"].includes(_e) || (s[camelCase(_e)] = _t);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return Object.assign(t, s);
  }(), dist_esm_index_min_c.parentNode = dist_esm_index_min_c.selfElement.parentNode;
};

function self_embedding_component_dist_esm_index_min_g(_ref) {
  var e = _ref.name;
  return e;
}

var esm_index_min_h = function h(e) {
  var n = document.createElement("script");
  n.charset = "utf-8", n.nomodule = !0, n.src = e;
  return new Promise(function (e, t) {
    dist_esm_index_min_f(n), n.onload = function () {
      return e(!0);
    }, n.onerror = function () {
      return t(!1);
    };
  });
},
    esm_index_min_v = /*#__PURE__*/function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var n,
        t,
        o,
        s,
        _e2,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            n = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            t = _args.length > 2 ? _args[2] : undefined;
            o = dist_esm_index_min_m(n, !0), s = o.dependencies.all;

            if (!(s && s.length)) {
              _context.next = 11;
              break;
            }

            _e2 = 0;

          case 5:
            if (!(_e2 < s.length)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return esm_index_min_h(s[_e2].url);

          case 8:
            _e2++;
            _context.next = 5;
            break;

          case 11:
            index_min_I(t), esm_index_min_E(e);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function v(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function esm_index_min_b() {
  var e = window.VueI18n ? new window.VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en: {}
    }
  }) : void 0,
      _c3 = dist_esm_index_min_c,
      n = _c3.propsData,
      t = new (window.Vue.extend(this.$options.theComponent))(e ? {
    i18n: e,
    propsData: n
  } : {
    propsData: n
  });
  t.$mount(), this.$el.appendChild(t.$el);
}

var esm_index_min_E = function E(e) {
  esm_index_min_p(), new window.Vue({
    mounted: esm_index_min_b,
    theComponent: e
  }).$mount("#" + dist_esm_index_min_c.appId);
};

function index_min_I(e) {
  var _c4 = dist_esm_index_min_c,
      n = _c4.dependencies.vuePlugins,
      t = _c4.propsData.forceEnv,
      o = {
    forceEnv: t
  };
  if (n && n.length) for (var _e3 = 0; _e3 < n.length; _e3++) {
    if (!window[n[_e3].name]) throw new Error(n[_e3].name + " not found on global object");
    {
      var _t2 = window[n[_e3].name];
      _t2.install ? window.Vue.use(_t2, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, n[_e3].options || {}), o)) : _t2.default && _t2.default.install && window.Vue.use(_t2.default, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, n[_e3].options || {}), o));
    }
  }

  if (e && e.length) {
    var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(e),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _n = _step3.value;
        _n.install ? window.Vue.use(_n, Object(objectSpread2["a" /* default */])({}, o)) : _n.default && _n.default.install && window.Vue.use(_n.default, Object(objectSpread2["a" /* default */])({}, o));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}

function index_min_V() {
  var e = window.VueI18n ? new window.VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en: {}
    }
  }) : void 0,
      _c5 = dist_esm_index_min_c,
      n = _c5.compName,
      t = _c5.propsData,
      o = new (window.Vue.extend(window[n]))(e ? {
    i18n: e,
    propsData: t
  } : {
    propsData: t
  });
  o.$mount(), this.$el.appendChild(o.$el);
}

var index_min_S = function S() {
  var _c6 = dist_esm_index_min_c,
      e = _c6.cdnUrl,
      n = _c6.compName,
      t = _c6.selfUrl;
  return index_min_D({
    url: t || e,
    name: n
  });
},
    esm_index_min_$ = function $() {
  esm_index_min_p(), new window.Vue({
    mounted: index_min_V
  }).$mount("#" + dist_esm_index_min_c.appId);
},
    index_min_D = function D(e) {
  var n = e.name,
      t = e.url;
  return window[n] ? window[n] : __webpack_require__("9310")(t).then(function (e) {
    return window[n] = e.default ? e.default : e;
  });
},
    esm_index_min_y = /*#__PURE__*/function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var e,
        n,
        t,
        o,
        _e4,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            n = dist_esm_index_min_m(e), t = n.dependencies.all, o = [];
            if (t) for (_e4 = 0; _e4 < t.length; _e4++) {
              o.push(index_min_D(t[_e4]));
            }
            _context2.next = 5;
            return Promise.all(o);

          case 5:
            esm_index_min_U();
            _context2.next = 8;
            return index_min_S();

          case 8:
            esm_index_min_$();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function y() {
    return _ref3.apply(this, arguments);
  };
}();

function esm_index_min_U() {
  var _c7 = dist_esm_index_min_c,
      e = _c7.dependencies.vuePlugins,
      n = _c7.propsData.forceEnv,
      t = {
    forceEnv: n
  };
  if (e) for (var _n2 = 0; _n2 < e.length; _n2++) {
    if (!window[e[_n2].name]) throw new Error(e[_n2].name + " not found on global object");
    {
      var _o2 = window[e[_n2].name];
      _o2.install ? window.Vue.use(_o2, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, e[_n2].options || {}), t)) : _o2.default && _o2.default.install && window.Vue.use(_o2.default, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, e[_n2].options || {}), t));
    }
  }
}


// CONCATENATED MODULE: ./tests/e2e/scaffolding/widget-legacy.js






var libName = package_0["a" /* name */].replace('https://cdn.cbd.int/', ''); //hack for browser build

var widget_legacy_options = {};
var propsData = {
  options: widget_legacy_options,
  forceEnv: 'dev'
};
var _dependencyRef$legacy = dist_esm_index_min_a.legacy,
    VUE = _dependencyRef$legacy.VUE,
    VUE_I18N = _dependencyRef$legacy.VUE_I18N;
var dependencies = {
  all: [VUE, VUE_I18N],
  vuePlugins: [VUE_I18N],
  css: ['https://cdn.cbd.int/@scbd/www-css']
};
var config = {
  version: package_0["b" /* version */],
  name: libName,
  propsData: propsData,
  dependencies: dependencies
};
esm_index_min_v(src_1, config, [dist_esm_index_min]);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "df26":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "df6f":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c607");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "df8c":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6a61");
var regexpExec = __webpack_require__("42c5");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8bb2");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "e023":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d687");
var isObject = __webpack_require__("7526");
var has = __webpack_require__("f1a7");
var defineProperty = __webpack_require__("abdf").f;
var uid = __webpack_require__("1d8a");
var FREEZING = __webpack_require__("95ad");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "e03e":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "e129":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "e300":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6de");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8d0f");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("68b8");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9531");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("918c");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "e3f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b7fb").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "e3fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("58ec");
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization_vue__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_index_json_vue_type_custom_index_0_blockType_i18n_issuerPath_2FUsers_2Frandyhoulahan_2Fprojects_2F_40scbd_2Fecosystem_2Fpackages_2Faction_search_2Fsrc_2Fcomponents_2FList_2FCard_2FActor_2FOrganization_vue__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e68e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var fails = __webpack_require__("72df");
var toObject = __webpack_require__("37d1");
var nativeGetPrototypeOf = __webpack_require__("0e39");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("802e");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "e7a0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "e890":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var toLength = __webpack_require__("b495");
var toOffset = __webpack_require__("2dd7");
var toObject = __webpack_require__("37d1");
var fails = __webpack_require__("72df");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "e8e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("d054").forEach;
var arrayMethodIsStrict = __webpack_require__("7f8a");
var arrayMethodUsesToLength = __webpack_require__("ce71");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "e94e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("d4cb");
var global = __webpack_require__("f498");
var isForced = __webpack_require__("ebac");
var redefine = __webpack_require__("b8ba");
var has = __webpack_require__("f1a7");
var classof = __webpack_require__("6a61");
var inheritIfRequired = __webpack_require__("8fa9");
var toPrimitive = __webpack_require__("083f");
var fails = __webpack_require__("72df");
var create = __webpack_require__("82e8");
var getOwnPropertyNames = __webpack_require__("65d0").f;
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var defineProperty = __webpack_require__("abdf").f;
var trim = __webpack_require__("61ad").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ebac":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "ed2b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");
var create = __webpack_require__("82e8");
var definePropertyModule = __webpack_require__("abdf");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ee58":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("378c");
var nativeGetOwnPropertyNames = __webpack_require__("65d0").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "ef14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var IndexedObject = __webpack_require__("83a6");
var toIndexedObject = __webpack_require__("378c");
var arrayMethodIsStrict = __webpack_require__("7f8a");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "ef1f":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var redefine = __webpack_require__("b8ba");
var toString = __webpack_require__("5268");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "f028":
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "f1a7":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "f271":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("31c3");

// `Int16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "f28a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "f2bf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isObject = __webpack_require__("7526");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "f3b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b7fb").charAt;
var InternalStateModule = __webpack_require__("cdcd");
var defineIterator = __webpack_require__("2df4");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "f3e4":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "f498":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "f5f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "f7d3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");

// `globalThis` object
// https://github.com/tc39/proposal-global
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ "f8a5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var toObject = __webpack_require__("37d1");
var nativeKeys = __webpack_require__("0c47");
var fails = __webpack_require__("72df");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "fa46":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("abdf").f;
var has = __webpack_require__("f1a7");
var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "fa8c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var DOMIterables = __webpack_require__("130d");
var forEach = __webpack_require__("e8e5");
var createNonEnumerableProperty = __webpack_require__("5b12");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "fbf7":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fd08":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Creates an array of the own and inherited enumerable symbol properties
 * of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  return object == null ? {} : basePickBy(object, getAllKeysIn(object), baseIteratee(predicate));
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = omitBy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15"), __webpack_require__("6984")(module)))

/***/ }),

/***/ "ff5c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8bb2");
var toLength = __webpack_require__("b495");

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "ff89":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("0e39");
var createNonEnumerableProperty = __webpack_require__("5b12");
var has = __webpack_require__("f1a7");
var wellKnownSymbol = __webpack_require__("7d53");
var IS_PURE = __webpack_require__("0e93");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "ffd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("aaf2");
var $fill = __webpack_require__("29cd");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map