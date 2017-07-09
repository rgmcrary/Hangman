
// Arrays ################
var musicGroups = ["devo", "bananarama", "wham", "blondie", "abc", "animotion", 'berlin', "eurythmics", "inxs", "ministry"];
var songs = ["whip it", "venus", "wake me up", "heart of glass", "the look of love", "obsession", "the metro", "here comes the rain again", "suicide blond", "revenge"];
var pics = ["devo.jpg", "bananarama.jpg", "wham.jpg", "blondie.jpg", "abc.jpg", "animotion.jpg", 'berlin.jpg', "eurythmics.jpg", "inxs.jpg", "ministry.jpg"];
var music = ["whip_it.m4a", "venus.m4a", "wake_me_up.m4a", "heart_of_glass.m4a", "look_of_love.m4a", "obsession.m4a", "metro.m4a", "here_comes_the_rain_again.m4a", "suicide_blond.m4a", "revenge.m4a"];

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
        updateDisplay("YOU DID IT!!!", "win");
    }

    if (remainingLetters > 0 && guessesLeft === 0) {
        losses++;
        updateDisplay("TOUGH LUCK...BETTER LUCK NEXT TIME", "loss");
    }
}

function updateDisplay(resultText, updateType) {
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("reveal").innerHTML = artistSong.toUpperCase();
    document.getElementById("bandPic").innerHTML = "<img src = 'assets/images/" + pics[musicGroups.indexOf(randGroup)] + "'>";
    var audio = new Audio("assets/audio/" + music[musicGroups.indexOf(randGroup)]);
    document.getElementById("restartButton").style.display = "block";
    if (updateType === "win") {
        document.getElementById("wins").innerHTML = wins;
        // var audio = new Audio("assets/audio/" + celebration.wav");
    } else {
        document.getElementById("losses").innerHTML = losses;
        // var audio = new Audio("assets/audio/boo.wav");
    }
    audio.play();
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

