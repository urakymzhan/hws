// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var birthYear = 1984;
var currentYear  = 2016;
var age  = currentYear - birthYear;
console.log('They are either ' + age + ' or ' + (age - 1));