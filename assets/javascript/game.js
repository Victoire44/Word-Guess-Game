// List of electro bands
const words = ["Disclosure","Guetta","Walker","Daftpunk", "Justice", "Diplo"];

// Pick a random word
const word = words[Math.floor(Math.random() * words.length)];
const wordLower = word.toLowerCase();
console.log(word)

// on key press 
document.addEventListener("keypress", (event) => {
    const letter = event.key;
    const isInWord = wordLower.includes(letter); 
   console.log(isInWord)
})
