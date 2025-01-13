/*
  * As we have returned from the promise, because of the time limit  
  * doesn't mean the func() that was running will be cancelled, it 
  * will keep running, so to prevent that you need to have a abort
  * controller
*/


// with using Promise.race() api
function timeLimit1(func, time) {
  let timer;

  return async function(...args) {
    const controller = new AbortController();
    const { signal } = controller

    const ogPromise = func(...args, { signal })

    const timedPromise = new Promise((_, reject) => {
      timer = setTimeout(() => {
        controller.abort()
        reject("Time Limit Exceeded")
      }, time)
    })

    return Promise.race([ogPromise, timedPromise]).finally(() => {
      clearTimeout(timer)
    })
  }
}

// without using Promise.race() api
function timeLimit2(func, time) {
  let timer;

  return function(...args) {
    const controller = new AbortController();
    const { signal } = controller

    return new Promise((resolve, reject) => {

      timer = setTimeout(() => {
        controller.abort()
        reject("Time Limit Exceeded")
      }, time)

      func(...args, { signal })
        .then(resolve)
        .finally(() => clearTimeout(timer))
    })
  }
}


function fetcher() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Some Data")
    }, 2000)
  })
}

const timeLimitedFetch = timeLimit2(fetcher, 1500)

console.log("Going to fetch the data")

timeLimitedFetch().then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
