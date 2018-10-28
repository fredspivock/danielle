(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n}\r\n\r\nul.topbar {\r\n  display: none;\r\n}\r\n\r\nul.bottombar {\r\n  padding: 15px;\r\n  top: 45px;\r\n}\r\n\r\nul.bottombar li {\r\n  padding-bottom: 10px;\r\n  width: 160px;\r\n}\r\n\r\nul a {\r\n  color: black;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: .8em;\r\n  text-transform: uppercase;\r\n}\r\n\r\nul a:hover\r\n{\r\n  border-bottom: solid 2px black;\r\n  cursor:pointer;\r\n}\r\n\r\nnav {\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n  z-index: 100;\r\n  background: white;\r\n  border-bottom: solid 2px #e0e0e0;\r\n  width: 100%;\r\n  height: 55px;\r\n  position: fixed;\r\n  top: 0;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.hamburger-wrapper {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 6%;\r\n  padding: 10px 0 10px 10px;\r\n  color: black;\r\n}\r\n\r\n.hamburger-wrapper:hover {\r\n  color:#00A0C6;\r\n}\r\n\r\nmat-sidenav {\r\n  background-color: white;\r\n  box-shadow: 0 0 11px 0 #000000;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n\r\n  nav.scrolled {\r\n    background: rgba(255,255,255,.9);\r\n    height: 45px;\r\n    box-shadow: 0 0px 11px 0 #000000;\r\n\r\n  }\r\n\r\n  nav.scrolled .title {\r\n    font-size: 1.7em;\r\n  }\r\n\r\n  ul.topbar {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 15px 0 20px 10px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 6%;\r\n  }\r\n\r\n  .topbar li {\r\n    padding-left: 5px;\r\n    display: inline;\r\n  }\r\n  .hamburger-wrapper {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.nav-padding {\r\n  height:50px;\r\n}\r\n\r\n.title {\r\n  font-family: 'PT Serif', serif;\r\n  font-size: 2em;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.active {\r\n  border-bottom: solid 2px black;\r\n}\r\n\r\n.main-footer {\r\n  margin-top: -20px;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: white;\r\n  height: 150px;\r\n  width: 100%;\r\n  background-color: #212322;\r\n}\r\n\r\n.rights {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: .8em;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.social-medias a {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  color: white;\r\n}\r\n\r\n.social-medias div {\r\n  display: inline-block;\r\n}\r\n\r\n.social-medias a:hover {\r\n  color: rgb(182, 182, 182);\r\n}\r\n\r\n.footer-title {\r\n  padding-left: 2%;\r\n}\r\n\r\n.renaudBray {\r\n  height: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsVUFBVTtDQUNYOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7O0VBRUUsK0JBQStCO0VBQy9CLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLE9BQU87RUFLUCx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLCtCQUErQjtDQUNoQzs7QUFHRDs7RUFFRTtJQUNFLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsaUNBQWlDOztHQUVsQzs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsY0FBYztHQUNmO0NBQ0Y7O0FBR0Q7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUtmLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG51bC50b3BiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnVsLmJvdHRvbWJhciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0b3A6IDQ1cHg7XHJcbn1cclxuXHJcbnVsLmJvdHRvbWJhciBsaSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG51bCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudWwgYTpob3ZlclxyXG57XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZTBlMGUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA2JTtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhhbWJ1cmdlci13cmFwcGVyOmhvdmVyIHtcclxuICBjb2xvcjojMDBBMEM2O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDExcHggMCAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG5cclxuICBuYXYuc2Nyb2xsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMXB4IDAgIzAwMDAwMDtcclxuXHJcbiAgfVxyXG5cclxuICBuYXYuc2Nyb2xsZWQgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgfVxyXG5cclxuICB1bC50b3BiYXIge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDIwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICB9XHJcblxyXG4gIC50b3BiYXIgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5uYXYtcGFkZGluZyB7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xyXG59XHJcblxyXG4ubWFpbi1mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzIyO1xyXG59XHJcblxyXG4ucmlnaHRzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWFzIGEge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYXMgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWFzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XHJcbn1cclxuXHJcbi5mb290ZXItdGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5yZW5hdWRCcmF5IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [class.scrolled]=\"isScrolled\">\r\n  <span class=\"title\">Danielle Dumais</span>\r\n  <ul class=\"topbar\">\r\n    <li><a [routerLink]=\"['/series']\" routerLinkActive=\"active\">Les Séries</a></li>\r\n    <li><a [routerLink]=\"['/auteur']\" routerLinkActive=\"active\">Auteure</a></li>\r\n  </ul>\r\n  <div class=\"hamburger-wrapper\" (click)=\"sidenav.toggle()\">\r\n    <span class=\"fa fa-2x fa-bars\"></span>\r\n  </div>\r\n</nav>\r\n<div class=\"nav-padding\"></div>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav mode=\"over\" [opened]=\"false\" class=\"side-nav-bar\">\r\n    <ul class=\"bottombar\">\r\n      <li><a [routerLink]=\"['/series']\" routerLinkActive=\"active\">Les Séries</a></li>\r\n      <li><a [routerLink]=\"['/auteur']\" routerLinkActive=\"active\">Auteure</a></li>\r\n    </ul>\r\n  </mat-sidenav>\r\n  <router-outlet></router-outlet>\r\n  <footer class=\"main-footer\">\r\n    <div class=\"footer-title\"><h2>Contacts et réseaux sociaux</h2></div>\r\n    <div class=\"social-medias\">\r\n      <div>\r\n        <a href=\"https://www.facebook.com/danielle.dumais1\" target=\"_blank\">\r\n          <span class=\"fa fa-facebook-official fa-3x\"></span>\r\n        </a>\r\n      </div>\r\n      <div>\r\n      <a target=\"_blank\"\r\n        href=\"http://www.renaud-bray.com/Recherche.aspx?langue=fr&words=danielle%20dumais&wbgc_iNo=0&type=1&root=0&supersection=\">\r\n        <img src=\"assets/icons/RenaudBray.png\" class=\"renaudBray\"/>\r\n      </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"rights\">© 2017 Danielle Dumais. All rights reserved.</div>\r\n  </footer>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isScrolled = false;
    }
    AppComponent.prototype.onScroll = function (e) {
        this.isScrolled = e.srcElement.scrollingElement.scrollTop > 45;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            host: { "(window:scroll)": "onScroll($event)" }
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_series_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/series.component */ "./src/app/books/series.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_books_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/books.module */ "./src/app/books/books.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRouter = [
    { path: 'series', component: _books_series_component__WEBPACK_IMPORTED_MODULE_4__["SeriesComponent"] },
    { path: '', redirectTo: '/series', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRouter),
                _books_books_module__WEBPACK_IMPORTED_MODULE_6__["BooksModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/bio.component.ts":
/*!****************************************!*\
  !*** ./src/app/books/bio.component.ts ***!
  \****************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BioComponent = /** @class */ (function () {
    function BioComponent(_route, _booksService) {
        this._route = _route;
        this._booksService = _booksService;
        this.series = {};
    }
    BioComponent.prototype.ngOnInit = function () {
        document.body.scrollTop = 0;
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./bio.html */ "./src/app/books/bio.html"),
            styles: [__webpack_require__(/*! ./books.css */ "./src/app/books/books.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/books/bio.html":
/*!********************************!*\
  !*** ./src/app/books/bio.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"series-container\">\r\n  <div class=\"top-container\">\r\n    <div fxLayout=\"row wrap\" fxLayoutWrap fxLayoutAlign=\"center none\">\r\n      <div fxFlex.gt-md=\"60\" fxFlex=\"100\">\r\n        <div class=\"image-title-wrapper\">\r\n          <h1 class=\"title image-title\">Danielle Dumais</h1>\r\n          <img src=\"assets/images/auteur/DanielleDumais.png\" class=\"banner\">\r\n        </div>\r\n      </div>\r\n      <div fxFlex.gt-md=\"40\" fxFlex=\"100\" class=\"description-container\">\r\n        <h2 class=\"title description-title\">\r\n\r\n        </h2>\r\n        <div>\r\n          <p>Née à Rimouski en 1952, l’auteure se consacre à temps plein à l’écriture\r\n          depuis 2011. Voici un résumé des séries écrites et à venir.\r\n          Dans la série les 5 derniers dragons, l’humour et la débrouillardise sont\r\n          au rendez-vous. Andrick, un jeune héros de onze ans, part à l’aventure\r\n          pour retrouver les 5 derniers dragons. Lors de sa quête avec ses amis, il\r\n          affrontera des créatures malfaisantes et fera la rencontre de\r\n          personnages dont certains sont attachants et colorés et d’autres, torturés\r\n          et bizarres.</p>\r\n\r\n          <p>Elle a également à son actif les séries suivantes ; le Club Salsa, une\r\n          série fantasy se déroulant sur la rive sud près de Montréal, deux jumelles\r\n          du nom de Saléna et Samara feront vivre des moments intenses dans le\r\n          voisinage ; Le monde de Skyz, une série où de jeunes enfants\r\n          deviennent des esclaves d’extra-terrestres, Jonathan et Élisabeth feront\r\n          tous pour les délivrer de ses oppresseurs ; l’Ordre des 5 dragons, la\r\n          suite de la série fantastique les 5 derniers dragons où Andrick se rend à\r\n          Abraxas pour neutraliser les effets dévastateurs d’Hybris, un personnage\r\n          méchant et imbu de lui-même, les Jeux du pouvoir, une trilogie dont\r\n          l’action se situe en Californie au 25e siècle, notre héroïne Noémie Cyr\r\n          qui rêve de liberté et de voyages devra lutter pour sa survie et enfin, la\r\n          toute dernière, Aurore Champagne, une jeune stagiaire architecte qui rêve d’être riche et célèbre.</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ddSeries></ddSeries>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/book-card.component.ts":
/*!**********************************************!*\
  !*** ./src/app/books/book-card.component.ts ***!
  \**********************************************/
/*! exports provided: BookCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCard", function() { return BookCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCard = /** @class */ (function () {
    function BookCard() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookCard.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookCard.prototype, "serieId", void 0);
    BookCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ddBookCard',
            template: "\n   <div class=\"card-padding\">\n    <div class=\"card-wrapper\">\n      <a [routerLink]=\"['/series', serieId, book.id]\">\n        <div class=\"book-darken\">\n          <img class=\"book-image\" [src]=\"book.imageUrl\">\n          <i class=\"fa fa-5x fa-eye eye-icon\" aria-hidden=\"true\"></i>\n          <span class=\"book-title\">{{book.title}}</span>\n       </div>\n      </a>\n    </div>\n  </div>",
            styles: [
                'a:hover .book-image {-webkit-filter: blur(2px);filter: blur(2px); opacity: 0.7; -webkit-transition: all .5s linear; -moz-transition: all .5s linear; -ms-transition: all .5s linear; -o-transition: all .5s linear;transition: all .5s linear;}',
                '.book-image { margin-bottom: -4px;width: 100%; height: 100%; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.4)}',
                '.book-darken {background: black; height: 100%; width: 100%;  position: relative}',
                '.eye-icon {opacity: 0; color: white; position: absolute; z-index: 100; top: calc(30%); left: calc(50% - 40px)}',
                'a:hover .eye-icon{opacity: 1}',
                '.card-padding {padding: 3%}',
                '.book-title {font-size: 1.5em; color: white; text-align: center; position: absolute; top: 50%; left: 10%; width: 80%; visibility: hidden; word-wrap: break-word }',
                'a:hover .book-title {visibility: visible}'
            ]
        })
    ], BookCard);
    return BookCard;
}());



/***/ }),

