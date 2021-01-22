// Chained Ifs

console.log("Chained Ifs")

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
)
console.log("Possibles Destinys");
console.log(listofDestiny);

const ageBuyer = 18;
isAccompanied = false;

if (ageBuyer >= 18) {
    console.log("Buyer of legal age");
    listofDestiny.splice(1,1)
} else if (isAccompanied == true){ // The person is a minor
    console.log("Buyer is accompanied");
    listofDestiny.splice(1,1)
} else {
    console.log("Can't Buy");
}

console.log(listofDestiny);
