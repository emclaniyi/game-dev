import { Grid } from './grid.js';
import { Player } from './player.js';
import { Weapon } from './weapon.js';

export class Game {
	constructor() {
		this.grid = new Grid(8, 8, this.fight.bind(this));
		let defaultWeapon = new Weapon('baton', 10);
		this.players = [
			new Player('Player1', defaultWeapon),
			new Player('Player2', defaultWeapon)
		];
		this.weapons = [
			new Weapon('axe', 30),
			new Weapon('sword', 50),
			new Weapon('flail', 40),
			new Weapon('bow', 20)
		];
	}

	startGame() {
		this.grid.draw();
		this.grid.placeImg(this.players, this.weapons, 4);
		this.grid.movePlayers(this.players[0], this.players[1]);
		$('#fight-modal').hide();
		$('#gameover-modal').hide();
	}

	fight(attackingPlayer, otherPlayer) {
		console.log('combat start:--');
		$('#game-details').hide();
		$('#boardWrapper').hide();
		$('#fight-modal').show();

		$('#fight-player1-weapon-image').attr(
			'src',
			`img/${attackingPlayer.weapon.name}.png`
		);
		$('#1-fight-text').text(`${attackingPlayer.weapon.attackPower}`);

		$('#fight-player2-weapon-image').attr('src', `img/${otherPlayer.weapon.name}.png`);
		$('#2-fight-text').text(`${otherPlayer.weapon.attackPower}`);

		//  initialize
		this.combatTurn(attackingPlayer, otherPlayer);
	}
	togglePlayers(attackingPlayer, otherPlayer) {
        //console.log(otherPlayer.name);
        $('#' + attackingPlayer.name + '-attack').hide();
		$('#' + attackingPlayer.name + '-defend').hide();
		$('#' + otherPlayer.name + '-attack').show();
		$('#' + otherPlayer.name + '-defend').show();
	}

	combatTurn = (attackingPlayer, otherPlayer) => {
		this.togglePlayers(otherPlayer, attackingPlayer);
		this.setupCallBack(attackingPlayer, otherPlayer);
		this.setupCallBack(otherPlayer, attackingPlayer);
		
	};

	setupCallBack(player1, player2){
		const vm = this;
		$('#'+ player1.name+ '-attack').click(function () {
			vm.togglePlayers(player1, player2);
			player1.defend = false;
			player2.lifePoints =
				player2.lifePoints -
				(player2.defend ? player1.weapon.attackPower / 2 : player1.weapon.attackPower);
			$('#' + player2.name+ '-life').text(player2.lifePoints);

			if (player2.lifePoints <= 0) {
				$('#gameover-modal').show();
				$('#fight-modal').hide();
				$('#winner-avatar').append(
					`<div class="${player1.name} player-avatar" ></div>`
				);
				$('#winner').text(player1.name + "Wins");
				window.location.href = '#gameover-modal'; //Calling for the gameover modal
			}
		});

		$('#' + player1.name + "-defend").click(function () {
			vm.togglePlayers(player1, player2);
			player1.defend = true;
			$('#defence-' + player1.name.toLowerCase()).text(player1.defend);
		});
	}
}