/***/ "./src/app/books/book-series.component.ts":
/*!************************************************!*\
  !*** ./src/app/books/book-series.component.ts ***!
  \************************************************/
/*! exports provided: BookSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSeriesComponent", function() { return BookSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookSeriesComponent = /** @class */ (function () {
    function BookSeriesComponent(_route, _booksService) {
        this._route = _route;
        this._booksService = _booksService;
        this.serieId = '';
        this.serie = {};
    }
    BookSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            document.body.scrollTop = 0;
            _this.serieId = params['name'];
            _this._booksService.getSeries().forEach(function (item) {
                if (item.id === _this.serieId) {
                    _this.serie = item;
                }
            });
        });
    };
    BookSeriesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BookSeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./books.html */ "./src/app/books/books.html"),
            styles: [__webpack_require__(/*! ./books.css */ "./src/app/books/books.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BookSeriesComponent);
    return BookSeriesComponent;
}());



/***/ }),

/***/ "./src/app/books/book.component.ts":
/*!*****************************************!*\
  !*** ./src/app/books/book.component.ts ***!
  \*****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(_route, _booksService) {
        this._route = _route;
        this._booksService = _booksService;
        this.book = {};
        this.goTo = function (buyUrl) {
            window.open(buyUrl);
        };
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            document.body.scrollTop = 0;
            _this.serieId = params['name'];
            _this.bookId = params['id'];
            _this._booksService.getSeries().forEach(function (item) {
                if (item.id === _this.serieId) {
                    var bookId = Number(_this.bookId) - 1;
                    _this.book = item.books[bookId];
                    _this.serie = item;
                }
            });
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./book.html */ "./src/app/books/book.html"),
            styles: [__webpack_require__(/*! ./books.css */ "./src/app/books/books.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/books/book.html":
/*!*********************************!*\
  !*** ./src/app/books/book.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"series-container\">\r\n  <div class=\"top-container\">\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-md=\"67\" fxFlex=\"100\">\r\n        <div class=\"image-title-wrapper book-image-title-wrapper\">\r\n          <img [src]=\"book.imageUrl\" class=\"book-banner\">\r\n        </div>\r\n      </div>\r\n      <div fxFlex.gt-md=\"33\" fxFlex=\"100\" class=\"description-container\">\r\n        <div>\r\n          <h2 class=\"title description-title\" style=\"display: inline-block\">{{book.title}}</h2>\r\n          <button  (click)=\"goTo(book.buyUrl)\" class=\"buyButton\" mat-button>Acheter</button>\r\n        </div>\r\n        <div>\r\n          <p>{{book.description}}</p>\r\n          <p>{{book.description2}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><div [style.background-color]=\"serie.colorBlock\">\r\n  <div class=\"series-container\">\r\n    <ddBookCards [serie]=\"serie\"></ddBookCards>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/books-cards.component.ts":
/*!************************************************!*\
  !*** ./src/app/books/books-cards.component.ts ***!
  \************************************************/
/*! exports provided: BookCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCards", function() { return BookCards; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCards = /** @class */ (function () {
    function BookCards() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookCards.prototype, "serie", void 0);
    BookCards = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ddBookCards',
            template: "\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" class=\"cards-container\">\n            <ddBookCard [book]=\"book\" [serieId]=\"serie.id\" *ngFor=\"let book of serie.books\" fxFlex.gt-lg=\"20\" fxFlex.lg=\"20\" fxFlex.md=\"25\" fxFlex.sm=\"33\" fxFlex=\"50\"></ddBookCard>\n        </div>",
            styles: [
                '.cards-container { padding-top: 20px; padding-bottom: 20px}'
            ]
        })
    ], BookCards);
    return BookCards;
}());



