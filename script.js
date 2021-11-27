// Assignment code here
var lowerChars = "abcdefgheijklmnopqrstuvwxyz"
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "0123456789"
var specialChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

    var passwordPrompt = parseInt(
      window.prompt("Choose a password length from 8-128 characters.")
    );
    console.log(passwordPrompt)

    // check and alert if the password length chosen is out of bounds 
    if (passwordPrompt < 8 || passwordPrompt > 128 || !passwordPrompt)
      (alert("Your chosen length is out of parameters, please choose a number between 8-128."))
    return generatePassword();

    if (passwordPrompt >= 8 && passwordPrompt <= 128)
      var confirmUpperChars = confirm("Do you want to include upper case letters?");
        console.log(confirmUpperChars)
      var confirmLowerChars = confirm("Do you want to include lower case letters?");
        console.log(confirmLowerChars)
      var confirmNumberChars = confirm("Do you want to include numbers?");
        console.log(confirmNumberChars)
      var confirmSpecialChars = confirm("Do you want to include special characters?");
        console.log(confirmSpecialChars)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
