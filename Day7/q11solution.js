function calculateFactorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  let n = parseInt(prompt("Enter the N value: "));

  console.log("N   |   Factorial");
  console.log("--------------------");
  
    for (let i = 1; i <= n; i++) {
    let fac = calculateFactorial(i);
    console.log(i  +" | "+  fac);
  }