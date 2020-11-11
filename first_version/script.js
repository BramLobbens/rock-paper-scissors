"use strict";

const choices = ["rock", "scissors", "paper"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "scissors") {
            console.log("You win. Rock beats scissors");
            return 1;
        }
        else if (computerSelection.toLowerCase() == "rock") {
            console.log("No winner.");
            return 0;
        }
        else {
            console.log("You lose. Paper beats rock.");
            return -1;
        }
        
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "paper") {
            console.log("You win. Scissors beats paper");
            return 1;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            console.log("No winner.");
            return 0;
        }
        else {
            console.log("You lose. Rock beats paper.");
            return -1;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("You win. Paper beats rock");
            return 1;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            console.log("No winner.");
            return 0;
        }
        else {
            console.log("You lose. Scissors beats paper.");
            return -1;
        }
    }
}

function game(num) {

    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < num; i++) {

        const playerSelection = prompt();
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);
        if (result === 1) scorePlayer++;
        else if (result === -1) scoreComputer++;
    }

    if (scorePlayer > scoreComputer) console.log("You won");
    else if (scorePlayer === scoreComputer) console.log("Tie");
    else console.log("You lost");
    console.log(`${scorePlayer} - ${scoreComputer}`);
}

game(5);