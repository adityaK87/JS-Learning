//scenario


/* In this order

1.Resister

2.Send welcome email

3.Login  

4.GetUserData

5.DisplayUserData

*/

// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function. 
// A callback function can run after another function has finished.


function Resister(Callback) {
    setTimeout(() => {
        console.log("Resister end")
        Callback()
    }, 1000)
}

function SendWelcomeEmail(Callback) {
    setTimeout(() => {
        console.log("Email end")
        Callback();
    }, 1000);
}

function Login(Callback) {
    setTimeout(() => {
        console.log("Login end")
        Callback();
    }, 1000);

}

function GetUserData(Callback) {
    setTimeout(() => {
        console.log("Get user data")
        Callback();
    }, 1000);
}

function DisplayUserData() {
    setTimeout(() => {
        console.log("user data displayed")
    });
}

// Callback hell
Resister(function () {

    SendWelcomeEmail(function () {

        Login(function () {

            GetUserData(function () {

                DisplayUserData();

            });

        });

    });

});


console.log("Other application Work")
