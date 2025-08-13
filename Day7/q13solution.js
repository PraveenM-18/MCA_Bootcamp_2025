
let N = parseInt(prompt("Enter how many numbers you want to input: "));
let smallest; 
for (let i = 1; i <= N; i++) {
  let num = parseInt(prompt(`Enter number ${i}: `));
  if (i === 1) {
    smallest = num;
  } else {
    
    if (num < smallest) {
      smallest = num;
    }
  }
}
console.log(`The smallest number is: ${smallest}`);