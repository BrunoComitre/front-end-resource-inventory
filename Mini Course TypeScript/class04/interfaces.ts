// interfaces: Conjunto de dados para descrever a estrutura de um objeto de forma mais complexa

/* Em alguns momentos verá por exemplo IGame. O I é usado para significado de
interface, sendo  herdado do JaVa e C#. Mas não é necessário utilizar */

/* Abaixo está um exemplo de documentação, que poderá ser usado para explicar
interface sem necessidade de incrementar I */

/**
 * This is the description of the interface
 *
 * @interface Game
 * @member {string} label is used for whatever reason
 * @field {string} prop is used for other reason
 */
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: String[];
  getSimilars?: (title: string) => void;
  releaseData?: string;
}

/**
 * This is the description of the interface
 *
 * @interface DLC
 * @extends Game
 */
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const tlou: Game = {
  title: "The Last of Us",
  description: "Jogo eletrônico de ação-aventura",
  genre: "Survival",
  platform: ["PlayStation3", "PlayStation4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

const leftbehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "Pacote de expansão autônomo",
  genre: "Survival",
//   plataform: ["PlayStation3", "PlayStation4"],
  releaseData: "14 de Fevereiro de 2014",
  originalGame: tlou,
  newContent: ["3 Hours History", "New Characters"],
};

console.log(tlou.title);
tlou.getSimilars(tlou.title);

// tlou.genre = "Action";
console.log(tlou.genre);

console.log(" ------------ ");

console.log(leftbehind.title);
tlou.getSimilars(leftbehind.title);

console.log(" ------------ ");

console.log(leftbehind.originalGame);

console.log(" ------------ ");

/* IMPLEMENTANDO UMA CLASSE COM INTERFACE */

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  platform?: String[];
  releaseData: string;

  constructor(
    title: string,
    description: string,
    genre: string,
    releaseData: string
  ) {
      this.title = title;
      this.description = description;
      this.genre = genre;
      this.releaseData =  releaseData;
  }
}
