//.........return type..........:number
function add(x:number, y:number) : number{
    return x + y;
}

function sub(x : number, y: number) : number{
    return x - y;
}

//now we will export this 2 functions
//or can export class

//so if i want to use this 2 functions outside the module then use export keyword
export {add, sub}

// class Employee{
//     .....
// }

// export Employee