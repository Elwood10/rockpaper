let pick = "one";
let userPick = "me";

function rockPaper() {
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

  var winner;
  // set up win or lose function
  if (userPick == pick) winner = "tie";
  else if (userPick == "Rock" && pick == "Scissors") winner = "You Win!";
  else if (userPick == "Rock" && pick !== "Scissors") winner = "You Lose";
  else if (userPick == "Paper" && pick == "Rock") winner = "You Win";
  else if (userPick == "Paper" && pick !== "Rock") winner = "You Lose";
  else if (userPick == "Scissors" && pick == "Paper") winner = "You Win";
  else if (userPick == "Scissors" && pick !== "Paper") winner = "You Lose";
  else if ((userPick !== nameOne, nameTwo, nameThree))
    alert("Check your typing");
  console.log(winner);
  //rockPaper();
}
rockPaper(userPick, pick);

//function to run game 5 times
for (i = 1; i < 5; i++) {
  rockPaper();
}
