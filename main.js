function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameResult = '';
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make a selection: rock x paper x scissors');
        const computerSelection = getComputerChoice();
        console.log('Computer: '+ computerSelection);
        console.log('Player: '+ playerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result == 1) {
            playerScore++;
            console.log('You win the round! ' + roundOutcomeLine(playerSelection, computerSelection));
        } else if (result == 0){
            computerScore++;
            console.log('You lose the round! ' + roundOutcomeLine(computerSelection, playerSelection));
        } else {
            playerScore++;
            computerScore++;
            console.log('It\'s a tie! You both chose ' + computerSelection);
        }
    }
    if (playerScore == computerScore) {
        gameResult = 'The game is a tie!'
    } else if (playerScore > computerScore) {
        gameResult = 'You won the game!'
    } else {
        gameResult = 'You lost the game!'
    }
    return gameResult
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    let roundResult = -1; // -1 -> tie, 0 -> loss, 1 -> win
    const playerSelectionCase = playerSelection.toLowerCase();
    if ((playerSelectionCase == 'rock' && computerSelection == 'paper')
    || (playerSelectionCase == 'paper' && computerSelection == 'scissors')
    || (playerSelectionCase == 'scissors' && computerSelection == 'rock')) {
        roundResult = 0;
    } else if ((playerSelectionCase == 'rock' && computerSelection == 'scissors')
    || (playerSelectionCase == 'paper' && computerSelection == 'rock')
    || (playerSelectionCase == 'scissors' && computerSelection == 'paper')) {
        roundResult = 1;
    }
    return roundResult
}

function roundOutcomeLine(winner, loser) {
    const winnerFirstUppercase = winner.charAt(0).toUpperCase() + winner.slice(1);
    let verbForm = '';
    if (winner == 'scissors') {
        verbForm = 'beat'
    } else {
        verbForm = 'beats'
    }
    return winnerFirstUppercase + ' ' + verbForm + ' ' + loser + '.'
}


console.log(game());
