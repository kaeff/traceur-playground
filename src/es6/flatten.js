var reduce = (...args) => a => a.reduce(...args);

var flatten = reduce((memo, e) => {
  Array.isArray(e) ? memo.push(...e) : memo.push(e);
  return memo;
}, []);

console.log('flatten( [1] ):', flatten( [1] ));
console.log('flatten( [1, [2]] )', flatten( [1, [2]] ));
