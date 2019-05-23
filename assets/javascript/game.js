var score = 0;
var guessesLeft = 13;
var lettersGuesses = [];
var currentWord = [];

// List of electro bands
const words = ["Disclosure", "Overwerk", "AlanWalker", "Daftpunk", "Justice", "Diplo", "Davidguetta"];

// Pick a random word
const computerWord = words[Math.floor(Math.random() * words.length)];

// Replace the random word by dashes
for (i = 0; i < computerWord.length; i++) {
    currentWord.push("_")   
}
document.getElementById("current-word").textContent = currentWord.join(" ");

// Functions
function updateScore() {
    document.getElementById("score").innerHTML = "Wins: " + score;
}
updateScore();

function updateGuesses() {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
}
updateGuesses();


// on key press listener
document.onkeyup = function (event){
    const userKey = event.key.toUpperCase();
    const letterIndex = computerWord.toLocaleUpperCase().indexOf(userKey);

    if (letterIndex !== -1) {
        currentWord.splice(letterIndex, 1, userKey);
        document.getElementById("current-word").textContent = currentWord.join(" ");
        score++;
        updateScore();

    } else if (lettersGuesses.includes(userKey) == false) {
        lettersGuesses.push(userKey);
        document.getElementById("letters-guesses").textContent = lettersGuesses.join(" ").toUpperCase();
        guessesLeft--;
        updateGuesses();
    }
}

