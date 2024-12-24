Array.prototype.pam = function(cb) {
  let arr = new Array()
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i))
  }
  return arr
}

let test = [1, 3, 3, 5, 67, 7, 78]

const ans = test.pam((num, i) => {
  console.log(i)
  return num * 4;
})

console.log(ans.toString())

