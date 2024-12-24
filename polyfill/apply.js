Function.prototype.ylppa = function(context = globalThis, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`)
  }

  if (!Array.isArray(argsArray)) {
    throw new TypeError(`Arguments must be a array`)
  }

  context.fn = this;
  context.fn(...argsArray)
}

const obj = {
  a: 2,
  b: 3
}

let a = 9, b = 99;

function Product(name, price) {
  console.log(name, price, this.a)
}

// Product("Banana", "290");
Product.ylppa(obj, ["Banana", "290"]);


