// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow, userWins } from '../get-random-throw.js';

const test = QUnit.test;

test('test should return true if a string is generated.', (expect) => {

    const actual = getRandomThrow();

    expect.equal(typeof actual, 'string');
});

test('test should return true when rock beats paper.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userWins('rock', 'paper');
    const expected = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
