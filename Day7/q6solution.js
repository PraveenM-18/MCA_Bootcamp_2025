let m1 = parseFloat(prompt("Enter first test mark:"));
let m2 = parseFloat(prompt("Enter second test mark:"));
let m3 = parseFloat(prompt("Enter third test mark:"));


let tot = m1 + m2 + m3;
let average = tot/3.0;
console.log("Total Marks: " + tot);
console.log("Average Marks: " + average.toFixed(2));
