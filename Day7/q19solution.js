let n = parseInt(prompt("Enter the number of values you want to input:"));

let cumulativeProduct = 1;


for (let i = 1; i <= n; i++) {
  let number = parseFloat(prompt("Enter number " + i + ":"));
  cumulativeProduct *= number; 
}


console.log("Cumulative Total = " + cumulativeProduct);