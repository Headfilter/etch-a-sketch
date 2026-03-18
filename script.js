const gridContainer = document.getElementById("grid-container");
const gridSize = document.querySelector("#grid-size");

function createCells(size) {
    for (let i = 0; i < (size * size); i++) {
        const newCell = document.createElement("div");
        newCell.classList.add('cell');
        gridContainer.appendChild(newCell);
    }
}

function removeCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function newCanvas() {
    let newInput = prompt("Input a number between 1-100");
    if(newInput < 1 || newInput > 100) {
        return alert("Invalid input");
    }
    removeCells();
    createCells(newInput);
}

gridSize.addEventListener("click", newCanvas);

createCells(16);

