for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
        grid.addEventListener('onmouseover', () => {
        })
    }
    let br = document.createElement('br');
    document.body.appendChild(br);
}

/*const cell = document.querySelectorAll('.grid');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function onmouseover(event) {
        event.target.style.backgroundColor = 'black';
    });
}*/

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', function click(event) {
    prompt('Enter new grid size (Max: 100')
    });