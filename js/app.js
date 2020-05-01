'use strict'

//  alert('Im alive');

var score = 0 
console.log(); 




function nameAdd() {
  var userName = prompt("What is your name?");
  console.log( userName );
  alert('Hello, ' + userName );
}

function lived() {
// First Question
var mountainsOrBeach = prompt('Have I ever lived in Atlanta?');
 console.log(mountainsOrBeach);
  if(mountainsOrBeach.toLowerCase() === 'yes' || mountainsOrBeach.      toLowerCase === 'y'){
    alert('Correct.  I moved to Atlanta when I was young, and went to college there');
    score++;
  // break;
} else if (mountainsOrBeach.toLowerCase() === 'no'|| mountainsOrBeach.    toLowerCase === 'n') {
  alert('Not quite. I moved to Atlanta when I was young, and went to college there');
} else {
    prompt('Please answer either yes or no')
}

}

function hiking() {
// Second Question
var cascades = prompt ('Do I like hiking in the Olympics?');
console.log(cascades);
  if(cascades.toLowerCase() === 'yes' || cascades.toLowerCase === 'y'){
  alert('Yes, I love hiking in the Olympics.');
  // score++;
  // break;
} else if (cascades.toLowerCase() === 'no' || cascades.toLowerCase === 'n'){
  alert ('Sorry, I do love hiking in the Olympics.')
} else {
    prompt('Please answer either y or n')
}


function bikeTour() {
// Third Question
var camping = prompt('Have I ever done a bike tour?');
// console.log(camping);
  if(camping.toLowerCase() === 'yes' || camping.toLowerCase() === 'y'){
  alert('Right!  I have done many, and my favorite was a bike tour across Michigan.');
  // score++;
  // break;
} else if (camping.toLowerCase() === 'no' || camping.toLowerCase() === 'n'){
  alert('Ah, sorry.  I have.  It is so much fun.');
 } else {
     prompt ('Please answer either y or n');
 }
}

function campFire() {
// Fourth Question
var campFires = prompt('Have I ever been to New Zealand?');
// console.log(campFires);
  if(campFires.toLowerCase() === 'yes' || campFires.toLowerCase() === 'y'){
  alert('yes, it is by far one my the best places I have traveled');
  // score++;
  // break;
  } else if (campFires.toLowerCase() === 'n' || campFires.toLowerCase() ==='no'){
  alert('Sorry, I have been there before.');
  } else {
    prompt ('Please answer either y or n ');
  }
}

function shy() {
// Fifth Question
var shy = prompt('Am I a shy person?');
// console.log(hammockCamp);
  if(shy.toLowerCase() === 'yes' || shy.toLowerCase() === 'y'){
  alert('Yes, public speaking is one of the scariest things I have ever done.  I took a course in college, but that did not help very much.');
  // score++;
  // break;
} else if (shy.toLowerCase() === 'no' || shy.toLowerCase() === 'n'){
  alert('Sorry.  Public speaking scares me.');
} else {
    prompt ('Please answer either y or n' );
}
}

function numberGuess() {
// Number Guessing Game
var correctAnswer = 1993;
for(var i = 0; i < 4; i++)
{
  var guessingGame = prompt('What year was the best year for hiking? (four digit year please)');
  if (parseInt(guessingGame) === correctAnswer){
    alert('Congratulations!');
    // score++;
    break;
  } else if (i >= 3) {
    alert('Unfortunately, thats not the answer I was looking for.');
    break;
  } else if (guessingGame < correctAnswer){
    alert('Sorry too low, please guess again.');
  } else { 
  alert('Sorry too high, please guess again');
  }
}
}

// function arrayGuess() {
// // Array Guessing Game
//  var correctCamp = 'Olympics'
//  var bestCamps = ['Cascades, ' + 'Olympics, '+ 'Rialto Beach, ' + 'Hoh Rainforest, ' + 'Vantage, ' + 'Mt Rainier, ' + 'Anywhere'];
 
// //  Loop for number of turns
//  outerLoop:
//  for(var i = 0; i < 6; i++){
//  var campingGuess = prompt('Where is the best place to camp? ' + bestCamps + '?');
  
//   for(var k = 0; k < bestCamps.length; k++){
//     if(campingGuess.toLowerCase() == correctCamp[k]){
//       alert('Yup, nailed it.');
//       break outerLoop;
//     }
//     for(var l = 0; l < bestCamps.length; l++){
//       if(campingGuess.toLowerCase() !== correctCamp){
//         alert('Sorry, please try again');
        
//       } else if(i >= 6); { 
//         alert('Sorry, I think the Olympics are the best place.  That doesn\'t mean you are wrong, just differing opinions, but in this case I can\'t give you a point.');
//         } 
        
//       }
//   }
// }
// }

// function thankYou() {
// alert('Thank you for your time' + ' ' + userName + 'your score is' + score + 'out of 7')
// }


nameAdd();
lived();
hiking();
bikeTour();
campFire();
shy();
numberGuess();
// arrayGuess();
thankYou();


