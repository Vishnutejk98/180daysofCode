/*
Requirements: 
1. Create a basic calculator program using Javascript`
2. Use different arithmetic operators and variables to show working of calculator
*/

alert("Calculator of 2 Variables! Demo")

var number_one = prompt("Enter Variable One")
var number_two = prompt("Enter Variable Two")
var expression = prompt("Use the operation that needs to be performed: + - * % ")

var value = 0;
switch(expression){
    case "+":value = number_one + number_two;break;
    case "-":value = number_one - number_two;break;
    case "*":value = number_one * number_two;break;
    case "%":value = number_one % number_two;break;
    default: value = number_one + number_two;
}
alert(`Expression : ${number_one} ${expression} ${number_two} = ${value}`)
