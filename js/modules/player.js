export class Player {
    constructor(name ) {
        this.name = name;
        
    }

    playersInGame(){
        let playerArray = [];

        let playerElements = document.querySelectorAll(".player");
        for (var i = 0; i < playerElements.length; i++) {
            playerElements[i].id = 'player-' + i;
            playerArray.push(playerElements[i].id);
        };
        console.log(playerArray);
        return playerArray;

    };

    isPlayerActive() {
        let playersCopy = this.playersInGame();

        for (let playerId of playersCopy){
            let playerPicked = document.getElementById(playerId);
            playerPicked.addEventListener('click', () => {
                this.active = true;
                playerPicked.style.boxShadow = "0px 10px 50px rgba(35, 50, 233, 1)";
            });
        };

    };


}