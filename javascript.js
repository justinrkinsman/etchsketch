for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
        }
    }


function changeGrid() {
    const gridSize = document.querySelector('#newGrid');
    newGrid.addEventListener('click', function click(event) {
        prompt('Enter new grid size (Max: 100)')
        });
    }

document.getElementById('container').style.gridTemplateColumns = `repeat(10, 1fr)`;

const cell = document.querySelectorAll('.grid');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function onmouseover(event) {
        event.target.style.backgroundColor = 'black';
    });
}

changeGrid()