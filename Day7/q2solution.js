let P = parseFloat(prompt("Enter Principle amount:"));
let R = parseFloat(prompt("Enter rate of interest:"));
let N = parseFloat(prompt("Enter Number of years :"));
let SI= (P*N*R)/100;

console.log("Simple Interest = "+SI.toFixed(2));
