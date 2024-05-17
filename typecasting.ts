//There are two ways to perform typecasting in Typescript:
//1. Angle brackets
//2. as

//...............as...................

var input: any = prompt(`Enter a number`);
let userNumber = input as number;
let result = userNumber * 2;
console.log(`using as: ${result}`);

//..................<>................
var input1: any = prompt(`Enter a number`);
let userNumber1 = <number>input1;
let result1 = userNumber1 * 3;
console.log(`Using bracket: ${result1}`);