/***/ }),

/***/ "./src/app/books/books-icon.component.ts":
/*!***********************************************!*\
  !*** ./src/app/books/books-icon.component.ts ***!
  \***********************************************/
/*! exports provided: BooksIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksIcon", function() { return BooksIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksIcon = /** @class */ (function () {
    function BooksIcon() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BooksIcon.prototype, "serie", void 0);
    BooksIcon = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ddBooksIcons',
            template: __webpack_require__(/*! ./books-icon.html */ "./src/app/books/books-icon.html"),
            styles: [__webpack_require__(/*! ./books-icon.css */ "./src/app/books/books-icon.css")]
        })
    ], BooksIcon);
    return BooksIcon;
}());



/***/ }),

/***/ "./src/app/books/books-icon.css":
/*!**************************************!*\
  !*** ./src/app/books/books-icon.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-wrapper {\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  border: solid 5px white;\r\n  width: 180px;\r\n  height: 180px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.icon-wrapper img {\r\n  height: 165px;\r\n  width: auto;\r\n}\r\n\r\n\r\n.repeat-icon {\r\n  padding: 2%;\r\n}\r\n\r\n\r\n.icon-caption {\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  width: 100%;\r\n  color: white;\r\n  font-size: 1.2em;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n@media (max-width: 900px) {\r\n  .icon-wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n\r\n  .icon-wrapper img {\r\n    height: 90px;\r\n  }\r\n\r\n  .icon-caption {\r\n    font-size: .75em;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MtaWNvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7OztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0NBQWtDO0NBQ25DOzs7QUFFRDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGOzs7QUFFRDs7Q0FFQyIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLWljb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIDVweCB3aGl0ZTtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaWNvbi13cmFwcGVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnJlcGVhdC1pY29uIHtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmljb24tY2FwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuaWNvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbi13cmFwcGVyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/books/books-icon.html":
/*!***************************************!*\
  !*** ./src/app/books/books-icon.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div *ngFor=\"let icon of serie.icons\" fxFlex=\"33\" class=\"repeat-icon\">\r\n    <div class=\"icon-wrapper\">\r\n      <img [src]=\"icon.src\">\r\n      <div class=\"icon-caption\">{{icon.caption}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/books.css":
/*!*********************************!*\
  !*** ./src/app/books/books.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".series-container {\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n}\r\n\r\n.banner {\r\n  width: 100%;\r\n  height:auto;\r\n}\r\n\r\n.book-banner {\r\n  margin: 0 auto;\r\n  width: 40%;\r\n  height:auto;\r\n}\r\n\r\n.description-container {\r\n  font-size: 1.2em;\r\n  text-align:justify;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.top-container {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.title {\r\n  font-family: 'PT Serif', serif;\r\n}\r\n\r\n.image-title {\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  bottom: 10px;\r\n  left: 20px;\r\n  color: white;\r\n  font-size: 2em;\r\n}\r\n\r\n.image-title-wrapper {\r\n  position: relative;\r\n  padding-right: 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.book-image-title-wrapper {\r\n  text-align: center;\r\n}\r\n\r\n.card-component-wrapper {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.description-title {\r\n  margin-top: 0;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n\r\n  .image-title {\r\n    font-size: 3em;\r\n  }\r\n  .image-title-wrapper {\r\n    position: relative;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  .book-banner {\r\n    width: 35%;\r\n  }\r\n\r\n  .buyButton {\r\n    float: right !important;\r\n    margin-bottom: 0 !important;\r\n  }\r\n}\r\n\r\n.icons-container {\r\n  width: 100%;\r\n  height: auto;\r\n  padding-bottom: 30px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.buyButton {\r\n  float: none;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7Q0FDYjs7QUFHRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0NBQWtDO0NBQ25DOztBQUdEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEOztFQUVFO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLHdCQUF3QjtJQUN4Qiw0QkFBNEI7R0FDN0I7Q0FDRjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWVzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5ib29rLWJhbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi50b3AtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgc2VyaWY7XHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtdGl0bGUtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJvb2staW1hZ2UtdGl0bGUtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb21wb25lbnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcblxyXG4gIC5pbWFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcbiAgLmltYWdlLXRpdGxlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5ib29rLWJhbm5lciB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxuXHJcbiAgLmJ1eUJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29ucy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ1eUJ1dHRvbiB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/books/books.html":
/*!**********************************!*\
  !*** ./src/app/books/books.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"series-container\">\r\n  <div class=\"top-container\">\r\n    <div fxLayout=\"row wrap\" fxLayout=\"center none\">\r\n      <div fxFlex.gt-md=\"67\" fxFlex=\"100\">\r\n        <div class=\"image-title-wrapper\">\r\n          <h1 class=\"title image-title\">{{serie.title}}</h1>\r\n          <img [src]=\"serie.imageUrl\" class=\"banner\">\r\n        </div>\r\n      </div>\r\n      <div fxFlex.gt-md=\"33\" fxFlex=\"100\" class=\"description-container\">\r\n        <h2 class=\"title description-title\">{{serie.descriptionTitle}}</h2>\r\n        <div>\r\n          <p>{{serie.description}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- icon class -->\r\n<div [style.background-color]=\"serie.color\" class=\"icons-container\">\r\n  <ddBooksIcons [serie]=\"serie\"></ddBooksIcons>\r\n</div>\r\n<div [style.background-color]=\"serie.colorBlock\">\r\n  <div class=\"series-container\">\r\n    <ddBookCards [serie]=\"serie\"></ddBookCards>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_series_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-series.component */ "./src/app/books/book-series.component.ts");
