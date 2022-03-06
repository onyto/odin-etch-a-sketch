createGrid(16, 16);
const button = document.querySelector('button');
button.addEventListener('click', resetGrid);

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
      row.appendChild(square);
    }
  })
}

function colorSquare() {
  this.classList.add('color');
}

function resetGrid() {
  const grid = document.getElementById('grid');
  grid.remove();

  let userInput;
  while (true) {
    userInput = prompt('Please input the number squares per side of the new grid. 1-100', 16);
    if (userInput > 0 && userInput <= 100) break;
  }
  createGrid(userInput, userInput);
}