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
        cellOne.htmlElement.classList.add("weapon");
        console.log(cellOne);
        
        let img = document.createElement("img");
        // let air = cellOne.htmlElement.classList.add("weapon");

        // console.log(air);
        // air.src = "img/air.png";
        // air.id = "air"
        // grid.appendChild(air);

        // let fire = document.createElement("img");
        // fire.classList.add("weapon");
        // fire.src = "img/fire.png";
        // fire.id = "fire";

        // let earth = document.createElement("img");
        // earth.classList.add("weapon");
        // earth.src = "img/earth.png";
        // earth.id = "earth";

        // let water = document.createElement("img");
        // water.classList.add("weapon");
        // water.src = "img/water.png";
        // water.id = "water";
       

        //newBoard.appendChild(weapon);
        //console.log(air, fire, earth);
        //let src = document.getElementById('container');

    };
    
};

