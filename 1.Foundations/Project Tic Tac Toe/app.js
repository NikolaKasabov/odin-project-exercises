const gameBoardDiv = document.querySelector('.game-board');
const resultContainerDiv = document.querySelector('.result-container');
const winnerNameEl = resultContainerDiv.querySelector('.text');
const newGameBtn = document.querySelector('.new-game-btn');


const gameBoard = (() => {
  let fields = Array(9).fill(null);

  function getFields() {
    return [...fields];
  }

  function setFields(fieldsArr) {
    fields = fieldsArr;
  }

  function resetFields() {
    fields = Array(9).fill(null);
  }

  return {
    getFields,
    setFields,
    resetFields,
  };
})();


const displayController = (() => {
  // Render the game board
  function updateBoard() {
    gameBoardDiv.innerHTML = '';

    gameBoard.getFields().forEach((fieldValue, index) => {
      const fieldEl = document.createElement('div');
      fieldEl.classList.add('field');
      if (fieldValue === null) {
        fieldEl.classList.add('empty');
      }
      fieldEl.dataset.index = index;
      fieldEl.innerText = fieldValue;

      gameBoardDiv.appendChild(fieldEl);
    });
  }

  function showWinner(name) {
    if (name === 'draw') {
      winnerNameEl.innerText = 'DRAW';
    } else {
      winnerNameEl.innerText = `The winner is: ${name}`;
    }

    resultContainerDiv.classList.remove('hidden');
  }

  function hideWinnerEl() {
    resultContainerDiv.classList.add('hidden');
  }

  return {
    updateBoard,
    showWinner,
    hideWinnerEl,
  };
})();

// initial game board creation
displayController.updateBoard();


function playerFactory(name, char) {
  const getName = () => name;
  const getChar = () => char;

  return {
    getName,
    getChar,
  };
}

const player1 = playerFactory('human', 'x');
const player2 = playerFactory('computer', 'o');


const gameActions = (() => {
  let activePlayer = player1;

  function switchPlayer() {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  }

  function emptyFieldClick(ev) {
    if (!ev.target.classList.contains('empty')) {
      return;
    }

    const index = parseInt(ev.target.dataset.index);
    const fields = gameBoard.getFields();
    fields[index] = activePlayer.getChar();
    gameBoard.setFields(fields);
    displayController.updateBoard();

    const winner = checkForWinner();
    if (winner) {
      gameBoardDiv.classList.add('not-clickable');
      displayController.showWinner(winner);
    } else {
      switchPlayer();
    }
  }

  // returns one of the following: the winner name, 'draw' or null if the game is not finished
  function checkForWinner() {
    const fields = gameBoard.getFields();
    let result = null;

    //  horizontal check
    for (let i = 1; i <= 7; i += 3) {
      if (fields[i - 1] === fields[i]
        && fields[i] === fields[i + 1]
        && fields[i] !== null) {
        result = activePlayer.getName();
        break;
      }
    }

    // vertical check
    if (result === null) {
      for (let i = 3; i <= 5; i++) {
        if (fields[i - 3] === fields[i]
          && fields[i] === fields[i + 3]
          && fields[i] !== null) {
          result = activePlayer.getName();
          break;
        }
      }
    }

    // diagonal check
    if (result === null) {
      if ((fields[0] === fields[4] && fields[4] === fields[8] && fields[4] !== null)
        || (fields[2] === fields[4] && fields[4] === fields[6] && fields[4] !== null)) {
        result = activePlayer.getName();
      }
    }

    // 'draw' check
    if (result === null) {
      // there are no 'null' fields
      if (!fields.some(val => val === null)) {
        result = 'draw';
      }
    }

    return result;
  }

  function newGame() {
    gameBoard.resetFields();
    activePlayer = player1;
    displayController.updateBoard();
    displayController.hideWinnerEl();
    gameBoardDiv.classList.remove('not-clickable');
  }

  return {
    emptyFieldClick,
    newGame,
  };
})();

// Add fields click listener on the parent element
gameBoardDiv.addEventListener('click', gameActions.emptyFieldClick);
newGameBtn.addEventListener('click', gameActions.newGame);
