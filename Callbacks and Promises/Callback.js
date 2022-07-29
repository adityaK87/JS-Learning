//scenario


/* In this order

1.Resister

2.Send welcome email

3.Login  

4.GetUserData

5.DisplayUserData

*/


function Resister(Callback) {
    setTimeout(() => {
        console.log("Resister end")
        Callback()
    }, 10000)
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
