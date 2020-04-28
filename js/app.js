'use strict';
// initial question
var mountainsOrBeach = prompt('Do you like the mountains');

if(mountainsOrBeach.toLowerCase() === 'yes'){
  prompt('Is Mt. Rainier your favorite Mountain?');
} else if (mountainsOrBeach.toLowerCase() === 'no') {
  prompt('Do you prefer the beach?');
} else {
    prompt('Please answer either yes or no')
}

// Question Two
var mtRainier = prompt ('Do you like hiking in the Cascades?');

if(mtRainier.toLowerCase() === 'yes'){
  prompt('Do you like staying overnight?');
} else if (mtRainier.toLowerCase() === 'no'){
  prompt ('Do you prefer the Olympics?')
} else {
    prompt('Please answer either yes or no')
}

var camping = prompt('Do you hike in more than four miles?');

