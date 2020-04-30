'use strict'

//  alert('Im alive');
var score = 0;

var userName = prompt("What is your name?");
console.log( userName );

alert('Hello,' + ' ' + userName );

// First Question
var mountainsOrBeach = prompt(userName + ', ' + 'do you like the mountains?');
//  console.log(mountainsOrBeach);
if(mountainsOrBeach.toLowerCase() === 'y'){
  alert( userName + ', correct');
  score++;
} else if (mountainsOrBeach.toLowerCase() === 'n') {
  alert( userName + ', incorrect.');
} else {
    prompt(userName + ', ' + 'please answer either y or n')
}


// Second Question
var cascades = prompt ('Do you like hiking in the Cascades?');
// console.log(cascades);
if(cascades.toLowerCase() === 'y'){
  alert(userName + ', correct');
  score++;
} else if (cascades.toLowerCase() === 'n'){
  alert (userName + ', incorrect.')
} else {
    prompt(userName + ', ' + 'please answer either y or n')
}


// Third Question
var camping = prompt('When you hike, do you hike than four miles?');
// console.log(camping);
  if(camping.toLowerCase() === 'y'){
  alert(userName + ' ' + 'you may be able to hike across Washington');
  score++;
} else if (camping.toLowerCase() === 'n'){
  alert(userName + ' ' + 'I don\'t blame you, I worry about getting lost');
 } else {
     prompt (userName + ', ' + 'Please answer either y or n');
 }


// Fourth Question
var campFires = prompt('Do you like campfires?');
// console.log(campFires);
  if(campFires.toLowerCase() === 'y'){
  alert(userName + ' ' + 'Nice, smores are great.');
  score++;
  } else if (campFires.toLowerCase() === 'n'==='no'){
  alert(userName + ', incorrect.');
  } else {
    prompt (userName + ', ' + 'Please answer either y or n );
  }


// Fifth Question
var hammockCamp = prompt('Do you like sleeping in a hammock?');
// console.log(hammockCamp);
  if(hammockCamp.toLowerCase() === 'y'){
  alert(userName + ' ' + 'correct');
  score++;
} else if (hammockCamp.toLowerCase() === 'n'){
  alert(userName + ', incorrect.');
} else {
    prompt (userName + ', ' + 'Please answer either y or n' );
}

// Number Guessing Game
var correctAnswer = 1993;
for(var i = 0; i < 4; i++)
{
  var guessingGame = prompt('What year was the best year for hiking? (four digit year please)');
  if (parseInt(guessingGame) === correctAnswer){
    alert('Congratulations!');
    score++;
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
 

// Array Guessing Game
 var correctCamp = 'Olympics'
 var bestCamps = ['Cascades' + ' ', 'Olympics' + ' ' , 'Rialto Beach' + ' ' , 'Hoh Rainforest' + ' ' , 'Vantage' + ' ' , 'Mt Rainier' + ' ' , 'Anywhere'];
 
 for(var i = 0; i < 6; i++){
 var campingGuess = prompt('Where is the best place to camp? ' + bestCamps + '?');
  if (campingGuess.toLowerCase() == correctCamp){
   alert ('Yup, ' + userName +  ' you nailed it');
   score++
   break;
 } else if (campingGuess.toLowerCase() !== correctCamp);{
   alert(userName + ', such a nice place, but that isn\'t the answer.')
 }
    if (i === 6){
     alert('I feel like the Olympics are the best.')
   }
  } 

alert('Thank you for your time' + ' ' + userName + 'your score is' + score + 'out of 7')


