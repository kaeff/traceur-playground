"use strict";
Object.defineProperties(exports, {
  flatten: {get: function() {
      return flatten;
    }},
  __esModule: {value: true}
});
var __moduleName = "src_es6/flatten";
var $__src_95_es6_47_lib__;
var reduce = ($__src_95_es6_47_lib__ = require("./lib"), $__src_95_es6_47_lib__ && $__src_95_es6_47_lib__.__esModule && $__src_95_es6_47_lib__ || {default: $__src_95_es6_47_lib__}).reduce;
var applicativeFlatten = (function(a) {
  return a.reduce((function(memo, e) {
    var $__1;
    Array.isArray(e) ? ($__1 = memo).push.apply($__1, $traceurRuntime.spread(e)) : memo.push(e);
    return memo;
  }), []);
});
var mutableFlatten = (function(a) {
  return a.reduce((function(memo, e) {
    var $__1;
    Array.isArray(e) ? ($__1 = memo).push.apply($__1, $traceurRuntime.spread(e)) : memo.push(e);
    return memo;
  }), []);
});
var flatten = reduce((function(memo, e) {
  return Array.isArray(e) ? $traceurRuntime.spread(memo, e) : $traceurRuntime.spread(memo, [e]);
}), []);
