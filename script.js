function getComputerChoice() {
    let randomNumber = getRandomNumber();

    switch (randomNumber) {
        case 1:
            return "rock";

        case 2:
            return "paper";

        case 3:
            return "scissors";
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Computer choice: ${computerSelection} `)

    if (playerSelection === computerSelection) {
        console.log("Oh it's a draw!");
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "scissors"

playRound(playerSelection, computerSelection);