export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else 
    if (randomNumber === 2) {
        computerChoice = 'paper';
    } else
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }

    return computerChoice;
};