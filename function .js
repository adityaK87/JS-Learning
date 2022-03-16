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

let bread1 = prompt("Which bread would you like to have:-");
let veggies1 = prompt("What are your favorite veggies");
let sauce = prompt("Which sauce would you like to have :-");

function makeSandwich(bread, veggies, sauce) {
  let sandwich =
    bread + "  bread  " + veggies + "  " + sauce + " sandwich is ready";
  return sandwich;
}

let vegSandwich = makeSandwich(bread1, veggies1, sauce);
console.log(vegSandwich);
