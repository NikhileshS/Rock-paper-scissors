let scores = 1;
let computerscore = 1;


const playagains = document.createElement('button');
playagains.textContent = "PLAY AGAIN";

// Computer decision on rock paper and scissors 
function computerchoice() {
    let choice = ["rock","paper","scissor"];
    let compchoice = choice[Math.floor(Math.random()*choice.length)];
    return compchoice;
}

// This function initializes the Rock paper scissor game.
function game(playermove) {
    let computer = computerchoice();
    let player = playermove;
    const playerscore = document.querySelector('.player');
    const computerpoints = document.querySelector('.computer');
    const gametext = document.querySelector('.text');
    
    if( player == "rock" && computer == "scissor" || player == "paper" && computer == "rock" 
        || player == "scissor" && computer == "paper"){
            
            gametext.textContent = `player chose ${player} and computer chose ${computer}, player won`;
            playerscore.textContent = "PLAYER SCORE : "+ scores++ ;
        }

    else if( player == "rock" && computer == "paper" || player == "paper" && computer == "scissor" 
    || player == "scissor" && computer == "rock" ){
            gametext.textContent = `player chose ${player} and computer chose ${computer}, computer won`;
            computerpoints.textContent = "COMPUTER SCORE :" + computerscore++ ;
    }

    else{
        gametext.textContent = `Its a tie`;
    }
}

// assigning the buttons to perform their given activity
const rock = document.querySelector('.rock');
rock.addEventListener('click', choicerock);
const paper = document.querySelector('.paper');
paper.addEventListener('click',choicepaper);
const scissor = document.querySelector('.scissors');
scissor.addEventListener('click', choicescissor);

// functions which are used to play the game
function choicerock(){
    let player = 'rock';
    let computer = computerchoice();
    plays(player); 
}

function choicepaper(){
    let player = 'paper';
    let computer = computerchoice();
    plays(player); 
}

function choicescissor(){
    let player = 'scissor';
    let computer = computerchoice();
    plays(player); 
}

// This is used to check the score to decide if the player has won or not
function plays(playermove){
    const gametext = document.querySelector('.text');
    const trys = document.querySelector('.playagain');
    if( scores === 6){
        gametext.textContent = "You have scored 5 points you win";
        trys.appendChild(playagains)
        playagains.addEventListener('click', playagain);
    }
    else if( computerscore === 6){
        gametext.textContent = "Computer have scored 5 points you lose";
        trys.appendChild(playagains)
        playagains.addEventListener('click', playagain);
    }
    else{
        game(playermove);
    }
}

// This function resets the game to its original state
function playagain(){

    const playerscore = document.querySelector('.player');
    const computerpoints = document.querySelector('.computer');
    const gametext = document.querySelector('.text');
    const trys = document.querySelector('.playagain');

    playerscore.textContent = 'PLAYER SCORE : 0';
    computerpoints.textContent = 'COMPUTER SCORE : 0';
    gametext.textContent = 'Pick your choice to play';

    trys.removeChild(playagains);

    scores = 1;
    computerscore = 1;
}

