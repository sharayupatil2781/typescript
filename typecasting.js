//There are two ways to perform typecasting in Typescript:
//1. Angle brackets
//2. as
//...............as...................
var input = prompt("Enter a number");
var userNumber = input;
var result = userNumber * 2;
console.log("using as: ".concat(result));
//..................<>................
var input1 = prompt("Enter a number");
var userNumber1 = input1;
var result1 = userNumber1 * 3;
console.log("Using bracket: ".concat(result1));
