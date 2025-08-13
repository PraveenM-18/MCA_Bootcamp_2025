// Step 1: Ask the user for how many numbers to input
let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}

let largest = -Infinity;      
let secondLargest = -Infinity; 
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

   
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

if (secondLargest === -Infinity) {
    console.log("There is no second largest number.");
} else {
    console.log(`The second largest number is: ${secondLargest}`);
}
