let playerWins = 0;
let computerWins = 0;
let ties = 0;
let totalRounds = 10;
let currentRound = 1;

function playRound(playerChoice){
    const choices = ['R', 'P', 'S']
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

console.log('Round ${currentRound}');
console.log('Player: ${playerChoice}');
console.log('Computer: ${computerChoice}');

if(playerChoice == computerChoice){
    console.log('It\'s a tie!\n')
    ties++;
}else if (
    (playerChoice ==='R' && computerChoice === 'S')||
    (playerChoice ==='P' && computerChoice === 'R')||
    (playerChoice === 'S' && computerChoice === 'P')
){
    console.log('Player Wins!\n');
    playerWins++;
}else{
    console.log('Computer Wins!\n');
    computerWins++;
} 
currentRound++;
}

function playGame(){
    console.log('Welcome To Rock Paper Scissors Game');
    console.log('-----------------------------------');

    while(currentRound <= totalRounds){
        const playerChoice = prompt('Enter your choice (R/P/S):').toUpperCase();
        if(playerChoice === 'R' || playerChoice === 'P' || playerChoice === 'S'){
            playRound(playerChoice);
        }else{
            console.log('Invalid Choice. Please try again.\n');
        }
        }
    console.log('Game Over');
    console.log('---------');
    console.log('Player Wins: ${playerWins}');
    console.log('Computer Wins: ${computerWins}');
    console.log('Ties: ${ties}');

}

playGame();
