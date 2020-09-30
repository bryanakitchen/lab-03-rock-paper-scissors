// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const checkedRadioButton = document.querySelector(':checked');
const playButton = document.querySelector('#playButton');
const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#losses');
const drawSpan = document.querySelector('#draws');
const percent = document.querySelector('#percentage');
const resetButton = document.querySelector('#resetButton');

// Initialize state - wins is 0, losses 0, ties 0, ... 
let wins = 0;
let losses = 0;
let draws = 0; 

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
     const randomNumber = getRandomThrow();
     
});

// checkedRadioButton.value - console log it out
// store that as the userGuess.
// do if statement comparing userGuess to computerChoice.
resetButton.addEventListener('click', () => {
    console.log(resetButton);
});
