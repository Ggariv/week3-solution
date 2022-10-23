// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePassword function
function generatePassword() {
    // local Scope - Character Structure
    var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacter = ["!", "”", "#", "$", "%", "&", "&", "_", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "{", "}", "~", "|" ];
    var CharacterCombination = [];

    //Password input
    passwordLength = prompt("How many characters do you want in your password? You can choose between 8 - 128 characters");
    // typing a number out of range
    if (passwordLength <8) {
        alert ("Please choose a valid number between 8-128"); 
        generatePassword();}
    else if (passwordLength >128) {
        alert ("Please choose a valid number between 8-128"); 
        generatePassword();}
    // not typing any number
    else if (isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters");
        generatePassword();} 
    // conditions accepted
    else {
        alert ("Your Password will contain " + passwordLength + " characters."); 
        console.log("Your Password will contain " + passwordLength + " characters.")
        }

    //CHARACTERS CONFIRMATION
    //lowercase confirmation
    lowerCaseIncluded = confirm ("Do you wish to include lowercase characters?");
    if (lowerCaseIncluded) {
        alert("Lowercases will be included."); 
        console.log("Lowercases included")
        }
    else {
        alert("Lowercases won't be included."); 
        console.log("Lowercases not included") 
        }

    //uppercase confirmation
    upperCaseIncluded = confirm ("Do you wish to include uppercase characters?");
    if (upperCaseIncluded) {
        alert("Uppercases will be included."); 
        console.log("Uppercases included") 
        }
    else {
        alert("Uppercases won't be included."); 
        console.log("Uppercases not included") 
        }

    //number confirmation
    numberIncluded = confirm ("Do you wish to include numbers?");
    if (numberIncluded) {
        alert("Numbers will be included."); 
        console.log("Numbers included") 
        }
    else {
        alert("Numbers won't be included."); 
        console.log("Numbers not included") 
        }

    //special character confirmation
    specialIncluded = confirm ("Do you wish to include special characters?");
    if (specialIncluded) {
        alert("Special characters will be included."); 
        console.log("Special characters included") 
        }
    else {
        alert("Special characters won't be included."); 
        console.log("Special characters not included") 
        }
    
    //if nothing was selected
    if (lowerCaseIncluded === false && upperCaseIncluded === false && numberIncluded === false && specialIncluded === false) {
        alert("Please state at least one character type");
        console.log ("Password generation will restart");
        return generatePassword();    
        }

    //Password generator
    if (lowerCaseIncluded) {CharacterCombination = CharacterCombination.concat(lowercaseCharacter);}
    if (upperCaseIncluded) {CharacterCombination = CharacterCombination.concat(uppercaseCharacter);}
    if (numberIncluded) {CharacterCombination = CharacterCombination.concat(numberCharacter);}
    if (specialIncluded) {CharacterCombination = CharacterCombination.concat(specialCharacter);}
    var resultPassword = ""
    for (var i = 0; i< passwordLength; i=i+1) {
        pwresult=Math.floor(Math.random()* CharacterCombination.length);
        resultPassword = resultPassword + CharacterCombination[pwresult];
        }
    return resultPassword;
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);