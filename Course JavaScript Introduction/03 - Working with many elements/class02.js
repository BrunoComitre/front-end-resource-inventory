// Creating Lists

console.log("Creating Lists");

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
)
console.log("Possibles Destinys");
console.log(listofDestiny);

listofDestiny.push(`Curitiba`) // Add new item on list
console.log(listofDestiny);

listofDestiny.splice(1,1) // Delete new item on list (position, quantity)
console.log(listofDestiny);

console.log(listofDestiny[1]);

listofDestiny.pop(); // Delete last item on list
console.log(listofDestiny);
