//Hoisting

var x = 12;

function getName() {
	console.log("Namaste JavaScript");
}

console.log(x);
getName();
console.log(getName);
