//function to randomly return Rock Paper or Scissors computer pic//

let nameOne = "Rock";
let nameTwo = "Paper";
let nameThree = "Scissors";

let number = Math.floor(Math.random() * 10);

function computerPick() {
  if (number <= 3) {
    pick = nameOne;
  } else if (number > 3 && number <= 6) {
    pick = nameTwo;
  } else {
    pick = nameThree;
  }
}
computerPick(number);

//user input

var choice = prompt("Enter your choice of Rock,Paper,Scissors");

//convert userPick to standard format to match computerPick

let firstLetter = choice.slice(0, 1);
let restOfWord = choice.slice(1, 100);
let start = firstLetter.toUpperCase();
let end = restOfWord.toLowerCase();
var userPick = start + end;

// set up win or lose function

function rockPaper() {
  if (userPick == pick) alert("tie");
  else if (userPick == "Rock" && pick == "Scissors") alert("You Win!");
  else if (userPick == "Rock" && pick !== "Scissors") alert("You Lose");
  else if (userPick == "Paper" && pick == "Rock") alert("You Win");
  else if (userPick == "Paper" && pick !== "Rock") alert("You Lose");
  else if (userPick == "Scissors" && pick == "Paper") alert("You Win");
  else if (userPick == "Scissors" && pick !== "Paper") alert("You Lose");
  else if ((userPick !== nameOne, nameTwo, nameThree))
    alert("Check your typing");
}

rockPaper(userPick, pick);

console.log(pick, number);
