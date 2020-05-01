import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';
import { Weapon } from './modules/weapon.js'
import { Player } from './modules/player.js'

let myGrid = new Grid(6,6);
myGrid.draw();
let player1  = new Player("player-1");
let player2  = new Player("player-2");

let weapon1 = new Weapon("weapon-1");
let weapon2 = new Weapon("weapon-2");
let weapon3 = new Weapon("weapon-3");
let weapon4 = new Weapon("weapon-4");

myGrid.placeImg([player1, player2], [weapon1, weapon2, weapon3, weapon4], 4);
myGrid.getIndex(5,5);
myGrid.horizontal();