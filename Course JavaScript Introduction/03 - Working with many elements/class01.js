// What we learned in this class:
// - Creation of Arrays;
// - Insertion of items in an array;
// - Array splice;
// - Reserved words;
// - Array indexes;

// Creating Lists

console.log("Creating Lists");

console.log(`Working with Listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio De Janeiro`;
console.log("Possibles Destinys");
console.log(salvador, saoPaulo, rioDeJaneiro);

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
)
console.log("Possibles Destinys");
console.log(listofDestiny);
console.log(listofDestiny[0]);
console.log(listofDestiny[-1]);

listofDestiny.push(`Curitiba`) // Add new item on list
console.log(listofDestiny);
