((typeof self !== 'undefined' ? self : this)["webpackJsonpPageHeaderFixedTestWidget"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpPageHeaderFixedTestWidget"] || []).push([[2],{

/***/ "02a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("3996");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("b111");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__("77c7");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("e300");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (Object(esm_typeof["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/createSuper.js




function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(isNativeReflectConstruct["a" /* default */])();
  return function _createSuperInternal() {
    var Super = Object(getPrototypeOf["a" /* default */])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

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

/***/ "2dd7":
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__("e01a");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


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

/***/ "3996":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var getBuiltIn = __webpack_require__("5428");
var aFunction = __webpack_require__("8697");
var anObject = __webpack_require__("157c");
var isObject = __webpack_require__("7526");
var create = __webpack_require__("82e8");
var bind = __webpack_require__("ce1d");
var fails = __webpack_require__("72df");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


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

/***/ "548c":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


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

/***/ "5dc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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

/***/ "77c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3996");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0d9f");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);



function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

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

/***/ "95ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


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

/***/ "a528":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e5c7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ky__WEBPACK_IMPORTED_MODULE_0__["a"]; });



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

/***/ "b111":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e68e");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "b2cb":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


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

/***/ "ce1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("8697");
var isObject = __webpack_require__("7526");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


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

/***/ "defa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var toLength = __webpack_require__("b495");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var correctIsRegExpLogic = __webpack_require__("3e32");
var IS_PURE = __webpack_require__("0e93");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


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

/***/ "e5c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6de");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8d0f");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d86f");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8d0d");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9531");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("868d");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f7d3");
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("e94e");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("b2cb");
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6559");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("26d3");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("548c");
/* harmony import */ var core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("2aa5");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("0d9f");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("9a51");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("c78b");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("32f5");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("defa");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("5a6a");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("4258");
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("5d84");
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("ffd0");
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("1dc1");
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("523f");
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("829e");
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("194e");
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("69a7");
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("655c");
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("4a04");
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("f28a");
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("d0d3");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("d9d9");
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("7de7");
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("53fc");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("8b79");
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("e890");
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("56c2");
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("3c4c");
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("9e77");
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("7846");
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("cecc");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("d9ce");
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("918c");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("0a6e");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("df26");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("42c2");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("30c6");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("f5f2");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("f0ad");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("02a5");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("fa53");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("ce37");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("0b38");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("7c6c");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("cf28");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__("da1e");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__("e300");




























































/*! MIT License © Sindre Sorhus */
var globals = {};

var getGlobal = function getGlobal(property) {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self;
  }
  /* istanbul ignore next */


  if (typeof window !== 'undefined' && window && property in window) {
    return window;
  }

  if (typeof global !== 'undefined' && global && property in global) {
    return global;
  }
  /* istanbul ignore next */


  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis;
  }
};

var globalProperties = ['Headers', 'Request', 'Response', 'ReadableStream', 'fetch', 'AbortController', 'FormData'];

var _loop = function _loop() {
  var property = _globalProperties[_i];
  Object.defineProperty(globals, property, {
    get: function get() {
      var globalObject = getGlobal(property);
      var value = globalObject && globalObject[property];
      return typeof value === 'function' ? value.bind(globalObject) : value;
    }
  });
};

for (var _i = 0, _globalProperties = globalProperties; _i < _globalProperties.length; _i++) {
  _loop();
}

var isObject = function isObject(value) {
  return value !== null && Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(value) === 'object';
};

var supportsAbortController = typeof globals.AbortController === 'function';
var supportsStreams = typeof globals.ReadableStream === 'function';
var supportsFormData = typeof globals.FormData === 'function';

var mergeHeaders = function mergeHeaders(source1, source2) {
  var result = new globals.Headers(source1 || {});
  var isHeadersInstance = source2 instanceof globals.Headers;
  var source = new globals.Headers(source2 || {});

  var _iterator = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])(source),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_56__[/* default */ "a"])(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (isHeadersInstance && value === 'undefined' || value === undefined) {
        result.delete(key);
      } else {
        result.set(key, value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
};

var deepMerge = function deepMerge() {
  var returnValue = {};
  var headers = {};

  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
    var source = _sources[_i2];

    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }

      returnValue = [].concat(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_55__[/* default */ "a"])(returnValue), Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_55__[/* default */ "a"])(source));
    } else if (isObject(source)) {
      for (var _i3 = 0, _Object$entries = Object.entries(source); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_56__[/* default */ "a"])(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (isObject(value) && Reflect.has(returnValue, key)) {
          value = deepMerge(returnValue[key], value);
        }

        returnValue = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])({}, returnValue), {}, Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_53__[/* default */ "a"])({}, key, value));
      }

      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
      }
    }

    returnValue.headers = headers;
  }

  return returnValue;
};

var requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
var responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
var retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
var retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
var retryAfterStatusCodes = [413, 429, 503];
var stop = Symbol('stop');

var HTTPError = /*#__PURE__*/function (_Error) {
  Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_50__[/* default */ "a"])(HTTPError, _Error);

  var _super = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])(HTTPError);

  function HTTPError(response) {
    var _this;

    Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_49__[/* default */ "a"])(this, HTTPError);

    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    _this = _super.call(this, response.statusText || String(response.status === 0 || response.status ? response.status : 'Unknown response error'));
    _this.name = 'HTTPError';
    _this.response = response;
    return _this;
  }

  return HTTPError;
}( /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_52__[/* default */ "a"])(Error));

var TimeoutError = /*#__PURE__*/function (_Error2) {
  Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_50__[/* default */ "a"])(TimeoutError, _Error2);

  var _super2 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])(TimeoutError);

  function TimeoutError(request) {
    var _this2;

    Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_49__[/* default */ "a"])(this, TimeoutError);

    _this2 = _super2.call(this, 'Request timed out');
    _this2.name = 'TimeoutError';
    _this2.request = request;
    return _this2;
  }

  return TimeoutError;
}( /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_52__[/* default */ "a"])(Error));

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}; // `Promise.race()` workaround (#91)


var timeout = function timeout(request, abortController, options) {
  return new Promise(function (resolve, reject) {
    var timeoutID = setTimeout(function () {
      if (abortController) {
        abortController.abort();
      }

      reject(new TimeoutError(request));
    }, options.timeout);
    /* eslint-disable promise/prefer-await-to-then */

    options.fetch(request).then(resolve).catch(reject).then(function () {
      clearTimeout(timeoutID);
    });
    /* eslint-enable promise/prefer-await-to-then */
  });
};

var normalizeRequestMethod = function normalizeRequestMethod(input) {
  return requestMethods.includes(input) ? input.toUpperCase() : input;
};

var defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes
};

var normalizeRetryOptions = function normalizeRetryOptions() {
  var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof retry === 'number') {
    return Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])({}, defaultRetryOptions), {}, {
      limit: retry
    });
  }

  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error('retry.methods must be an array');
  }

  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error('retry.statusCodes must be an array');
  }

  return Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])({}, defaultRetryOptions), retry), {}, {
    afterStatusCodes: retryAfterStatusCodes
  });
}; // The maximum value of a 32bit int (see issue #117)


var maxSafeTimeout = 2147483647;

