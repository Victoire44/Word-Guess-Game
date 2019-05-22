var winningPoint = document.getElementById("winning-point");
var currentWord = document.getElementById("current-word");
var numberGuesses = document.getElementById("number-guesses");

var wins = 0;
var number = 0;
var lettersGuesses = [];

// List of electro bands
const words = ["Disclosure", "Guetta", "Walker", "Daftpunk", "Justice", "Diplo"];

// Pick a random word
const computerWord = words[Math.floor(Math.random() * words.length)];

// replace the random word by dashes
for (i = 0; i < computerWord.length; i++) {
    currentWord.innerHTML = currentWord.innerHTML + "_ "
}

// on key press listener
document.onkeypress = (event) => {
    const userKey = event.key.toLowerCase();
    const isInWord = computerWord.toLowerCase().includes(userKey);


    if (isInWord) {
        // document.getElementById("user-Key").textContent = userKey;
        
    } else {
        if (lettersGuesses.includes(userKey) == false) {
            lettersGuesses.push(userKey);
            document.getElementById("letters-guesses").textContent = lettersGuesses;
        }
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
