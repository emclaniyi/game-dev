import { Cell } from "./cell.js";

export class Grid {
    constructor(numRow, numCol){
        this.numRow = numRow;
        this.numCol = numCol;
        
    };
    draw() {
        const container = document.getElementById("container");
        let cells = [];
        
        for (let row = 0; row < this.numRow; row++) {
            for (let col = 0; col < this.numCol; col++){

                let cellDiv = document.createElement("div");
                cellDiv.classList.add("grid");

                container.appendChild(cellDiv);
                cellDiv.style.width = 100/this.numRow + "%";
                cellDiv.style.height = 100/this.numCol + "%";

                let newCell = new Cell(col, row, cellDiv);
                cells.push(newCell)
            };
        };
        this.cells = cells;
        return container;
    }; 

    elementsInBoard() {
        let board = this.cells.slice();
        return board;
    };

   getCells(numOfCells) {
        let boardCopy= this.elementsInBoard();
        let newBoard = [];

        for(let i = 0; i < numOfCells; i++) {
            let seed = Math.floor(Math.random() * boardCopy.length);
            newBoard.push(boardCopy[seed]);
            boardCopy.splice(seed, 1);
        };
        return newBoard;
    };

    placeImg() {
        const cellPicked = this.getCells(6);
        let cellOne = cellPicked[0];
        let cellTwo = cellPicked[1];
        let cellThree = cellPicked[2];
        let cellFour = cellPicked[3];
        let cellFive = cellPicked[4];
        
        cellOne.htmlElement.classList.add("air");
        cellTwo.htmlElement.classList.add("fire");
        cellThree.htmlElement.classList.add("water");
        cellFour.htmlElement.classList.add("earth");
        cellFive.htmlElement.classList.add("player-one");
        console.log(cellOne);

    };
    
};

