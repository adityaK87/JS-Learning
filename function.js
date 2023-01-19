// function in JavaScript

// function cookMaggi(maggi ,pani ,tapeli){
//     console.log("Your maggi will be ready in "
//     +maggi*2 +" minutes "
//     + " and ingredients used are:- "
//     +maggi +" maggi "
//     +pani+" cups of water "
//     +" using "
//     + tapeli+" pan"
//     )
// }
// cookMaggi(4,8,1)

// let bread1 = prompt("Which bread would you like to have:-");
// let veggies1 = prompt("What are your favorite veggies");
// let sauce = prompt("Which sauce would you like to have :-");

// function makeSandwich(bread, veggies, sauce) {
//   let sandwich =
//     bread + "  bread  " + veggies + "  " + sauce + " sandwich is ready";
//   return sandwich;
// }

// let vegSandwich = makeSandwich(bread1, veggies1, sauce);
// console.log(vegSandwich);


// Function Statement => are hoisted aka Function Declaration
function a() {
  console.log("a called")
}

// Function Expression => Are not hoised
var b = function () {
  console.log("b called")
}
a();
b();

// Anonymous Function => A function without a name is called anonymous function

// function () {

// }
// function () {

// }

// Named Function Expression
// var c = function xyz(params) {
//   console.log("named function expression")
// }
// this will give an error
// xyz(); // ReferenceError: xyz is not defined 
// c();

// Difference between parameters and arguments
function func(param1, param2) {
  console.log(param1)
  console.log(param2)

}

func(1, 2); //arguments

// First Class Function - Ability to used functions as variables
function func2() {
  return function () {

  }
}
console.log(func2())

// Arrow Function