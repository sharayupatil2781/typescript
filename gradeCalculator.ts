const math : number  = Number(prompt("Enter math marks - "));
const physics : number = Number(prompt("Enter physics marks - "));
const chem : number = Number(prompt("Enter chem marks - "));

const avg = (math + physics + chem) / 3;
console.log(`Average of 3 is: ${avg}`);

if(avg < 70)
{
    console.log(`C grade`);
}
else if(avg > 70 && avg < 90)
{
    console.log(`B grade`);
}
else if(avg > 90)
{
    console.log(`A grade`);
}