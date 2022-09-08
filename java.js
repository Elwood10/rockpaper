//function to randomly return Rock Paper or Scissors computer pic//

let nameOne = "Rock";
let nameTwo = "Paper";
let nameThree = "Scissors";

let number = Math.floor(Math.random() * 10);

function computerPick() {
  if (number <= 3) {
    pick = nameOne;
  } else if (number <= 6) {
    pick = nameTwo;
  } else {
    pick = nameThree;
  }
}
computerPick(number);

//user input

var userPick = prompt("Enter your choice of Rock,Paper,Scissors");

//convert userPick to standard format to match computerPick

let firstLetter = userPick.slice(0, 1);
let restOfWord = userPick.slice(1, 100);
let start = firstLetter.toUpperCase();
let end = restOfWord.toLowerCase();
var userPick = start + end;

console.log(userPick);
