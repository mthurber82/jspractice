// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var pwlength = prompt("How long would you like your password to be?");
  pwlength = parseInt(pwlength);
  var isLower = confirm("Do you want lowercase characters included?");
  var isUpper = confirm("Do you want uppercase characters included?");
  var isNumbers = confirm("Do you want numbers included");
  var isSymbols = confirm("Do you want special characters included?");
  var characterChoices = "";
  var generatedPasword = "";

  if (isLower === true) {
    characterChoices = characterChoices + lower
  }

  if (isUpper === true) {
    characterChoices = characterChoices + upper
  }

  if (isNumbers === true) {
    characterChoices = characterChoices + numbers
  }

  if (isSymbols === true) {
    characterChoices = characterChoices + symbols
  }

console.log(characterChoices);

  for (var i = 0; i < pwlength; i++) {
    var randomChar = characterChoices.charAt(Math.floor(Math.random() * characterChoices.length));
    generatedPasword = generatedPasword + randomChar;
    console.log(generatedPasword);
    return generatedPasword;
  };

};

// Add event listener to generate button, cherck for passsword requirements
generateBtn.addEventListener("click", writePassword);
