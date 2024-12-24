Array.prototype.retlif = function(cb) {
  let arr = new Array()

  for (let element of this) {
    if (cb(element)) {
      arr.push(element)
    }
  }

  return arr;
}

const test = [2, 4, 5, 6, 78, 23, 223, 3, 45]

const ans = test.retlif((num) => num < 50)

console.log(ans.toString())
