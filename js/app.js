import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';
import { Weapon } from './modules/weapon.js'
import { Player } from './modules/player.js'

let myGrid = new Grid(6,6);
myGrid.draw();
let player1  = new Player("player-1");
let player2  = new Player("player-2");

// const player1 = {
//     name: "player-1"};
// const player2 = {
//     name: "player-2"};

myGrid.placeImg([player1, player2], [1,2,3,4], 3);

// let myWeapon = new Weapon();
// myWeapon.isWeaponActive();
//  let player = new Player();
//  player.isPlayerActive();