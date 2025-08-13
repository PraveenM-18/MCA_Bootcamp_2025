
let n = parseInt(prompt("How many Fibonacci terms?"));


let f1 = 0, f2 = 1;


let output = `${f1} ${f2}`;

if (n > 2) {
  
  for (let i = 3; i <= n; i++) {
    
    let f = f1 + f2;
   
    f1 = f2;
    f2 = f;
    
    output += ` ${f}`;
  }
}

console.log(output);
