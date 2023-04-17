var rs = require('readline-sync');

// prompt the name question
var userName = rs.question('What is your name? ');
// prompt fav hobbies
var favHobby = rs.question('What are you favorite hobbies? ');
// ask if there's more hobbies
var anotherFavHobby = rs.question('Is there anymore hobbies that you have? ');
// add hobbies to list
var favHobbies = [];
// store list of user hobbies
favHobbies.push(favHobby);
favHobbies.push(anotherFavHobby);
// print user hobby list

console.log('Hi, ' + userName + '. Your favorite hobbies are ' + favHobbies + '. Thank you for sharing with us.');