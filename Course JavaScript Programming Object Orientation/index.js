class Client{
    name;
    cpf;
    agency;
    balance;
    rg;

}

const client1 = new Client();
client1.name = "José";
client1.cpf = 34854325202;
client1.agency = 1001;
client1.balance = 0;
client1.rg = 687652389;

const client2 = new Client();
client2.name = "Maria";
client2.cpf = 65897425302;
client2.agency = 1001;
client2.balance = 0;

console.log(client1)
console.log(client2)
