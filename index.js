var rs = require('readline-sync');

var favHobbies = [];

// prompt the name question
var username = rs.question('What is your name? ');
var favHobby = rs.question(username + ', what is your favorite hobby? ');
var moreHobbies = rs.questionInt('How many other hobbies do you have? ');

favHobbies.push(favHobby);

const yourHobbies = () => {
  console.log('Hello there, ' + username + '.');
  for (let hobby of favHobbies) {
    console.log('One of your favorite hobbies are ' + hobby + '.');
  }
};

const otherHobbies = (number) => {
  for (let i = 0; i < number; i++) {
    let nextHobby = rs.question('What is your next favorite hobby? ');
    favHobbies.push(nextHobby);
  }
}

const checkAnswer = () => {
  var areYouSure = rs.keyInYN('Are you sure that\'s all you would like to do?');
  if (areYouSure) {
    console.log('Thank You!');
    yourHobbies();
  }
  
  if(!areYouSure) {
    moreHobbies = rs.questionInt('How many other hobbies do you have? ');
    counter = 0;
    otherHobbies(moreHobbies);
    checkAnswerAgain();
  }
}

const checkAnswerAgain = () => {
  var areYouSure = rs.keyInYN('Are you sure that\'s all you would like to do?');
  if (areYouSure) {
    console.log('Thank You!');
    yourHobbies();
  }
  
  if(!areYouSure) {
    moreHobbies = rs.questionInt('How many other hobbies do you have? ');
    counter = 0;
    otherHobbies(moreHobbies);
  }
}


otherHobbies(moreHobbies);
checkAnswer();

// add hobbies to list
// store list of user hobbies
// print user hobby list
