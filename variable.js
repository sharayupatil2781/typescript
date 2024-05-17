// var x = 4;
// let number = 50;
// const key = 'xyzsk12';
// //----number -> Type Annotations(explicitely specifying type)
// var x:number = 34; //bettter practise 
//===========================================
var n1 = 23;
//n1 = "codemind";  //static typing
console.log(n1);
var s1 = 'All the best!';
var s2 = "All the best!";
var s3 = "All the best!";
console.log(s1);
console.log(s2);
console.log(s3);
var v1 = true;
var v2 = false;
var v3;
console.log(v1);
console.log(v2);
//console.log(v3);
// function test() {
//     v3 = false;
//     console.log(v3);        
// }
// console.log(test());        //undefined
function test() {
    return v3 = false;
    console.log(v3); //undefined
}
console.log(test());
