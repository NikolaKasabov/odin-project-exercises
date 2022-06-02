const selectButtons = document.querySelectorAll('.buttons-container .btn');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const logsEl = document.querySelector('.log-messages');
const winnerContainer = document.querySelector('.winner-container');
const winnerEl = document.querySelector('.winner');
const newGameBtn = document.querySelector('.winner-container .btn');

const choises = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let gameIsFinished = false;


selectButtons.forEach(btn => {
  btn.addEventListener('click', play);
});

newGameBtn.addEventListener('click', startNewGame);


function play(ev) {
  if (gameIsFinished) {
    return;
  }

  const playerSelection = ev.target.dataset.choise;
  const computerSelection = computerPlay().toLowerCase();

  const currentRoundResult = playRound(playerSelection, computerSelection);
  updateScores(currentRoundResult);
  updateUi(currentRoundResult);

  const winner = checkForWinner();
  if (winner) {
    showWinner(winner);
    gameIsFinished = true;
  }
}

function showWinner(winnerName) {
  winnerEl.innerText = winnerName;
  winnerContainer.classList.remove('hide');
}

function hideWinner() {
  winnerEl.innerText = '';
  winnerContainer.classList.add('hide');
}

function checkForWinner() {
  if (playerScore >= 5) {
    return 'Player';
  } else if (computerScore >= 5) {
    return 'Computer';
  } else {
    return null;
  }
}

function startNewGame() {
  gameIsFinished = false;
  resetScores();
  clearLogs();
  hideWinner();
  updateUi();
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function clearLogs() {
  logsEl.innerHTML = '';
}

function updateUi(currentLogMessage) {
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;

  if (currentLogMessage) {
    // create new message and add it to the logs element
    const newLog = document.createElement('p');
    newLog.innerText = currentLogMessage;
    logsEl.append(newLog);
  }
}

function updateScores(currentRoundResult) {
  if (currentRoundResult.includes('Win')) {
    playerScore++;
  } else if (currentRoundResult.includes('Lose')) {
    computerScore++;
  }
}

function computerPlay() {
  const index = Math.floor(Math.random() * 3);
  return choises[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection.toLowerCase() === 'rock') {
      return 'Draw';
    } else if (computerSelection.toLowerCase() === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else if (computerSelection.toLowerCase() === 'scissors') {
      return 'You Win! Rock beats Scissors';
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection.toLowerCase() === 'rock') {
      return 'You Win! Paper beats Rock';
    } else if (computerSelection.toLowerCase() === 'paper') {
      return 'Draw';
    } else if (computerSelection.toLowerCase() === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection.toLowerCase() === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else if (computerSelection.toLowerCase() === 'paper') {
      return 'You Win! Scissors beats Paper';
    } else if (computerSelection.toLowerCase() === 'scissors') {
      return 'Draw';
    }
  } else {
    return 'ERROR';
  }
}
