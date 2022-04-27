const prompt = require("prompt-sync")({ sigint: true });

/* const firstNumber = Number( prompt("Please enter your first number : ") ); */
const firstNumber = parseInt(prompt("Please enter your first number : "));

const secondNumber = +prompt("Please enter your second number : ");

const operation = prompt("please enter ,what you want with these 2 numbers: ");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("please provide us with valid numbers");
} else {
  if (operation === "add") {
    console.log(firstNumber + secondNumber);
  } else if (operation === "multiply") {
    console.log(firstNumber * secondNumber);
  } else if (operation === "division") {
    console.log(firstNumber / secondNumber);
  } else if (operation === "modulus") {
    console.log(firstNumber % secondNumber);
  } else {
    console.log("we con't do such operation on these number");
  }
}
