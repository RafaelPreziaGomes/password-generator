// add an event listener to the generate password button

document.querySelector("#generate").addEventListener("click", function () {
  // generate a series of prompts that ask for password criteria

  // present the password generator

  alert(
    "Hello, this is a password generator, I will now ask some questions in order for us to generate your password"
  );

  // ask how many characters he/she/they would like on their password

  var passwordLenght = prompt(
    "How many characters would you like in your password?"
  );

  passwordLenght = Number(passwordLenght);
  // checks to see if password lenght is greater than 8 and less than 128
  if (passwordLenght > 8 && passwordLenght < 128) {
    // choice to include lowercase letters on the password
    var lowercaseChoice = prompt(
      "Would you like lowercase letters on your password? type yes or no"
    );
    //  yes, continue

    if (lowercaseChoice == "yes" || lowercaseChoice == "no") {
      // check choice
      // if no, dont do anything
      // if yes create a list of lowercase letter
      if (lowercaseChoice == "yes") {
        var alphabet = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];
      } else {
        var alphabet = [];
      }

      //

      // choice to include uppercase letters on the password
      var uppercaseChoice = prompt(
        "Would you like uppercase letters on your password? type yes or no"
      );

      if (uppercaseChoice == "yes" || uppercaseChoice == "no") {
        // check choice
        // if no, dont do anything
        // if yes create a list of uppercaseletter
        if (uppercaseChoice == "yes") {
          var alphabetUpper = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ];
        } else {
          var alphabetUpper = [];
        }

        // choice to include uppercase letters on the password
        // choice to include numbers on the password
        var numbersChoice = prompt(
          "Would you like numbers on your password? type yes or no"
        );

        if (numbersChoice == "yes" || numbersChoice == "no") {
          // check choice
          // if no, dont do anything
          // if yes create a list of uppercaseletter
          if (numbersChoice == "yes") {
            var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
          } else {
            var numbers = [];
          }

          // choice to include uppercase letters on the password
          // choice to include numbers on the password
          var symbolsChoice = prompt(
            "Would you like symbols on your password? type yes or no"
          );

          if (symbolsChoice == "yes") {
            var symbols = [
              "%",
              "+",
              "'",
              "!",
              ":",
              ".",
              "(",
              ")",
              "{",
              "}",
              "[",
              "]",
              "~",
              "-",
              "_",
              ".",
            ];
          } else {
            var symbols = [];
          }
        } else {
          alert("Error invalid input");
        }
      }
    }
  }

  //  concatinate all arrays
  var newArray = alphabet.concat(alphabetUpper);
  newArray = newArray.concat(numbers);
  newArray = newArray.concat(symbols);

  console.log(newArray);

  // create a function to shuffle an array

  const shuffledArray = newArray.sort((a, b) => 0.5 - Math.random());

  console.log(shuffledArray);

  //  add another empty array

  finalArray = [];

  //  for each charcters in the lenght specified by password lenght pop item push to final array

  for (i = 0; i < passwordLenght; i++) {
    var item = shuffledArray.pop(shuffledArray[i]);
    finalArray.push(item);
  }

  // transform final array into a string

  var password = finalArray.join("");

  console.log(password);

  // change the text content to the password specified

  document.querySelector("#password").textContent = password;
});
