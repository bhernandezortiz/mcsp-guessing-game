let correctAnswer = 7;

let solved = false;
 

while (!solved) {
    let guess = prompt('Guess a number from 1 - 10')
    if (parseInt(guess) === correctAnswer)  {
        console.log('Winner!');
        solved = true;
    } else if (parseInt(guess) > correctAnswer)  {
        prompt('Guess is too high, guess lower')
    } else {
        prompt('Guess is too low, guess higher')
    }
}

