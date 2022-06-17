// Reference Datatype in JavaScript

//object
let animal = {
  name: "Cow",
  legs: 4,
};
console.log(animal);

//Dot Notation
console.log(animal.name);

//Bracket Notation
let legsProp = "legs";
console.log(animal[legsProp]);

//Array
//Dot Notation does not work here
let selectBooks = ["The Rudest book ", "Two states", "Invisible Man"];
console.log(selectBooks);

//function
function namasteWorld(name, lastName) {
  console.log("Namaste " + name + " " + lastName);
  console.log(`Namaste ${name}  ${lastName}`);
}
namasteWorld("Gaurav", "Pal");
namasteWorld("Aman", "Rathore");

function addition(a, b) {
  return a + b;
}
console.log(addition(12, 12));