/* harmony import */ var _book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book.component */ "./src/app/books/book.component.ts");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
/* harmony import */ var _books_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-cards.component */ "./src/app/books/books-cards.component.ts");
/* harmony import */ var _book_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-card.component */ "./src/app/books/book-card.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _books_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books-icon.component */ "./src/app/books/books-icon.component.ts");
/* harmony import */ var _bio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bio.component */ "./src/app/books/bio.component.ts");
/* harmony import */ var _series_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./series.component */ "./src/app/books/series.component.ts");
/* harmony import */ var _series_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./series-page.component */ "./src/app/books/series-page.component.ts");
/* harmony import */ var _series_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./series-carousel.component */ "./src/app/books/series-carousel.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var bookRoutes = [
    { path: 'series', component: _series_page_component__WEBPACK_IMPORTED_MODULE_11__["SeriesPageComponent"] },
    { path: 'series/:name/:id', component: _book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"] },
    { path: 'series/:name', component: _book_series_component__WEBPACK_IMPORTED_MODULE_2__["BookSeriesComponent"] },
    { path: 'auteur', component: _bio_component__WEBPACK_IMPORTED_MODULE_9__["BioComponent"] }
];
var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(bookRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"]
            ],
            declarations: [
                _book_series_component__WEBPACK_IMPORTED_MODULE_2__["BookSeriesComponent"],
                _book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"],
                _books_cards_component__WEBPACK_IMPORTED_MODULE_5__["BookCards"],
                _book_card_component__WEBPACK_IMPORTED_MODULE_6__["BookCard"],
                _books_icon_component__WEBPACK_IMPORTED_MODULE_8__["BooksIcon"],
                _bio_component__WEBPACK_IMPORTED_MODULE_9__["BioComponent"],
                _series_component__WEBPACK_IMPORTED_MODULE_10__["SeriesComponent"],
                _series_page_component__WEBPACK_IMPORTED_MODULE_11__["SeriesPageComponent"],
                _series_carousel_component__WEBPACK_IMPORTED_MODULE_12__["SeriesCarouselComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButton"]
            ],
            providers: [_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ }),

