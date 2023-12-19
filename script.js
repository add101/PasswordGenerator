// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in the password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in the password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt('Enter the password length (8-128):');

  if (length < 8 || length > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  var lowercase = confirm('Include lowercase characters?');
  var uppercase = confirm('Include uppercase characters?');
  var numeric = confirm('Include numeric characters?');
  var special = confirm('Include special characters?');

  if (!lowercase && !uppercase && !numeric && !special) {
    alert('Select at least one character type.');
    return;
  }

  return {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var characterSet = '';
  var password = '';

  if (options.lowercase) characterSet += lowerCasedCharacters.join('');
  if (options.uppercase) characterSet += upperCasedCharacters.join('');
  if (options.numeric) characterSet += numericCharacters.join('');
  if (options.special) characterSet += specialCharacters.join('');

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(characterSet);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);