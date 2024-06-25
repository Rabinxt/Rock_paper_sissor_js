
const UserChoiceImg = document.getElementById('UserChoiceImg');
const ComputerChoiceDisplay = document.getElementById('ComputerChoice');
const ComputerChoiceImg = document.getElementById('ComputerChoiceImg');
const ResultDisplay = document.getElementById('Result');
const PossibleChoices = document.querySelectorAll('.btn'); 
let UserChoice;
let ComputerChoice;

// Adding event listeners to each button
PossibleChoices.forEach(button => button.addEventListener('click', function() {
    UserChoice = this.id;

    // Set image source based on user choice
    if (UserChoice === 'Rock') {
        UserChoiceImg.src = "rock.png";
    } else if (UserChoice === 'Paper') {
        UserChoiceImg.src = "paper.png";
    } else if (UserChoice === 'Scissors') {
        UserChoiceImg.src = "scissors.png";
    }

    generateComputerChoice();
    giveResult();
}));

// Function to generate computer's choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * PossibleChoices.length);
    if (randomNumber === 0) {
        ComputerChoice = "Rock";
        ComputerChoiceImg.src = "rock.png";
    } else if (randomNumber === 1) {
        ComputerChoice = "Paper";
        ComputerChoiceImg.src = "paper.png";
    } else if (randomNumber === 2) {
        ComputerChoice = "Scissors";
        ComputerChoiceImg.src = "scissors.png";
    }
}

// Function to determine and display result
function giveResult() {
    let Result;
    if (UserChoice === ComputerChoice) {
        Result = "It's a Draw!";
    } else if (
        (UserChoice === 'Rock' && ComputerChoice === 'Scissors') ||
        (UserChoice === 'Paper' && ComputerChoice === 'Rock') ||
        (UserChoice === 'Scissors' && ComputerChoice === 'Paper')
    ) {
        Result = "You Won!";
    } else {
        Result = "You Lost!";
    }
    ResultDisplay.textContent = Result;
}
const resetButton = document.getElementById('ResetBtn');
resetButton.addEventListener('click', function() {
    UserChoiceImg.src = "animation.gif";
    ComputerChoiceImg.src = "animation.gif";
    ResultDisplay.textContent = "";
    UserChoice = null;
    ComputerChoice = null;
});