/***/ "./src/app/books/books.service.ts":
/*!****************************************!*\
  !*** ./src/app/books/books.service.ts ***!
  \****************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var books = [
    {
        "id": "cinqDenier",
        "title": "Les 5 derniers dragons",
        "descriptionTitle": "Une quête fantastique!",
        "description": "Lorsque son père O’Neil Dagibold lui révélera l’existence secrète d’un dragon, une créature qu’on croyait inventée pour agrémenter les conversations, Andrick décidera de partir seul à la recherche d’Inféra, le dragon des légendes perdues. Lui, sa sœur jumelle Nina et toute la communauté des enchanteurs connaîtront des tourments et des évènements déchirants tout à fait inattendus.",
        "imageUrl": "assets/images/cinq-dernier/banner.jpg",
        "icons": [
            { "src": "assets/icons/adventure.svg", "caption": "Aventure" },
            { "src": "assets/icons/age.svg", "caption": "Age 10+" },
            { "src": "assets/icons/magic.svg", "caption": "Magie" }
        ],
        "color": "#681010",
        "colorBlock": "#1c293d",
        "books": [
            {
                "id": 1,
                "title": 'Integrale 1',
                "description": "L\u2019ENL\u00C8VEMENT\n          TOME 1\n          En ce 31 ao\u00FBt de l\u2019an 150 du r\u00E8gne de Wilbras I, un magicien du nom d\u2019\u00C9xir observa un gigantesque et particuli\u00E8rement sombre nuage survolant le ch\u00E2teau de la princesse Launa. Imm\u00E9diatement, son sang se gla\u00E7a. L\u2019Envahisseur serait-il de retour ? Est-ce que le d\u00F4me prot\u00E9geant Dorado fonctionnait-il encore ?\n          C\u2019est ainsi qu\u2019une grande et longue aventure commen\u00E7a pour Andrick lorsque son p\u00E8re O\u2019Neil Dagibold lui r\u00E9v\u00E9la l\u2019existence secr\u00E8te d\u2019un dragon, une cr\u00E9ature qu\u2019on croyait invent\u00E9e pour agr\u00E9menter les conversations.\n          Piqu\u00E9 par une curiosit\u00E9 subite, Andrick d\u00E9cidera de partir seul \u00E0 la recherche d\u2019Inf\u00E9ra, un dragon l\u00E9gendaire. Lui, sa s\u0153ur jumelle Nina et toute la communaut\u00E9 des enchanteurs conna\u00EEtront des tourments et des \u00E9v\u00E8nements d\u00E9chirants tout \u00E0 fait inattendus.\n          ",
                "description2": "\n        L\u2019\u00C9PREUVE\n        TOME 2\n        Dans le silence d\u2019une nuit \u00E9toil\u00E9e, autour d\u2019un feu, tous les yeux \u00E9taient riv\u00E9s sur elle, Inf\u00E9ra frissonna d\u2019effroi. Tous ces gens n\u2019\u00E9taient pas l\u00E0 pour elle, ils \u00E9taient l\u00E0 pour le dragon qu\u2019elle portait en elle.\n        Pourtant \u00E0 l\u2019aurore, aucune perturbation ni catastrophe ne s\u2019\u00E9taient annonc\u00E9es. Elle s\u2019\u00E9tait lev\u00E9e comme d\u2019habitude, avec une humeur mitig\u00E9e par le soleil \u00E9clatant et joyeux, et par sa lassitude coutumi\u00E8re d\u2019\u00EAtre seule. Inf\u00E9ra, qui avait si longtemps partag\u00E9 sa solitude avec Picou, un magicien transform\u00E9 en rat blanc, se voyait soudainement entour\u00E9e d\u2019inconnus \u00E0 la fois aimables et perturbants. Elle devait quitter son antre et partir avec les jumeaux Andrick et Nina \u00E0 la recherche des quatre autres porteurs de dragons.\n        La vie d\u2019Inf\u00E9ra d\u00E9pendra d\u2019une \u00E9preuve que les jumeaux devront surmonter.",
                "imageUrl": "assets/images/cinq-dernier/dragon1.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-6.html"
            },
            {
                "id": 2,
                "title": "Integrale 2",
                "description": "LA TERRE DES ELFES\nTOME 3\nL\u2019extraordinaire p\u00E9riple des chevaliers du Dragon rouge se poursuit. La troupe se retrouve maintenant au pied de montagnes prot\u00E9g\u00E9es par des gardiens appel\u00E9s les Douades, des monstres cupides et sanguinaires. Bien que la troupe soit tent\u00E9e de survoler cette cha\u00EEne de montagnes s\u00E9parant le territoire des Cinq peuples et la Terre des Elfes, gr\u00E2ce \u00E0 un magnifique cheval ail\u00E9 du nom d\u2019Horus et \u00E0 de superbes et puissants dragnards, elle attend la manifestation de ces gardiens des lieux de passage pour \u00E9viter toute confrontation avec eux.\n\u00C0 leur arriv\u00E9e \u00E0 la Terre des Elfes, Inf\u00E9ra rencontra Adora, une porteuse de dragon ador\u00E9e et aim\u00E9e de son peuple. Elles se lieront d\u2019amiti\u00E9 et \u00E9prouveront une inqui\u00E9tude commune qu\u2019elles ne r\u00E9v\u00E9leront \u00E0 personne.\n",
                "description2": "\nLE DIAMANT DE LUNE\nTOME 4\nSommeillant, Andrick eut l\u2019impression d\u2019\u00EAtre \u00E9pi\u00E9. Il ouvrit un \u0153il. La nuit \u00E9tant particuli\u00E8rement noire, il ne remarqua rien de particulier et il se rendormit. Quelques heures plus tard, il se fit bousculer par un homme v\u00EAtu de la t\u00EAte au pied d\u2019une djellaba blanche. \u00C0 sa grande surprise, le magicien remarqua que tous ses amis avaient les mains li\u00E9es et la bouche b\u00E2illonn\u00E9e. Deux autres hommes se saisirent de lui et, avant m\u00EAme qu\u2019il ne f\u00EEt un geste ou n\u2019\u00E9mettre un cri, il fut lui aussi attach\u00E9 et b\u00E2illonn\u00E9.\nLeur qu\u00EAte pour retrouver le troisi\u00E8me dragon d\u00E9butait sur une bien mauvaise note. Ils d\u00E9couvrirent que ce n\u2019\u00E9tait h\u00E9las ! qu\u2019une petite m\u00E9saventure parmi tant d\u2019autres. Une rencontre inattendue et une cascade d\u2019\u00E9v\u00E9nements surprenants se succ\u00E9deront.\n",
                "imageUrl": "assets/images/cinq-dernier/dragon2.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-6.html"
            },
            {
                "id": 5,
                "title": "Tome 5 Les oubliés",
                "description": "Cent cinquante ans plus tard, les chevaliers du Dragon rouge sont à la recherche du quatrième porteur de dragon. Par malheur, des personnages terrifiants dévorant des humains et des Elfes, ainsi que la disparition d’un mystérieux objet mettront en péril leur mission ultime, la libération des cinq derniers dragons.",
                "imageUrl": "assets/images/cinq-dernier/dragon5.jpg",
                "buyUrl": "http://www.ada-inc.com/5-derniers-dragons-tome-5.html"
            },
            {
                "id": 6,
                "title": "Tome 6 La cité de glace",
                "description": "Les chevaliers du Dragon rouge poursuivent leur quête du dernier dragon, le dragon d’éther. Par malheur, ils ne sont pas seuls à le rechercher. Arthur de La Chevrière, une personne aux intentions maléfiques atteindra avant eux la Cité de Glace en quête du Précieux Sang du dragon d’éther. ",
                "imageUrl": "assets/images/cinq-dernier/dragon6.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-6.html"
            },
            {
                "id": 7,
                "title": "Tome 7 Un vent malsain",
                "description": "Les porteurs de dragon sont à la limite de leur temps et un rien semble les contrarier. De multiples surprises et rebondissements s’annoncent à l’horizon avec Launa et ses dragons ainsi qu’avec Spino, ce fougueux dragon rouge aux intrigues amoureuses compliquées. Ce dernier donnera du fil à retordre à Andrick et à sa porteuse.",
                "imageUrl": "assets/images/cinq-dernier/dragon7.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-7.html"
            },
            {
                "id": 8,
                "title": "Tome 8 Le destin de Rajni",
                "description": "Jamais les porteurs de dragons n’auront été si près d’acquérir cette précieuse liberté. Pourtant, une hantise obsède Inféra, l’image de Waldo possédé par le diable. Au lieu de le convoiter, Belzébuth prendra possession d’un dragon, mais la bête est loin d’être docile. Réussira-t-il à la contrôler ? Vous le saurez en suivant les nouvelles péripéties de la troupe sur le chemin du retour.",
                "imageUrl": "assets/images/cinq-dernier/dragon8.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-8.html"
            },
            {
                "id": 9,
                "title": "Tome 9 Le sacrifice",
                "description": "Bien des surprises attendent les chevaliers des cinq derniers dragons de retour au pays des Elfes, dont une surprise de taille, celle d’une légende. Quelle est donc cette légende? Et surtout, de quel sacrifice est-il question ?",
                "imageUrl": "assets/images/cinq-dernier/dragon9.jpg",
                "buyUrl": "http://www.ada-inc.com/les-5-derniers-dragons-tome-9.html"
            },
            {
                "id": 10,
                "title": "Tome 10 Le soleil noir",
                "description": "À la Terre des Cinq Peuples se déroulera une bataille singulière sous un soleil noir. La déesse Freyja, qui y règne et qui est vénérée par les Mjöllnirs, engagera une lutte sans merci pour conserver son titre de déesse, qui lui appartient. Comme un malheur n’arrive jamais seul, Andrick et les chevaliers du Dragon rouge devenu les chevaliers du pentacle auront encore des difficultés à surmonter lorsque Adora, à la recherche de son frère Galdor, dévoilera un secret qui contrariera l’humeur de la troupe.",
                "imageUrl": "assets/images/cinq-dernier/dragon10.jpg",
                "buyUrl": "http://www.ada-inc.com/auteurs/danielle-dumais/les-5-derniers-dragons-tome-10.html"
            },
            {
                "id": 11,
                "title": "Tome 11 Dracontia",
                "description": "Malphas n’est plus que l’ombre de lui-même, cherchant l’apaisement et un second souffle. Lorsqu’il entend dire qu’Andrick, le chef des chevaliers du pentacle, recherche une pierre noire connue sous le nom de Dracontia ; cette pierre lui permettra possiblement de réintégrer son corps délaissé depuis plus d’un siècle dans une crypte. Alors, une lutte à deux s’engagera afin d’acquérir cette pierre. Qui des deux mettra la main sur la Dracontia, cette pierre gardée secrète et bien camouflée à Dorado?",
                "imageUrl": "assets/images/cinq-dernier/dragon11.jpg",
                "buyUrl": "http://www.ada-inc.com/auteurs/danielle-dumais/les-5-derniers-dragons-tome-11.html"
            },
            {
                "id": 12,
                "title": "Tome 12 L’oppression",
                "description": "Découvrez l'intrigante conclusion de la série des 5 derniers dragons. Olibert de la Source désire se venger d'un acte perpétré 150 ans plus tôt. Lorsqu'il acquiert une chevalière aux propriétés mystérieuses, sa vengeance devient démesurée. Il cherche par tous les moyens à détruire le dernier symbole identitaire des enchanteurs à Dorado. Réussira-t-il à mettre son plan à exécution ? ",
                "imageUrl": "assets/images/cinq-dernier/dragon12.jpg",
                "buyUrl": "http://www.ada-inc.com/les-cinq-derniers-dragons-tome-12-l-oppression.html"
            }
        ]
    },
    {
        "id": "ordreDragon",
        "title": "L’ordre des 5 dragons",
        "descriptionTitle": "L’aventure se poursuit !",
        "description": "Andrick ne supporte pas que des Rongirs, des créatures venues d’ailleurs, attaquent les dragons de façon continuelle. Cette menace perpétuelle force Andrick et les chevaliers de Pentacle à se rendre à Abraxas afin de les neutraliser. Bien des aventures en perspective !",
        "imageUrl": "assets/images/odragons/odragonban.jpg",
        "icons": [
            { "src": "assets/icons/adventure.svg", "caption": "Aventure" },
            { "src": "assets/icons/age.svg", "caption": "Age 10+" },
            { "src": "assets/icons/magic.svg", "caption": "Magie" }
        ],
        "color": "#2c0c5b",
        "colorBlock": "#093e60",
        "books": [
            {
                "id": 1,
                "title": "Tome 1 Le mystère d’Abraxas",
                "description": "Le porteur du pentacle se réveilla entouré de sirènes et dans une grotte. Il ne se souvint de rien, ni de son propre nom ni de ses pouvoirs. Surmontant sa solitude et cet épouvantable problème, il apprendra qu’un être exécrable du nom d’Hybris a la main mise sur tous les êtres vivants d’Abraxas, y compris sur les 5 dragons élémentaires. Sera-t-il en mesure de retrouver ses pouvoirs magiques, de sauver ses amis, de libérer les dragons et de vaincre Hybris ?",
                "imageUrl": "assets/images/odragons/odragon1.jpg",
                "buyUrl": "http://www.ada-inc.com/l-ordre-des-5-dragons-tome-1-le-mystere-d-abraxas.html"
            },
            {
                "id": 2,
                "title": "Tome 2 La colère de Poséidon",
                "description": "Plus que jamais, l’avenir de la troupe des Chevaliers du Pentacle et des dragons repose sur les épaules d’Andrick Dagibold, un jeune mage de 15 ans, porteur d’un puissant talisman, un pentacle. Hélas ! À Abraxas, en plus de vivre les contrecoups d’une colère insensée de Poséidon, une personne malicieuse fera tout en son pouvoir pour s’emparer de ce précieux objet tant convoité.",
                "imageUrl": "assets/images/odragons/odragon2.jpg",
                "buyUrl": "http://www.ada-inc.com/l-ordre-des-5-dragons-tome-2-la-colere-de-poseidon.html"
            },
            {
                "id": 3,
                "title": "Tome 3 Les yeux pourpres",
                "description": "Grâce à un directorium, Érika atterrit non sans mal et sans de graves blessures à Abraxas où elle fait la connaissance d’Andrick, le porteur du pentacle. Rapidement, Andrick et Érika développent des liens amoureux très forts. Elle l’invite à visiter Magnésia, une planète d’un autre univers où la magie est permise. Devrait-il vraiment la suivre dans ce monde fantastique ? Est-elle une bonne ou une mauvaise personne qui convoite le pentacle comme d’autres personnes malveillantes ? Un choix difficile s’offre à lui. Sa mission ou son amour pour une étrangère aux yeux pourpres.",
                "imageUrl": "assets/images/odragons/odragon3.jpg",
                "buyUrl": "http://www.ada-inc.com/l-ordre-des-5-dragons-tome-3-les-yeux-pourpres.html"
            }
        ]
    },
    {
        "id": "salsa",
        "title": "Le Club Salsa",
        "descriptionTitle": "Aventure et magie",
        "description": "Les jumelles Saléna et Samara ont plus qu’un tour de magie dans leur sac. Grâce à un événement inattendu, elles acquerront des pouvoirs magiques. Elles apprendront que deux de ses voisins, Simon et Maxime, ont eu aussi des pouvoirs magiques. Une alliance entre eux se formera. De multiples péripéties loufoques se succéderont à un rythme soutenu. Rire garanti.",
        "imageUrl": "assets/images/salsa/bansort.jpg",
        "icons": [
            { "src": "assets/icons/adventure.svg", "caption": "Aventure" },
            { "src": "assets/icons/age9.svg", "caption": "Age 9+" },
            { "src": "assets/icons/magic.svg", "caption": "Magie" }
        ],
        "color": "#84024e",
        "colorBlock": "#137375",
        "books": [
            {
                "id": 1,
                "title": "Tome 1 Un 13 juillet fatidique",
                "description": "Cinq filles de la rue des Ormes décident de former un club pour se désennuyer, le club Salsa, dont le but est de combattre l'ennemi: cinq gars du voisinage. Un événement viendra chambouler leurs plans et des phénomènes bizarres feront leur apparition. Mais quel est donc cet événement qui frappera la petite municipalité de Saint-Parlinpin?",
                "imageUrl": "assets/images/salsa/sort1.jpg",
                "buyUrl": "http://zyeudoreditions.ca/publications/le-club-salsa/"
            },
            {
                "id": 2,
                "title": "Tome 2 Euphorie",
                "description": "Bien malgré eux, Saléna et Simon provoqueront d'autres phénomènes inexpliqués qui viendront mettre une distance entre le club Salsa et leurs ex-amis. Les quatre amis parviendront- ils à se consacrer à leur mission, c'est-à-dire sauver Adeline?",
                "imageUrl": "assets/images/salsa/sort2.jpg",
                "buyUrl": "http://zyeudoreditions.ca/publications/le-club-salsa-tome-2-euphorie/"
            },
            {
                "id": 3,
                "title": "Tome 3 Révélation",
                "description": "La pauvre Samara constate avec effroi qu'elle a perdu l'habileté de redessiner la carte magique détruite deux fois. Sans cette carte reproduite parfaitement, Saléna ne peut rapporter la pomme d'or pour sauver la vie d'Adeline. De plus, une révélation leur sera transmise par un étrange androïde. Quelle est donc cette révélation?",
                "imageUrl": "assets/images/salsa/sort3.jpg",
                "buyUrl": "http://zyeudoreditions.ca/publications/le-club-salsa-3/"
            },
            {
                "id": 4,
                "title": "Tome 4 Sous haute surveillance",
                "description": "À Saint-Parlinpin, tout est sous haute surveillance. Mme Bellerive surveille ses piments ; monsieur Bellerive, ses sous ; madame Sirois, Saléna et Samara ; le maire, tous les phénomènes paranormaux de sa ville ; et Charline, son poids. Mais le plus surprenant viendra d'ailleurs, une nouvelle qui chamboulera le quartier et les jumelles Bellerive.",
                "imageUrl": "assets/images/salsa/sort4.jpg",
                "buyUrl": "http://www.ada-inc.com/sortileges-salsa-et-compagnie-tome-4.html"
            },
            {
                "id": 5,
                "title": "Tome 5 Une sauce étonnante !",
                "description": "Pour le club Salsa, les choses se corsent. En raison d'un secret dévoilé par Simon, les jumelles doivent récupérer au plus vite une carte laissée à la grotte située dans le parc décrété dangereux et interdit par le maire de Saint-Parlinpin. Le club Salsa est sur le point de réaliser leur but lorsqu'une sauce étonnante viendra compliquer leur plan de match.",
                "imageUrl": "assets/images/salsa/sort5.jpg",
                "buyUrl": "http://www.ada-inc.com/sortileges-salsa-et-compagnie-tome-5.html"
            },
            {
                "id": 6,
                "title": "Tome 6 Un feu étincelant !",
                "description": "À son arrivée à la vallée des sorcières, la troupe peine à trouver l’île. Ce sera Saléna qui aboutira seule sur cette île. Elle rencontrera le capitaine Cortés et son équipage. Rapidement, le voyage prendra une tournure sinistre. Toutefois, elle connaîtra enfin sa véritable mission à la toute fin de son périple. ",
                "imageUrl": "assets/images/salsa/sort6.jpg",
                "buyUrl": "http://www.ada-inc.com/sortileges-salsa-et-compagnie-tome-6-un-feu-etincelant.html"
            }
        ]
    },
    {
        "id": "jeuxpouvoir",
        "title": "Les Jeux du pouvoir",
        "descriptionTitle": "Une liberté illusoire !",
        "description": "Vivant dans une ville autarcique et retirée, Noémie Cyr rêve de liberté et de voyages. Une occasion inespérée s’offre à elle, mais au fil du temps, cette opportunité tournera au cauchemar.Pour les détenteurs tout-puissants de plus de 85% des richesses du monde, la vie ne pèse pas lourd. Pour divertir la planète, ils ont concocté une télé-réalité où des épreuves mortelles attentent les candidats.",
        "imageUrl": "assets/images/jeuxpou/jeuxpou.jpg",
        "icons": [
            { "src": "assets/icons/robot.svg", "caption": "Science-fiction" },
            { "src": "assets/icons/age13.svg", "caption": "Age 13+" },
            { "src": "assets/icons/drop.svg", "caption": "Survie" }
        ],
        "color": "#214247",
        "colorBlock": "#636108",
        "books": [
            {
                "id": 1,
                "title": "Tome 1 Les pions",
                "description": "Altina ouvre ses portes à une des personnalités les plus riches et puissantes de la planète, monsieur Edgar Powell. Un concours visant à dénicher trois personnes talentueuses pour un travail bien particulier à Paradisa, un archipel situé loin de toute civilisation au milieu de l’océan Pacifique, est organisé non seulement à Altina, mais aussi partout dans le monde. Noémie, une jeune Altinaise tente sa chance à l’insu de sa famille et de son petit ami, Xavier, et s’inscrit à ce concours. Lorsqu’elle le leur apprend, ses proches désapprouvent vertement sa décision. Elle veut alors annuler sa candidature, mais elle constate qu’il est impossible de le faire.Choisie parmi un nombre imposant de candidats, des épreuves dites « amusantes » s’amorcent pour déterminer les gagnants qui s’envoleront pour Paradisa. Une étape mortelle se prépare. En sortira-t-elle vivante ?",
                "imageUrl": "assets/images/jeuxpou/jeux1.jpg",
                "buyUrl": "http://www.ada-inc.com/les-jeux-du-pouvoir-tome-1-les-pions.html"
            },
            {
                "id": 2,
                "title": "Tome 2 Les règles",
                "description": "Trente-six personnes, 12 pays, un combat : l’obtention d’une PAM (pile antimatière). Tel est le destin de Noémie Cyr : une bataille pour rapporter une PAM à Altina. Elle n’est pas seule dans cette course. Trente-cinq autres personnes désireront avec ardeur la même chose : ravir cette pile tant convoitée.Elles navigueront sur un luxueux paquebot à destination de Paradisa, mais le voyage sera loin d’être une croisière de rêve ; et que dire de leur arrivée à Paradisa ! Dès le départ, les compatriotes Noah Prost et Jade Vidal se tiennent ensemble et préparent en catimini un guet-apens pour qu’elle n’arrive jamais à Paradisa. Saura-t-elle éviter leur stratagème ? Parviendra-t-elle à Paradisa, là où la chasse vaut plus que la prise ?",
                "imageUrl": "assets/images/jeuxpou/jeux2.jpg",
                "buyUrl": "http://www.ada-inc.com/les-jeux-du-pouvoir-tome-2-les-regles.html"
            }
        ]
    },
    {
        "id": "skyz",
        "title": "Le monde selon Skyz",
        "descriptionTitle": "L’espoir d’un monde meilleur !",
        "description": "Jonathan, un garçon de 12 ans, et Élisabeth, une fillette de 10 ans, se retrouvent sous la domination d’envahisseurs barbares. Ensemble, ils s’évaderont de l’usine de fabrication d’antozonite et partiront à la recherche d’une solution à la libération de leurs compagnons.",
        "imageUrl": "assets/images/skyz/skyz.png",
        "icons": [
            { "src": "assets/icons/robot.svg", "caption": "Science-fiction" },
            { "src": "assets/icons/age13.svg", "caption": "Age 13+" },
            { "src": "assets/icons/drop.svg", "caption": "Survie" }
        ],
        "color": "#808080",
        "colorBlock": "#cc9900",
        "books": [
            {
                "id": 1,
                "title": "Tome 1 Le second élément",
                "description": "Grand-Valmont, une ville touristique et prospère, est soudainement coupée du monde entier par deux hordes d’envahisseurs barbares: d’un côté, des Deuxcôtés, des guerriers exécuteurs et de l’autre, des Cracos, des organisateurs ayant une force extraordinaire malgré leur petite taille. Ces deux peuples travaillent en symbiose et n’ont qu’un seul but: s’emparer d’une matière rare en grande quantité. Pour ce faire, ils tuent les adultes pour ne garder que les enfants âgés de 7 à 14 ans, une main-d’œuvre docile et sans défense. Jonathan, un garçon de 12 ans, et Élisabeth, une fillette de 10 ans, font partie de ces jeunes dociles et travaillent dans une usine d’assemblage d’antozonite, le pétrole pourpre. Lors d’un orage sévère, ils s’échapperont de leur prison et réussiront à fuir la ville envahie. Une dame leur indique de se diriger vers la montagne. Réussiront-ils à s’y rendre en toute sécurité et à trouver l’aide pour libérer leurs compagnons de l’emprise de ses envahisseurs ?",
                "imageUrl": "assets/images/skyz/skyz1.jpg",
                "buyUrl": "http://www.ada-inc.com/le-monde-selon-skyz-tome-1-le-second-element.html"
            },
            {
                "id": 2,
                "title": "Tome 2 L’étrange zone 4",
                "description": "Jonathan, sa mère et sa petite amie de cœur (Valérie) retournent à Grand-Valmont, une ville sinistrée, pour une commémoration en l’honneur de tous ceux qui avaient péri trois ans auparavant. Pour l’occasion, un grand nombre de journalistes, de touristes et d’anciens Grand-Valmontois les accompagneront ainsi que les promoteurs de cette nouvelle ville devenue un centre d’attraction grâce à un magnifique hôtel, son casino et d’une salle de spectacles. Une mystérieuse sculpture voilée trône près de l’hôtel Le Mémorable et donc son dévoilement est prévu la dernière journée.Lors du dévoilement de cette pièce, tout tourne au cauchemar. Jonathan et Valérie se voient confronter à nouveau avec des Cracos, de brillants organisateurs et des Deuxcôtés, des guerriers exécuteurs. Mais d’où viennent-ils ?",
                "imageUrl": "assets/images/skyz/skyz2.jpg",
                "buyUrl": "http://www.ada-inc.com/le-monde-selon-skyz-tome-2-l-etrange-zone-4.html"
            }
        ]
    },
    {
        "id": "champagne",
        "title": "Aurore Champagne",
        "descriptionTitle": "Soyons zen !",
        "description": "À l’aube de ses 24 ans, Aurore, une épicurienne et une stagiaire en architecture, rêve d’une vie plus satisfaisante que celle de pousser du papier pour une grande firme d’architecture. Elle conçoit donc d’écrire un livre de recettes qui la propulsera (c’est ce qu’elle croit) au sommet de la gloire. Fini les petites tâches routinières et vive la célébrité ! Mais hélas ! les débuts de cette aventure culinaire la rebuteront à de multiples reprises. Pétillante comme du champagne et loin d’être la fille ennuyeuse, Aurore saura vous toucher.",
        "imageUrl": "assets/images/champagne/banner.jpg",
        "icons": [
            { "src": "assets/icons/book.svg", "caption": "Roman" },
            { "src": "assets/icons/woman.svg", "caption": "Adultes" },
            { "src": "assets/icons/jealous.svg", "caption": "Jalousie" }
        ],
        "color": "#d3cec3",
        "colorBlock": "#cc3727",
        "books": [
            {
                "id": 1,
                "title": "Champagne!",
                "description": "Agée de 24 ans, Aurore Champagne coule des jours monotones au sein du cabinet d’architectes où elle occupe la fonction de stagiaire. Pousser du papier, surveiller des chantiers, valider des factures, finaliser des plans; son travail l’ennuie royalement. Et c’est sans compter la piètre relation qu’elle entretient avec ses collègues en général. Elle rêvait d’architecture, de création et de gloire internationale depuis son adolescence. Sa mère avait bien tenté de l’en dissuader, lui vantant les mérites des sciences comptables… sans succès. Elle ne manquait d’ailleurs pas de souligner lourdement à Aurore le succès très médiatisé de son inséparable amie d’enfance, Virginie, designer courue et appréciée. Jalouse du succès de son amie, désireuse de s’élever de sa condition professionnelle actuelle et mue par sa passion dévorante pour la gastronomie, Aurore caresse le rêve de publier son propre livre de recettes, et d’accéder ainsi à la célébrité. Aurore ne devine pas dans quel guêpier elle vient de mettre les pieds!\n",
                "imageUrl": "assets/images/champagne/aurore1.jpg",
                "buyUrl": ""
            }
        ]
    }
];
var BooksService = /** @class */ (function () {
    function BooksService() {
    }
    BooksService.prototype.getSeries = function () {
        return books;
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/books/series-carousel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/books/series-carousel.component.ts ***!
  \****************************************************/
/*! exports provided: SeriesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesCarouselComponent", function() { return SeriesCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeriesCarouselComponent = /** @class */ (function () {
    function SeriesCarouselComponent(_booksService) {
        this._booksService = _booksService;
        this.series = [];
    }
    SeriesCarouselComponent.prototype.ngOnInit = function () {
        this.series = this._booksService.getSeries();
    };
    SeriesCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ddSeriesCarousel",
            template: __webpack_require__(/*! ./series-carousel.html */ "./src/app/books/series-carousel.html"),
            styles: [__webpack_require__(/*! ./series-carousel.css */ "./src/app/books/series-carousel.css")]
        }),
        __metadata("design:paramtypes", [_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]])
    ], SeriesCarouselComponent);
    return SeriesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/books/series-carousel.css":
