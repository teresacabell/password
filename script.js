// Assignment code here
var lowerChars = "abcdefgheijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "#$%&'()*+,-./:;<=>?@[]\"\\^_`{|}~";
var charCollector = "";
var passwordCollector = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(
    window.prompt("Choose a password length from 8-128 characters.")
  );
  console.log(passwordLength);

  // check and ask what kind of chars
  if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmUpperChars = confirm(
      "Do you want to include upper case letters?"
    );
    console.log(confirmUpperChars);
    if (confirmUpperChars) {
      charCollector += upperChars;
    }
    var confirmLowerChars = confirm(
      "Do you want to include lower case letters?"
    );
    console.log(confirmLowerChars);
    if (confirmLowerChars) {
      charCollector += lowerChars;
    }
    var confirmNumberChars = confirm("Do you want to include numbers?");
    console.log(confirmNumberChars);
    if (confirmNumberChars) {
      charCollector += numberChars;
    }
    var confirmSpecialChars = confirm(
      "Do you want to include special characters?"
    );
    console.log(confirmSpecialChars);
    if (confirmSpecialChars) {
      charCollector += specialChars;
    } else if (
      confirmUpperChars === false &&
      confirmLowerChars === false &&
      confirmSpecialChars === false &&
      confirmNumberChars === false
    ) {
      alert("Must select at least one character type!");
      return generatePassword();
    }

    for (var i=0; i < passwordLength; i++) {
      passwordCollector += charCollector [Math.floor(Math.random() * charCollector.length)];
    }
    return passwordCollector;
    
  } else {
    alert(
      "Your chosen length is out of parameters, please choose a number between 8 and 128."
    );
    return generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
