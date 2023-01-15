let arr = [12, 8, 13, 7];
//MAP method

function double(x) {
    return 2 * x
};

const output = arr.map(x => double(x))
console.log(output);


// Filter method
function isOdd(x) {
    return x % 2
}
const oddNum = arr.filter(x => isOdd(x))
console.log(oddNum)

//reduce method

const sum = arr.reduce(function (acc, curr) {
    return acc = acc + curr;
}, 0)
console.log(sum)


let users = [
    { firstName: "Aditya", lastName: "pal", age: 19 },
    { firstName: "Akshay", lastName: "saini", age: 26 },
    { firstName: "Avinash", lastName: "mandal", age: 24 },
    { firstName: "Ankit", lastName: "shakya", age: 19 },
]

// ["Aditya pal","Akshay saini","Avinash mandal"]
function fullName(user) {
    return user.firstName + ' ' + user.lastName
}
const pooraName = users.map(user => fullName(user))
console.log(pooraName)

// {19 : 1, 26:1...}

let outUsers = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1;
    }
    return acc
}, {})

console.log(outUsers)

// age<20 >>> FirstName
let FirstNameOfAgeLess20 = users.filter(obj => obj.age < 20).map(x => x.firstName)
console.log(FirstNameOfAgeLess20)