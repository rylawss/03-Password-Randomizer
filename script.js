// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowerConfirm;
var upperConfirm;
var specialConfirm;
var numberConfirm;
var userChoices;
var passwordFinal = "";

var chosenValues = [];
const lowerCase = [
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
const upperCase = [
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
const numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
  '"',
  "\\",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// my code
function generatePassword() {
  //get password length
  passwordLength = prompt(
    "Enter how many characters you would like your password to be. Choose between 8 and 128"
  );
  //gets what characters we want
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  }

  lowerConfirm = confirm("Would you like lowercase letters?");

  upperConfirm = confirm("Would you like uppercase letters?");
  specialConfirm = confirm("Would you like to have special characters?");
  numberConfirm = confirm("Would you like to have numbers?");
  //ensures a possible value is chosen for all criteria
  while (!lowerConfirm && !upperConfirm && !specialConfirm && !numberConfirm) {
    userChoices = alert("Must have at least one criteria");
    lowerConfirm = confirm("Would you like lowercase letters?");

    upperConfirm = confirm("Would you like uppercase letters?");
    specialConfirm = confirm("Would you like to have special characters?");
    numberConfirm = confirm("Would you like to have numbers?");
  }
  //takes true boolean values and adds it to the array for it to be randomized
  if (lowerConfirm) {
    chosenValues.push.apply(chosenValues, lowerCase);
  }
  if (upperConfirm) {
    chosenValues.push.apply(chosenValues, upperCase);
  }
  if (specialConfirm) {
    chosenValues.push.apply(chosenValues, specialChar);
  }
  if (numberConfirm) {
    chosenValues.push.apply(chosenValues, numberChar);
  }
  //prints the final password
  for (var i = 0; i < passwordLength; i++) {
    passwordFinal +=
      chosenValues[Math.floor(Math.random() * chosenValues.length)];
  }
  return passwordFinal;
}
