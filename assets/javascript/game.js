var score = 0;
var guessesLeft;
var lettersGuesses;
var currentWord;
var randomWord;


// Array of countries
const words = ["France", "Germany", "Italy", "Australia", "Argentina", "Brazil", "England", "China", "Canada", "Bulgaria", "Columbia", "cuba", "Denmark", "estonia", "Finland", "Belgium", "Romania", "Senegal", "Serbia", "Singapore", "Slovenia", "Zambia", "Vietnam", "Turkey", "Thailand", "Taiwan", "Tunisia", "Sweden", "Spain", "Russia", "Paraguay", "Maldives"]
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

    // Pick a random word
    randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    currentWord = [];

    // Word with dashes
    for (i = 0; i < randomWord.length; i++) {
        currentWord.push("_");
    }
    updateCurrentWord();
}
reset();


// on key press listener
document.onkeyup = function (event) {
    // Check if the key pressed is a letter
    if (event.keyCode >= 49 && event.keyCode <= 90) {
        var userKey = event.key.toUpperCase();
        var isInWord = randomWord.includes(userKey);
        var isAlreadyFound = currentWord.includes(userKey);
    }
    
    // If the guessed letter is included in the random word, the dash is replaced by the letter
    if (isInWord && guessesLeft > 0 && !isAlreadyFound) {
        for (var i = 0; i < randomWord.length; i++) {
            if (userKey === randomWord[i]) {
                currentWord.splice(i, 1, userKey)
            }
        }
        updateCurrentWord();
        /* If the guessed letters are not include in the random word,
        they diplay into a list and the number of guesses letter descreases */
    } else if (!isInWord && !lettersGuesses.includes(userKey) && guessesLeft > 0) {
        lettersGuesses.push(userKey);
        updateLetters();
        guessesLeft--;
        updateNumberGuesses();
    }
    else if(lettersGuesses.includes(userKey) || isAlreadyFound){
        alert( userKey + " has already been pressed")
    }
    // If the random word is completed, the score increases and the game restarts
    if (!currentWord.includes("_")) {
        alert("Congratulations! You guessed the right country!");
        score++;
        updateScore();
        reset();
        /* If the random word is not completed before the end,
        it's game over and the game restart*/
    } else if (guessesLeft <= 0) {
        updateCurrentWord() 
        alert("Game over");
        // reset();
    }
}

// Button reset
$(".btn").on('click', function () {
    score = 0;
    updateScore();
    reset()
});