const choises = ['Rock', 'Paper', 'Scissors'];

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

function play() {
  let playerScore = 0;
  let computerScore = 0;
  let playerChoise;

  for (let i = 0; i < 5; i++) {
    playerChoise = prompt('Enter your choise: rock, paper or scissors.');
    
    if (!playerChoise
      || (playerChoise.toLowerCase() !== 'rock'
      && playerChoise.toLowerCase() !== 'paper'
      && playerChoise.toLowerCase() !== 'scissors')) {
      alert('Incorrect choise!');
      return;
    } else {
      const computerChoise = computerPlay().toLowerCase();
      const roundResult = playRound(playerChoise.toLowerCase(), computerChoise);
      
      if(roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }

      console.log('===================================');
      console.log(`Round ${i + 1}:`);
      console.log(`Your choise: ${playerChoise.toLowerCase()}. Computer's choise: ${computerChoise}.`);
      console.log(roundResult);
      console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
      console.log('===================================');
    } 
  }

  if(playerScore === computerScore) {
    console.log('Draw');
  } else if(playerScore > computerScore) {
    console.log('You win!');
  } else if(playerScore < computerScore) {
    console.log('You lose!');
  }

}

play();
