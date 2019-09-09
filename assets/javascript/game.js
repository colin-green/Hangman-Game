// set important variables

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// list of random words to be picked from (https://www.randomlists.com/)
var alphabet = ["suggestion",
    "oranges",
    "flowers",
    "drain",
    "surprise",
    "smile",
    "compete",
    "horn",
    "cows",
    "military",
    "difficult",
    "obtain",
    "spiritual",
    "internal",
    "steel",
    "baby",
    "lethal",
    "hope",
    "salty",
    "scarce",
    "trade",
    "start",
    "grotesque",
    "full",
    "eye",
    "high",
    "wreck",
    "tiger",
    "daughter",
    "wobble",
    "payment",
    "kettle",
    "oval",
    "magic",
    "perform",
    "unkempt",
    "spoil",
    "ghost",
    "smash",
    "callous",
    "temporary",
    "repair",
    "efficient",
    "rinse",
    "cause",
    "arrogant",
    "swim",
    "quince",
    "feeble",
    "immense",
    "refuse",
    "hands",
    "likeable",
    "gold",
    "creepy",
    "beam",
    "sheep",
    "squalid",
    "kindly",
    "plate",
    "jolly",
    "shrug",
    "flight",
    "protect",
    "edge",
    "steadfast",
    "joyous",
    "thumb",
    "launch",
    "coat",
    "flimsy",
    "grumpy",
    "lively",
    "abject",
    "romantic",
    "confuse",
    "tasteful",
    "wire",
    "vulgar",
    "offbeat",
    "kick",
    "envious",
    "walk",
    "dress",
    "resolute",
    "horse",
    "cute",
    "seemly",
    "true",
    "hobbies",
    "snake",
    "quirky",
    "wipe",
    "meal",
    "rod",
    "soak",
    "disapprove",
    "film",
    "lumber",
    "letters",
    "better",
    "nod",
    "carpenter",
    "unique",
    "drain",
    "cracker",
    "medical",
    "destroy",
    "flag",
    "matter",
    "impolite",
    "hook",
    "man",
    "pushy",
    "joyous",
    "wicked",
    "faded",
    "shocking",
    "fold",
    "shelter",
    "flaky",
    "vivacious",
    "tiresome",
    "battle",
    "present",
    "boorish",
    "pump",
    "workable",
    "plug",
    "illustrious",
    "bit",
    "concerned",
    "turkey",
    "look",
    "brawny",
    "important",
    "yawn",
    "guttural",
    "crate",
    "pointless",
    "unsuitable",
    "colorful",
    "ghost",
    "petite",
    "food",
    "head",
    "pass",
    "weather",
    "silent",
    "soup",
    "hilarious",
    "gratis",
    "stage",
    "thaw",
    "trip",
    "straight",
    "number",
    "dock",
    "addicted",
    "average",
    "channel",
    "snake",
    "slip",
    "loutish",
    "maddening",
    "available",
    "fair",
    "labored",
    "hanging",
    "hangman",
    "overwrought",
    "manage",
    "jail",
    "stone",
    "dreary",
    "challenge",
    "hands",
    "embarrass",
    "want",
    "duck",
    "surprise",
    "lamentable",
    "free",
    "scrawny",
    "lackadaisical",
    "turn",
    "many",
    "position",
    "towering",
    "texture",
    "crush",
    "previous",
    "painful",
    "ruin",
    "sip",
    "dinosaur",
    "nonchalant"];

// initializing the user key variable
var userKey2 = "";

// picking a random word
var targetWord = alphabet[Math.floor(Math.random()*alphabet.length)];

// converting the picked word into blank spaces for hangman
var blankSpaces = [];
for (i = 0; i < targetWord.length; i++) {
    blankSpaces.push("_");
}

// making sure everything is working
console.log("Blank spaces: " + blankSpaces);
console.log("Answer: " + targetWord);
console.log("Letter test: first letter is " + targetWord[0]);

