(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IeTest"] = factory();
	else
		root["IeTest"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "dd63");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "0e93":
/***/ (function(module, exports) {

module.exports = false;


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

/***/ "1d8a":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


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

/***/ "2402":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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

/***/ "6a61":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


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

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"@scbd/ie-test\",\"b\":\"0.0.1\"}");

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

/***/ "c607":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var setGlobal = __webpack_require__("3e34");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


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

/***/ "d73b":
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e():undefined})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="dd63")}({"07d9":function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("a0d5")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"3a0b":function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,c="[object Arguments]",a="[object Array]",u="[object Boolean]",f="[object Date]",s="[object Error]",l="[object Function]",p="[object GeneratorFunction]",d="[object Map]",h="[object Number]",v="[object Object]",y="[object Promise]",b="[object RegExp]",g="[object Set]",m="[object String]",w="[object Symbol]",j="[object WeakMap]",O="[object ArrayBuffer]",_="[object DataView]",E="[object Float32Array]",x="[object Float64Array]",P="[object Int8Array]",S="[object Int16Array]",A="[object Int32Array]",k="[object Uint8Array]",L="[object Uint8ClampedArray]",D="[object Uint16Array]",I="[object Uint32Array]",N=/[\\^$.*+?()[\]{}|]/g,T=/\w*$/,U=/^\[object .+?Constructor\]$/,V=/^(?:0|[1-9]\d*)$/,$={};$[c]=$[a]=$[O]=$[_]=$[u]=$[f]=$[E]=$[x]=$[P]=$[S]=$[A]=$[d]=$[h]=$[v]=$[b]=$[g]=$[m]=$[w]=$[k]=$[L]=$[D]=$[I]=!0,$[s]=$[l]=$[j]=!1;var C="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,F=C||M||Function("return this")(),R=e&&!e.nodeType&&e,B=R&&"object"==typeof n&&n&&!n.nodeType&&n,z=B&&B.exports===R;function G(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function W(t,e){var n=-1,r=t?t.length:0;while(++n<r)if(!1===e(t[n],n,t))break;return t}function Z(t,e){var n=-1,r=e.length,o=t.length;while(++n<r)t[o+n]=e[n];return t}function Y(t,e,n,r){var o=-1,i=t?t.length:0;r&&i&&(n=t[++o]);while(++o<i)n=e(n,t[o],o,t);return n}function q(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function J(t,e){return null==t?void 0:t[e]}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function Q(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function X(t,e){return function(n){return t(e(n))}}function tt(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var et=Array.prototype,nt=Function.prototype,rt=Object.prototype,ot=F["__core-js_shared__"],it=function(){var t=/[^.]+$/.exec(ot&&ot.keys&&ot.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ct=nt.toString,at=rt.hasOwnProperty,ut=rt.toString,ft=RegExp("^"+ct.call(at).replace(N,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),st=z?F.Buffer:void 0,lt=F.Symbol,pt=F.Uint8Array,dt=X(Object.getPrototypeOf,Object),ht=Object.create,vt=rt.propertyIsEnumerable,yt=et.splice,bt=Object.getOwnPropertySymbols,gt=st?st.isBuffer:void 0,mt=X(Object.keys,Object),wt=Pe(F,"DataView"),jt=Pe(F,"Map"),Ot=Pe(F,"Promise"),_t=Pe(F,"Set"),Et=Pe(F,"WeakMap"),xt=Pe(Object,"create"),Pt=Ve(wt),St=Ve(jt),At=Ve(Ot),kt=Ve(_t),Lt=Ve(Et),Dt=lt?lt.prototype:void 0,It=Dt?Dt.valueOf:void 0;function Nt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Tt(){this.__data__=xt?xt(null):{}}function Ut(t){return this.has(t)&&delete this.__data__[t]}function Vt(t){var e=this.__data__;if(xt){var n=e[t];return n===o?void 0:n}return at.call(e,t)?e[t]:void 0}function $t(t){var e=this.__data__;return xt?void 0!==e[t]:at.call(e,t)}function Ct(t,e){var n=this.__data__;return n[t]=xt&&void 0===e?o:e,this}function Mt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Ft(){this.__data__=[]}function Rt(t){var e=this.__data__,n=ie(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():yt.call(e,n,1),!0}function Bt(t){var e=this.__data__,n=ie(e,t);return n<0?void 0:e[n][1]}function zt(t){return ie(this.__data__,t)>-1}function Gt(t,e){var n=this.__data__,r=ie(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function Ht(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Wt(){this.__data__={hash:new Nt,map:new(jt||Mt),string:new Nt}}function Zt(t){return xe(this,t)["delete"](t)}function Yt(t){return xe(this,t).get(t)}function qt(t){return xe(this,t).has(t)}function Jt(t,e){return xe(this,t).set(t,e),this}function Kt(t){this.__data__=new Mt(t)}function Qt(){this.__data__=new Mt}function Xt(t){return this.__data__["delete"](t)}function te(t){return this.__data__.get(t)}function ee(t){return this.__data__.has(t)}function ne(t,e){var n=this.__data__;if(n instanceof Mt){var o=n.__data__;if(!jt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Ht(o)}return n.set(t,e),this}function re(t,e){var n=Fe(t)||Me(t)?q(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!at.call(t,i)||o&&("length"==i||Ie(i,r))||n.push(i);return n}function oe(t,e,n){var r=t[e];at.call(t,e)&&Ce(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function ie(t,e){var n=t.length;while(n--)if(Ce(t[n][0],e))return n;return-1}function ce(t,e){return t&&Oe(e,Ye(e),t)}function ae(t,e,n,r,o,i,a){var u;if(r&&(u=i?r(t,o,i,a):r(t)),void 0!==u)return u;if(!We(t))return t;var f=Fe(t);if(f){if(u=ke(t),!e)return je(t,u)}else{var s=Ae(t),d=s==l||s==p;if(ze(t))return de(t,e);if(s==v||s==c||d&&!i){if(K(t))return i?t:{};if(u=Le(d?{}:t),!e)return _e(t,ce(u,t))}else{if(!$[s])return i?t:{};u=De(t,s,ae,e)}}a||(a=new Kt);var h=a.get(t);if(h)return h;if(a.set(t,u),!f)var y=n?Ee(t):Ye(t);return W(y||t,(function(o,i){y&&(i=o,o=t[i]),oe(u,i,ae(o,e,n,r,i,t,a))})),u}function ue(t){return We(t)?ht(t):{}}function fe(t,e,n){var r=e(t);return Fe(t)?r:Z(r,n(t))}function se(t){return ut.call(t)}function le(t){if(!We(t)||Te(t))return!1;var e=Ge(t)||K(t)?ft:U;return e.test(Ve(t))}function pe(t){if(!Ue(t))return mt(t);var e=[];for(var n in Object(t))at.call(t,n)&&"constructor"!=n&&e.push(n);return e}function de(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function he(t){var e=new t.constructor(t.byteLength);return new pt(e).set(new pt(t)),e}function ve(t,e){var n=e?he(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function ye(t,e,n){var r=e?n(Q(t),!0):Q(t);return Y(r,G,new t.constructor)}function be(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}function ge(t,e,n){var r=e?n(tt(t),!0):tt(t);return Y(r,H,new t.constructor)}function me(t){return It?Object(It.call(t)):{}}function we(t,e){var n=e?he(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function je(t,e){var n=-1,r=t.length;e||(e=Array(r));while(++n<r)e[n]=t[n];return e}function Oe(t,e,n,r){n||(n={});var o=-1,i=e.length;while(++o<i){var c=e[o],a=r?r(n[c],t[c],c,n,t):void 0;oe(n,c,void 0===a?t[c]:a)}return n}function _e(t,e){return Oe(t,Se(t),e)}function Ee(t){return fe(t,Ye,Se)}function xe(t,e){var n=t.__data__;return Ne(e)?n["string"==typeof e?"string":"hash"]:n.map}function Pe(t,e){var n=J(t,e);return le(n)?n:void 0}Nt.prototype.clear=Tt,Nt.prototype["delete"]=Ut,Nt.prototype.get=Vt,Nt.prototype.has=$t,Nt.prototype.set=Ct,Mt.prototype.clear=Ft,Mt.prototype["delete"]=Rt,Mt.prototype.get=Bt,Mt.prototype.has=zt,Mt.prototype.set=Gt,Ht.prototype.clear=Wt,Ht.prototype["delete"]=Zt,Ht.prototype.get=Yt,Ht.prototype.has=qt,Ht.prototype.set=Jt,Kt.prototype.clear=Qt,Kt.prototype["delete"]=Xt,Kt.prototype.get=te,Kt.prototype.has=ee,Kt.prototype.set=ne;var Se=bt?X(bt,Object):qe,Ae=se;function ke(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&at.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function Le(t){return"function"!=typeof t.constructor||Ue(t)?{}:ue(dt(t))}function De(t,e,n,r){var o=t.constructor;switch(e){case O:return he(t);case u:case f:return new o(+t);case _:return ve(t,r);case E:case x:case P:case S:case A:case k:case L:case D:case I:return we(t,r);case d:return ye(t,r,n);case h:case m:return new o(t);case b:return be(t);case g:return ge(t,r,n);case w:return me(t)}}function Ie(t,e){return e=null==e?i:e,!!e&&("number"==typeof t||V.test(t))&&t>-1&&t%1==0&&t<e}function Ne(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Te(t){return!!it&&it in t}function Ue(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||rt;return t===n}function Ve(t){if(null!=t){try{return ct.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function $e(t){return ae(t,!0,!0)}function Ce(t,e){return t===e||t!==t&&e!==e}function Me(t){return Be(t)&&at.call(t,"callee")&&(!vt.call(t,"callee")||ut.call(t)==c)}(wt&&Ae(new wt(new ArrayBuffer(1)))!=_||jt&&Ae(new jt)!=d||Ot&&Ae(Ot.resolve())!=y||_t&&Ae(new _t)!=g||Et&&Ae(new Et)!=j)&&(Ae=function(t){var e=ut.call(t),n=e==v?t.constructor:void 0,r=n?Ve(n):void 0;if(r)switch(r){case Pt:return _;case St:return d;case At:return y;case kt:return g;case Lt:return j}return e});var Fe=Array.isArray;function Re(t){return null!=t&&He(t.length)&&!Ge(t)}function Be(t){return Ze(t)&&Re(t)}var ze=gt||Je;function Ge(t){var e=We(t)?ut.call(t):"";return e==l||e==p}function He(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function We(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ze(t){return!!t&&"object"==typeof t}function Ye(t){return Re(t)?re(t):pe(t)}function qe(){return[]}function Je(){return!1}n.exports=$e}).call(this,n("7d15"),n("6984")(t))},"405b":function(t,e,n){var r,o,i;(function(n,c){o=[],r=c,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),c=i&&i[1]||!1,a=i&&i[2]||!1,u=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");c===u&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===c)return f[s];if(c===u&&f[s].innerHTML&&f[s].innerHTML.trim()===n)return f[s]}return null}}return t}))},"56d4":function(t,e,n){t.exports=n("df26")},6984:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"7d15":function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},9224:function(t){t.exports=JSON.parse('{"a":"@scbd/self-embedding-component"}')},a0d5:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var c=i>=0?arguments[i]:t.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(e=c+"/"+e,r="/"===c.charAt(0))}return e=n(o(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),c="/"===i(t,-1);return t=n(o(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&c&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),c=Math.min(o.length,i.length),a=c,u=0;u<c;u++)if(o[u]!==i[u]){a=u;break}var f=[];for(u=a;u<o.length;u++)f.push("..");return f=f.concat(i.slice(a)),f.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,c=t.length-1;c>=0;--c){var a=t.charCodeAt(c);if(47!==a)-1===r&&(o=!1,r=c+1),46===a?-1===e?e=c:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=c+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("07d9"))},b549:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="b549"},d790:function(t,e,n){"use strict";(function(t){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}
/*!
* @scbd/default-options 0.1.9
*
* @link www.cbd.int
* @source https://github.com/scbd/ecosystem/packages/default-options
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/ecosystem/blob/master/LICENCE
*/n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return d}));var a={host:"https://www.cbddev.xyz",basePath:"/"},u={host:"https://www.staging.cbd.int",basePath:"/"},f={host:"https://www.cbd.int",basePath:"/"},s={host:String,basePath:String},l=function(){function e(t){var n=t.environments,r=t.validationMap,i=t.forceEnv,c=t.name;o(this,e),n=function(t){var e=Object.assign(a,t.dev||t.development||{}),n=Object.assign(u,t.stg||t.staging||{}),r=Object.assign(f,t.prod||t.production||{});return{development:e,dev:e,staging:n,stg:n,production:r,prod:r}}(n),r=Object.assign(s,r),this.props={environments:n,validationMap:r,forceEnv:i,name:c}}return c(e,[{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.env,n=this.props.environments;for(var r in t)n[e][r]=t[r];return this.validate(n[e]),n[e]}},{key:"validate",value:function(t){return v(t,this.props.validationMap)}},{key:"env",get:function(){return this.props.forceEnv?this.props.forceEnv:"undefined"==typeof window&&"undefined"!=typeof t&&Object({NODE_ENV:"production",BASE_URL:"/"})?"production":function(){var t=window.location.href;return t.includes("staging.cbd.int")?"stg":t.includes("cbddev.xyz")?"dev":(t.includes("www.cbd.int"),"prod")}()}}]),e}(),p={},d=function(t){var e=t.environments,n=t.validationMap,r=t.forceEnv,o=t.name,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(!i)throw new Error("@scbd/default-options.setDefaultOptions: no name/nameSpace passed to setDefaultOptions");p[i]=new l({environments:e,validationMap:n,forceEnv:r,name:o})},h=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return p[t].get(e,n)}};function v(t,e){for(var n in t){var o=t[n].constructor?t[n].constructor:"object"==r(t[n])?Object:void 0,i=e[n];Object.keys(e).includes(n)||y(t,n),o!==i&&b(n,o.name,i.name)}}function y(t,e){throw new Error(e+" not permitted in  component: options")}function b(t,e,n){throw new Error("".concat(t," has incorrect type.  Received: ").concat(e," Expected: ").concat(n))}}).call(this,n("07d9"))},dd63:function(t,e,n){"use strict";if(n.r(e),n.d(e,"buildLegacyWidget",(function(){return rt})),n.d(e,"buildWidget",(function(){return mt})),n.d(e,"dependencyRef",(function(){return _})),n.d(e,"getOptions",(function(){return R})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("405b");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)};function a(t){return t.toLowerCase()}var u=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],f=/[^A-Z0-9]+/gi;function s(t,e){void 0===e&&(e={});var n=e.splitRegexp,r=void 0===n?u:n,o=e.stripRegexp,i=void 0===o?f:o,c=e.transform,s=void 0===c?a:c,p=e.delimiter,d=void 0===p?" ":p,h=l(l(t,r,"$1\0$2"),i,"\0"),v=0,y=h.length;while("\0"===h.charAt(v))v++;while("\0"===h.charAt(y-1))y--;return h.slice(v,y).split("\0").map(s).join(d)}function l(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function p(t,e){var n=t.charAt(0),r=t.substr(1).toLowerCase();return e>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function d(t,e){return void 0===e&&(e={}),s(t,c({delimiter:"",transform:p},e))}function h(t,e){return 0===e?t.toLowerCase():p(t,e)}function v(t,e){return void 0===e&&(e={}),d(t,c({transform:h},e))}var y=n("d790"),b=n("9224");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j="https://cdn.cbd.int",O=Object(y["a"])(b["a"]),_={VUE:{url:"".concat(j,"/vue/dist/vue.esm.browser.min.js"),name:"Vue"},VUE_I18N:{url:"".concat(j,"/vue-i18n/dist/vue-i18n.esm.browser.min.js"),name:"VueI18n"},SCBD_SSO_AUTH:{url:"".concat(j,"/@scbd/sso-vue-plugin-scbd"),name:"sso-vue-plugin-scbd"},legacy:{VUE:{url:"".concat(j,"/vue"),name:"Vue"},VUE_I18N:{url:"".concat(j,"/vue-i18n"),name:"VueI18n"},SCBD_SSO_AUTH:{url:"".concat(j,"/@scbd/sso-vue-plugin-scbd/dist/legacy/umd/index.umd.min.js"),name:"sso-vue-plugin-scbd"}}},E={id:String,appId:String,name:String,selfId:String,compName:String,version:String,propsData:Object,cdnUrl:String,cdn:String,dependencies:Object,dependencyRef:Object,selfUrl:String},x={all:[],css:[],vuePlugins:[],legacy:[]},P={dependencyRef:_,cdn:j,dependencies:x},S=m({},P),A=m({},S),k={prod:A,stg:S,dev:P};Object(y["b"])({environments:k,validationMap:E,name:b["a"]});var L=n("3a0b"),D=n.n(L);function I(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=N(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function N(t,e){if(t){if("string"===typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){$(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C="",M="",F={},R=function(){var t=Boolean(Object.keys(F).length);if(t)throw new Error;return Object.freeze(D()(F))},B=function(){var t=document.createElement("div");t.id=F.appId,z(t)},z=function(t){F.parentNode.insertBefore(t,F.selfElement)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t.name)throw new Error("EmbedComponent requires name to be set in options");return F=V(V({},O(t)),{},{parentNode:C,selfElement:M,get selfId(){return this.id?this.id:this.name.replace("@scbd/","")},set selfId(t){this.id=t},get appId(){return"appId-".concat(this.selfId)},get compName(){return d(this.selfId)},get cdnUrl(){return this.version?"".concat(this.cdn,"/").concat(this.name,"@").concat(this.version):"".concat(this.cdn,"/").concat(this.name)}}),J(),H(e),Y(),F},H=function(t){var e=t?"".concat(F.selfId,"-legacy"):F.selfId;if(F.selfElement=document.getElementById(e),!F.selfElement)throw new Error('Id on script tag not found: id="'.concat(e,'"'));F.propsData.options=Z(),F.parentNode=F.selfElement.parentNode},W=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=document.createElement("script");if(r.charset="utf-8",r.nomodule=!0,r.src=e,!n)return z(r);r.onload=n,r.onreadystatechange=n,z(r)}};function Z(){var t=F.selfElement,e=F.propsData.options,n=t.attributes,r={};if(!t.hasAttributes())return e;var o,i=I(n);try{for(i.s();!(o=i.n()).done;){var c=o.value,a=c.name,u=c.value;["id","src","type"].includes(a)||(r[v(a)]=u)}}catch(f){i.e(f)}finally{i.f()}return Object.assign(e,r)}function Y(){var t=F,e=t.dependencies.css;e.forEach((function(t){return q(t)}))}function q(t){var e=document.createElement("link");e.rel="stylesheet",e.charset="utf-8",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)}function J(){var t=F,e=t.dependencies,n=e.all,r=e.vuePlugins;if(r&&r.length){var o,i=n.map(K),c=I(r);try{for(c.s();!(o=c.n()).done;){var a=o.value;i.includes(a.name)||n.push(a)}}catch(u){c.e(u)}finally{c.f()}}}function K(t){var e=t.name;return e}function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=function(){var t=F.cdnUrl,e=F.selfUrl;nt(e||t+"/dist/legacy/umd/index.umd.min.js",at)},nt=W(et),rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};G(t,!0);for(var e=F.dependencies.all,n=[],r=function(t){n[t]=function(){return nt(e[t].url,n[t+1])}},o=0;o<e.length;o++)r(o);n[0]()};function ot(){var t=ct(),e=F.compName,n=F.propsData,r=window["Vue"].extend(window[e].default),o=t?{i18n:t,propsData:n}:{propsData:n},i=new r(o);i.$mount(),this.$el.appendChild(i.$el)}var it=function(){B(),new window["Vue"]({mounted:ot}).$mount("#".concat(F.appId))};function ct(){if(window["VueI18n"])return new window["VueI18n"]({locale:"en",fallbackLocale:"en",messages:{en:{}}})}function at(){var t=F.dependencies.vuePlugins,e=F.propsData.forceEnv,n={forceEnv:e};if(t){for(var r=0;r<t.length;r++){if(!window[t[r].name])throw new Error("".concat(t[r].name," not found on global object"));var o=window[t[r].name];o.install?window.Vue.use(o,X(X({},t[r].options||{}),n)):o.default&&o.default.install&&window.Vue.use(o.default,X(X({},t[r].options||{}),n))}it()}}var ut=n("56d4"),ft=n.n(ut);function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){pt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dt(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(f){return void n(f)}a.done?e(u):Promise.resolve(u).then(r,o)}function ht(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){dt(i,r,o,c,a,"next",t)}function a(t){dt(i,r,o,c,a,"throw",t)}c(void 0)}))}}function vt(){var t=jt(),e=F.compName,n=F.propsData,r=window["Vue"].extend(window[e]),o=t?{i18n:t,propsData:n}:{propsData:n},i=new r(o);i.$mount(),this.$el.appendChild(i.$el)}var yt=function(){var t=F.cdnUrl,e=F.compName,n=F.selfUrl;return gt({url:n||t,name:e})},bt=function(){B(),new window["Vue"]({mounted:vt}).$mount("#".concat(F.appId))},gt=function(t){var e=t.name,r=t.url;return window[e]?window[e]:n("b549")(r).then((function(t){return window[e]=t.default?t.default:t}))},mt=function(){var t=ht(ft.a.mark((function t(){var e,n,r,o,i,c,a,u,f=arguments;return ft.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=f.length>0&&void 0!==f[0]?f[0]:{},G(e),n=F.dependencies,r=n.all,o=n.legacy,i=[],c=W,r)for(a=0;a<r.length;a++)i.push(gt(r[a]));return t.next=8,Promise.all(i);case 8:if(o)for(u=0;u<o.length;u++)c(o[u].url);return wt(),t.next=12,yt();case 12:bt();case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function wt(){var t=F.dependencies.vuePlugins,e=F.propsData.forceEnv,n={forceEnv:e};if(t)for(var r=0;r<t.length;r++){if(!window[t[r].name])throw new Error("".concat(t[r].name," not found on global object"));var o=window[t[r].name];o.install?window.Vue.use(o,lt(lt({},t[r].options||{}),n)):o.default&&o.default.install&&window.Vue.use(o.default,lt(lt({},t[r].options||{}),n))}}function jt(){if(window["VueI18n"])return new window["VueI18n"]({locale:"en",fallbackLocale:"en",messages:{en:{}}})}},df26:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new A(r||[]);return i._invoke=E(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var s="suspendedStart",l="suspendedYield",p="executing",d="completed",h={};function v(){}function y(){}function b(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(k([])));w&&w!==n&&r.call(w,i)&&(g=w);var j=b.prototype=v.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){function n(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=s;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return L()}n.method=o,n.arg=i;while(1){var c=n.delegate;if(c){var a=x(c,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?d:l,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return y.prototype=j.constructor=b,b.constructor=y,b[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(_.prototype),_.prototype[c]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new _(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(j),j[a]="Generator",j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),f=r.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}}})}));
//# sourceMappingURL=index.umd.min.js.map

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

// EXTERNAL MODULE: ./node_modules/@scbd/self-embedding-component/dist/legacy/umd/index.umd.min.js
var index_umd_min = __webpack_require__("d73b");

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/widget-legacy.js




var libName = package_0["a" /* name */].replace('https://cdn.cbd.int/', ''); //hack for browser build

var propsData = {
  options: {}
};
var _dependencyRef$legacy = index_umd_min["dependencyRef"].legacy,
    VUE = _dependencyRef$legacy.VUE,
    VUE_I18N = _dependencyRef$legacy.VUE_I18N;
var selfUrl = 'https://aa.cbddev.xyz/ie/legacy/umd/index.umd.js';
var dependencies = {
  all: [VUE, VUE_I18N],
  vuePlugins: [VUE_I18N],
  css: ['https://cdn.cbd.int/@scbd/www-css']
};
var config = {
  version: package_0["b" /* version */],
  name: libName,
  propsData: propsData,
  dependencies: dependencies,
  selfUrl: selfUrl
};
Object(index_umd_min["buildLegacyWidget"])(config);
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




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

/***/ "e7a0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


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

/***/ "f1a7":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


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

/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map