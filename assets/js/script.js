// Assignment code here

function generatePassword(){
// prompt user to for password lenght between 1-128 characters
var characterLength = prompt("Choose a character length for your password between 1-128 characters:");


// prompt user to include lowerCase letter in password 
var addLowerCase = confirm("Your password will have lowercase letters.")

// prompt user to include upperCase letter in password 
var addUpperCase = confirm("Your password will have uppercase letters.")

// prompt user to include lowerCase letter in password 
var addNumbers = confirm("Your password will have numeric values.")

// prompt user to include lowerCase letter in password 
var addSpecialChar = confirm("Your password will have special characters.")



 };



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
