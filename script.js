let playerWins = 0;
let computerWins = 0;

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
        return "draw";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerWins++;
        return "win";
    }

    else {
        computerWins++;
        return "lose"
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`
        Player wins: ${playerWins}
        Computer wins: ${computerWins}`)
    }

    if (playerWins > computerWins) {
        return "Winner!"
    }

    else if (playerWins === computerWins) {
        return "Draw!"
    }

    else {
        return "Loser!"
    }
}

console.log(game());