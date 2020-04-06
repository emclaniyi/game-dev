import { Grid } from './modules/grid.js';
import { Cell } from './modules/cell.js';

let myGrid = new Grid(6,6);
myGrid.draw();
//myGrid.getCells(6);
console.log(myGrid.getCells(6));
myGrid.placeImg();

