import { Cell } from "./cell.js";

export class Grid {
    constructor(numRow, numCol) {
        this.numRow = numRow;
        this.numCol = numCol;

    };
    draw() {
        const container = $("#container");
        let cells = [];

        for (let row = 0; row < this.numRow; row++) {
            for (let col = 0; col < this.numCol; col++) {
                let cellDiv = $(`<div class="grid"></div>`);
                container.append(cellDiv);


                cellDiv.width(100 / this.numRow + "%");
                cellDiv.height(100 / this.numCol + "%");

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
        let boardCopy = this.elementsInBoard();
        let newBoard = [];

        for (let i = 0; i < numOfCells; i++) {
            let seed = Math.floor(Math.random() * boardCopy.length);
            newBoard.push(boardCopy[seed]);
            boardCopy.splice(seed, 1);
        };
        // console.log(boardCopy.length)
        // console.log(this.elementsInBoard().length)
        
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
        //console.log(this.elementsInBoard())
    };

    showAvailableCells(cell) {
        let totalNumCells = this.elementsInBoard();
        console.log(totalNumCells);

        let player  = totalNumCells[cell]

        $("player-1").on(function() {
            var colorClass = this.className;
            console.log(colorClass);
         });
         

        
        
        let playerOne = document.getElementsByClassName("player-1");

        console.log("player---", playerOne);
        let xVal = playerOne.x;
        console.log("x--", xVal);

        // totalNumCells.forEach((item) => {
        //     //console.log("item---", typeof item.htmlElement);
        //     var playersCellInfo = [];
        //     if (item.htmlElement == "div.grid.wall") {
        //       playersCellInfo.push(item);
        //     };
        //     console.log(playersCellInfo);


        // });
        

        let directionPiled = [];
        totalNumCells[0]
        let xValue = totalNumCells[0].x;
        let yValue = totalNumCells[0].y + 1;

        const rightDirectionOne = xValue + 1;
        const rightDirectionTwo = xValue + 2;
        const rightDirectionThree = xValue + 3;

        const bottomDirectionOne = yValue;
        const bottomDirectionTwo = yValue + 1;
        const bottomDirectionThree = yValue + 2;

        const firstCellDirRight = [{ xValue, rightDirectionOne }, { xValue, rightDirectionTwo }, { xValue, rightDirectionThree }];
        const secCellDirRight = [{ bottomDirectionOne , xValue}, {bottomDirectionTwo, xValue }, {bottomDirectionThree, xValue}]

        console.log("right direction", firstCellDirRight);
        console.log("bottom direction --", secCellDirRight);

       
    };

};
