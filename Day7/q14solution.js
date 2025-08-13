let text = prompt("Enter the text below:");
let letterCount = 0;
let digitCount = 0;
let spaceCount = 0;
let otherCount = 0;

for (let i = 0; i < text.length; i++) {
  let char = text[i];

  if (/[a-zA-Z]/.test(char)) {
    letterCount++;
  }
  else if (/\d/.test(char)) {
    digitCount++;
  }
  else if (/\s/.test(char)) {
    spaceCount++;
  }
  else {
    otherCount++;
  }
}

console.log(`Letters : ${letterCount}`);
console.log(`Digits : ${digitCount}`);
console.log(`Space Chars : ${spaceCount}`);
console.log(`Others : ${otherCount}`);
