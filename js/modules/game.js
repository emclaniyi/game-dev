import { Grid } from './grid.js'
import { Player } from './player.js'
import { Weapon } from './weapon.js'

export class Game {
    constructor() {
        this.grid = new Grid(8,8, this.combatTurn.bind(this));
        let defaultWeapon =  new Weapon('baton', 10);
        this.players = [
             new Player("player-1", defaultWeapon),
             new Player("player-2", defaultWeapon)
        ];
        this.weapons = [
            new Weapon("axe", 30),
            new Weapon("sword", 50),
            new Weapon("flail", 40),
            new Weapon("bow", 20)
        ];
    }

    startGame(){
        this.grid.draw();
        this.grid.placeImg(this.players, this.weapons, 4);
        this.grid.movePlayers(this.players[0], this.players[1]);
    }

    
    checkToFight(playerOne, playerTwo){
        
        if(playerOne.isAdjacent(playerTwo)){

        }

    }

    combatTurn(attackingPlayer, otherPlayer){
        console.log("combat start:--");
        
    }
}