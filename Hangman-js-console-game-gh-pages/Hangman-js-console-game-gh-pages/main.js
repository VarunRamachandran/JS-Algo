"use strict";
console.log("Welcome to hangman type help(); for instructions!");

let quiz = {};
var dashes = [];
var played = [];
var lives = 3;
var lifeLost = false;
var found = 0;
var message = "";
let repeat;

function help() {
    console.log("Type start(); to start a new game\nType guess('your guessed letter goes here'); to make a guess\nTo check how many lives you have type lives\nYou start with "+lives+" lives");
}
help();

/*LIST OF POTENTIAL PUZZLES AS OBJECTS*/

/*ANIMAL OBJECTS*/
var cat = {
    puzzle: ["C", "A", "T"],
    category: "Animals",
    player: new Array(3),
    lives: lives
}

var bear = {
    puzzle: ["B", "E", "A", "R"],
    category: "Animals",
    player: new Array(4),
    lives: lives
}

var cheetah = {
    puzzle: ["C", "H", "E", "E", "T", "A", "H"],
    category: "Animals",
    player: new Array(7),
    lives: lives
}

var giraffe = {
    puzzle: ["G", "I", "R", "A", "F", "F", "E"],
    category: "Animals",
    player: new Array(7),
    lives: lives
}

var hyena = {
    puzzle: ["H", "Y", "E", "N", "A"],
    category: "Animals",
    player: new Array(5),
    lives: lives
}

/*SINGER OBJECTS*/
var taylor = {
    puzzle: ["T", "A", "Y", "L", "O", "R", " ", "S", "W", "I", "F", "T"],
    category: "Singer",
    player: new Array(12),
    lives: lives
}

var avril = {
    puzzle: ["A", "V", "R", "I", "L", " ", "L", "A", "V", "I", "G", "N", "G", "E"],
    category: "Singer",
    player: new Array(14),
    lives: lives
}

var justin = {
    puzzle: ["J", "U", "S", "T", "I", "N", " ", "T", "I", "M", "B", "E", "R", "L", "A", "K", "E"],
    category: "Singer",
    player: new Array(15),
    lives: lives
}

var drake = {
    puzzle: ["D", "R", "A", "K", "E"],
    category: "Singer",
    player: new Array(5),
    lives: lives
}

var cailee = {
    puzzle: ["C", "A", "I", "L", "E", "E", " ", "R", "A", "E"],
    category: "Singer",
    player: new Array(10),
    lives: lives
}

/*NAMES OBJECTS*/
var shannon = {
    puzzle: ["S", "H", "A", "N", "N", "O", "N"],
    category: "Names",
    player: new Array(7),
    lives: lives
}

var carlie = {
    puzzle: ["C", "A", "R", "L", "I", "E"],
    category: "Names",
    player: new Array(6),
    lives: lives
}

var rahul = {
    puzzle: ["R", "A", "H", "U", "L"],
    category: "Names",
    player: new Array(5),
    lives: lives
}

var stephanie = {
    puzzle: ["S", "T", "E", "P", "H", "A", "N", "I", "E"],
    category: "Names",
    player: new Array(9),
    lives: lives
}

var briony = {
    puzzle: ["B", "R", "I", "O", "N", "Y"],
    category: "Names",
    player: new Array(6),
    lives: lives
}

/*TV-SHOW OBJECTS*/
var riverdale = {
    puzzle: ["R", "I", "V", "E", "R", "D", "A", "L", "E"],
    category: "Tv-Shows",
    player: new Array(9),
    lives: lives
}

var pokemon = {
    puzzle: ["P", "O", "K", "E", "M", "O", "N"],
    category: "Tv-Shows",
    player: new Array(7),
    lives: lives
}

var himym = {
    puzzle: ["H", "O", "W", " ", "I", " ", "M", "E", "T", " ", "Y", "O", "U", "R", " ", "M", "O", "T", "H", "E", "R"],
    category: "Tv-Shows",
    player: new Array(21),
    lives: lives
}

var gameOfThrones = {
    puzzle: ["G", "A", "M", "E", " ", "O", "F", " ", "T", "H", "R", "O", "N", "E", "S"],
    category: "Tv-Shows",
    player: new Array(15),
    lives: lives
}

