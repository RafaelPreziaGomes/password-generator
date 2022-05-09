

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var captalizedAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



function generatePassword() {


  list = []

  for (let i = 0; i < 8; i++){
    var randomNum = Math.floor(Math.random() * 10 + 1);
    var randomLetter = Math.floor(Math.random() * 26 + 1);
    var randomCapLetter = Math.floor(Math.random() * 26 + 1);
    var letter = alphabet[randomLetter];
    var capLetter = captalizedAlphabet[randomCapLetter];
  
    list.push(String(randomNum));
    list.push(letter);
    list.push(capLetter);
  
  }

  text = list.join('')
  console.log(text)
  document.querySelector("textarea").setAttribute("placeholder", text)
  
}

generateBtn.addEventListener("click", generatePassword);

generatePassword()