
//Used to get  my random number

let random = Math.floor(Math.random() * 10 + 1)

let guess = parseInt(prompt("Please select a number between 1 and 10"));
for (let numberOfGuesses = 3; numberOfGuesses >= 1; numberOfGuesses--){

let lostTheGame = false;
if (guess <= 1 || guess > 10) {
  alert('Out of range')
  numberOfGuesses - 1
} else if (guess === random) {
  alert('You are the winner')
  break;
} else if(numberOfGuesses > 1 && guess > random) {
   prompt('Too High');
  numberOfGuesses - 1
}else if (numberOfGuesses > 1 && guess < random) {
  prompt('Too Low'); 
    numberOfGuesses - 1
}else {
    lostTheGame = true, alert("All out of guesses, Please refresh the page to try again!")
  }
}
  

