var score = 0;
var guessesLeft;
var lettersGuesses;
var currentWord;
var randomWord;


// Array of electro bands
const words = ["Disclosure", "Overwerk", "AlanWalker", "Daftpunk", "Justice", "Diplo", "Davidguetta", "Electronic"];

// Functions
function updateCurrentWord() {
    document.getElementById("current-word").textContent = currentWord.join(" ");
}

function updateScore() {
    document.getElementById("score").innerHTML = "Wins: " + score;
}

function updateNumberGuesses() {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
}

function updateLetters() {
    document.getElementById("letters-guesses").textContent = lettersGuesses.join(" ").toUpperCase();
}

function reset() {
    updateScore();

    guessesLeft = 12;
    updateNumberGuesses();

    lettersGuesses = [];
    updateLetters();

    //pick a random word
    randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    currentWord = [];

    // word with dashes
    for (i = 0; i < randomWord.length; i++) {
        currentWord.push("_");
    }
    updateCurrentWord();
}
reset();


// on key press listener
document.onkeyup = function (event) {
    var userKey = event.key.toUpperCase();
    var isInWord = randomWord.includes(userKey);

    //If the guessed letter is included in the random word, the dash is replaced by the letter
    if (isInWord && guessesLeft > 0) {
        for (var i = 0; i < randomWord.length; i++) {
            if (userKey === randomWord[i]) {
                currentWord.splice(i, 1, userKey)
            }
        }
        updateCurrentWord();
        /*If the guessed letters are not include in the random word,
        they diplay into a list and the number of guesses letter descrease */
    } else if (!lettersGuesses.includes(userKey) && guessesLeft > 0) {
        lettersGuesses.push(userKey);
        updateLetters();
        guessesLeft--;
        updateNumberGuesses();
    }
    //If the random word is completed, the score increase and the game restarts
    if (!currentWord.includes("_")) {
        score++;
        updateScore();
        reset();
        /*If the random word is not completed before the end,
        it's game over and the game restart*/
    } else if (guessesLeft <= 0) {
        alert("Game over");
        reset();
    }
}

//button reset
$(".btn").on('click', function () {
    score = 0;
    updateScore();
    reset()
});