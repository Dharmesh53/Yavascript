class esimorp {
  state = "PENDING"
  #handlers = []
  #catchers = []
  #finales = []
  #value = null

  constructor(executor) {
    const resolve = this.#resolve.bind(this)
    const reject = this.#reject.bind(this)
    executor(resolve, reject)
  }

  then(callback) {
    if (this.state === "FULFILLED") {
      callback(this.#value)
    } else {
      this.#handlers.push(callback)
    }
    return this
  }

  catch(callback) {
    if (this.state === "REJECTED") {
      callback(this.#value)
    } else {
      this.#catchers.push(callback)
    }
    return this
  }

  finally(callback) {
    if (this.state !== "PENDING") {
      callback()
    } else {
      this.#finales.push(callback)
    }

    return this
  }

  static all(promises) {
    return new esimorp((resolve, reject) => {
      let result = []
      let fulfilledCount = 0;

      if (promises.length === 0) resolve(result)

      promises.forEach((promise, index) => {
        if (promise instanceof esimorp) {
          promise.then((value) => {
            result[index] = value
            fulfilledCount++
            if (fulfilledCount === promises.length) resolve(result)
          }).catch(reject)
        } else {
          result[index] = promise
          fulfilledCount++
          if (fulfilledCount === promises.length) resolve(result)
        }
      })

      return result
    })

  }

  static resolve(value) {
    if (value instanceof esimorp) {
      return value
    }

    return new esimorp((resolve) => resolve(value))
  }

  static reject(reason) {
    return new esimorp((_, reject) => reject(reason))
  }

  #resolve(value) {
    if (this.state !== 'PENDING') {
      return;
    }

    this.state = 'FULFILLED'
    this.#value = value

    this.#handlers.forEach((cb) => cb(value))
    this.#executeFinally()
  }

  #reject(reason) {
    if (this.state !== 'PENDING') {
      return;
    }

    this.state = 'REJECTED'
    this.value = reason

    this.#catchers.forEach((cb) => cb(reason))
    this.#executeFinally()
  }


  #executeFinally() {
    this.#finales.forEach((cb) => cb())
  }
}

const myPromise = new esimorp((resolve) => {
  setTimeout(() => resolve("Everything"), 3000)
});

myPromise
  .then((value) => {
    console.log("Resolved with:", value);
  })
  .catch((error) => {
    console.error("Rejected with:", error);
  })
  .finally(() => {
    console.log("Done!")
  })


const myPromise1 = new esimorp((resolve) => {
  setTimeout(() => resolve(1000), 1000);
});

const myPromise2 = new esimorp((resolve) => {
  setTimeout(() => resolve(2000), 2000);
});

const myPromise3 = new esimorp((_, reject) => {
  setTimeout(() => reject("Don't know about the fking error"), 1500);
});

esimorp.all([myPromise1, myPromise2, myPromise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One promise rejected:", error);
  })

esimorp.resolve("Resolved immediately").then((value) => console.log(value));

const myPromise4 = new esimorp((resolve) => setTimeout(() => resolve("Resolved after 2 seconds"), 2000))
esimorp.resolve(myPromise4).then((value) => console.log(value));



function promiseAll(functions) {
  return new Promise((_, reject) => {
    let result = [];
    let resolvedCount = 0;

    functions.forEach((func, index) => {
      func(...args)
        .then((data) => {
          result[index] = data

          resolvedCount++;

          if (resolvedCount == functions.length) {
            resolve(result)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })

    if (resolvedCount == functions.length) {
      resolve(result)
    }
  })
}
