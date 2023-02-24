function getComputerChoice() {
    let randomNumber = getRandomNumber();

    switch (randomNumber) {
        case 1:
            console.log("rock")
            break;

        case 2:
            console.log("paper")
            break;

        case 3:
            console.log("scissors")
            break;
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

getComputerChoice();