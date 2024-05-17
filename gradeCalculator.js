var math = Number(prompt("Enter math marks - "));
var physics = Number(prompt("Enter physics marks - "));
var chem = Number(prompt("Enter chem marks - "));
var avg = (math + physics + chem) / 3;
console.log("Average of 3 is: ".concat(avg));
if (avg < 70) {
    console.log("C grade");
}
else if (avg > 70 && avg < 90) {
    console.log("B grade");
}
else if (avg > 90) {
    console.log("A grade");
}
