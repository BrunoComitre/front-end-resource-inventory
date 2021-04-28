/* Para habilitar decorators é necessário editar o Tsconfig
*
* E descomentar essa parte abaixo para ter acesso a funcionalidade decorator
*
* /{*} Experimental Options {*}/
* "experimentalDecorators": true,        /{*} Enables experimental support for ES7 decorators. {*}/
* "emitDecoratorMetadata": true,         /{*} Enables experimental support for emitting type metadata for decorators. {*}/
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component
// @Selector
// @useState("dasdas")
////////////////////////////////// EXEMPLO 01 //////////////////////////////////
/* Class decorator */
function log(target) {
    console.log(target);
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        log
    ], Foo);
    return Foo;
}());
////////////////////////////////// EXEMPLO 02 //////////////////////////////////
/* Factory */ /* factory: Função que retorna o decorator */
function Logger(prefix) {
    return function (target) {
        console.log(prefix + " - " + target);
    };
}
var Bar = /** @class */ (function () {
    function Bar() {
    }
    Bar = __decorate([
        Logger("awesome")
    ], Bar);
    return Bar;
}());
////////////////////////////////// EXEMPLO 03 //////////////////////////////////
/* Class decorator */
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
// decorator - anotar a versão da API
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion("2.0.0")
    ], API);
    return API;
}());
console.log(new API());
////////////////////////////////// EXEMPLO 03 //////////////////////////////////
/* Property decorator */
function minLength(length) {
    return function (target, key) {
        console.log("target: " + target + " - key:" + key);
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < 5) {
                console.log("Error: Voc\u00EA n\u00E3o pode criar " + key + " menor que " + length + ".");
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(title) {
        this.title = title;
    }
    __decorate([
        minLength(5)
    ], Movie.prototype, "title");
    return Movie;
}());
var movie = new Movie("Interstellar");
console.log(movie.title);
////////////////////////////////// EXEMPLO 03 //////////////////////////////////
/* Method decorator */
function delay(ms) {
    return function (target, key, descriptor) {
        console.log("target: " + target + " - key:" + key + " - descriptor:" + descriptor);
        var originalMethod = descriptor.value;
        descriptor.value = function (args) {
            var _this = this;
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    // esperar um tempo e vai rodar o método
    Greeter.prototype.greet = function () {
        console.log("Hello " + this.greeting);
    };
    __decorate([
        delay(1000)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
var pessoa = new Greeter('Pessoa');
pessoa.greet();
///////////////////////////////// OUTROS TIPOS /////////////////////////////////
/* Parameter decorator */
/* Acessor decorator */
