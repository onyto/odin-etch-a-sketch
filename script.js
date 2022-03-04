createGrid(1, 5);

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