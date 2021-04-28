/* Type Alias */

// definição
type GameT = {
    title?: string;
};

type DLCT = {
    extra?: string;
};

// intersection
type GameCollectionT = GameT & DLCT;

// implements
class CreateGameT implements GameCollection {}

// declarar função
type getSimilarsT = (title: string) => void;

////////////////////////////////// DIFERENÇAS //////////////////////////////////

// permite declarar tipos primitivos
type IDT = string | number;

// pode declarar tuplas normalmente
type TupleT = [number, number];

// [1, 2, 3] as TupleT;
[1, 2] as TupleT;

// apenas uma declaração por escopo
type JQueryT = { a: string};
type JQueryT = { b: string};

//////////////////////////////// FIM DIFERENÇAS ////////////////////////////////

/* Interfaces */

// definição
interface Game {
    title?: string;
}

interface DLC {
    extra?: string;
}

// interseção / extend
interface GameCollection extends Game, DLC {}

// implements
class CreateGame implements GameCollection {}

// declarar função
interface getSimilars {
    (title: string): void;
}

////////////////////////////////// DIFERENÇAS //////////////////////////////////

// não permite declarar tipos primitivos
interface ID extends number {}

// pode declarar tuplas normalmente, mas não delimita, funciona passando N tipos ou quantidade (Não consegue definir tuplas)
interface Tuple {
    0: number;
    1: number;
}

[1, 2, 3, 4, "string"] as Tuple;

// pode ter múltiplas declarações e ele une de mesmo nome
interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "foo",
    b: "bar",
}

//////////////////////////////// FIM DIFERENÇAS ////////////////////////////////

/* PREFIRA USAR INTERFACES QUANDO: */

// vantagem: quando estiver criando libs, prefira Interfaces, porque são mais extensíveis!
// criando objetos/classes (POO)

/* PREFIRA USAR TYPE ALIAS QUANDO: */

// facilita pois digita menos, e tem o extend mais fácil
// extend simplificado
// trabalha mais facilmente com tipos primitivos
// React - Props

/* DICA */
// Inicia utilizando Types e caso precise extender par aum projeto maios troque para Interfaces
