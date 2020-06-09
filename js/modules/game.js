import { Grid } from './grid.js'
import { Player } from './player.js'
import { Weapon } from './weapon.js'

export class Game {
    constructor() {
        this.grid = new Grid(8,8, this.combatTurn.bind(this));
        let defaultWeapon =  new Weapon('baton', 10);
        this.players = [
             new Player("Player1", defaultWeapon),
             new Player("Player2", defaultWeapon)
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
        $('#boardWrapper').hide();
        $('#fight-modal').show();

        //  initialize
		this.fight(attackingPlayer, otherPlayer);
    }
    hidePlayer1(attackingPlayer, otherPlayer) {
        console.log(otherPlayer.name);
        $('#' + attackingPlayer.name + '-attack').hide();
		$('#' + attackingPlayer.name + '-defend').hide();
		$('#' + otherPlayer.name + '-attack').show();
		$('#' + otherPlayer.name + '-defend').show();
	}

	hidePlayer2(attackingPlayer, otherPlayer) {
		$('#' + otherPlayer.name + '-attack').hide();
		$('#' + otherPlayer.name + '-defend').hide();
		$('#' + attackingPlayer.name + '-attack').show();
		$('#' + attackingPlayer.name + '-defend').show();
    }
    
    fight = (attackingPlayer, otherPlayer) => {
        let vm = this;
		let player1 = attackingPlayer;
		let player2 = otherPlayer;
		$('#' + attackingPlayer.name+ '-attack').click(function () {
            vm.hidePlayer1(attackingPlayer, otherPlayer);
            player1.defend = false;
            player2.lifePoints = player2.lifePoints - (player2.defend ? (player1.weapon.attackPower/2) : player1.weapon.attackPower);
            //console.log(player2.lifePoints);
            $('#Player2-life').text(player2.lifePoints);
            
            if(player2.lifePoints <= 0){
                vm.hidePlayer1(attackingPlayer, otherPlayer);
                vm.hidePlayer2(attackingPlayer, otherPlayer);
                console.log('Player1 Wins')
            }
        });
        
        $('#Player2-defend').click(function () {
            vm.hidePlayer2(attackingPlayer, otherPlayer);
            player2.defend = true;
            $('#defence-player2').text(player2.defend);
        });
        
        $('#' + otherPlayer.name+ '-attack').click(function () {
            vm.hidePlayer2(attackingPlayer, otherPlayer);
            player1.lifePoints = player1.lifePoints - (player1.defend ? (player2.weapon.attackPower/2) : player2.weapon.attackPower);
            console.log(player1.lifePoints);
            $('#Player1-life').text(player1.lifePoints);
            player2.defend = false;
            if(player1.lifePoints <= 0){
                vm.hidePlayer1(attackingPlayer, otherPlayer);
                vm.hidePlayer2(attackingPlayer, otherPlayer);
                console.log('Player2 Wins')
            }
        });
        
        $('#Player1-defend').click(function () {
            vm.hidePlayer1();
            player1.defend = true;
            $('#defence-player1').text(player1.defend);
		});
    };
};