var Ky = /*#__PURE__*/function () {
  function Ky(input) {
    var _this3 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_49__[/* default */ "a"])(this, Ky);

    this._retryCount = 0;
    this._input = input;
    this._options = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])({
      // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      credentials: this._input.credentials || 'same-origin'
    }, options), {}, {
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method || this._input.method),
      prefixUrl: String(options.prefixUrl || ''),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
      fetch: options.fetch || globals.fetch
    });

    if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
      throw new TypeError('`input` must be a string, URL, or Request');
    }

    if (this._options.prefixUrl && typeof this._input === 'string') {
      if (this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }

      if (!this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }

      this._input = this._options.prefixUrl + this._input;
    }

    if (supportsAbortController) {
      this.abortController = new globals.AbortController();

      if (this._options.signal) {
        this._options.signal.addEventListener('abort', function () {
          _this3.abortController.abort();
        });
      }

      this._options.signal = this.abortController.signal;
    }

    this.request = new globals.Request(this._input, this._options);

    if (this._options.searchParams) {
      var searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
      var url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams); // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one

      if ((supportsFormData && this._options.body instanceof globals.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
        this.request.headers.delete('content-type');
      }

      this.request = new globals.Request(new globals.Request(url, this.request), this._options);
    }

    if (this._options.json !== undefined) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set('content-type', 'application/json');
      this.request = new globals.Request(this.request, {
        body: this._options.body
      });
    }

    var fn = /*#__PURE__*/function () {
      var _ref = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, _iterator2, _step2, hook, modifiedResponse;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3._options.timeout > maxSafeTimeout)) {
                  _context2.next = 2;
                  break;
                }

                throw new RangeError("The `timeout` option cannot be greater than ".concat(maxSafeTimeout));

              case 2:
                _context2.next = 4;
                return delay(1);

              case 4:
                _context2.next = 6;
                return _this3._fetch();

              case 6:
                response = _context2.sent;
                _iterator2 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])(_this3._options.hooks.afterResponse);
                _context2.prev = 8;

                _iterator2.s();

              case 10:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 18;
                  break;
                }

                hook = _step2.value;
                _context2.next = 14;
                return hook(_this3.request, _this3._options, response.clone());

              case 14:
                modifiedResponse = _context2.sent;

                if (modifiedResponse instanceof globals.Response) {
                  response = modifiedResponse;
                }

              case 16:
                _context2.next = 10;
                break;

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](8);

                _iterator2.e(_context2.t0);

              case 23:
                _context2.prev = 23;

                _iterator2.f();

                return _context2.finish(23);

              case 26:
                if (!(!response.ok && _this3._options.throwHttpErrors)) {
                  _context2.next = 28;
                  break;
                }

                throw new HTTPError(response);

              case 28:
                if (!_this3._options.onDownloadProgress) {
                  _context2.next = 34;
                  break;
                }

                if (!(typeof _this3._options.onDownloadProgress !== 'function')) {
                  _context2.next = 31;
                  break;
                }

                throw new TypeError('The `onDownloadProgress` option must be a function');

              case 31:
                if (supportsStreams) {
                  _context2.next = 33;
                  break;
                }

                throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');

              case 33:
                return _context2.abrupt("return", _this3._stream(response.clone(), _this3._options.onDownloadProgress));

              case 34:
                if (_this3._options.parseJson) {
                  response.json = /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.t0 = _this3._options;
                            _context.next = 3;
                            return response.text();

                          case 3:
                            _context.t1 = _context.sent;
                            return _context.abrupt("return", _context.t0.parseJson.call(_context.t0, _context.t1));

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                }

                return _context2.abrupt("return", response);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[8, 20, 23, 26]]);
      }));

      return function fn() {
        return _ref.apply(this, arguments);
      };
    }();

    var isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());

    var result = isRetriableMethod ? this._retry(fn) : fn();

    var _loop2 = function _loop2() {
      var _Object$entries2$_i = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_56__[/* default */ "a"])(_Object$entries2[_i4], 2),
          type = _Object$entries2$_i[0],
          mimeType = _Object$entries2$_i[1];

      result[type] = /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.request.headers.set('accept', _this3.request.headers.get('accept') || mimeType);

                _context3.next = 3;
                return result;

              case 3:
                response = _context3.sent.clone();

                if (!(type === 'json')) {
                  _context3.next = 13;
                  break;
                }

                if (!(response.status === 204)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", '');

              case 7:
                if (!options.parseJson) {
                  _context3.next = 13;
                  break;
                }

                _context3.t0 = options;
                _context3.next = 11;
                return response.text();

              case 11:
                _context3.t1 = _context3.sent;
                return _context3.abrupt("return", _context3.t0.parseJson.call(_context3.t0, _context3.t1));

              case 13:
                return _context3.abrupt("return", response[type]());

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    };

    for (var _i4 = 0, _Object$entries2 = Object.entries(responseTypes); _i4 < _Object$entries2.length; _i4++) {
      _loop2();
    }

    return result;
  }

  Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_48__[/* default */ "a"])(Ky, [{
    key: "_calculateRetryDelay",
    value: function _calculateRetryDelay(error) {
      this._retryCount++;

      if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
        if (error instanceof HTTPError) {
          if (!this._options.retry.statusCodes.includes(error.response.status)) {
            return 0;
          }

          var retryAfter = error.response.headers.get('Retry-After');

          if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
            var after = Number(retryAfter);

            if (Number.isNaN(after)) {
              after = Date.parse(retryAfter) - Date.now();
            } else {
              after *= 1000;
            }

            if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
              return 0;
            }

            return after;
          }

          if (error.response.status === 413) {
            return 0;
          }
        }

        var BACKOFF_FACTOR = 0.3;
        return BACKOFF_FACTOR * Math.pow(2, this._retryCount - 1) * 1000;
      }

      return 0;
    }
  }, {
    key: "_retry",
    value: function () {
      var _retry2 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(fn) {
        var ms, _iterator3, _step3, hook, hookResult;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return fn();

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                ms = Math.min(this._calculateRetryDelay(_context4.t0), maxSafeTimeout);

                if (!(ms !== 0 && this._retryCount > 0)) {
                  _context4.next = 33;
                  break;
                }

                _context4.next = 12;
                return delay(ms);

              case 12:
                _iterator3 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])(this._options.hooks.beforeRetry);
                _context4.prev = 13;

                _iterator3.s();

              case 15:
                if ((_step3 = _iterator3.n()).done) {
                  _context4.next = 24;
                  break;
                }

                hook = _step3.value;
                _context4.next = 19;
                return hook({
                  request: this.request,
                  options: this._options,
                  error: _context4.t0,
                  response: _context4.t0.response.clone(),
                  retryCount: this._retryCount
                });

              case 19:
                hookResult = _context4.sent;

                if (!(hookResult === stop)) {
                  _context4.next = 22;
                  break;
                }

                return _context4.abrupt("return");

              case 22:
                _context4.next = 15;
                break;

              case 24:
                _context4.next = 29;
                break;

              case 26:
                _context4.prev = 26;
                _context4.t1 = _context4["catch"](13);

                _iterator3.e(_context4.t1);

              case 29:
                _context4.prev = 29;

                _iterator3.f();

                return _context4.finish(29);

              case 32:
                return _context4.abrupt("return", this._retry(fn));

              case 33:
                if (!this._options.throwHttpErrors) {
                  _context4.next = 35;
                  break;
                }

                throw _context4.t0;

              case 35:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6], [13, 26, 29, 32]]);
      }));

      function _retry(_x) {
        return _retry2.apply(this, arguments);
      }

      return _retry;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch2 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _iterator4, _step4, hook, _result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _iterator4 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])(this._options.hooks.beforeRequest);
                _context5.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context5.next = 15;
                  break;
                }

                hook = _step4.value;
                _context5.next = 7;
                return hook(this.request, this._options);

              case 7:
                _result = _context5.sent;

                if (!(_result instanceof Request)) {
                  _context5.next = 11;
                  break;
                }

                this.request = _result;
                return _context5.abrupt("break", 15);

              case 11:
                if (!(_result instanceof Response)) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", _result);

              case 13:
                _context5.next = 3;
                break;

              case 15:
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](1);

                _iterator4.e(_context5.t0);

              case 20:
                _context5.prev = 20;

                _iterator4.f();

                return _context5.finish(20);

              case 23:
                if (!(this._options.timeout === false)) {
                  _context5.next = 25;
                  break;
                }

                return _context5.abrupt("return", this._options.fetch(this.request.clone()));

              case 25:
                return _context5.abrupt("return", timeout(this.request.clone(), this.abortController, this._options));

              case 26:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 17, 20, 23]]);
      }));

      function _fetch() {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }()
    /* istanbul ignore next */

  }, {
    key: "_stream",
    value: function _stream(response, onDownloadProgress) {
      var totalBytes = Number(response.headers.get('content-length')) || 0;
      var transferredBytes = 0;
      return new globals.Response(new globals.ReadableStream({
        start: function start(controller) {
          var reader = response.body.getReader();

          if (onDownloadProgress) {
            onDownloadProgress({
              percent: 0,
              transferredBytes: 0,
              totalBytes: totalBytes
            }, new Uint8Array());
          }

          function read() {
            return _read.apply(this, arguments);
          }

          function _read() {
            _read = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_47__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _yield$reader$read, done, value, percent;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return reader.read();

                    case 2:
                      _yield$reader$read = _context6.sent;
                      done = _yield$reader$read.done;
                      value = _yield$reader$read.value;

                      if (!done) {
                        _context6.next = 8;
                        break;
                      }

                      controller.close();
                      return _context6.abrupt("return");

                    case 8:
                      if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({
                          percent: percent,
                          transferredBytes: transferredBytes,
                          totalBytes: totalBytes
                        }, value);
                      }

                      controller.enqueue(value);
                      read();

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
            return _read.apply(this, arguments);
          }

          read();
        }
      }));
    }
  }]);

  return Ky;
}();

