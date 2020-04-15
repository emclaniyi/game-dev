import { Cell } from "./cell.js";

export class Grid {
    constructor(numRow, numCol){
        this.numRow = numRow;
        this.numCol = numCol;
        
    };
    draw() {
        const container = $("#container");
        let cells = [];
        
        for (let row = 0; row < this.numRow; row++) {
            for (let col = 0; col < this.numCol; col++){
                let cellDiv = $(`<div class="grid"></div>`);
                container.append(cellDiv);
                
                
                cellDiv.width(100/this.numRow + "%");
                cellDiv.height(100/this.numCol + "%");

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

    placeImg(players, weapons, wallNum) {
        let cellPicked = this.getCells(players.length + weapons.length + wallNum);

        cellPicked[0].player = players[0];
        cellPicked[0].htmlElement.addClass(players[0].name);

        let playerOneCell = cellPicked[0];
        
        cellPicked.splice(0, 1);

        for (let i = 0; i < cellPicked.length; i++) {
            if (!playerOneCell.isAdjacent(cellPicked[i])) {
                cellPicked[i].player = players[1];
                cellPicked[i].htmlElement.addClass(players[1].name);

                cellPicked.splice(i, 1);
                break;

            };
        };

        for (let j = 0; j < cellPicked.length; j++) {
                cellPicked[j].htmlElement.addClass(weapons[j].name);
                cellPicked.splice(j, 1);
                
        }
        
        for (let w = 0; w < wallNum; w++) {
            cellPicked[w].htmlElement.addClass("wall");
            }
    };

};

