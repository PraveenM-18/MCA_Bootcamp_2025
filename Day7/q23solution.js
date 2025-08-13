
function printNumericPyramid(n) {
    for (let i = 1; i <= n; i++) {
      
      let spaces = ' '.repeat(n - i);
      let line = '';
  
      
      for (let j = i; j < i + i; j++) {
        line += j;
      }
  
      
      for (let j = i + i - 2; j >= i; j--) {
        line += j;
      }
  
      
      console.log(spaces + line);
    }
  }
  
  
  let n = parseInt(prompt("Enter Number of Lines: "), 10);
  
  
  printNumericPyramid(n);
  