var guessesLeft = document.getElementById("guessesLeft");

var score = 0;
var guessesLeft = 0;
var lettersGuesses = [];
var currentWord = [];

// List of electro bands
const words = ["Disclosure", "Overwerk", "Walker", "Daftpunk", "Justice", "Diplo"];

// Pick a random word
const computerWord = words[Math.floor(Math.random() * words.length)];

// replace the random word by dashes
for (i = 0; i < computerWord.length; i++) {
    currentWord.push("_")   
}
document.getElementById("current-word").textContent = currentWord.join(" ");

// on key press listener
document.onkeyup = (event) => {
    const userKey = event.key.toUpperCase();
    const letterIndex = computerWord.toLocaleUpperCase().indexOf(userKey);

    if (letterIndex !== -1) {
        currentWord.splice(letterIndex, 1, userKey);
        document.getElementById("current-word").textContent = currentWord.join(" ");

    } else if (lettersGuesses.includes(userKey) == false) {
        lettersGuesses.push(userKey);
        document.getElementById("letters-guesses").textContent = lettersGuesses.join(" ").toUpperCase();
    }
}

    // if(isInWord /* && letter not already guessed */){
    //     // display letter in currentWord
    //     const letterGuess 
    //     var currentWord
    // } else if(/* is the letter not already guessed */){
    //     // display letter in lettersGuesses
    //     // decrease -1 number of guesses remaining except
    // }
