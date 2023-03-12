let playerWins = 0;
let computerWins = 0;
let round = 0;

const container = document.querySelector("#container");
const results = document.createElement("div");

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
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(e) {
    round++;
    const playerSelection = e.target.value;
    const computerSelection = getComputerChoice();
    const resultText = document.createElement("p");
    let result;

    if (playerSelection === computerSelection) {
        result = "Draw";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerWins++;
        result = "Win";
    }

    else {
        computerWins++;
        result = "Lose";
    }

    resultText.textContent = `Round ${round} | ${result}! | ${playerWins}-${computerWins} | ${playerSelection} vs. ${computerSelection}`;
    results.appendChild(resultText);

    const winner = checkWinner();

    if (winner) {
        const win = document.createElement("p");
        win.style.fontWeight = "600";
        win.textContent = `THE WINNER IS... ${winner.toUpperCase()}`;
        results.appendChild(win);
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => button.setAttribute("disabled", true));
}

function checkWinner() {
    if (playerWins === 5) {
        return "player";
    }

    else if (computerWins === 5) {
        return "computer";
    }

    else {
        return null
    }
}

function createButtons() {
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.value = "rock";

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.value = "paper";

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.value = "scissors";

    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => button.addEventListener("click", playRound));
}

function setUpGame() {
    createButtons();
    createResultsDiv();
}

function createResultsDiv() {
    container.appendChild(results);

    const header = document.createElement("h4");
    header.textContent = "Results";
    results.appendChild(header);

}



// function game() {
//     for (let i = 0; i < 5; i++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
//         console.log(`Round ${i + 1}: ` + playRound(playerSelection, computerSelection) + ` (${playerSelection} vs. ${computerSelection})`);
//     }

//     if (playerWins > computerWins) {
//         return "Winner!"
//     }

//     else if (playerWins === computerWins) {
//         return "Draw!"
//     }

//     else {
//         return "Loser!"
//     }
// }

// console.log(game() + ` | Final score: ${playerWins}-${computerWins}`);


setUpGame();