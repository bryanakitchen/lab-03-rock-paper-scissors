// import functions and grab DOM elements
import { getRandomThrow, userWins } from './get-random-throw.js';

const playButton = document.querySelector('#playButton');
const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#losses');
const drawSpan = document.querySelector('#draws');
// const percentSpan = document.querySelector('#percentage');
const resetButton = document.querySelector('#resetButton');

// Initialize state - wins is 0, losses 0, ties 0, ... 
let wins = 0;
let losses = 0;
let draws = 0; 

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    // pulling the computer generated guess
    const randomGuess = getRandomThrow();
    // pulling the user selection upon click and turning into var.
    const checkedRadioButton = document.querySelector(':checked');
    const userGuess = checkedRadioButton.value;

    let total = wins + losses;

    if (userGuess === randomGuess) {
        draws++;
        drawSpan.textContent = draws;
        // percentSpan.textContent = `${(wins / total) * 100}%`;
    } else if (userWins(userGuess, randomGuess) === true) {
        wins++;
        winSpan.textContent = wins;
        // percentSpan.textContent = `${(wins / total) * 100}%`;
    } else if (userWins(userGuess, randomGuess) === false) {
        losses++;
        lossSpan.textContent = losses;
        // percentSpan.textContent = `${(wins / total) * 100}%`;
    } 
});

resetButton.addEventListener('click', () => {

});
