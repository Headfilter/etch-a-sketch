const gridContainer = document.getElementById("grid-container");
const cells = document.getElementsByClassName(".grid-box");
createCells(gridContainer);

cells.addEventListener("mouseover", (event) => {
    event.target.style.color = "black";
});

function createCells(container) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 256; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add('grid-box');
        fragment.appendChild(newCell);
    }
    container.appendChild(fragment);
}

