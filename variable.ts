// var x = 4;

// let number = 50;

// const key = 'xyzsk12';

// //----number -> Type Annotations(explicitely specifying type)
// var x:number = 34; //bettter practise 
//===========================================

var n1:number = 23;
//n1 = "codemind";  //static typing
console.log(n1);

var s1:string='All the best!';
var s2:string="All the best!";
var s3:string=`All the best!`;

console.log(s1);
console.log(s2);
console.log(s3);

var v1:boolean = true;
var v2:boolean = false;
var v3:boolean;


console.log(v1);
console.log(v2);
//console.log(v3);


// function test() {
//     v3 = false;
//     console.log(v3);        
// }

// console.log(test());        //undefined


//noting will get print!
function test(){
    return v3 = false;
    console.log(v3);        //undefined
}

console.log(test());