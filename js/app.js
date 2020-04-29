'use strict';

var userName = prompt ("What is your name?")
console.log(userName);

alert('Welcome' + username);

var mountainsOrBeach = prompt(userName + ', ' + 'do you like the mountains?');

if(mountainsOrBeach.toLowerCase() === 'yes'){
  prompt( userName + ' ' + 'is Mt. Rainier your favorite Mountain?');
} else if (mountainsOrBeach.toLowerCase() === 'no') {
  prompt( 'Or' + userName + ' ' + 'Do you prefer the beach?');
} else {
    prompt(userName + ', ' + 'please answer either yes or no')
}
console.log(mountainsOrBeach);

var cascades = prompt ('Do you like hiking in the Cascades?');

if(cascades.toLowerCase() === 'yes'){
  prompt('Do you like staying overnight?');
} else if (cascades.toLowerCase() === 'no'){
  prompt ('Do you prefer the Olympics?')
} else {
    prompt(userName + ', ' + 'please answer either yes or no')
}
console.log(cascades);

var camping = prompt('When you hike, do you hike than four miles?');

  if(camping.toLowerCase() === 'yes'){
  prompt(userName + ' ' + 'have you ever thought about hiking across Washington?');
} else if (camping.toLowerCase() === 'no'){
  prompt(userName + ' ' + 'I don\'t blame you, I worry about getting lost');
} else {
    prompt (userName + ', ' + 'Please answer either yes or no' );
}
console.log(camping);

alert = ('Thank you for your time' + username + ', ' + 'welcome to the site.');

