
// Music Group array ################
var musicGroups = ["devo", "banarama", "oingo boingo", "david bowie", "dead or alive", "the fixx", 'spandau ballet', "echo and the bunnymen", "the psychedelic furs", "tom tom club"];
var songs = ["whip it", "venus", "dead man's party", "let's dance", "brand new lover", "one thing leads to another", "poison arrow", "lips like sugar", "pretty in pink", "genius of love"];






document.onkeyup = function () {

    // Random group selection ################
    var randGroup = musicGroups[Math.floor(Math.random() * musicGroups.length)];
    console.log(randGroup);

    // Answer array ################
    var answer = [];
    for (var i = 0; i < randGroup.length; i++) {
        answer[i] = "_";
        console.log(answer);
    }
    var remainingLetters = randGroup.length;
    var guessesLeft = 12;

    // Game Loop ################
    while (remainingLetters > 0 && guessesLeft > 0) {
        document.write(answer.join(""));
        var guess = document.onkeypress;
        // if (guess === null) {
        //     break;
        // }
        // else 
        // if (guess.length !== 1) {
        //     alert("Please enter only 1 letter.");
        // }
        // else {
        for (var j = 0; j < randGroup.length; j++) {
            if (randGroup[j] === guess) {
                answer[j] = guess;
                remainingLetters--;
            }
            else {
                guessesLeft--;
                // }
            }
        }
    }
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
