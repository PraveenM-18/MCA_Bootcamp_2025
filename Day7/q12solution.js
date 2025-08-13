
let numbers = prompt("Enter 5 Numbers in the same line: ").split('/');


for (let i = 0; i < numbers.length; i++) {
  let num = parseInt(numbers[i]);
  let stars = ''; 
  for (let j = 0; j < num; j++) {
    stars += '*'; 
  }
  console.log(num + ' ' + stars); 
}