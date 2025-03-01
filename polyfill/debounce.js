function debounce(func, delay) {
  let timer;

  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, arguments), delay);
  }
}

function printer(val) {
  console.log("evaluate", val)
}

const debounced_printer = debounce(printer, 1000)

const input = document.getElementById("input")
input.oninput = () => debounced_printer("input")
// input.addEventListener("input", () => debounced_printer("nothing"))
