// Create an array to hold your top choices (colors, presidents, whatever). For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is. The method slice might be helpful here.

//Simple code
var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
  console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

//Bonus solution
var choices = ['red', 'orange', 'pink', 'yellow'];
function findLast (inputNum) {
  tmpSlice = String(inputNum);
  var lastDigit = (tmpSlice.slice(-1));
  return lastDigit;
}

for (var i = 0; i < choices.length; i++) {
  var choiceNum = i + 1;
  var choiceNumSuffix = 0;
  var choiceNumLast = findLast(choiceNum);
  if (choiceNumLast == 1) {
    choiceNumSuffix = 'st';
  } else if (choiceNumLast == 2) {
    choiceNumSuffix = 'nd';
  } else if (choiceNumLast == 3) {
    choiceNumSuffix = 'rd';
  } else {
    choiceNumSuffix = 'th';
  }
  console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}