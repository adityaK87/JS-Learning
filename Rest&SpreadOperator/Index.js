// Spread : Unpacks elements of an [] ,{}


// Rest : Packs Elements


// clone & Copy
const numbers = [1, 2, 3];
const newNumbers = [...numbers];

console.log(newNumbers);


//Merge 

const oldNames = ["Aditya", "Abhishek", "Aman"];
const newNames = ["Arjun", "Kabir singh", "Alok"];
console.log([...oldNames, ...newNames]);

// Compose
const products = ["Biscuits", "fries", "samausa"];
const newProducts = ["Nmakeen", "Jalebi"];

console.log(["Chicken", ...products, ...newProducts, "Lassi"]);


//  String 

const channel = "Codewithharry";
console.log([...channel]);



//Object
// Clone(Shallow clone)

const order = {

    Id: 1,
    Date: "23/09/2022",
    Name: "Aditya",
    item: ["1", "2"]
};

const newOrder = {
    ...order
};

order.item.push("3");
console.log(newOrder);

//merge 2 Object 

const user = {
    Name: "Aditya",
    City: "Delhi"
};

const useraddress = {
    sreet: "Main Street"
};

const newUser = {
    ...user,
    ...useraddress
};
console.log(newUser);




// Rest ...

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(1, 2));

// if we dont know that how many parameters are passes in that function

function sum(number1, number2, ...numbers) { //it returns an array 
    console.log(numbers)
    result = 0
    for (let num of numbers) {
        result += num
    }
    return result;

}

console.log(sum(1, 3, 12, 32));


const numbersFromBackend = [2, 4, 5, 6, 74, 54, 5.454, 454]
console.log(Math.max(...numbersFromBackend))


// destructuring
const newuser = {
    Name: "Aditya",
    City: "Delhi",
    street: "main Street",
};

const { Name , ...address } = newuser;
console.log(Name ,address)

