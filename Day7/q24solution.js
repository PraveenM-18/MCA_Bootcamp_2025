
let n = parseInt(prompt("Enter how many numbers:"));

let numbers = [];

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += numbers[i];
}
let average = sum / n;
console.log(`The average of the numbers is: ${average}`);
