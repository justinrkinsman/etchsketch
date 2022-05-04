document.querySelector('#newGrid');
newGrid.addEventListener('click', function click(event) {
    gridSize = prompt('Enter new grid size (Max: 100)')

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
        }
        document.getElementById('container').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }
    const cell = document.querySelectorAll('.grid');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function onmouseover(event) {
        event.target.style.backgroundColor = 'black';
    });
}
});

function whiteGrid() {
    let white = document.querySelectorAll('.grid'), j;
    for (j = 0; j < white.length; ++j) {
        white[j].style.backgroundColor='white';
    }}

function resetGrid() {
    const plainGrid = document.getElementById('container');
    while (plainGrid.firstChild) {
        plainGrid.removeChild(plainGrid.lastChild);
    }
    }

function blackPen() {
    const cell = document.querySelectorAll('.grid');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function onmouseover(event) {
        event.target.style.backgroundColor = 'black';
        event.target.style.opacity = 1
})}}

function randomNumber(maxLimit = 360){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    console.log(rand);
}

function randomHue(){
    x = Math.floor(Math.random() * 360)
    return (`hsl(${x}, 100%, 50%)`)
}

function rainbowPen() {
    const cell = document.querySelectorAll('.grid');
    for (let i = 0; i < cell.length; i++) {
        cell [i].addEventListener('mouseover', function onmouseover(event) {
            event.target.style.backgroundColor = randomHue()
            event.target.style.opacity = 1
        })
    }
}

function fadeIn() {
    z = 0.1
    return (z += 0.1);
}

function fadedPen() {
    const fade = document.querySelectorAll('.grid')
    for (let i = 0; i < fade.length; i++) {
        fade [i].addEventListener('mouseover', function onmouseover(event) {
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity = fadeIn()
        })
    }
}