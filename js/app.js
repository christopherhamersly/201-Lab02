'use strict'

alert('Im alive')

var userName = prompt ("What is your name?");
console.log( userName );

alert('Hello,' + ' ' + userName )

// First Question
var mountainsOrBeach = prompt(userName + ', ' + 'do you like the mountains?');
//  console.log(mountainsOrBeach);
if(mountainsOrBeach.toLowerCase() === 'yes'){
  alert( userName + ' ' + 'moutains are the best');
} else if (mountainsOrBeach.toLowerCase() === 'no') {
  alert( 'Or' + userName + ' ' + 'beaches are the best');
} else {
    prompt(userName + ', ' + 'please answer either yes or no')
}


// Second Question
var cascades = prompt ('Do you like hiking in the Cascades?');
// console.log(cascades);
if(cascades.toLowerCase() === 'yes'){
  alert('Wow,the cascades are really pretty.');
} else if (cascades.toLowerCase() === 'no'){
  alert ('You must like the Olympics')
} else {
    prompt(userName + ', ' + 'please answer either yes or no')
}


// Third Question
var camping = prompt('When you hike, do you hike than four miles?');
// console.log(camping);
  if(camping.toLowerCase() === 'yes'){
  alert(userName + ' ' + 'you may be able to hike across Washington');
} else if (camping.toLowerCase() === 'no'){
  alert(userName + ' ' + 'I don\'t blame you, I worry about getting lost');
} else {
    prompt (userName + ', ' + 'Please answer either yes or no' );
}


// Fourth Question
var campFires = prompt('Do you like campfires?');
// console.log(campFires);
  if(campFires.toLowerCase() === 'yes'){
  alert(userName + ' ' + 'Nice, smores are great.');
} else if (campFires.toLowerCase() === 'no'){
  alert(userName + ' ' + 'I don\'t blame you, the smoke can get into your eyes');
} else {
    prompt (userName + ', ' + 'Please answer either yes or no' );
}


// Fifth Question
var hammcokCamp = prompt('Do you like sleeping in a hammock?');
// console.log(hammockCamp);
  if(hammockCamp.toLowerCase() === 'yes'){
  alert(userName + ' ' + 'you may be able to hike across Washington');
} else if (hammockCamp.toLowerCase() === 'no'){
  alert(userName + ' ' + 'it\'s ok, they can be a little tough to get into');
} else {
    prompt (userName + ', ' + 'Please answer either yes or no' );
}


// Thank you
alert('Thank you for your time' + ' ' + userName )

