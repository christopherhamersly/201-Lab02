'use strict';

var userName = prompt ("What is your name?")

var mountainsOrBeach = prompt(userName + ', ' + 'do you like the mountains?');

if(mountainsOrBeach.toLowerCase() === 'yes'){
  prompt( userName + ' ' + 'is Mt. Rainier your favorite Mountain?');
} else if (mountainsOrBeach.toLowerCase() === 'no') {
  prompt( 'Or' + userName + ' ' + 'Do you prefer the beach?');
} else {
    prompt(userName + ', ' + 'please answer either yes or no' )
}

var cascades = prompt ('Do you like hiking in the Cascades?');

if(cascades.toLowerCase() === 'yes'){
  prompt('Do you like staying overnight?');
} else if (cascades.toLowerCase() === 'no'){
  prompt ('Do you prefer the Olympics?')
} else {
    prompt(userName + ', ' + 'please answer either yes or no' )
}

var hiking = prompt('When you hike, do you hike than four miles?');

  if(camping.toLowerCase() === 'yes'){
  prompt(userName + ' ' + 'have you ever thought about hiking across Washington?');
} else if (camping.toLowerCase() === 'no'){
  prompt(userName + ' ' + 'I don\'t blame you, I worry aout getting lost');
} else {
    prompt (userName + ', ' + 'Please answer either yes or no' )
}

var campFires = prompt(userName + ', ' + 'do you like the smell of campfires?')

  if(campFires.toLowerCase() === 'yes'){
prompt('Hey,' + userName + ' ' + 'I do too.');
} else if (campFires.toLowerCase() === 'no'){
  prompt (userName + ', ' + 'thats ok, I can see how someone wouldn\'t like them.');
} else {
  prompt (userName + ', ' + 'Please answer either yes or no' )
}

