// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'
// fixStart('turtle'): 'tur*le'


//This function uses a few new methods and regular expressions
function fixStart(inputString) {
  var firstChar = inputString.charAt(0);
  return firstChar + inputString.slice(1).replace(new RegExp(firstChar, 'g'), '*');
}
console.log(fixStart('babble'));
console.log(fixStart('turtle'));