var strangerThings = {
    puzzle: ["S", "T", "R", "A", "N", "G", "E", "R", " ", "T", "H", "I", "N", "G", "S"],
    category: "Tv-Shows",
    player: new Array(15),
    lives: lives
}



/*LIST OF POTENTIAL PUZZLES IN AN ARRAY*/
var puzzles = [cat, bear, cheetah, giraffe, hyena, taylor, avril, justin, drake, cailee, shannon, carlie, rahul, stephanie, briony, riverdale, pokemon, himym, gameOfThrones, strangerThings];

/*NEW GAME / START FUNCTION*/
function start() {
    lives = 3;
    quiz = {};
    quiz = puzzles[Math.floor(Math.random() * puzzles.length)];

    dashes = (function (quiz) {
        let guess = [];

        for (var i = 0; i < quiz.puzzle.length; i++) {

            if (quiz.puzzle[i] == " ") {
                guess.push(" ");
            } else {
                guess.push("_");
            }

        }
        return guess;
    })(quiz);



    console.log("The category is " + quiz.category + ": \n" + dashes.join(" ") + "   lives: " + lives + ".");
    
    

}

/*GUESS FUNCTION*/
function guess(letter) {
    
    /*If the letter is repeated tell the user about it and do nothing: you can only lose a life on a letter once*/
    let capitalLetter = letter.toUpperCase();
    if(played.includes(capitalLetter)){
        
        repeat = true;
    } else {
        repeat = false;
    }
    
    
    played.push(letter.toUpperCase());
    
    /*FIRST LOOP: Assigns values if any match*/
    for (var i = 0; i < quiz.puzzle.length; i++) {
        
        if (letter.toUpperCase() == quiz.puzzle[i] && repeat == false) {
            dashes[i] = letter.toUpperCase();  
            
        } else {
           
           /*second loop will handle as this loop gives last value by deafult*/
        }

        
        
    }
    
    /*SECOND LOOP: returns a value based on if value exists or not...has a break to stop loop from returning last value by default*/
    for (var i = 0; i < quiz.puzzle.length; i++) {
        
        if (letter.toUpperCase() == quiz.puzzle[i]) {
            found = 1;
            break
            
            
        } else {
           
            found = 2;
        }
        
        
    }
    
    /*Use returned value to display message to the user accordingly YEAH!*/
    if(found == 1 && repeat == false) {
        message = "Yes there are " + played[played.length-1] + "s in the solution: \n" + dashes.join(" ") + "\nlives: " + lives + ".";
        console.log(message);
        message="";
        
    } else if(found == 2 && repeat == false) {
        lifeLost = true;
            if(lifeLost) {
                lives--;
            }
        lifeLost = false;
        
        message = "No there are no " + played[played.length-1] + "s in the solution: \n" + dashes.join(" ") + "\nlives: " + lives + ".";
        console.log(message);
        message= "";
        
        
    } else if(repeat == true) {
        
        message = "You already played this letter! Here is what you have: \n" + dashes.join(" ") + "\nlives: " + lives + ".";
        console.log(message);
        message = "";
    }
    
    /*STORING THE PLAYERS PROGRESS IN THE OBJECT ITSELF FOR FUTURE USE*/
    quiz.player = dashes.slice(0);
    
    /*ALWAYS END FUNCTION WITH A CHECK FOR WIN OR LOSE*/
    if (dashes.toString() === quiz.puzzle.toString()) {
            
        win();
    }

    if (lives == 0) {

        lose();
    }
    
    
    
    


}

/*RESET EVERYTHING if the player wins or loses*/
function gameOver() {
    quiz = {};
    dashes = [];
    played = [];
    lives = 3;
    lifeLost = false;
    found = 0;
    message = "";
}

/*WIN FUNCTION*/
function win() {
    console.log("WINNER WINNER CHICKEN DINNER");
    gameOver();
}

/*LOSE FUNCTION*/
function lose() {
    console.log("Sorry your out of lives! Type start(); to play again!");
    gameOver();
}

/*start game on page load*/
start();