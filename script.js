createRows(16);
createSquares(16);

function createRows(number) {
  const container = document.querySelector('#container');

  for (let i = 0; i < number; i++) {
    const row = document.createElement('div');
    // should I add a class in this function or separately?
    row.classList.add('row');
    // I don't like appending in the function
    // it would be better to return a object list?
    container.appendChild(row);
  }
}

// I don't like that his function can only be run after createRows()
// should I combine both functions and call it createGrid() ?
// that kinda makes sense...
function createSquares(number) {
  const rows = document.querySelectorAll('.row');

  rows.forEach((row) => {
    for (let i = 0; i< number; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      // I don't like appending in the function
      // it would be better to return a object list?
      row.appendChild(square);
    }
  })
}