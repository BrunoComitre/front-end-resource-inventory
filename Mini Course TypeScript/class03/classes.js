var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    /* constructor É onde os métodos recebem as proriedades do objeto */
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    /* esse é um método criado par ao objeto */
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var UserAccountAbstract = /** @class */ (function () {
    /* constructor É onde os métodos recebem as proriedades do objeto */
    function UserAccountAbstract(name, age) {
        this.name = name;
        this.age = age;
    }
    /* esse é um método criado par ao objeto */
    UserAccountAbstract.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccountAbstract;
}());
var charAccount = /** @class */ (function (_super) {
    __extends(charAccount, _super);
    function charAccount(name, age, nickname, level, char) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        _this.char = char;
        return _this;
    }
    Object.defineProperty(charAccount.prototype, "getChar", {
        get: function () {
            console.log("--- GET ---");
            return this.char;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(charAccount.prototype, "setChar", {
        set: function (char) {
            console.log("--- SET ---");
            this.char = char;
        },
        enumerable: false,
        configurable: true
    });
    charAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level + ".");
    };
    return charAccount;
}(UserAccount));
var foo = new UserAccount("Foo Bar", 1);
var ping = new UserAccount("Ping Pong", 2);
console.log(foo);
// console.log(ping.age);
foo.logDetails();
ping.logDetails();
var john = new charAccount("John Wick", 3, "BabaYaga", 4, 5);
var bruce = new charAccount("Bruce Wayne", 6, "Batman", 7, 8);
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