/*!*******************************************!*\
  !*** ./src/app/books/series-carousel.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".series-image-wrapper {\r\n  margin-left: 2%;\r\n  margin-right: 2%;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .serie-wrapper{\r\n    height: 400px;\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n  }\r\n  .serie-wrapper img{\r\n    -webkit-transform: translateY(-14%);\r\n            transform: translateY(-14%);\r\n  }\r\n  .image-title {\r\n    font-size: 3.0em;\r\n  }\r\n}\r\n\r\n.image-title {\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  bottom: 30px;\r\n  left: 20px;\r\n  color: white;\r\n  font-size: 2.0em;\r\n  text-shadow: 20px 0 50px #000000;\r\n}\r\n\r\n.serie-wrapper {\r\n  padding: 5px;\r\n  position: relative;\r\n}\r\n\r\na {\r\n  display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3Mvc2VyaWVzLWNhcm91c2VsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtHQUM3QjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL3Nlcmllcy1jYXJvdXNlbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWVzLWltYWdlLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAuc2VyaWUtd3JhcHBlcntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnNlcmllLXdyYXBwZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNCUpO1xyXG4gIH1cclxuICAuaW1hZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjBlbTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgdGV4dC1zaGFkb3c6IDIwcHggMCA1MHB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zZXJpZS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5hIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/books/series-carousel.html":
/*!********************************************!*\
  !*** ./src/app/books/series-carousel.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"series-image-wrapper\">\r\n  <a *ngFor=\"let serie of series\" class=\"serie-wrapper\" [routerLink]=\"['/series/' + serie.id]\">\r\n    <img [src]=\"serie.imageUrl\" style=\"width: 100%; height: auto\">\r\n    <div class=\"image-title\">{{serie.title}}</div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/series-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/books/series-page.component.ts ***!
  \************************************************/
