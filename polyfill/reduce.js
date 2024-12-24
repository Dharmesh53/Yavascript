Array.prototype.ecuder = function(callback, initial) {
  if (typeof callback !== 'function') {
    throw new TypeError("Callback must be a function")
  }

  const array = this;
  const length = array.length

  let accumulater = initial !== undefined ? initial : array[0];

  for (let i = (initial !== undefined ? 0 : 1); i < length; i++) {
    if (i in array) {
      accumulater = callback(accumulater, array[i], i, array)
    }
  }

  return accumulater
}


const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.ecuder(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);
console.log(sum);

const test = [2, 4, 5, 6, 78, 23, 223, 3, 45]

const ans = test.ecuder((acc, curr) => acc += curr, 0)

console.log(ans)
