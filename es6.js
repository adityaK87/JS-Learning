//Difference between var let & const
// var a;
// a = 10;
// console.log(a)
let b;
b = 20;
console.log(b);
const c = 13;
console.log(c);

// for (var i = 0; i < 5; i++) {

// setTimeout(
//     function get() { return console.log(i) }
//     , 1000);
// get();
// }
//
// for (let i = 0; i < 5; i++) {
//     let get = () => { return console.log(i) };
//     get();
// }

let a = 1;
if (a === 2) {
	function aadi() {
		return console.log("bas bhai");
	}
	aadi();
} else if (a === 1) {
	console.log("Sahi hai bhai");
} else {
	console.log("Aditya");
}

// a = 1 ? console.log(a) : console.log("Aditya").

//This keyWord
var employee = {
	id: 1,
	birthDate: "6 oct",
	Greet: function () {
		var self = this;
		setTimeout(function () {
			console.log(self.id); // output 1
		}, 1000); //with regular function this keyword is only define for block scope but with arrow function this is for globally
	},
	Geek: function () {
		setTimeout(() => {
			console.log(this.id); //output 1
		}, 1000);
	},
};
// employee.Greet()
// employee.Geek()

//default values in js
let percentBonus = 0.1;
let getvalue = function (
	value = 10,
	bonus = value * percentBonus /*default parameter */
) {
	console.log(value + bonus);
};
getvalue();
getvalue(20);
getvalue(20, 30);
getvalue(undefined, 30);

//Rest operator in javaScript
let displayColor = function (massage, ...color) {
	//it will convert color into an array
	console.log(massage);
	console.log(color);
	for (let i in color) {
		console.log(color[i]);
	}
};
let massage = "List of colors";
displayColor(massage, "red");
displayColor(massage, "red", "blue");
displayColor(massage, "red ", "blue", "green");
displayColor(massage, "red", "blue", "green", "yellow");

//object literals
let lt = "last name";
let person = {
	"first name": "Aditya",
	[lt]: "kumar",
};
console.log(person["first name"]);
console.log(person);

//Array destructure
// let employeeName = ["aditya ", "kumar", "male"];
// let [fname, lname, gender] = employeeName;
// console.log(fname);
// console.log(lname);
// console.log(gender);

// let employeeName = ["aditya ", "kumar", "male"];
// let [, , gender] = employeeName; //if we dont want fname lname
// console.log(gender);

//Object  destructure
let employees = {
	fname: "aalok",
	lname: "nath",
	gender: "male",
};
let { fname, lname, gender } = employees;
console.log(fname);
console.log(lname);
console.log(gender);
//string templates
let user = "aditya";
let great = `welcome ${user} to es2015`;
console.log(great);

// for of loop
let colors = ["red", "blue", "green"];
for (let index in colors) {
	console.log(colors[index]);
}

for (let index of colors) {
	console.log(index);
}
// output
// red
// blue
// green

let letters = "ABC";
for (let letter of letters) {
	console.log(letter);
} //A B C

//functions are hoisted
mahi("mahi");
function mahi(name) {
	console.log(name);
}

//class are not hoisted
class Persons {}
let p1 = new Persons();
console.log(typeof Persons);

// class methods
class Members {
	//constructor method
	constructor(name) {
		this.name = name;
		console.log(this.name + " constructor");
	}
	//static method
	static staticMethod() {
		console.log("static method");
	}
	//prototype method
	greetPerson() {
		console.log("Hello " + this.name);
	}
}
let p = new Members("chandler");
Members.staticMethod();
p.greetPerson();

//class inheritence
class Family {
	constructor(name) {
		console.log(name + " Family constructor");
	}
	getId() {
		return 10;
	}
}

class People extends Family {
	constructor(name) {
		super(name);
		console.log(name + " People constructor");
	}
	getId() {
		// return 50;
		//how to get getId of fmaily
		return super.getId();
	}
}
let fm = new People("chandler ");
console.log(fm.getId());

// set and map

let mySet = Object.create(null);
mySet.id = 2;

if (mySet.id) {
	console.log("id exits");
}

let myMap = Object.create(null);
myMap.name = "chandler";
let val = myMap.name;
console.log(val);

let myId = new Set();
myId.add("hello");
myId.add(2);
myId.add(2);
console.log(myId.size); // output 2
// Set only returns unoque values

//Symbols in js
let s = Symbol();
console.log(typeof s);

let s2 = Symbol();
let s3 = Symbol();
console.log(s2 === s3); //false
//because Symbol always creates a unique ID
