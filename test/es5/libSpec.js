"use strict";
var __moduleName = "test_es6/libSpec";
var $__traceur_64_0_46_0_46_61__,
    $___46__46__47_src_47_es5_47_lib__;
($__traceur_64_0_46_0_46_61__ = require("traceur"), $__traceur_64_0_46_0_46_61__ && $__traceur_64_0_46_0_46_61__.__esModule && $__traceur_64_0_46_0_46_61__ || {default: $__traceur_64_0_46_0_46_61__});
var reduce = ($___46__46__47_src_47_es5_47_lib__ = require("../../src/es5/lib"), $___46__46__47_src_47_es5_47_lib__ && $___46__46__47_src_47_es5_47_lib__.__esModule && $___46__46__47_src_47_es5_47_lib__ || {default: $___46__46__47_src_47_es5_47_lib__}).reduce;
describe('reduce', (function() {
  it('curries reduce and splat magic', (function() {
    var sum = reduce((function(memo, el) {
      return memo + el;
    }), 0);
    expect(sum([1, 2])).toEqual(3);
  }));
}));
