// What we learned in this class:
// - If and Else
// - Logical operators
// - if chained
// - else if
// - && e ||

// Logical Operators

console.log("Logical Operators")

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
)
console.log("Possibles Destinys");
console.log(listofDestiny);

const ageBuyer = 15;
if(ageBuyer >= 18){
    console.log("Buyer of legal age");
    listofDestiny.splice(1,1)
    console.log(listofDestiny);
} else {
    console.log("Can't Buy");
}

console.log(ageBuyer > 18);
console.log(ageBuyer < 18);
console.log(ageBuyer >= 18);
console.log(ageBuyer <= 18);
console.log(ageBuyer == 18);
