let computerScore = 0;
let playerScore = 0;
let gameResult = '';

const resultTextDiv = document.querySelector('#results');

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const playerSelectionCase = playerSelection.toLowerCase();

    if ((playerSelectionCase == 'rock' && computerSelection == 'paper')
        || (playerSelectionCase == 'paper' && computerSelection == 'scissors')
        || (playerSelectionCase == 'scissors' && computerSelection == 'rock')) {
        computerScore++;
        gameResult = 'You lose the round! ' + getOutcomeLine(computerSelection, playerSelection);

    } else if ((playerSelectionCase == 'rock' && computerSelection == 'scissors')
        || (playerSelectionCase == 'paper' && computerSelection == 'rock')
        || (playerSelectionCase == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        gameResult = 'You win the round! ' + getOutcomeLine(playerSelection, computerSelection);
        
    } else {
        playerScore++;
        computerScore++;
        gameResult = 'This round is a tie! You both chose ' + computerSelection + '.';
    }

    if (computerScore == 5 && playerScore == 5) {
        gameResult += '\r\nThe game is a tie!'
        inactivateButtons();
    } else if (computerScore == 5) {
        gameResult += '\r\nYou have lost the game!'
        inactivateButtons();
    } else if (playerScore == 5) {
        gameResult += '\r\nYou have won the game!'
        inactivateButtons();
    }

    const resultText = document.querySelector('#results>.text');
    resultText.setAttribute('style', 'white-space: pre;');
    resultText.textContent = 'Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore + ' | ';
    resultText.textContent += gameResult;
    return
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice
}

function getOutcomeLine(winner, loser) {
    const winnerFirstUppercase = winner.charAt(0).toUpperCase() + winner.slice(1);
    let verbForm = '';
    if (winner == 'scissors') {
        verbForm = 'beat'
    } else {
        verbForm = 'beats'
    }
    return winnerFirstUppercase + ' ' + verbForm + ' ' + loser + '.'
}

function inactivateButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach((button) => button.addEventListener('click', () => {
    playRound(button.value)
}))
