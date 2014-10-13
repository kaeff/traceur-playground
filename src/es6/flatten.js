import { reduce } from './lib';

var applicativeFlatten = a => a.reduce((memo, e) => {
   Array.isArray(e) ? memo.push(...e) : memo.push(e);
   return memo;
 }, []);

var mutableFlatten = a => a.reduce((memo, e) => {
  Array.isArray(e) ? memo.push(...e) : memo.push(e);
  return memo;
}, []);

export var flatten = reduce(
  (memo, e) => Array.isArray(e) ? [...memo, ...e] : [...memo, e] , []
);
