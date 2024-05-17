//number, string, boolean, array, object
//In ts - Any
//by marking a variable as any u are telling the compiler to ignore any type errors that might occur
//Any : Represents a dynamic type allowing u to option of type checking
let x;      //has datatype any so can assign number, string....
x = 10;
x = "11test";
x = true;
console.log(x);
//so can use any when u are not sure which type of value u are going to store,,, it may varies.

let y : number = 10;
//y = 'test';

const user: any = {
    name: "john",
    age : 30,

}

// function Print(file: string){
//     //logic for the print
// }
// Print("test.pdf");


function Print(file: any){
    //logic for the print
}
Print("test.pdf");

//============================================
//server kadun data ha koontyhi type cha yeu shkato na, number, string...., so in this case u can use any..
/*content type: 

server can give data in,
application/JSON File
application/xml
text/plain

var data : any = "";
*/

//==============================================
//declaring an array of numbers...
let numbers : number[] = [1,2, 3, 4];
//numbers.push("test");   //cant push string value
numbers.push(7);

numbers.forEach(element => {
    console.log(element);
});

//to create new array = map method.

//Homogeneous array...
var courses : Array<string> = ["Angular", "javascript", "azure"];

//Now if i want to store any type of data into array like string, number.... => any
var person : Array<any> = ['Jack', 50, true];