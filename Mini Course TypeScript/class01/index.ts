// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const input1 = document.querySelector<HTMLInputElement>("num1");
// const input2 = document.querySelector<HTMLInputElement>("num2");
const var1 = document.getElementById("num1") as HTMLInputElement;
const var2 = document.getElementById("num2") as HTMLInputElement;
const botao = document.getElementById("button");

function soma (a: number, b: number) {
    return a + b;
}

botao.addEventListener("click", function() {
    console.log(soma(Number(var1.value), Number(var2.value)));
});
