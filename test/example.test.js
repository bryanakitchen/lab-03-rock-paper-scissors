// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});
