//QUESTION - 1
// make a function that reverse the number
function reverse(value) {
    var r = value;
    var t = r.toString().split('').reverse().join('');
    // console.log(t);
}

reverse(123);
//first we have to convert number into string data the split then reverse and the join 



//QUESTION - 2
// Write a JavaScript function that returns a passed string with letters in alphabetical order
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

var string = "webmaster"
function sort(string) {
    return (string.split('').sort().join(''))
    // return console.log(string.split('').sort().join(''))
}
sort(string)


// QUESTION - 3
// Write a JavaScript function that accepts a string as a parameter and counts the  number of vowels within the string

// function vowelCount(sentence) {
//     var vowels = 'aeiouAEIOU';
//     var vowel_count = 0;

//     for (var x = 0; x < sentence.length; x++) {
//         if (vowels.indexOf(sentence[x]) !== -1) {
//             vowel_count += 1;
//         }

//     }
//     return console.log(vowel_count);
// }
// vowelCount("the quick brown fox");

//  QUESTION -4
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }
// sayHi();

// OUTPUT -> undefined AND Uncaught ReferenceError



//  QUESTION -5

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// OUTPUT ->3 3 3 and 0 1 2


//  QUESTION -6
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
// console.log(shape.diameter());
// console.log(shape.perimeter());
// OUTPUT -> 20 and NaN

// QUESTION - 7
console.log(+true);
console.log(!"aditya");

// OUTPUT -> 1 and false\


// QUESTION -8
const bird = {
    size: 'small',
};
const mouse = {
    name: 'Mickey',
    small: true,
};
// console.log(mouse[bird.size])
// console.log(mouse[bird["size"]])
// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// ANSWER- A is not valid

// QUESTION -8

// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// OUTPUT -> 'Hello'


// QUESTION -9
// let  a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// output -> true false false


// QUESTION - 9
let greeting;
greetign = {}; // Typo!
console.log(greetign);



// QUESTION - 10

function bark() {
    console.log('Woof!');
}
bark.animal = 'dog';



// QUESTION - 11
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };
// console.log(member.getFullName());
// output > -TypeError: member.getFullName is not a function

// QUESTION -12
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
console.log(lydia);
console.log(sarah);


// Output ->
// Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined

// QUESTION -12
// function sum(a, b) {
//     return console.log(a + b);
// }
// sum(1, '2');

// OUTPUT  ->"12"

// QUESTION -13
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// QUESTON -14
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}
checkAge({ age: 18 });

// question 15
function getAge(...args) {
    console.log(typeof args);
}
getAge(21); // object


// question 16
// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
// }
// getAge();
// Uncaught ReferenceError ReferenceError: age is not defined

// question 17
const sum = eval('10*10+5');
console.log(sum)
//105

// question 18
var num = 8;
var num = 10;
console.log(num);//10

// question 19
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);//{a: 'three', b: 'two'}

// question20

for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}  // 1 2 4


// question 21
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');
bar();
foo();
baz(); // First Third Second