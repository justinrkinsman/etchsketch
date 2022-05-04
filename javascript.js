let xval = prompt()

for (let i = 0; i < xval; i++) {
    for (let j = 0; j < xval; j++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
        }
        document.getElementById('container').style.gridTemplateColumns = `repeat(${xval}, 1fr)`;
    }

function whiteGrid() {
    let white = document.querySelectorAll('.grid'), j;
    for (j = 0; j < white.length; ++j) {
        white[j].style.backgroundColor='white';
    }}

const cell = document.querySelectorAll('.grid');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function onmouseover(event) {
        event.target.style.backgroundColor = 'black';
    });
}

document.querySelector('#newGrid');
newGrid.addEventListener('click', function click(event) {
    gridSize = prompt('Enter new grid size (Max: 100)')
    return gridSize
    });