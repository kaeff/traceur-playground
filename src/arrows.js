var add = (a = 0, b = 0) => a + b;

var identity = (obj) => () => obj;

var sum = (...numbers) => numbers.reduce(add);

console.log(sum([10, 1, 2]));
console.log(sum(10, 1, 2));

var sum6 = (a, ...b) => {
  if (b.length > 0) {
    return a + add(...b);
  }
  return a;
};

console.log(sum6(10, 1, 2));
