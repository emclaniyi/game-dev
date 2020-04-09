import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';
import { Weapon } from './modules/weapon.js'
import { Player } from './modules/player.js'

let myGrid = new Grid(6,6);
myGrid.draw();
let player1  = new Player("player-1");
let player2  = new Player("player-2");


myGrid.placeImg([player1, player2], [1,2,3,4], 3);
