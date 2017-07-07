
// Music Group array ################
var musicGroups = ["devo", "banarama", "oingo boingo", "david bowie", "dead or alive", "the fixx", 'spandau ballet', "echo and the bunnymen", "the psychedelic furs", "tom tom club"];



// Answer array ################
var answers = [];
for (var i = 0; i < musicGroups.length; i++) {
    answers[i] = "_";
}

// var remainingLetters = randGroup.length;



// Game Loop ################
document.onkeyup = function () {
// Random group selection ################
var randGroup = musicGroups[Math.floor(Math.random() * musicGroups.length)];
}














// Press any key to begin
//     Random generate word from Array
//     Provide blanks equal to word length 
//     display letters chosen incorrectly
//     populate correctly corresponding to place in word in blanks
//     allow for 12 guesses
//         once letter is chosen, choosing again doesnt detract from guess count
//         correct guess doesnt detract from guess count 
//     game ends
//         if wrong, play sound and end game 
//         if correct, play sound and end game 
//             play artist name and a song
