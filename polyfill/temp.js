const p = new Promise((resolve, reject) => {
  resolve(1)
  resolve(2)
  reject(3)
})


p.then(console.log)
