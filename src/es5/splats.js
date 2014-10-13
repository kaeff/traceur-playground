"use strict";
var __moduleName = "src_es6/splats";
var log = (function() {
  for (var args = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    args[$__0] = arguments[$__0];
  return console.log(args);
});
log(1);
log(1, 2);
log([1, 2]);
