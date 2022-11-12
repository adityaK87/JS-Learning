// A closure is the  combinations of function bundled together with references to its surrounding states (the lexical environment);

// function init() {
//     var name = "aditya" //name is a local variable created by init function
//     function displayName() {
//         //dispalyName is a inner  function ,a closure
//         console.log(name) // use variable declared in parent function
//         // use variable declared in parent function
//     }
//     console.log(name)
//     return displayName
// }
// c = init()
// c()
// console.log("aditya is a very nice good  and honest person")


function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }
    return x
}
let a = returnFunc()
a()