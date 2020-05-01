// 'use strict'

 alert('Im alive');
// var score = 0;

// var userName = prompt("What is your name?");
// console.log(userName);

// alert('Hello,' + ' ' + userName );

// // First Question
// var mountainsOrBeach = prompt(userName + ', ' + 'have I ever lived in Atlanta?');
// //  console.log(mountainsOrBeach);
// if(mountainsOrBeach.toLowerCase() === 'yes' || mountainsOrBeach.toLowerCase === 'y'){
//   alert( userName + ', correct.  I moved to Atlanta when I was young, and went to college there');
//   score++;
// } else if (mountainsOrBeach.toLowerCase() === 'no'|| mountainsOrBeach.toLowerCase === 'n') {
//   alert( userName + ', Not quite. I moved to Atlanta when I was young, and went to college there');
// } else {
//     prompt(userName + ', ' + 'please answer either yes or no')
// }


// // Second Question
// var cascades = prompt ('Do I like hiking in the Olympics?');
// // console.log(cascades);
// if(cascades.toLowerCase() === 'yes' || cascades.toLowerCase === 'y'){
//   alert(userName + ', Yes, I love hiking in the Olympics.');
//   score++;
// } else if (cascades.toLowerCase() === 'no' || cascades.toLowerCase === 'n'){
//   alert (userName + ', Sorry, I do love hiking in the Olympics.')
// } else {
//     prompt(userName + ', ' + 'please answer either y or n')
// }


// // Third Question
// var camping = prompt('Have I ever done a bike tour?');
// // console.log(camping);
//   if(camping.toLowerCase() === 'yes' || camping.toLowerCase() === 'y'){
//   alert(userName + ' ' + 'right!  I have done many, and my favorite was a bike tour across Michigan.');
//   score++;
// } else if (camping.toLowerCase() === 'no' || camping.toLowerCase() === 'n'){
//   alert(userName + ' ' + 'Ah, sorry.  I have.  It is so much fun.');
//  } else {
//      prompt (userName + ', ' + 'Please answer either y or n');
//  }


// // Fourth Question
// var campFires = prompt('Have I ever been to New Zealand?');
// // console.log(campFires);
//   if(campFires.toLowerCase() === 'yes' || campFires.toLowerCase() === 'y'){
//   alert(userName + ' ' + 'yes, it is by far one my the best places I have traveled');
//   score++;
//   } else if (campFires.toLowerCase() === 'n' || campFires.toLowerCase() ==='no'){
//   alert(userName + ', sorry, I have been there before.');
//   } else {
//     prompt (userName + ', ' + 'Please answer either y or n ');
//   }


// // Fifth Question
// var shy = prompt('Am I a shy person?');
// // console.log(hammockCamp);
//   if(shy.toLowerCase() === 'yes' || shy.toLowerCase() === 'y'){
//   alert(userName + ' ' + 'yes, public speaking is one of the scariest things I have ever done.  I took a course in college, but that did not help very much.');
//   score++;
// } else if (shy.toLowerCase() === 'no' || shy.toLowerCase() === 'n'){
//   alert(userName + ', sorry.  Public speaking scares me.');
// } else {
//     prompt (userName + ', ' + 'Please answer either y or n' );
// }

// // Number Guessing Game
// var correctAnswer = 1993;
// for(var i = 0; i < 4; i++)
// {
//   var guessingGame = prompt('What year was the best year for hiking? (four digit year please)');
//   if (parseInt(guessingGame) === correctAnswer){
//     alert('Congratulations!');
//     score++;
//     break;
//   } else if (i >= 3) {
//     alert('Unfortunately, thats not the answer I was looking for.');
//     break;
//   } else if (guessingGame < correctAnswer){
//     alert('Sorry too low, please guess again.');
//   } else { 
//   alert('Sorry too high, please guess again');
//   }
// }
 

// Array Guessing Game
 var correctCamp = 'Olympics'
 var bestCamps = ['Cascades' + ' ', 'Olympics' + ' ' , 'Rialto Beach' + ' ' , 'Hoh Rainforest' + ' ' , 'Vantage' + ' ' , 'Mt Rainier' + ' ' , 'Anywhere'];
 
 for(var i = 0; i < 6; i++){
 var campingGuess = prompt('Where is the best place to camp? ' + bestCamps + '?');
    
  for(var k = 0; k < bestCamps.length; k++){
    if(campingGuess.toLowerCase() === correctCamp[k]){
      alert('Yup, nailed it.');
      break;
    }
    for(var k = 0; k < bestCamps.length; k++){
      if(campingGuess.toLowerCase() !== correctCamp){
        alert('Sorry, please try again');
        
        
      } else if (i>=6) { 
        alert('Sorry, I think the Olympics are the best place.  That doesn\'t mean you are wrong, just differing opinions, but in this case I can\'t give you a point.');
        break;} 
  }
  }
}


 //  if (campingGuess.toLowerCase() == correctCamp){
//    alert ('Yup, ' + userName +  ' you nailed it');
//    score++
//    break;
//    }
 
 
 
 
 
 
 
 
//   } else if (campingGuess.toLowerCase() !== correctCamp);{
//    alert(userName + ', such a nice place, but that isn\'t the answer.')
//  }
//     if (i === 6){
//      alert('I feel like the Olympics are the best.')
//    }
   

// alert('Thank you for your time' + ' ' + userName + 'your score is' + score + 'out of 7')
//  }
