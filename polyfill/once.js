Function.prototype.once = function(context) {
  let called = false;
  context.fn = this

  return function(...args) {
    if (!called) {
      context.fn(...args)
      called = true;
    } else {
      throw new Error(`${context.fn.name} can only run one time`)
    }
  }
}

function once(func, context) {
  let called = false;

  return function(...args) {
    if (!called) {
      func.apply(context || this, ...args)
      called = true
    } else {
      throw new Error(`${func.name} can only run one time`)
    }
  }
}

function runner() {
  console.log("hello")
}

// const oncer = runner.once(this)
const oncer = once(runner)

oncer()
oncer()
