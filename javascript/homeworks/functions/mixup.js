// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

// mixUp('mix', 'pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'

//This function uses the slice() method. It extracts a part of a string and returns a new string
function mixUp(string1, string2) {
  return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);
}
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));