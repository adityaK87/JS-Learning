// HOF  is a fuction that take another function as an argument or returns a function from it is known as HOF function


const radius = [2, 3, 4, 6]

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circum = function (radius) {
    return 2 * Math.PI * radius;
}


const output = function (array, logic) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(logic(array[i]))
    }
    return output
}


console.log(output(radius, area));
console.log(output(radius, circum));


// console.log(radius.map((elem) => area(elem)))