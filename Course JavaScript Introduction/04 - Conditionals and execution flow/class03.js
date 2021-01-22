// Chained Logical Operators

console.log("Chained Logical Operators")

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
)
console.log("Possibles Destinys");
console.log(listofDestiny);

const ageBuyer = 18;
const isAccompanied = true;
const havePassPurchased = true;

if (ageBuyer >= 18 || isAccompanied == true) {
    console.log("Buy");
    listofDestiny.splice(1,1)
} else {
    console.log("Can't Buy");
}

// console.log(listofDestiny);

console.log("Boarding \n\n");

if (ageBuyer >= 18 && havePassPurchased == true) {
    console.log("Good Trip");
 } else {
    console.log("Can't Buy");
}

console.log(listofDestiny);
