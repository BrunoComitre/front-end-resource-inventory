///////////////////////////// TIPOS MAIS UTILIZADOS ////////////////////////////

/* boolean (true/false) */
let isOpen: boolean
// isOpen = "True"
isOpen = true

/* string ('foo', "foo", `foo`) */
let message: string
message = 'foo'
message = "foo"
message = `foo`
message = `foo ${isOpen}`
// message.
// message = 2

/* number (int, float, hex, binary) */
let total: number
total = 2
total = 6.8
total = 0xff0                  /* Accepts Hexadecimal.*/
total = 0b1100100 

/* array (type[]) Informa o tipo: type e que é um array: []. */
let items: number[]
items = [1, 2, 3, 4]
let item: string[]
item = ["foo", 'bar', `test`]
let values: Array<number>      /* Outra forma de assinalar um array. Se chama Generic. */

/* tuple */
let title: [number, string]
title = [1, "foo"]
// title = [1, "foo", 2]
// title = [1, true]

/* enum */
enum Colors {
    white = '#fff',
    black = '#000'
}
Colors.black

/* any (qualuer coisa) PREFERENCIALMENTE NÃO UTILIZAR. NÃO É LEGAL! */
// No TSconfig existe uma regra para não aceitar any
let algo: any
algo = []
algo = {}
algo = "string"
algo = 1

/* void (vazio) */
function logger() {
    console.log('foo')
}

function logger_type():void {
    console.log('foo')
}

/* null | undefined (nulo | indefinido) */
type Bla = string | undefined   /* Diz que esse tipo novo não primitivo pode ser string ou indefinido. */
let variable: null             /* Pode ser feito, mas não faz sentidfo usar isso */

/* never (nunca vai retornar) */
function error(): never {
    throw new Error("error");
}

/* object (tudo aquilo que não é string, array, numero ou booleano, ou seja, os tipos primitivos) */
let cart: object
// cart = true
// cart = "string"
cart = {
    key: "foo"
}

////////////////////////////// FIM MAIS UTILIZADOS /////////////////////////////

///////////////////////////////// TYPE INFERENCE ///////////////////////////////

/* Type Inference, ou Inferência de Tipos são passagens de varável sem atribuição */
/* Exemplo: */
let mensagem = "mensagem definida" /* Se passar o mouse em cima já vê a definição como string */
// mensagem = 1
mensagem = "string nova"

window.addEventListener("click", (e)=> {
    console.log(e.target);
    // console.log(e.foo);
})

////////////////////////////// FIM TYPE INFERENCE //////////////////////////////

////////////////////////////// TYPE ALIASES E UNION ////////////////////////////

/* Facilita o código para não ficar copiando e refazendo a mesma coisa me vários lugares */
type Uid = number | string

/* Type Union */
function logDetails(uid: number | string, item: string){
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: number | string, item: string){
    console.log(`A user with ${uid} has a name as ${item}.`);
}

logDetails(123, "foo")
logDetails("123", "foo")

logInfo(123, "foo")
logInfo("123", "foo")

/* Type Alias */
function logDetail(uid: Uid, item: string){
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfos(uid: Uid, item: string){
    console.log(`A user with ${uid} has a name as ${item}.`);
}

logDetail(123, "foo")
logDetail("123", "foo")

logInfos(123, "foo")
logInfos("123", "foo")

/* Outro Exemplo */
type Plataforma = 'Windows' | 'Mac OS' | 'Linux'
type Features = 'Single Player' | 'Multiplayer' | 'Co-Op'

function renderPlatform(platform: Plataforma){
    return platform
}

// renderPlatform('ios')
renderPlatform("Windows")

interface GameDetails {
    id: string
    features: Features[]
}

//////////////////////////// FIM TYPE ALIASES E UNION //////////////////////////

///////////////////////// TYPE ALIASES COM INTERSECTION ////////////////////////

// Exemplo Jogo Online
// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string; /* Interrogação significa opcional */
}

type CharInfo = {
    nickname: string;
    level: number;
}

type PlayerInfo = AccountInfo & CharInfo

const account: AccountInfo = {
    id: 123,
    name: 'Foo Bar',
    email: 'foo.bar@email.com'
}

const char: CharInfo = {
    nickname: "FooBar",
    level: 100
}

const player: PlayerInfo = {
    id: 123,
    name: 'Foo Bar',
    // email: 'foo.bar@email.com',
    nickname: "FooBar",
    level: 100
}

/////////////////////// FIM TYPE ALIASES COM INTERSECTION //////////////////////
