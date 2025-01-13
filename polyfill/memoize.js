function memoize(func, context) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      return (cache[key] = func.call(context || this, ...args));
    }
  };
}

function timeTaker(a, b) {
  for (let i = 0; i < 1000000000; i++) {}

  return a * b;
}

const memoized = memoize(timeTaker, this);

console.time();
console.log(memoized(234, 4564));
console.timeEnd();

console.time();
console.log(memoized(234, 4564));
console.timeEnd();
