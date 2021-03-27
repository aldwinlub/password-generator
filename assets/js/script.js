// Assignment Code
var generateBtn = document.querySelector("#generate"); // Accesses the button with an id of "generate"
// Created variables with arrays of strings of all possible characters that will be used to create the password
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// Created variables for the user's decisons and inputs
var userInput;
var userChoseUpperCase;
var userChoseLowerCase;
var userChoseNumbers;
var userChoseSpecialCharacters;


function generatePassword() {
  userInput = window.prompt("Please choose your password length and it must be between 8 and 128 characters.");
  // Created a variable named lengthOfPassword where the user is able to input how many characters their password will be
  var lengthOfPassword = Number(userInput);

  if (!userInput) {
    alert("Uh-oh! The length of your password is required.");
    return;
  }
  else if (isNaN(lengthOfPassword)) { // "isNaN()" determines if a value is an illegal number or not (short for Not-a-Number)
    alert("Whoops! The length must be a vaild number.")
    return;
  }
  else if ( lengthOfPassword < 8 || lengthOfPassword > 128) { // Restricts user to choose the length of their password from 8 to 128 characters
    alert("Please try again. The length of your password must be between 8 and 128 characters!")
    return;
  }
  else if (lengthOfPassword >= 8 && lengthOfPassword <= 128) { // Once lengthOfPassword returns a valid input, then confirms will begin to appear
    userChoseUpperCase = window.confirm("Would you like to use uppercase letters in your password?");
    userChoseLowerCase = window.confirm("Would you like to use lowercase letters in your password?");
    userChoseNumbers = window.confirm("Would you like to use numbers in your password?");
    userChoseSpecialCharacters = window.confirm("Would you like to use special characters in your password?");

    if (!userChoseUpperCase && !userChoseLowerCase && !userChoseNumbers && !userChoseSpecialCharacters) { // If user decides to not pick anything, we alert the message and make them try again
      alert("You must choose at least one option for your password to be generated.")
      return;
    }
  }

  var userChoices = []; // This concatenates the user choices depending on what option(s) they picked
  if (userChoseUpperCase) {
    userChoices = userChoices.concat(upperCaseLetters);
  }
  if (userChoseLowerCase) {
    userChoices = userChoices.concat(lowerCaseLetters);
  }
  if (userChoseNumbers) {
    userChoices = userChoices.concat(numbers);
  }
  if (userChoseSpecialCharacters) {
    userChoices = userChoices.concat(specialCharacters);
  }

  var generatedPassword = []; // This randomly configures either uppercase, lowercase, numbers, and/or special characters in a random order
  for (var i = 0; i < lengthOfPassword; i++) {
    generatedPassword.push(userChoices[Math.floor(Math.random() * userChoices.length)]);
  }
  
  return generatedPassword.join(""); // Allows the strings to be joined with no interrupts such as commas
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

