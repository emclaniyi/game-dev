import { Grid } from './grid.js';
import { Player } from './player.js';
import { Weapon } from './weapon.js';

export class Game {
	constructor() {
		this.grid = new Grid(8, 8, this.combatTurn.bind(this));
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

	combatTurn(attackingPlayer, otherPlayer) {
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
		this.fight(attackingPlayer, otherPlayer);
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
			player2.lifePoints =
				player2.lifePoints -
				(player2.defend ? player1.weapon.attackPower / 2 : player1.weapon.attackPower);
			$('#Player2-life').text(player2.lifePoints);

			if (player2.lifePoints <= 0) {
				console.log('Player1 Wins');
				$('#gameover-modal').show();
				$('#fight-modal').hide();
				$('#winner-avatar').append(
					'<img class="player-player1" src="img/naija.png" alt="Player-1" />'
				);
				$('#winner').text('Player 1 Wins');
				window.location.href = '#gameover-modal'; //Calling for the gameover modal
			}
		});

		$('#Player2-defend').click(function () {
			vm.hidePlayer2();
			player2.defend = true;
			$('#defence-player2').text(player2.defend);
		});

		$('#Player2-attack').click(function () {
			vm.hidePlayer2(attackingPlayer, otherPlayer);
			player1.lifePoints =
				player1.lifePoints -
				(player1.defend ? player2.weapon.attackPower / 2 : player2.weapon.attackPower);
			console.log(player1.lifePoints);
			$('#Player1-life').text(player1.lifePoints);
			player2.defend = false;

			if (player1.lifePoints <= 0) {
				console.log('Player2 Wins');
				$('#gameover-modal').show();
				$('#fight-modal').hide();

				$('#winner-avatar').append(
					'<img class="player-player2" src="img/hunter.png" alt="Player-2" />'
				);
				$('#winner').text('Player 2 Wins');
				window.location.href = '#gameover-modal'; //Calling for the gameover modal
			}
		});

		$('#Player1-defend').click(function () {
			vm.hidePlayer1();
			player1.defend = true;
			$('#defence-player1').text(player1.defend);
		});
	};
}
