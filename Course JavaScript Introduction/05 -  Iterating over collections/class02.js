// Break and Debbuger

console.log("Break and Debbuger")

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
        // console.log("Destiny Existing")
        destinyExist = true;
        break;
    }// }else{
    //     destinyExist = false;
    //     console.log("Destiny Not Existing")
    // }
    count += 1
}

console.log("Destiny Exist: ", destinyExist);
