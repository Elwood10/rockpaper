//function to randomly return Rock Paper or Scissors//

let nameOne = "Rock";
let nameTwo = "Paper";
let nameThree = "Scissors";

 let number = Math.floor(Math.random()*10);
 
function computerPick(){
if (number < 3 ) {pick = nameOne}
else if (number <= 6) {pick = nameTwo} else {pick = nameThree};
}
computerPick(number)
console.log(pick)


  
