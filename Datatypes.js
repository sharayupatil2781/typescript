//number, string, boolean, array, object
//In ts - Any
//by marking a variable as any u are telling the compiler to ignore any type errors that might occur
//Any : Represents a dynamic type allowing u to option of type checking
var x; //has datatype any so can assign number, string....
x = 10;
x = "11test";
x = true;
console.log(x);
//so can use any when u are not sure which type of value u are going to store,,, it may varies.
var y = 10;
//y = 'test';
var user = {
    name: "john",
    age: 30,
};
// function Print(file: string){
//     //logic for the print
// }
// Print("test.pdf");
function Print(file) {
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
var numbers = [1, 2, 3, 4];
//numbers.push("test");   //cant push string value
numbers.push(7);
numbers.forEach(function (element) {
    console.log(element);
});
