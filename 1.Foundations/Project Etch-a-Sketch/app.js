const chooseSizeBtn = document.querySelector('.choose-size-btn');
const gridContainer = document.querySelector('.grid-container');


chooseSizeBtn.addEventListener('click', () => {
  let gridSize = parseInt(prompt('Enter grid size:'));
  if (!gridSize) {
    return;
  }

  if (gridSize > 100) {
    gridSize = 100;
  }

  gridContainer.innerHTML = '';
  setGridContainerStyles(gridSize);

  for (let i = 0; i < (gridSize * gridSize); i++) {
    addDiv();
  }
});

gridContainer.addEventListener('mouseover', ev => {
  if (ev.target.classList.contains('el') && !ev.target.classList.contains('fill')) {
    ev.target.classList.add('fill');
  }
});

function addDiv() {
  const div = document.createElement('div');
  div.classList.add('el');
  gridContainer.appendChild(div);
}

function setGridContainerStyles(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}