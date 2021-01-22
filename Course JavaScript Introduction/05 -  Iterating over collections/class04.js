// Create For

console.log("For")

const listofDestiny = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
)
console.log("\n Possibles Destinys");
console.log(listofDestiny);

const ageBuyer = 18;
const isAccompanied = false;
const havePassPurchased = false;
const destiny = "Salvador";
const canBuy = (ageBuyer >= 18 || isAccompanied == true);

let count = 0;
let destinyExist = false;
while (count < listofDestiny.length){
    if(listofDestiny[count] == destiny){
        destinyExist = true;
        break;
    }
    count += 1
}

console.log("Destiny Exist: ", destinyExist);

if(canBuy && destinyExist){
    console.log("Good Trip")
} else {
    console.log("Not Permissioned")
}

console.log("\n\nExample using For");

for (let count = 0; count < 3; count++){
    if(listofDestiny[count] == destiny){
        destinyExist = true;
        break;
    }
}
