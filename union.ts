//Union type
//In Typescript a union type allows you to declare a variable that can hold values of different types
//we can use pipe character(' | ')

//declare union type variable
let myname : string | number | boolean;
myname = 10;
myname = 'shara';
myname = true;       
//myname = null;  //error

//this myname can hold the string value as well as the number, & boolean also.
//union types are handy when u want a variable to accept multiple types of values

//creating array.....
let course : any[] = ['Angular', "Java"];
course.reverse();
console.log(course);

let lastname:string = "Jack";
const ch = lastname.charAt(3);
console.log(ch);

//=======================================
//if there is a requirement that if u want u can pass the parameter or if u dont want u cant.e,g
//var data = prompt();        //type : union type
                            //return type : union

//so in ts u can make a functional parameter optional!
//u can see ? when u hover over it.

//Optional Parameter in Typescript:
//In ts u can make a function parameters optional by appending question mark ('?') to the parameter name in the function declaration.
//e,g
function sayHello(name?: string){
    if(name)        //parameter pass zala tr...
    {
        console.log(`Hello, ${name} !`)
    }   
    else
    {
        console.log(`Hello...!!`);
    }
}

sayHello('shara');
sayHello();
