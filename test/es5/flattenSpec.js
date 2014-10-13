"use strict";
var __moduleName = "test_es6/flattenSpec";
var $__traceur_64_0_46_0_46_61__,
    $___46__46__47_src_47_es5_47_flatten__;
($__traceur_64_0_46_0_46_61__ = require("traceur"), $__traceur_64_0_46_0_46_61__ && $__traceur_64_0_46_0_46_61__.__esModule && $__traceur_64_0_46_0_46_61__ || {default: $__traceur_64_0_46_0_46_61__});
var flatten = ($___46__46__47_src_47_es5_47_flatten__ = require("../../src/es5/flatten"), $___46__46__47_src_47_es5_47_flatten__ && $___46__46__47_src_47_es5_47_flatten__.__esModule && $___46__46__47_src_47_es5_47_flatten__ || {default: $___46__46__47_src_47_es5_47_flatten__}).flatten;
describe('flatten', (function() {
  it('leaves simple values as-is', (function() {
    expect(flatten([1])).toEqual([1]);
  }));
  it('removes 1 level of nested arrays', (function() {
    expect(flatten([1, [2]])).toEqual([1, 2]);
  }));
}));