// using jQuery to assign the different divs to variables and then changing their text (starting text)
var wordDisplayDiv = $("#wordDisplay");
wordDisplayDiv.text("Try to guess the word: " + blankSpaces);

var winCountDiv = $("#winCount");
winCountDiv.text("Wins: " + winCount);

var lossCountDiv = $("#lossCount");
lossCountDiv.text("Losses: " + lossCount);

var guessesLeftDiv = $("#guessesLeft");
guessesLeftDiv.text("You have " + guessesLeft + " incorrect guesses remaining.");

var guessesSoFarDiv = $("#guessesSoFar");
guessesSoFarDiv.text("Here are your incorrect guesses so far: [" + guessesSoFar + "]");

// function to reset the game after a win or loss
function resetGame() {

    // reset remaining guesses to 10 and reset the text on the div
    guessesLeft = 10;
    guessesLeftDiv.text("You have " + guessesLeft + " incorrect guesses remaining.");

    // reset guesses so far to an empty array and reset the text on the div
    guessesSoFar = [];
    guessesSoFarDiv.text("Here are your incorrect guesses so far: [" + guessesSoFar + "]");

    // pick a new random word
    targetWord = alphabet[Math.floor(Math.random()*alphabet.length)];

    // reset the blankSpaces array to empty and make new blank spaces
    blankSpaces = [];
    for (i = 0; i < targetWord.length; i++) {
    blankSpaces.push("_");
    }

    // reset the text of the wordDisplay div
    wordDisplayDiv.text("Try to guess the word: " + blankSpaces);
}

// function to get a user key input
function getKey(event) {

    // gets the key code from the user key input
    var userKey1 = event.keyCode;

    // converts the key code into a string of the letter they pressed
    var userKey2 = String.fromCharCode(userKey1);

    // if the target word includes the key that the user pressed...
    if (targetWord.includes(userKey2)) {

        // go through each letter of the word and see which one(s) is/are the one(s) the user pressed
        for (i = 0; i < targetWord.length; i++) {
            if (userKey2 == targetWord[i]) {
                console.log("You guessed a correct letter! (" + userKey2 + ")")

                // change that blank space to the letter that they pressed and update the div
                blankSpaces[i] = userKey2;
                wordDisplayDiv.text("Try to guess the word: " + blankSpaces);
            }
        }
        
    } else { //if the target word does not include the key that the user pressed...
        console.log("You guessed an incorrect letter. (" + userKey2 + ")");
        // decrement remaining guesses by 1 and update the div
        guessesLeft -= 1;
        guessesLeftDiv.text("You have " + guessesLeft + " incorrect guesses remaining.");

        // add the key that they pushed to the "incorrect guesses so far" array and update the div
        guessesSoFar.push(userKey2);
        guessesSoFarDiv.text("Here are your incorrect guesses so far: [" + guessesSoFar + "]");
    }

    // if the blank spaces aren't blank anymore (there are no underscores)...
    if (blankSpaces.includes("_") == false) {
        alert("You win! The word was '" + targetWord + "'.");

        // increment the win counter by 1 and update the div
        winCount += 1;
        winCountDiv.text("Wins: " + winCount);

        // run the resetGame function
        resetGame();

        // make sure everything is still good
        console.log("Blank spaces: " + blankSpaces);
        console.log("Answer: " + targetWord);
        console.log("Letter test: first letter is " + targetWord[0]);
    }

    // just something I added so it wouldn't say "You have 1 guesses remaining"
    if (guessesLeft == 1) {
        guessesLeftDiv.text("You have 1 incorrect guess remaining. Make it count!");
    }

    // if the user has no guesses remaining AND there are still blank spaces left, they lose
    if (guessesLeft == 0 && blankSpaces.includes("_")) {

        // increment the loss counter by 1 and update the div
        lossCount += 1;
        lossCountDiv.text("Losses: " + lossCount);

        alert("Aww, you lost! I was thinking of the word '" + targetWord + "'. Feel free to try again!");

        // run the resetGame function
        resetGame();
    }
}