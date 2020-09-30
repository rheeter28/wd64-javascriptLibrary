//  parseInt(string [, radix])

/*
  string - the value to parse. if this argument is not a string, then it is converted to one using the ToString abstract operation . leading whitespace in this argument is ignored

  radix - an integer between 2 and 36 that represents the radix(hte base in mathematical numeral systems) of the string. Be careful-this does not default to 10
*/



 

let getRandomNumber = function(start, range) {
  let getRandom = Math.floor((Math.random() * range) + start);
  while (getRandom > range) {
    getRandom = Math.floor((Math.random() * range) + start);
  }
  return getRandom;
}
console.log(getRandomNumber(0,10));
let numberOfGuesses = 3;
let y = getRandomNumber(0,10);
let guessNumber = 0;

document.getElementById('submitguess').onclick = function() {

let x = document.getElementById('guessField').value
// if(x == y){
//   alert('You guessed the right number!');
// } else if(x > y){
//   i++;
//   alert('Sorry, you guessed too low, please try again')
// } else if (x < y) {
//   alert('Sorry, you guessed too high, please try again')
// } else if (i === numberOfGuesses){
//   alert('You are all out of guesses')
// } else {
//   alert('Please feel free to play again!');
// }
// }

    for(let i = 3; i < 1; i--) {
      if(x == y) {
      alert("You guessed the right number!");
    }   else if (x > y){
      alert('Your guess was too low, please try again');
    } else if (x < y) {
      alert('Your guess was high, please try again');
    } else if (guessNumber === numberOfGuesses){
      alert('You are all out of guesses');
    } else {
      alert('Thanks for playing! Please feel free to try again!');
    }
  }
};

