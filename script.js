createGrid(16, 16);
addNewGridButtonEvent();
addClearGridButtonEvent();

let isMouseDown = false;
document.body.onmousedown = () => {return false}; // disables default mousedown (drag&drop) event
document.addEventListener('mousedown', () => isMouseDown = true, true);
document.addEventListener('mouseup', () => isMouseDown = false);

function createGrid(rowNum, squareNum) {
  const container = document.querySelector('#container');
  
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  container.appendChild(grid);

  // Create rows
  for (let i = 0; i < rowNum; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
  }

  const rows = document.querySelectorAll('.row');

  // Create squares for each row
  rows.forEach((row) => {
    for (let i = 0; i < squareNum; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', colorSquare);
      square.addEventListener('mousedown', colorSquare);
      row.appendChild(square);
    }
  })
}

function addClearGridButtonEvent() {
  const button = document.getElementById('clear-grid-btn');
  button.addEventListener('click', clearCurrentGrid);
}
function addNewGridButtonEvent() {
  const button = document.getElementById('new-grid-btn');
  button.addEventListener('click', resetGrid);
}

function colorSquare() {
  if (isMouseDown) this.classList.add('color');
}

function clearCurrentGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.classList.remove('color');
  })
}

function deleteGrid() {
  const grid = document.getElementById('grid');
  grid.remove();
}

function resetGrid() {
  let userInput;
  while (true) {
    userInput = prompt('Please input the number squares per side of the new grid. 1-100', 16);
    if (userInput === '' || userInput === null) break;
    if (userInput > 0 && userInput <= 100) {
      deleteGrid();
      createGrid(userInput, userInput);
      break;
    }
  }
}