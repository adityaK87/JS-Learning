// call
// Pass in the required object as the first parameter during function call, The actual parameters are passed after the object, one after the other

function fun(param1, param2) {
	console.log(this);
}

let obj = {
	counter: 1,
};

fun.call(obj, 2, 4);

// apply
// Pretty much same as call(), only difference is that parameters are passed as an array.
function fun(param1, param2) {
	console.log(this);
}

let obj1 = {
	counter: 1,
};

fun.apply(obj, [2, 4]);

// Bind
// A new function is created where we explicitly bind the this which is fixed. Also known as bound functions.
function fun() {
	console.log(this);
}

const obj2 = {
	counter: 1,
};

const boundFunction = fun.bind(obj);
boundFunction(); // {counter: 1}

// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log("Index: " + i + ", element: " + arr[i]);
	}, 3000);
}
