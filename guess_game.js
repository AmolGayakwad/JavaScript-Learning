
//Implement a guessing game where the computer generates a random number between 1 and 100, and the user has to guess it. Provide hints like "Too high" or "Too low" based on user input with only 5 attempts.


const random_number = Math.floor(Math.random() * 100) + 1;


let guess = 0;
const maxguess = 5;

while (guess < maxguess) {
    
    const userGuess = 1; 

    
    if (userGuess == random_number) {
        console.log("You guessed the correct number");
        break;
    } else if (userGuess > random_number) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }

    guess++;
}

if (guess == maxguess) {
    console.log("You cross your guess limit");
}

