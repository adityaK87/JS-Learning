// an async function is always returns a promise other values are wrapped in a promise automatically
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 2000);
    })

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 5000);
    })

    // delhiWeather.then(alert)
    // mumbaiWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather : " + delhiW)
    console.log("Fetching Mumbai Weather Please wait...")
    let mumbaiW = await mumbaiWeather
    console.log("Fetched Mumbai Weather : " + mumbaiW)

    return [delhiW, mumbaiW]

}

const cherry = async () => {
    console.log("This is cherry function")
}

main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()
    // a.then((value) => {
    //     console.log(value)
    // })

}
main1();

// console.log(a)




// harry().then((value) => {
//     alert(value)
// }) 