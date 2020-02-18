// Write a function pluralize that takes in two arguments, a number and a word, and returns the plural. For example:
// pluralize(5, 'cat'): '5 cats'
// pluralize(7, 'turtle'): '7 turtles

function pluralize(number, noun) {
  if (number != 1 && noun != 'sheep' && noun != 'geese') {
    return number + ' ' + noun + 's';
  } else {
    return number + ' ' + noun;
  }
}
console.log('I have ' + pluralize(0, 'cat'));
console.log('I have ' + pluralize(1, 'cat'));
console.log('I have ' + pluralize(2, 'cat'));
console.log('I have ' + pluralize(3, 'geese'));