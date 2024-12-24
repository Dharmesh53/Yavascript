function throttle(func, delay) {
  let isCalled = false;

  return function(...args) {
    if (!isCalled) {
      isCalled = true;
      func.apply(this, args)
      setTimeout(() => isCalled = false, delay)
    }
  }
}

const throttled_printer = throttle(printer, 500)

const box = document.getElementById("child")
box.addEventListener("dragging", (event) => {
  const { left, top } = event.detail
  throttled_printer(`dragging at left:${left} top:${top}`)
})
