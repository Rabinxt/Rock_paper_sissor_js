let UserChoiceDisplay = document.getElementById('User Choice');
let ComputerChoiceDisplay = document.getElementById('Computer Choice');
let ResultDisplay= document.getElementById('Result');
const PossibleChoices=document.querySelectorAll('button');
let UserChoice ;
let ComputerChoice;

PossibleChoices.forEach(PossibleChoice => PossibleChoice.addEventListener('click' , e =>{
    UserChoice= e.target.id;
    UserChoiceDisplay.innerHTML = UserChoice;

    generateComputerChoice();
    Giveresult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * PossibleChoices.length);
    if(randomNumber === 0){
        ComputerChoice = "Rock" ;
    }
    if(randomNumber === 1){
        ComputerChoice = "Sissors" ;
    }
    if(randomNumber === 2){
        ComputerChoice = "Paper" ;
    }

    ComputerChoiceDisplay.innerHTML = ComputerChoice ;
}

function Giveresult(){
    if(UserChoice === ComputerChoice){
        Result = "It's a Draw!" ; 
    }
    if(UserChoice === 'Rock' && ComputerChoice === 'Paper'){
        Result = "You Lost !" ; 
    }
    if(UserChoice === 'Rock' && ComputerChoice === 'Sissor'){
        Result = "You Won!" ; 
    }
    if(UserChoice === 'Paper' && ComputerChoice === 'Rock'){
        Result = "You Won!" ; 
    }
    if(UserChoice === 'Paper' && ComputerChoice === 'Sissors'){
        Result = "You Lost !" ; 
    }
    if(UserChoice === 'Sissors' && ComputerChoice === 'Rock'){
        Result = "You Lost !" ; 
    }
    if(UserChoice === 'Sissors' && ComputerChoice === 'Paper'){
        Result = "You Won!" ; 
    }
    ResultDisplay.innerHTML = Result;
}
