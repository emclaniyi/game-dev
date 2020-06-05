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
        $('#fight-modal').hide();
    }

    
    combatTurn(attackingPlayer, otherPlayer){
        console.log("combat start:--");
        $('#game-details').hide();
        $('#container').hide();
        $('#fight-modal').show();

        //  initialize
		$('#Player1-attack').on('click', this.fight(attackingPlayer, otherPlayer));
		$('#Player1-defend').on('click', this.fight(attackingPlayer, otherPlayer));
		$('#Player2-attack').on('click', this.fight(attackingPlayer, otherPlayer));
		$('#Player2-defend').on('click', this.fight(attackingPlayer, otherPlayer));
        
    }
    hidePlayer1() {
		$('#Player1-attack').hide();
		$('#Player1-defend').hide();
		$('#Player2-attack').show();
		$('#Player2-defend').show();
	}

	hidePlayer2() {
		$('#Player2-attack').hide();
		$('#Player2-defend').hide();
		$('#Player1-attack').show();
		$('#Player1-defend').show();
    }
    
    fight = (attackingPlayer, otherPlayer) => {
        let vm = this;
		let player1 = attackingPlayer;
		let player2 = otherPlayer;
		$('#Player1-attack').click(function () {
            vm.hidePlayer1();
            player1.defend = false;
            player2.lifePoints = player2.lifePoints - player1.weapon.attackPower;
            console.log(player2.lifePoints);
            $('#Player2-life').text(player2.lifePoints);
            if(player2.defend === true){
                player2.lifePoints = player2.lifePoints - player1.weapon.attackPower/2
                $('#Player2-life').text(player2.lifePoints);
                player2.defend = false;
            };
        });
        
        $('#Player2-defend').click(function () {
            vm.hidePlayer2();
            player2.defend = true;
            $('#defence-player2').text(player2.defend);
        });
        
        $('#Player2-attack').click(function () {
            vm.hidePlayer2();
            player2.defend = false;
            player1.lifePoints = player1.lifePoints - player2.weapon.attackPower;
            console.log(player1.lifePoints);
            $('#Player1-life').text(player1.lifePoints);
            if(player1.defend === true){
                player1.lifePoints = player1.lifePoints - player2.weapon.attackPower/2
                $('#Player1-life').text(player1.lifePoints);
                player1.defend = false;
            };
        });
        
        $('#Player1-defend').click(function () {
            vm.hidePlayer1();
            player1.defend = true;
            $('#defence-player1').text(player1.defend);
		});
    }
}