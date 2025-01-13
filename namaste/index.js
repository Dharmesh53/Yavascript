// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 resolved")
//   }, 5000)
// })
//
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2 resolved")
//   }, 3000)
// })
//
// async function handlePromise() {
//   console.log("Hello world!!")
//   const val = await p1;
//   console.log("tata tata")
//   console.log(val)
//
//   const val2 = await p2;
//   console.log("tata tata")
//   console.log(val2)
// }
//
// handlePromise()
//
//
// function fetchData(cb) {
//   // something
//   cb()
// }
//
// function updateData(cb) {
//   // something
//   cb()
// }
//
// function getData(cb) {
//   // something
//   cb()
// }
//
// getData(function a() {
//   //-------
//   fetchData(function b() {
//     //-------
//     updateData(function c() {
//
//     })
//   })
// });
//
// getData()
//   .then(() => {
//     // ------- 
//     return fetchData()
//   })
//   .then(() => {
//     // -------
//     return updateData()
//   })
