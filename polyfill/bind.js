Function.prototype.dnib = function(context = globalThis, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`)
  }

  context.fn = this;

  return function(...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

const module = {
  x: 42,
  getX: function() {
    return this.x;
  },
};

var x = 11;

const unboundGetX = module.getX;
// console.log(unboundGetX());

const boundGetX = unboundGetX.dnib(module);
console.log(boundGetX());
