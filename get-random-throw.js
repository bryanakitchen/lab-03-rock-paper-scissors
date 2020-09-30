export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

export function userWins(userGuess, computerChoice) {
    if (userGuess === 'rock' && computerChoice === 'paper') {
        return true;
    } else if (userGuess === 'rock' && computerChoice === 'scissors') {
        return true;
    } else if (userGuess === 'paper' && computerChoice === 'rock') {
        return false;
    } else if (userGuess === 'paper' && computerChoice === 'scissors') {
        return false;
    } else if (userGuess === 'scissors' && computerChoice === 'rock') {
        return false;
    } else if (userGuess === 'scissors' && computerChoice === 'paper') {
        return true;
    } 
}