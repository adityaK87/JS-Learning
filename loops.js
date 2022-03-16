// Loops in JavaScript

//for loop
// for (i=0; i<10; i++){
//     console.log("Namaste World");
// }

// for (i=5; i<51; i=i+5){
//     console.log(i);
// }

//while loop
// i=0;
// while(i<10){
//     console.log("Namaste World");
//     i++
// }

//Reverse counting using for loop
// for (i=100; i>0; i=i-1){
//     console.log(i);
// }

// Reverse counting using while loop
// let i = 100;
// while (i > 0) {
//     console.log(i)
//     i = i - 1;
// }

//do while loop
// let i=0;
// do{
//     console.log("Namaste World")
//     i++
// }
// while(i<10);

//Reverse counting using do while loop
// let i=100;
// do{
//     console.log(i);
//     i--
// }
// while(i>0);

//for...in loop
//object
let animals = {
  name: "Dog",
  legs: 4,
};
for (let key in animals) {
  console.log(key, animals[key]);
}

// Array
// .(dot) notaition does not work in an Array
let names = ["Aman", "Kajal", "Abhishek", "Aditya"];
for (let index in names) {
  console.log(index, names[index]);
}
// for...of loop
// let names=["Aman","Kajal","Abhishek","Aditya"]
for (let name of names) {
  console.log(name);
}
