
function printRightAlignedTriangle(n) {
   
    for (let i = 1; i <= n; i++) {
     
      let spaces = ' '.repeat(n - i);
     
      let stars = '*'.repeat(i);

      console.log(spaces + stars);
    }
  }
  
  
  let n = parseInt(prompt("How many Lines? "), 10);

  printRightAlignedTriangle(n);
  