var score = 0;
var guessesLeft;
var lettersGuesses;
var currentWord;
var randomWord;


// List of electro bands
const words = ["Disclosure", "Overwerk", "AlanWalker", "Daftpunk", "Justice", "Diplo", "Davidguetta","Electronic"];

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
    randomWord = words[Math.floor(Math.random() * words.length)];
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
    const userKey = event.key.toUpperCase();
    const letterIndex = randomWord.toUpperCase().indexOf(userKey);

    if (letterIndex !== -1 && guessesLeft > 0) {
        currentWord.splice(letterIndex, 1, userKey);
        updateCurrentWord();

    } else if (lettersGuesses.includes(userKey) == false && guessesLeft > 0) {
        lettersGuesses.push(userKey);
        updateLetters();
        guessesLeft--;
        updateNumberGuesses();
    }

    if (!currentWord.includes("_")) {
        alert("You win");
        score++;
        updateScore();
        reset();
    } else if (guessesLeft <= 0) {
        alert("Game over");
        reset();
    }
};

//button reset
$(".btn").on('click', function(){
    score = 0;
    updateScore();
    reset()
})


