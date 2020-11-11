"use strict";

const choices = ["rock", "scissors", "paper"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

const container = document.querySelector("#container");
const roundResult = document.createElement("p");
container.appendChild(roundResult);

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "scissors") {
            roundResult.textContent = "You win. Rock beats scissors";
            return 1;
        }
        else if (computerSelection.toLowerCase() == "rock") {
            roundResult.textContent = "Tie.";
            return 0;
        }
        else {
            roundResult.textContent = "You lose. Paper beats rock.";
            return -1;
        }
        
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "paper") {
            roundResult.textContent = "You win. Scissors beats paper";
            return 1;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            roundResult.textContent = "Tie.";
            return 0;
        }
        else {
            roundResult.textContent = "You lose. Rock beats paper.";
            return -1;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            roundResult.textContent = "You win. Paper beats rock";
            return 1;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            roundResult.textContent = "Tie.";
            return 0;
        }
        else {
            roundResult.textContent = "You lose. Scissors beats paper.";
            return -1;
        }
    }
}

const score = document.querySelector("#score");
const scoreResult = document.createElement("p");

let scorePlayer = 0;
let scoreComputer = 0;
const winningScore = 5;

scoreResult.textContent = `Score: ${scorePlayer} - ${scoreComputer}`;
score.appendChild(scoreResult);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = computerPlay();
        const result = playRound(button.id, computerSelection);
        console.log(result);
        if (result === 1) scoreResult.textContent = `Score: ${++scorePlayer} - ${scoreComputer}`;
        else if (result === -1) scoreResult.textContent = `Score: ${scorePlayer} - ${++scoreComputer}`;

        if (scorePlayer === winningScore || scoreComputer === winningScore) {
            (scorePlayer > scoreComputer) ? alert("You won.") : alert("You lost");

            scorePlayer = 0;
            scoreComputer = 0;
            scoreResult.textContent = `Score: ${scorePlayer} - ${scoreComputer}`;
        }
    });
});

