"use strict";
var __moduleName = "src_es6/flatten";
var reduce = (function() {
  for (var args = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    args[$__0] = arguments[$__0];
  return (function(a) {
    var $__1;
    return ($__1 = a).reduce.apply($__1, $traceurRuntime.spread(args));
  });
});
var flatten = reduce((function(memo, e) {
  var $__1;
  Array.isArray(e) ? ($__1 = memo).push.apply($__1, $traceurRuntime.spread(e)) : memo.push(e);
  return memo;
}), []);
console.log('flatten( [1] ):', flatten([1]));
console.log('flatten( [1, [2]] )', flatten([1, [2]]));
