import { Cell } from "./cell.js";
import { Player } from "./player.js";

export class Grid {
    constructor(numRow, numCol, combatCallback) {
        this.numRow = numRow;
        this.numCol = numCol;
        this.combatCallback = combatCallback;

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
        
        return newBoard;
    };

    placeImg(players, weapons, wallNum) {
        let cellPicked = this.getCells(players.length + weapons.length + wallNum);
    
        cellPicked[0].player = players[0];
        players[0].cell = cellPicked[0];
        cellPicked[0].htmlElement.addClass(players[0].name);

        let playerOneCell = cellPicked[0];
        

        cellPicked.splice(0, 1);

        for (let i = 0; i < cellPicked.length; i++) {
            if (!playerOneCell.isAdjacent(cellPicked[i])) {
                cellPicked[i].player = players[1];
                players[1].cell = cellPicked[i];
                cellPicked[i].htmlElement.addClass(players[1].name);
                
                cellPicked.splice(i, 1);
                break;
            };
        };

        for (let j = 0; j < cellPicked.length; j++) {
            cellPicked[j].htmlElement.addClass(weapons[j].name);
            cellPicked[j].weapon = weapons[j];
            cellPicked.splice(j, 1);
        }

        for (let w = 0; w < wallNum; w++) {
            cellPicked[w].htmlElement.addClass("wall");
            cellPicked[w].wall = true;
        }
      
    };

    checkCord(x,y) {
        return x >= 0 && x < this.numCol && y >= 0 && y < this.numRow;
    };

    getCell(x,y){
        if (!this.checkCord(x,y)){
            return null;
        }
        return this.cells[y * this.numCol + x];
    };

    getCellsInDirections(origin, dir, distance) {
        let acessibleCells = [];
    
		for (let i = 0; i < dir.length; i++) {
            
			for (let j = 1; j <= distance; j++) {
                
                const targetX = origin.cell.x + dir[i].x * j;
				const targetY = origin.cell.y + dir[i].y * j;
				const targetCell = this.getCell(targetX, targetY);
				if (targetCell != null && targetCell.player == null && !targetCell.wall) {
                    acessibleCells.push(targetCell);
				} else {
					break;
                };
            }
       }
       for (let item of acessibleCells){
           item.htmlElement.addClass("accessible");
       };
        this.acessibleCells = acessibleCells;
	    return acessibleCells;
    };


    movePlayers(player, otherPlayer){
        var dir = [
            {x: 1, y: 0},
            {x: -1, y: 0},
            {x: 0, y: -1},
            {x: 0, y: 1}
        ]
        let cells = this.getCellsInDirections(player, dir, 3);

        for(let cell of cells){
            cell.htmlElement.on('click', () => {
                player.cell.player = null;
                player.cell.htmlElement.removeClass(player.name);
                cell.player = player;
                player.cell = cell;
                player.cell.htmlElement.addClass(player.name);
                $(".accessible").off('click');
                $(".accessible").removeClass("accessible");
                if(cell.isAdjacent(otherPlayer.cell)){
                    //combatCallback
                    this.combatCallback(player, otherPlayer);
                } else {
                    this.movePlayers(otherPlayer, player);
                }
            });
            if(cell.weapon){
                this.swapWeapons(player, cell);
            };
        };
       
    }
    swapWeapons(player, cell){
        cell.htmlElement.on('click', () => {
            player.cell.htmlElement.removeClass(cell.weapon.name);
            let i = player.weapon;
            player.weapon = cell.weapon;
            cell.weapon = i;
            player.cell.htmlElement.addClass(cell.weapon.name);
            
        });
    };

    
};
