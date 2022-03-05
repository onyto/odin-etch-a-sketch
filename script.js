createGrid(16, 16);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', (colorSquare)));

const button = document.querySelector('button');
button.onclick = () => clearGrid();

// Create a grid with X amount of rows that have X amount of squares in them
function createGrid(rowNum, squareNum) {
  const container = document.querySelector('#container');

  // Create rows
  for (let i = 0; i < rowNum; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }

  const rows = document.querySelectorAll('.row');

  // Create squares for each row
  rows.forEach((row) => {
    for (let i = 0; i < squareNum; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
  })
}

function colorSquare() {
  this.classList.add('color');
}

function clearGrid() {
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => row.remove());
}