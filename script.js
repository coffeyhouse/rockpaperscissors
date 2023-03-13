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

    e.target.classList.add("button-clicked");

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

    setTimeout(() => {
        e.target.classList.remove("button-clicked");
      }, 100);
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
    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("id", "btn-container");

    const rockBtn = document.createElement("button");
    // rockBtn.textContent = "Rock";
    rockBtn.value = "rock";
    rockBtn.setAttribute("id", "btn-rock");

    const paperBtn = document.createElement("button");
    // paperBtn.textContent = "Paper";
    paperBtn.value = "paper";
    paperBtn.setAttribute("id", "btn-paper");

    const scissorsBtn = document.createElement("button");
    // scissorsBtn.textContent = "Scissors";
    scissorsBtn.value = "scissors";
    scissorsBtn.setAttribute("id", "btn-scissors");

    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);
    container.appendChild(btnContainer);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => button.addEventListener("click", playRound));
}

function setUpGame() {
    createPage();
    createButtons();
    createResultsDiv();
}

function createPage() {
    const hero = document.createElement("div");
    hero.setAttribute("id", "header");

    const header = document.createElement("h1");
    header.textContent = "The Rock, Paper, Scissors";
    hero.appendChild(header);

    const intro = document.createElement("p");
    intro.textContent = "Intro text here...";
    hero.appendChild(intro);

    container.appendChild(hero);

    const playerText = document.createElement("h2");
    playerText.textContent = "Make your selection"
    container.appendChild(playerText);
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