/*! exports provided: SeriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageComponent", function() { return SeriesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SeriesPageComponent = /** @class */ (function () {
    function SeriesPageComponent() {
    }
    SeriesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <ddSeriesCarousel></ddSeriesCarousel>",
            styles: []
        })
    ], SeriesPageComponent);
    return SeriesPageComponent;
}());



/***/ }),

/***/ "./src/app/books/series.component.ts":
/*!*******************************************!*\
  !*** ./src/app/books/series.component.ts ***!
  \*******************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeriesComponent = /** @class */ (function () {
    function SeriesComponent(_booksService) {
        this._booksService = _booksService;
    }
    SeriesComponent.prototype.ngOnInit = function () {
        this.series = this._booksService.getSeries();
        this.series.forEach(function (serie) {
            serie.state = 'inactive';
        });
    };
    SeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ddSeries",
            template: __webpack_require__(/*! ./series.html */ "./src/app/books/series.html"),
            styles: [__webpack_require__(/*! ./series.css */ "./src/app/books/series.css")]
        }),
        __metadata("design:paramtypes", [_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/app/books/series.css":
/*!**********************************!*\
  !*** ./src/app/books/series.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serieimage {\r\n  width: 100%;\r\n  height: auto;\r\n  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.serie-wrapper {\r\n  padding: 5px;\r\n  position: relative;\r\n}\r\n\r\n.image-title {\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  bottom: 30px;\r\n  left: 20px;\r\n  color: white;\r\n  font-size: 1.3em;\r\n  text-shadow: 0 0 15px #000000;\r\n}\r\n\r\n.series-container {\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .series-container {\r\n    padding-left: 1.5%;\r\n    padding-right: 1.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3Mvc2VyaWVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkNBQTJDO0NBQzVDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7R0FDckI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL3Nlcmllcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWVpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnNlcmllLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zZXJpZXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnNlcmllcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41JTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/books/series.html":
/*!***********************************!*\
  !*** ./src/app/books/series.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"series-container\">\r\n  <div *ngFor=\"let serie of series\" fxFlex=\"33\">\r\n    <a [routerLink]=\"['/series/' + serie.id]\">\r\n      <div class=\"serie-wrapper\">\r\n        <img [src]=\"serie.imageUrl\" class=\"serieimage\">\r\n        <div class=\"image-title\">{{serie.title}}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.


















/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cookies\Documents\GitHub\danielle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map