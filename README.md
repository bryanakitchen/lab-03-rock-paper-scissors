# lab-03-rock-paper-scissors

## Rock Paper Scissors

### Goal

- User needs to be able to select: rock, paper, or scissors.
- Click a button to "call it"
- Track wins, losses, and draws

### State
- wins
- losses
- draws 
- total (?)

How do we show the state?
- display in divs' textContent property

### HTML Elements 

_State Changers_

- Radio button (with images)
- submit button

_State Viewers_

- win span
- loss span
- draw span
- total span
- message span?

How and when do we change the state?
- when user makes a selection and clicks the 'call it' button
    - on click:
        - If user beats computer:
            - increment the wins and increment total
        - If user loses to computer:
            - increment loss,
            - increment the total.
        - If user tied the computer:
            - increment the total

### BJK Notes - For Sudo Coding

In HTML: divs with spans that have IDs. (Add percent?).
Submit button. 
Input type='radio' * 3.  GROUP the inputs by naming them - name='options'. value='rock' etc.  put label elements around the radio buttons. img tag after input tag.  type CHECK into input tag.

In JS: grab DOM elements - buttons, rock, paper, scissors.
(log this out and check) 
Initialize state - wins is 0, losses 0, ties 0, ... 
Event listener - select random number.  convert random number to string.   create variable 
__Math.ceil(Math.random() * 3)__
 create if...else statement -
 RPS (represent by 1, 2, 3??).

 Determine which one is checked. document.querySelector(); pass via # or .

In CSS: checked radio button change to image.
style the image.
input[type='radio']:checked + img { transform: scale(), }
input[type='radio] {
display: none;
}

const checkedRadioButton = document.querySelector(':checked');

checkedRadioButton.value - console log it out

store that as the userGuess.

do if statement comparing userGuess to computerChoice.