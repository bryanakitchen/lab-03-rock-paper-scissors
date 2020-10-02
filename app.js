// import functions and grab DOM elements
import { getRandomThrow, userWins } from './get-random-throw.js';

const playButton = document.querySelector('#playButton');
const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#losses');
const drawSpan = document.querySelector('#draws');
const percentSpan = document.querySelector('#percentage');
const resetButton = document.querySelector('#resetButton');
console.log(resetButton)
// Initialize state - wins is 0, losses 0, ties 0, ... 
let wins = 0;
let losses = 0;
let draws = 0; 
let total = 0;
let percent = 0;
// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    // pulling the computer generated guess
    const randomGuess = getRandomThrow();
    total++;
    // pulling the user selection upon click and turning into var.
    const checkedRadioButton = document.querySelector(':checked');
    const userGuess = checkedRadioButton.value;
    
    
    if (userGuess === randomGuess) {
        draws++;
        drawSpan.textContent = draws;
    } else if (userWins(userGuess, randomGuess) === true) {
        wins++;
        winSpan.textContent = wins;
    } else if (userWins(userGuess, randomGuess) === false) {
        losses++;
        lossSpan.textContent = losses;
    }
    
    let winning = (wins / total) * 100;
    percent = Math.round(winning);
    console.log(wins, losses, draws, total, percent)
    percentSpan.textContent = `${percent}%`;
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    total = 0;
    percent = 0;
    lossSpan.textContent = losses;
    winSpan.textContent = wins;
    drawSpan.textContent = draws;
    percentSpan.textContent = `${percent}%`;
});