import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';
import { Weapon } from './modules/weapon.js'

let myGrid = new Grid(6,6);
myGrid.draw();
myGrid.placeImg();

let myWeapon = new Weapon();
myWeapon.isActive();
