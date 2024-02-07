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

// function returnFunc() {
// 	const x = () => {
// 		let a = 1;
// 		console.log(a);
// 		const y = () => {
// 			// let a = 2
// 			console.log(a);
// 			const z = () => {
// 				// let a = 3
// 				console.log(a);
// 			};
// 			z();
// 		};
// 		a = 999;
// 		y();
// 	};
// 	return x;
// }
// let a = returnFunc();
// a();

// function x() {
// 	var a = 7;
// 	function y() {
// 		console.log(a);
// 	}
// 	return y;
// }

// x()();

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

// Reason? => This happens because of closures. When setTimeout stores the function somewhere and attaches timer to it, the function remembers its reference to i, not value of i. All 5 copies of function point to same reference of i. JS stores these 5 functions, prints string and then comes back to the functions. By then the timer has run fully. And due to looping, the i value became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each log

// To avoid this, we can use let instead of var as let has Block scope. For each iteration, the i is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside function forms closure with new variable i

// But what if interviewer ask us to implement using var?

function x() {
	for (var i = 1; i <= 5; i++) {
		function close(i) {
			setTimeout(function () {
				console.log(i);
			}, i * 1000);
			// put the setT function inside new function close()
		}
		close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
	}
	console.log("Namaste Javascript");
}
x();
