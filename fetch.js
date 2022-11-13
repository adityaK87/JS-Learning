// fetch is used to get data over the network
let promise = fetch(URL)
promise.then((value) => {
    value.json
}).then((data) => {
    console.log(data)
})
// getting a response is a two stage process
