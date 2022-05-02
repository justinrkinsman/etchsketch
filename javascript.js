for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++){
        let grid = document.createElement('div');
        grid.className = 'grid';
        document.body.appendChild(grid);
        grid.innerText = 'Cell'
    }
    let br = document.createElement('br');
    document.body.appendChild(br);
}