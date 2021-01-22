// While

// What we learned in this class:
// - While;
// - Break;
// - Using VS Cde's Debbuger;
// - Understanding the code execution flow;
// - configuring the VSCode debbuger;
// - For Loop;

console.log("While")

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
while (count < listofDestiny.length){
    if(listofDestiny[count] == destiny){
        console.log("Destiny Existing")
    }else{
        console.log("Destiny Not Existing")
    }
    count += 1
}
