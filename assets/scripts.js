// Assignment code here
//
var passwordInputValues = {
  number: generateRandomNumber,
  lowerCase: generateLowerCase,
  upperCase: generateUpperCase,
  symbol: generateSymbol,
};

var userPasswordChoice;
var userInput;
var password = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function(){
    generatedPasswordNew = generatePassword();
    document.getElementById("#password").placeholder = generatedPasswordNew;
    
});

var showPassword = document.createElement("#password");
passwordText.innerText= generatePassword(password);




//This will generate a random upper case using browser character code chart
function generateUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generating a lowercase character from the browser  character code this also rounds down to the lowest whole number
function generateLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generating a random special charater/symbol

function generateSymbol() {
  var symbols = "@ % ! # $ ^ ?  : . ( ) - _ ~ = < > {} * ";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//This function will genarate a random number
function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//These three statements will check for user choices

function generatePassword() {
  //Creating a new new empty array when all selected value will be saved into.
  // for the user input
  userInput = parseInt(prompt("Please choose a password with a length of at least 8 characters and no more than 128 characters"
    ));
  if (!userInput) {
    alert( "Password field can not be empty, please enter a value to meet this requirement");
    //Condition checking for passord length
  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("Password length must be at least 8 characters and no more than 128 characters"));
  }  else {
    passwordInputValues.number = confirm(
      "Would you like your password to contain Numbers?"
    );
    passwordInputValues.symbol = confirm(
      "Would you like your password to contain special characters?"
    );
    passwordInputValues.upperCase = confirm(
      "Would you like you password to contain Uppercases?"
    );
    passwordInputValues.lowerCase = confirm(
      "Would you like you passord characcters to contain Lowercases"
    );
  }

  //if non of the availale selection is presented assuming the [assord is empt or not meeting requirement]

  if (
    !passwordInputValues.number &&
    !passwordInputValues.symbol &&
    !passwordInputValues.upperCase &&
    !passwordInputValues.lowerCase
  ) {
    userPasswordChoice = alert(
      "Password field can not be empty you must choose atleast one of the options"
    );
  }
  // Updating password values according to what was seleted and then conacntinate all strings together
  else {
    passwordInputValues.number ||
      passwordInputValues.symbol ||
      passwordInputValues.lowerCase ||
      passwordInputValues.upperCase;
    userPasswordChoice = (
      passwordInputValues.number,
      passwordInputValues.symbol,
      passwordInputValues.lowerCase,
      passwordInputValues.upperCase
    );
  }

//loop through all values entered
for (var i = 0; i < userInput; i++) {
  var selectedCharacters =
    userPasswordChoice[Math.floor(Math.random() * userPasswordChoice.legth)];
  password.push(selectedCharacters);
}

var generatedPasswordNew = password.join("");
writePassword(generatedPasswordNew);
return generatedPasswordNew;
}

  // Write password to the #password input
function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordText.innerText= generatePassword(password);
  }

