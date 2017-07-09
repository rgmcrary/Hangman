// Var Declarations ##########
var randGroup;
var answer;
var remainingLetters;
var guessesLeft;
var guesses;
var artistSong;
var audioPlaying;


var musicGroups = [
    { name: "devo", song: "whip it", pic: "devo.jpg", music: "whip_it.m4a" },
    { name: "bananarama", song: "venus", pic: "bananarama.jpg", music: "venus.m4a" },
    { name: "wham", song: "wake me up", pic: "wham.jpg", music: "wake_me_up.m4a" },
    { name: "blondie", song: "heart of glass", pic: "blondie.jpg", music: "heart_of_glass.m4a" },
    { name: "abc", song: "the look of love", pic: "abc.jpg", music: "look_of_love.m4a" },
    { name: "animotion", song: "obsession", pic: "animotion.jpg", music: "obsession.m4a" },
    { name: "berlin", song: "the metro", pic: "berlin.jpg", music: "metro.m4a" },
    { name: "eurythmics", song: "here comes the rain again", pic: "eurythmics.jpg", music: "here_comes_the_rain_again.m4a" },
    { name: "inxs", song: "suicide blond", pic: "inxs.jpg", music: "suicide_blond.m4a" },
    { name: "ministry", song: "revenge", pic: "ministry.jpg", music: "revenge.m4a" },
];

var wins = 0;
var losses = 0;

// Game Object ##########
var game = {
    start: function () {

        // Random group selection ################
        document.getElementById("restartButton").style.display = "none";
        randGroup = musicGroups[Math.floor(Math.random() * musicGroups.length)];

        // Answer array ################
        answer = [];
        for (var i = 0; i < randGroup.name.length; i++) {
            answer[i] = "_";
        }
        remainingLetters = randGroup.name.length;
        guessesLeft = 12;

        // Guesses array ############
        guesses = [];

        //  Artist/Song Reveal ###########
        artistSong = randGroup.name + " - " + randGroup.song;

        document.getElementById("gameBoard").innerHTML = answer.join(" ");
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = guesses;
        document.getElementById("result").innerHTML = "";
        document.getElementById("reveal").innerHTML = "";
        document.getElementById("bandPic").innerHTML = "";
        document.getElementById("result").appendChild = "";
        audioPlaying = false;
    },

    takeTurn: function (event) {
        // Game Loop ################
        var guess = event.key;
        if (remainingLetters > 0 && guessesLeft > 0 && guesses.indexOf(guess) === -1) {
            for (var j = 0; j < randGroup.name.length; j++) {
                if (randGroup.name[j] === guess) {
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

        if (remainingLetters === 0 && guessesLeft > 0 && audioPlaying === false) {
            wins++;
            game.updateDisplay("YOU DID IT!!!", "win");
        }

        if (remainingLetters > 0 && guessesLeft === 0 && audioPlaying === false) {
            losses++;
            game.updateDisplay("TOUGH LUCK...BETTER LUCK NEXT TIME", "loss");
        }
    },

    updateDisplay: function (resultText, updateType) {
        document.getElementById("result").innerHTML = resultText;
        document.getElementById("reveal").innerHTML = artistSong.toUpperCase();
        document.getElementById("bandPic").innerHTML = "<img src = 'assets/images/" + randGroup.pic + "'>";
        var audio = new Audio("assets/audio/" + randGroup.music);
        document.getElementById("restartButton").style.display = "block";
        if (updateType === "win") {
            document.getElementById("wins").innerHTML = wins;
        } else {
            document.getElementById("losses").innerHTML = losses;
        }
        audioPlaying = true;
        audio.play();
    }
};

document.body.addEventListener("keyup", game.takeTurn);

document.getElementById("restartButton").addEventListener("click", game.start);



