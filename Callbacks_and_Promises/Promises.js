// //scenario

// /* In this order

// 1.Resister

// 2.Send welcome email

// 3.Login

// 4.GetUserData

// 5.DisplayUserData

// */

// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// // A Promise is in one of these states:

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // rejected: meaning that the operation failed.

// function Resister() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("Resister end");
// 			resolve("success");
// 		}, 2000);
// 	});
// }

// function SendWelcomeEmail() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			// return reject("Error while sending email...")
// 			console.log("Email end");
// 			resolve();
// 		}, 1000);
// 	});
// }

// function Login() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("Login end");
// 			resolve();
// 		}, 1000);
// 	});
// }

// function GetUserData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("Get user data");
// 			resolve();
// 		}, 1000);
// 	});
// }

// function DisplayUserData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("user data displayed");
// 			resolve();
// 		}, 1000);
// 	});
// }

// //Promises
// // Resister()
// //     .then(SendWelcomeEmail)
// //     .then(Login)
// //     .then(GetUserData)
// //     .then(DisplayUserData)
// //     .catch((err)=>{
// //         console.log("Error: " ,err);
// //     });

// // Async await
// async function authenticate() {
// 	try {
// 		const message = await Resister();
// 		await SendWelcomeEmail();
// 		await Login();
// 		await GetUserData();
// 		await DisplayUserData();
// 		console.log(message);
// 	} catch (error) {
// 		console.log(error);
// 		// throw new Error() // This will throw an error to  authenticate() function
// 	}
// }

// authenticate()
// 	.then(() => {
// 		console.log("All set!");
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// console.log("Other application Work");

// Creating a Promise

const cart = ["shoes", "pants", "kurta"];

// Consumer part of promise
const promise = createOrder(cart); // orderId
// Our expectation is above function is going to return me a promise.

promise.then(function (orderId) {
	proceedToPayment(orderId);
});

// Above snippet we have observed in our previous lecture itself.
// Now we will see, how createOrder is implemented so that it is returning a promise
// In short we will see, "How we can create Promise" and then return it.

// Producer part of Promise
function createOrder(cart) {
	// JS provides a Promise constructor through which we can create promise
	// It accepts a callback function with two parameter `resolve` & `reject`
	const promise = new Promise(function (resolve, reject) {
		// What is this `resolve` and `reject`?
		// These are function which are passed by javascript to us in order to handle success and failure of function call.
		// Now we will write logic to `createOrder`
		/** Mock logic steps
		 * 1. validateCart
		 * 2. Insert in DB and get an orderId
		 */
		// We are assuming in real world scenario, validateCart would be defined
		if (!validateCart(cart)) {
			// If cart not valid, reject the promise
			const err = new Error("Cart is not Valid");
			reject(err);
		}
		const orderId = "12345"; // We got this id by calling to db (Assumption)
		if (orderId) {
			// Success scenario
			resolve(orderId);
		}
	});
	return promise;
}
// Over above, if your validateCart is returning true, so the above promise will be resolved (success),\
