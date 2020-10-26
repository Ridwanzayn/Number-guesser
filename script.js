let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = function() {
    return Math.floor(Math.random() * 9);
};

const compareGuesses = (human, comp, secret_target) => {
    const human_close = Math.abs(human - secret_target);
    const comp_close = Math.abs(comp - secret_target);

    if (human_close <= comp_close) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (str) => {
    if (str == 'human') {
        humanScore += 1;
    } else if (str == 'computer') {
        computerScore += 1;
    }
};

const advanceRound = function() {
    currentRoundNumber += 1;
};

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1