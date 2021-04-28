// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const input1 = document.querySelector<HTMLInputElement>("num1");
// const input2 = document.querySelector<HTMLInputElement>("num2");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum (a: number, b: number) {
    return a + b;
}

button.addEventListener("click", function() {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
