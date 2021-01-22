// Attribution and Immutability

console.log("Attribution and Immutability")

const age = 5693;
const first_name = "Alberto";
const last_name = "Silva";

console.log(first_name + last_name)
console.log(first_name, last_name)
console.log(first_name + " " + last_name)

console.log(`My name is`);
console.log(`My name is ${first_name}`);
console.log(`My name is ${first_name} ${last_name}`);

full_name = first_name + last_name;
console.log(full_name);

// CONST doesn`t change the value of the variable, 
// if you need to change the value and use the same name,
// when using CONST is used LET.

let count = 0;
count = count + 1;
console.log(count);
