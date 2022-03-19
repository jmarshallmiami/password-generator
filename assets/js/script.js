// Assignment code here

function generatePassword() {
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // empty string for userSelection
  var userPassword = "";

  // prompt user to for password lenght between 8-128 characters
  var characterLength = parseInt(prompt("Choose a character length for your password between 8-128 characters:"));

  // make sure the user inputs number from 8-128
  if (characterLength >= 128 || characterLength <= 8 || typeof (characterLength) !== "number") {
    alert("Read the dang instructions!");
    return generatePassword();
  };

  // ask user to confirm password criteria
  var addLowerCase = confirm("Your password will have lowercase letters.");
  var addUpperCase = confirm("Your password will have uppercase letters.");
  var addNumbers = confirm("Your password will have numeric values.");
  var addSpecialChar = confirm("Your password will have special characters.");

  // check for at least 1 user selection
  if (!addLowerCase && !addUpperCase && !addNumbers && !addSpecialChar) {
    alert("Must choose at least one option!");
    return generatePassword();
  };

  while (userPassword.length < characterLength) {
    // add user selection criteria array elements to userSelection array
    console.log("run");
    if (addLowerCase) {
      var newString = userPassword.concat(lower[Math.floor(Math.random() * lower.length)]);
      userPassword = newString
    // once the password is the selected length end loop
      if (userPassword.length === characterLength) {
        break;
      }
    }
    if (addUpperCase) {
      var newString = userPassword.concat(upper[Math.floor(Math.random() * upper.length)]);
      userPassword = newString
      if (userPassword.length === characterLength) {
        break;
      }
    }
    if (addNumbers) {
      var newString = userPassword.concat(number[Math.floor(Math.random() * number.length)]);
      userPassword = newString
      if (userPassword.length === characterLength) {
        break;
      }
    }
    if (addSpecialChar) {
      var newString = userPassword.concat(special[Math.floor(Math.random() * special.length)]);
      userPassword = newString
      if (userPassword.length === characterLength) {
        break;
      }
    }
  };
  console.log(userPassword.length);

  //return password
  return userPassword;
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
