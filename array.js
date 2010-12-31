// Array in JavaScript
// arrays are also object

// const num=[1,2,3,4,5,6,7,8,9];
// console.log(num[num.legth-1]);

const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Push
num.push(14);

//unshift --> insert a element starting to the array
num.unshift(0);

// pop -->Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// pop is opposite to push
// num.pop();

// shift-->Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// shift is opposite to unshift
// num.shift();

// inserting elements by index
num[0]={num:23};

// console.log(num); 



const names =[`Aditya`,`Aman`, `Abinash`,`Neha`,`Vijay`,`Ajay`,`Sachin`,`Aman`]

// names.indexOf('Aman')
// console.log(names.indexOf('Aman')); 
console.log(names.indexOf('Aman',3)); 
console.log(names.lastIndexOf('Aman',3)); 

console.log(names.includes('Neha'))


let channels =[
    {
        name:'code with harry',
        subscriber:500000
    },
    {
        name:'apna college',
        subscriber:400000
    },
    {
        name:'apni kaksha',
        subscriber:300000
    },
    {
        name:'carryminati',
        subscriber:600000
    }
]
// console.log(channels.find(function(elements){
//     return elements.subscriber===600000;
// }))

// using arrow function
console.log(channels.find(element =>element.name === 'carryminati'))


let names1=[`Aditya`,`Aman`, `Abinash`]
let names2=[`Neha`,`Vijay`,`Ajay`,`Sachin`,`Aman` ]


let names3=names1.concat(names2)
// spread operator
// names4=[...names1,...names2]
names4=[...[`Aditya`,`Aman`, `Abinash`],...[`Neha`,`Vijay`,`Ajay`,`Sachin`,`Aman` ]]

console.log(names3.slice(3,5))
console.log(names4)




// for loop
for(let i=0 ;i<names.length; i++){
    // console.log(names[i]);
}

// for of loop
for(let name of names){
    console.log(name)
}

// for-each
names.forEach(function (name,index){
    console.log(name ,index); 
})

// join
let student=['A','s','h','i','s','h']
console.log(student.join());
console.log(student.join(''));

// split
student=student.join('_')
console.log(student.split('_'))


let cities=[
    {
        name:'Mumbai',population:3792621
    },
    {
        name:'Delhi',population:8194690
    },
    {
        name:'Bangolore',population:5067642
    },
    {
        name:'Chennai',population:2345984
    },
    {
        name:'Lucknow',population:2594413
    }
];


// console.log(cities.filter(city =>city.population>3000000));
// map
console.log(cities.map(city =>city.population*2));

