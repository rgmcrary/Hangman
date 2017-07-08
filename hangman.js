
// Arrays ################
var musicGroups = ["devo", "bananarama", "wham", "blondie", "abc", "animotion", 'berlin', "eurythmics", "inxs", "ministry"];
var songs = ["whip it", "venus", "wake me up", "atomic", "poison arrow", "obsession", "the metro", "here comes the rain", "suicide blond", "revenge"];
var pics = [];
var audio = [];

// Var Declarations  ############
var wins = 0;
var losses = 0;
var randGroup;
var answer;
var remainingLetters;
var guessesLeft;
var guesses;
var artistSong;



function gameStart() {
    // Random group selection ################
    document.getElementById("restartButton").style.display = "none";
    randGroup = musicGroups[Math.floor(Math.random() * musicGroups.length)];
    console.log(randGroup);

    // Answer array ################
    answer = [];
    for (var i = 0; i < randGroup.length; i++) {
        answer[i] = "_";
    }
    remainingLetters = randGroup.length;
    guessesLeft = 12;

    // Guesses array ############
    guesses = [];

    //  Artist/Song Reveal ###########
    artistSong = randGroup + " - " + songs[musicGroups.indexOf(randGroup)];

    // Image Reveal ##############
    // var pics = pics[musicGroups.indexOf(randGroup)];

    document.getElementById("gameBoard").innerHTML = answer.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = guesses;
    document.getElementById("result").innerHTML = "";
    document.getElementById("reveal").innerHTML = "";
    document.getElementById("bandPic").innerHTML = "";
    document.getElementById("result").appendChild = "";
}



function takeTurn(event) {
    // Game Loop ################
    var guess = event.key;
    if (remainingLetters > 0 && guessesLeft > 0 && guesses.indexOf(guess) === -1) {
        for (var j = 0; j < randGroup.length; j++) {
            if (randGroup[j] === guess) {
                answer[j] = guess;
                remainingLetters--;
            }
        }
        if (answer.indexOf(guess) === -1) {
            guessesLeft--;
        }
        guesses.push(guess);
        document.getElementById("gameBoard").innerHTML = answer.join(" ").toUpperCase();
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = guesses.join(" ").toUpperCase();
    }
    if (remainingLetters === 0 && guessesLeft > 0) {
        wins++;
        document.getElementById("result").innerHTML = "YOU DID IT!!!";
        document.getElementById("reveal").innerHTML = artistSong.toUpperCase();
        // document.getElementById("bandPic").innerHTML = pics[musicGroups.indexOf(randGroup)];
        // document.getElementById("result").appendChild = audio;
        document.getElementById("restartButton").style.display = "block";
        document.getElementById("wins").innerHTML = wins;
    }

    if (remainingLetters > 0 && guessesLeft === 0) {
        losses++;
        document.getElementById("result").innerHTML = "TOUGH LUCK...BETTER LUCK NEXT TIME";
        document.getElementById("reveal").innerHTML = artistSong.toUpperCase();
        // document.getElementById("bandPic").innerHTML = pics[musicGroups.indexOf(randGroup)];
        // document.getElementById("result").appendChild = audio;
       document.getElementById("restartButton").style.display = "block";
          document.getElementById("losses").innerHTML = losses;
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
// Scoring
    // # of wins 
    // # of loses 

