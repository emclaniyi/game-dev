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
        const cellPicked = this.getCells(9);
        let cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine;
        cellOne = cellPicked[0];
        cellTwo = cellPicked[1];
        cellThree = cellPicked[2];
        cellFour = cellPicked[3];
        cellFive = cellPicked[4];
        cellSix = cellPicked[5];
        cellSeven = cellPicked[6];
        cellEight = cellPicked[7];
        cellNine = cellPicked[8];
        

        
        cellOne.htmlElement.classList.add("weapon");
        cellTwo.htmlElement.classList.add("weapon");
        cellThree.htmlElement.classList.add("weapon");
        cellFour.htmlElement.classList.add("weapon");
        cellFive.htmlElement.classList.add("player");
        cellSix.htmlElement.classList.add("player");
        cellSeven.htmlElement.classList.add("wall");
        cellEight.htmlElement.classList.add("wall");
        cellNine.htmlElement.classList.add("wall");

        this.cellPicked = cellPicked;

        return cellPicked;
    };

    isAdj() {
        let calc = this.cellPicked.slice();
        let x1 = calc[4].x;
        let y1 = calc[4].y;
        let x2 = calc[5].x;
        let y2 = calc[5].y;

        let xCord = (x2 - x1);
        let yCord = (y2 - y1);

        let adj =  Math.floor(Math.sqrt((Math.pow(xCord, 2) + Math.pow(yCord, 2))));

        console.log( adj);

        calc.cellFive;
        console.log('CALC', calc[4].x, calc[5].x);

    }
    
};

