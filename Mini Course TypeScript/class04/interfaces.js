// interfaces: Conjunto de dados para descrever a estrutura de um objeto
var tlou = {
    title: "The Last of Us",
    description: "Jogo eletrônico de ação-aventura",
    genre: "Survival",
    platform: ["PlayStation3", "PlayStation4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
var leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "Pacote de expansão autônomo",
    genre: "Survival",
    //   plataform: ["PlayStation3", "PlayStation4"],
    releaseData: "14 de Fevereiro de 2014",
    originalGame: tlou,
    newContent: ["3 Hours History", "New Characters"]
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
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre, releaseData) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.releaseData = releaseData;
    }
    return CreateGame;
}());
