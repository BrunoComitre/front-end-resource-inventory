class UserAccount {
    public name: string;  // public: pode ser alterada, e chamada fora da classe, não existe regra (quando não passada implicitamente o objeto é public)
    protected age: number;  // protected: consegue chamar a propriedade dentro da classe ou da classe que extebnde, mas não consegue chamar fora da classe

    /* constructor É onde os métodos recebem as proriedades do objeto */
    constructor(name: string,  age: number) {
        this.name = name;
        this.age = age;
    }

    /* esse é um método criado par ao objeto */
    logDetails():void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

abstract class UserAccountAbstract {
    public name: string;  // public: pode ser alterada, e chamada fora da classe, não existe regra (quando não passada implicitamente o objeto é public)
    protected age: number;  // protected: consegue chamar a propriedade dentro da classe ou da classe que extebnde, mas não consegue chamar fora da classe

    /* constructor É onde os métodos recebem as proriedades do objeto */
    constructor(name: string,  age: number) {
        this.name = name;
        this.age = age;
    }

    /* esse é um método criado par ao objeto */
    logDetails():void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}


class charAccount extends UserAccount {
    private nickname: string;  // private: nenhum lugar externo vai conseguir chamar ou alterar o nickname fora da classe
    readonly level: number;  // readonly: a propriedade apenas será lida, e não conseguirá editar
    char: number;

    constructor(name: string, age: number, nickname: string, level: number, char: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
        this.char = char;
    }

    get getChar() {
        console.log("--- GET ---");
        return this.char
    }

    set setChar(char: number) {
        console.log("--- SET ---");
        this.char = char
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`);
    }
}


const foo = new UserAccount("Foo Bar", 1);
const ping = new UserAccount("Ping Pong", 2);

console.log(foo);
// console.log(ping.age);

foo.logDetails();
ping.logDetails();

const john = new charAccount("John Wick", 3, "BabaYaga", 4, 5);
const bruce = new charAccount("Bruce Wayne", 6, "Batman", 7, 8);

console.log(john);

john.logDetails();
bruce.logDetails();

// john.nickname = "example";
john.logCharDetails();

// john.level = 100;
console.log(john.level);

// bruce.age = 100;
// console.log(bruce.age);

console.log(john.getChar);

john.setChar = 9;
console.log(john.getChar);

// const abstract_example = new UserAccountAbstract("Foo Bar", 1);
