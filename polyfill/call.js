Function.prototype.llac = function (context = globalThis, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  console.log(context);

  context.fn = this;
  context.fn(...args);
};

const obj = {
  a: 2,
  b: 3,
};

Object.prototype.a = 10;

var b = 99;

function Product(name, price) {
  console.log(name, price, a);
}

// Product("Banana", "290");
console.log(this, "hvchj");
Product.llac(this, "Banana", "290");
