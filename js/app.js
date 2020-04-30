'use strict'

// alert('Im alive');

// var userName = prompt ("What is your name?");
// console.log( userName );

// alert('Hello,' + ' ' + userName );

// // First Question
// var mountainsOrBeach = prompt(userName + ', ' + 'do you like the mountains?');
// //  console.log(mountainsOrBeach);
// if(mountainsOrBeach.toLowerCase() === 'yes' === 1){
//   alert( userName + ', correct');
// } else if (mountainsOrBeach.toLowerCase() === 'no' === 0) {
//   alert( 'Or' + userName + ', incorrect.');
// } else {
//     prompt(userName + ', ' + 'please answer either yes or no')
// }


// // Second Question
// var cascades = prompt ('Do you like hiking in the Cascades?');
// // console.log(cascades);
// if(cascades.toLowerCase() === 'yes'){
//   alert('Wow,the cascades are really pretty.');
// } else if (cascades.toLowerCase() === 'no'){
//   alert ('You must like the Olympics')
// } else {
//     prompt(userName + ', ' + 'please answer either yes or no')
// }


// // Third Question
// var camping = prompt('When you hike, do you hike than four miles?');
// // console.log(camping);
//   if(camping.toLowerCase() === 'yes'){
//   alert(userName + ' ' + 'you may be able to hike across Washington');
// } else if (camping.toLowerCase() === 'no'){
//   alert(userName + ' ' + 'I don\'t blame you, I worry about getting lost');
//  } else {
//      prompt (userName + ', ' + 'Please answer either yes or no' );
//  }


// // Fourth Question
// var campFires = prompt('Do you like campfires?');
// // console.log(campFires);
//   if(campFires.toLowerCase() === 'yes'){
//   alert(userName + ' ' + 'Nice, smores are great.');
//   } else if (campFires.toLowerCase() === 'no'){
//   alert(userName + ' ' + 'I don\'t blame you, the smoke can get into your eyes');
//   } else {
//     prompt (userName + ', ' + 'Please answer either yes or no' );
//   }


// // Fifth Question
// var hammcokCamp = prompt('Do you like sleeping in a hammock?');
// // console.log(hammockCamp);
//   if(hammockCamp.toLowerCase() === 'yes'){
//   alert(userName + ' ' + 'you may be able to hike across Washington');
// } else if (hammockCamp.toLowerCase() === 'no'){
//   alert(userName + ' ' + 'it\'s ok, they can be a little tough to get into');
// } else {
//     prompt (userName + ', ' + 'Please answer either yes or no' );
// }

// var correctAnswer = 1993;
//   for(var i = 0; i < 4; i++){
//     var guessingGame = prompt('What year is the best year for hiking? (four digit year please)');
//     if (guessingGame == correctAnswer){
//     alert(username + ', Congratulations!');
//     break;
//   } else if (guessingGame < correctAnswer){
//     alert(username + ', sorry too low, please guess again.');
//   } else if (guessingGame > correctAnswer){
//     alert(username + ', sorry too high, please guess again');
//   } if(i==3){ 
//   alert('Unfortunately, thats not the answer I was looking for.')
//   }
// }

  // var correctAnswer = 1993;
    
  //   for(var i = 0; i < 4; i = i + 1){
  //       var numberGuess = prompt('Which was the best year for camping?');
  //       if(numberGuess == correctAnswer){
  //       alert('Yes, thats right!')
  //       break;
  //       } else if (numberGuess < correctAnswer)
  //       alert('Just a litle too low');
  //       } else if (numberGuess > correctAnswer)
  //       alert('Just a litle too high');
  //       if (i == '4') {
  //       alert('1993 of course.');
  //       }

// }
    // if(i==3){
    // alert(userName + ', only one more chance to guess.')
    // }
    // else if(i==2){
    // alert('Only two more guesses' + userName)
    // }
    // else if(i==1){
    // alert('Relax, three more guesses, ' + userName)
    // }


var bestCamp = 'Olympics'
var bestCamps = ['Cascades' , 'Olympics' , 'Rialto Beach' , 'Hoh Rainforest' , 'Vantage' , 'Mt Rainier' , 'Anywhere'];

for(var i = 0; i < 5; i++){
  var campingGuess = prompt('Where is the best place to camp' + bestCamps + '?');
} if (campingGuess == bestCamp){
  alert ('Yup, ' + userName +  'you nailed it');
} else if (campingGuess !== bestCamp);{
  alert(userName + 'Such a nice place, but that isn\'t the answer.')
}
  if(i < 4){
  alert('Not quite, try again' + bestCamps);
  } if (i === 5){
    alert('I feel like the Olympics are the best.')
  }






// // var score = 


// alert('Thank you for your time' + ' ' + userName 

