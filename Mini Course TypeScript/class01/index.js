// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const input1 = document.querySelector<HTMLInputElement>("num1");
// const input2 = document.querySelector<HTMLInputElement>("num2");
var var1 = document.getElementById("num1");
var var2 = document.getElementById("num2");
var botao = document.getElementById("button");
function soma(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(soma(Number(var1.value), Number(var2.value)));
});
