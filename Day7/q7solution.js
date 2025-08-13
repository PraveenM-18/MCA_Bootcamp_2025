let word = prompt("Enter a Five letter word:");
if (word.length === 5){
  let encodedWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];  
        let asciiValue = char.charCodeAt(0);  
        let newChar = String.fromCharCode(asciiValue - 1); 
        encodedWord += newChar;  
      }
console.log("Encoded Word: " + encodedWord);
} else {
  console.log("Please enter a 5-letter word.");
}