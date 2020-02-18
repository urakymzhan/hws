// Let's turn one of the Class 1 Exercises into a function.

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(jobTitle, geolocation, partner, numKids) {
  var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
  partner + ' with ' + numKids + ' kids.';
  console.log(future);
}

tellFortune('astronaut', 'Spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Bruce Wayne', 9);
tellFortune('Elvis impersonator', 'Russia', 'Elon Musk', 0);