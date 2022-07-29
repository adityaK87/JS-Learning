//scenario

/* In this order

1.Resister

2.Send welcome email

3.Login  

4.GetUserData

5.DisplayUserData

*/


function Resister() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Resister end")
            resolve("success")
        }, 1000)

    })
}

function SendWelcomeEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("Error while sending email...")
            console.log("Email end")
            resolve()
        }, 1000);
    })
}

function Login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end")
            resolve()
        }, 1000);
    })

}

function GetUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Get user data")
            resolve()
        }, 1000);
    })
}

function DisplayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user data displayed")
            resolve()
        }, 1000);
    })
}

// Callback hell
// Resister(function () {

//     SendWelcomeEmail(function () {

//         Login(function () {

//             GetUserData(function () {

//                 DisplayUserData();
//             });

//         });

//     });

// });


//Promises 
// Resister()
//     .then(SendWelcomeEmail)
//     .then(Login)
//     .then(GetUserData)
//     .then(DisplayUserData)
//     .catch((err)=>{
//         console.log("Error: " ,err);
//     });


// Async await
async function authenticate() {
    try {

        const message = await Resister();
                        await SendWelcomeEmail();
                        await Login();
                        await GetUserData();
                        await DisplayUserData();
                        console.log(message);

    } catch (error) {
        console.log(error)
       // throw new Error() // This will throw an error to  authenticate() function
    }
}

authenticate().then(() => {
    console.log("All set!")
}).catch((err) => {
    console.log(err)
})


console.log("Other application Work")
