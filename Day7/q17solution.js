let temp = parseFloat(prompt("Enter the water temperature:"));
let waterState;

if (temp < 0) {
  waterState = "ICE";
} else if (temp >= 0 && temp <= 100) {
  waterState = "WATER";
} else {
  waterState = "STEAM";
}

console.log(`Water status is ${waterState} for the Temperature ${temp.toFixed(2)}`);
