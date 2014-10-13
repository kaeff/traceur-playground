"use strict";
var __moduleName = "src_es6/arrows";
var add = (function() {
  var a = arguments[0] !== (void 0) ? arguments[0] : 0;
  var b = arguments[1] !== (void 0) ? arguments[1] : 0;
  return a + b;
});
var identity = (function(obj) {
  return (function() {
    return obj;
  });
});
var sum = (function() {
  for (var numbers = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    numbers[$__0] = arguments[$__0];
  return numbers.reduce(add);
});
console.log(sum([10, 1, 2]));
console.log(sum(10, 1, 2));
var sum6 = (function(a) {
  for (var b = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    b[$__1 - 1] = arguments[$__1];
  if (b.length > 0) {
    return a + add.apply(null, $traceurRuntime.spread(b));
  }
  return a;
});
console.log(sum6(10, 1, 2));
