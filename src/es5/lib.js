"use strict";
Object.defineProperties(exports, {
  reduce: {get: function() {
      return reduce;
    }},
  __esModule: {value: true}
});
var __moduleName = "src_es6/lib";
var reduce = (function() {
  for (var reduceArgs = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    reduceArgs[$__0] = arguments[$__0];
  return (function(a) {
    var $__1;
    return ($__1 = a).reduce.apply($__1, $traceurRuntime.spread(reduceArgs));
  });
});
