const gridContainer = document.getElementById("grid-container");
const gridSize = document.querySelector("#grid-button");

function createCells(size) {
    gridContainer.innerHTML = "";

    let cellSize = 500 / size;

    for (let i = 0; i < (size * size); i++) {
        const newCell = document.createElement("div");
            newCell.classList.add('cell');
            newCell.style.width = `${cellSize}px`;
            newCell.style.height = `${cellSize}px`;
            gridContainer.appendChild(newCell);

            newCell.addEventListener("mouseover", () => {
                newCell.style.background = "black";
            });
    }
}

function newCanvas() {
    let newInput = prompt("Input a number between 1-100");    if(newInput < 1 || newInput > 100) {
        return alert("Invalid input");
    }
    createCells(newInput);
}

gridSize.addEventListener("click", newCanvas);


createCells(16);

