import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';
import { Weapon } from './modules/weapon.js'
import { Player } from './modules/player.js'

let myGrid = new Grid(6,6);
myGrid.draw();
myGrid.placeImg();
myGrid.cordinate();

let myWeapon = new Weapon();
myWeapon.isWeaponActive();
 let player = new Player();
 player.isPlayerActive();