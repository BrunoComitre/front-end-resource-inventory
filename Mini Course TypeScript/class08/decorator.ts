/* Para habilitar decorators é necessário editar o Tsconfig
*
* E descomentar essa parte abaixo para ter acesso a funcionalidade decorator
*
* /{*} Experimental Options {*}/
* "experimentalDecorators": true,        /{*} Enables experimental support for ES7 decorators. {*}/
* "emitDecoratorMetadata": true,         /{*} Enables experimental support for emitting type metadata for decorators. {*}/
*/

// @Component
// @Selector
// @useState("dasdas")

////////////////////////////////// EXEMPLO 01 //////////////////////////////////

/* Class decorator */

function log(target: any) {                                                  /* Target nada mais é neste exemplo do que o constructor da classe */
    console.log(target);
}

@log
class Foo { }

////////////////////////////////// EXEMPLO 02 //////////////////////////////////

/* Factory */                                                                   /* factory: Função que retorna o decorator */

function Logger(prefix: string) {
    return(target: any) => {                                                    /* Target nada mais é neste exemplo do que o constructor da classe */
        console.log(`${prefix} - ${target}`);
    };
}

@Logger("awesome")
class Bar { }

////////////////////////////////// EXEMPLO 03 //////////////////////////////////

/* Class decorator */

function setAPIVersion(apiVersion: string) {
    return(constructor: any) => {
        return class extends constructor {
            version = apiVersion
        };
    };
}

// decorator - anotar a versão da API
@setAPIVersion("2.0.0")
class API { }

console.log(new API());

////////////////////////////////// EXEMPLO 03 //////////////////////////////////

/* Property decorator */

function minLength(length: number) {
    return(target: any, key: string) => {
        console.log(`target: ${target} - key:${key}`);
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if(value.length < 5){
                console.log(`Error: Você não pode criar ${key} menor que ${length}.`);
            } else {
                val = value
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
}

class Movie {
    // validação - se for menor que 5
    @minLength(5)
    title: string;

    constructor(title: string) {
        this.title = title
    }
}

const movie = new Movie("Interstellar");
console.log(movie.title);

////////////////////////////////// EXEMPLO 03 //////////////////////////////////

/* Method decorator */

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        console.log(`target: ${target} - key:${key} - descriptor:${descriptor}`);
        const originalMethod = descriptor.value;

        descriptor.value = function (args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor
        };
    };
}

class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    // esperar um tempo e vai rodar o método
    @delay(1000)
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}

const pessoa = new Greeter('Pessoa');
pessoa.greet();

///////////////////////////////// OUTROS TIPOS /////////////////////////////////

/* Parameter decorator */

/* Acessor decorator */
