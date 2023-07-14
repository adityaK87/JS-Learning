//scenario

/* In this order

1.Resister

2.Send welcome email

3.Login  

4.GetUserData

5.DisplayUserData

*/

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

function Resister() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Resister end");
			resolve("success");
		}, 2000);
	});
}

function SendWelcomeEmail() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// return reject("Error while sending email...")
			console.log("Email end");
			resolve();
		}, 1000);
	});
}

function Login() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Login end");
			resolve();
		}, 1000);
	});
}

function GetUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Get user data");
			resolve();
		}, 1000);
	});
}

function DisplayUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("user data displayed");
			resolve();
		}, 1000);
	});
}

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
		console.log(error);
		// throw new Error() // This will throw an error to  authenticate() function
	}
}

authenticate()
	.then(() => {
		console.log("All set!");
	})
	.catch((err) => {
		console.log(err);
	});

console.log("Other application Work");