var validateAndMerge = function validateAndMerge() {
  for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sources[_key2] = arguments[_key2];
  }

  for (var _i5 = 0, _sources2 = sources; _i5 < _sources2.length; _i5++) {
    var source = _sources2[_i5];

    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }

  return deepMerge.apply(void 0, [{}].concat(sources));
};

var createInstance = function createInstance(defaults) {
  var ky = function ky(input, options) {
    return new Ky(input, validateAndMerge(defaults, options));
  };

  var _iterator5 = Object(_Users_randyhoulahan_projects_scbd_ecosystem_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])(requestMethods),
      _step5;

  try {
    var _loop3 = function _loop3() {
      var method = _step5.value;

      ky[method] = function (input, options) {
        return new Ky(input, validateAndMerge(defaults, options, {
          method: method
        }));
      };
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  ky.HTTPError = HTTPError;
  ky.TimeoutError = TimeoutError;

  ky.create = function (newDefaults) {
    return createInstance(validateAndMerge(newDefaults));
  };

  ky.extend = function (newDefaults) {
    return createInstance(validateAndMerge(defaults, newDefaults));
  };

  ky.stop = stop;
  return ky;
};

/* harmony default export */ __webpack_exports__["a"] = (createInstance());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

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

/***/ "f0ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5dc0");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

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

/***/ "fa53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapNativeSuper_wrapNativeSuper; });

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("9531");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("9bd2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("b111");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__("5dc0");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("beb4");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("0d9f");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js



function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("3996");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__("77c7");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/construct.js



function construct_construct(Parent, args, Class) {
  if (Object(isNativeReflectConstruct["a" /* default */])()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(setPrototypeOf["a" /* default */])(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/ecosystem/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js









function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, Object(getPrototypeOf["a" /* default */])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(setPrototypeOf["a" /* default */])(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}

/***/ }),

/***/ "fbf7":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

}]);
//# sourceMappingURL=index.umd.vendors~ky-universal.js.map