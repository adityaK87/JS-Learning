// Example--1
// async function async1(){
//     console.log(1)
//     await async2()
//     console.log(2)
//   }

//   async function async2(){
//     console.log(3)
//   }

//   console.log(4)

//   setTimeout(function(){
//     console.log(5)
//   }, 0)

//   async1()

//   new Promise(function(resolve){
//     console.log(6)
//     resolve()
//   }).then(function(){
//     console.log(7)
//   })

//   console.log(8)




// Example-2

// const p1 = Promise.resolve(1)
// const p2 = new Promise((resolve) => resolve(p1))
// const p3 = Promise.resolve(p1)
// const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))
// const p5 = p4.then(() => p4)

// console.log(p1 == p2) // false
// console.log(p1 == p3) // true
// console.log(p3 == p4) // false
// console.log(p4 == p5) // false



// Example--3

// console.log(1)
// const promise = new Promise((resolve) => {
//   console.log(2)
//   resolve()
//   console.log(3)
// })

// console.log(4)

// promise.then(() => {
//   console.log(5)
// }).then(() => {
//   console.log(6)
// })

// console.log(7)

// setTimeout(() => {
//   console.log(8)
// }, 10)

// setTimeout(() => {
//   console.log(9)
// }, 0)


// // Example--4

// Promise.resolve(1)
// .then(() => 2)
// .then(3)
// .then((value) => value * 3)
// .then(Promise.resolve(4))
// .then(console.log)


// // Example--5

// Promise.resolve(1)
//   .then((val) => {
//     console.log(val)
//     return val + 1
//   }).then((val) => {
//     console.log(val)
//   }).then((val) => {
//     console.log(val)
//     return Promise.resolve(3)
//       .then((val) => {
//         console.log(val)
//       })
//   }).then((val) => {
//     console.log(val)
//     return Promise.reject(4)
//   }).catch((val) => {
//     console.log(val)
//   }).finally((val) => {
//     console.log(val)
//     return 10
//   }).then((val) => {
//     console.log(val)
//   })


// // Example-6

Promise.resolve(1)
  .finally((data) => {
    console.log(data)
    return Promise.reject('error')
  })
  .catch((error) => {
    console.log(error)
    throw 'error2'
  })
  .finally((data) => {
    console.log(data)
    return Promise.resolve(2).then(console.log)
  })
  .then(console.log)
  .catch(console.log)
