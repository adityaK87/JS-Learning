
// example --1

// console.log(1) // 1️⃣ 

// setTimeout(() => {
//   console.log(2) // 1️⃣1️⃣
// }, 10)

// setTimeout(() => {
//   console.log(3) // 1️⃣0️⃣
// }, 0);

// new Promise((_, reject) => {
    // console.log(4) // 2️⃣
    // reject(5)
    // console.log(6) // 3️⃣
// })
// .then(() => console.log(7))
// .catch(() => console.log(8)) // 5️⃣
// .then(() => console.log(9)) // 6️⃣
// .catch(() => console.log(10))
// .then(() => console.log(11)) // 7️⃣
// .then(console.log) // 8️⃣
// .finally(() => console.log(12)) // 9️⃣

// console.log(13) // 4️⃣




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



// // Example--3

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


Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)