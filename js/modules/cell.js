import { Player } from "./player.js";
import { Grid } from "./grid.js";


export class Cell{
    constructor(x, y, htmlElement) {
        this.x = x;
        this.y = y;
        this.htmlElement = htmlElement;
        this.player = null;
        this.weapon = null;
        this.wall = false;
    };

    isAdjacent(other) {
        let x1 = this.x;
        let y1 = this.y;
        let x2 = other.x;
        let y2 = other.y;

        let xCord = (x2 - x1);
        let yCord = (y2 - y1);

        let adjacent =  (Math.pow(xCord, 2) + Math.pow(yCord, 2)) === 1;

        return adjacent;

    };

    exist(x,y){
        

    }

};

