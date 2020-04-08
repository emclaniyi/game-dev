import { Player } from "./player.js";


export class Cell extends Player{
    constructor(x, y, htmlElement) { 
        super();
        this.x = x;
        this.y = y;
        this.htmlElement = htmlElement;
    };

    isAdjacent(cellOne) {
        let calc = this.placeImg();

    }
    

};

