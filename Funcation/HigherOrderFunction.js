// Higher Order Functions are functions that can take other functions as inputs.

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modular(num1, num2) {
    return num1 % num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

var addNumber = calculator(4, 5, add);
var sub = calculator(4, 5, subtract);
var mul = calculator(4, 5, multiply);
var div = calculator(4, 5, divide);
var mod = calculator(4, 26, modular);

console.log("Add", addNumber);
console.log("subtract", sub);
console.log("Multiply", mul);
console.log("divide", div);
console.log("modular", mod);