export class Player {
    constructor(name, weapon, point ) {
        this.name = name;
        this.active = false;
        this.cell = null;
        this.weapon = weapon;
        this.point = point;
        this.playerDefend = null;
        
    }
    // playerAttack(whichPlayer){
    //     if(this.playerDefend == 1){
    //         whichPlayer.point -= 5;
    //         this.playerDefend = 0; 
    //     } else {
    //         whichPlayer.point -= 10;
    //     }

    // }


    // movePlayers(){
        
    
    //     $(".accessible").each(function(){
    //         $(".accessible").on('click', function(){
    //          let sqClicked = $(this);
    //          sqClicked.removeClass("accessible");
    //          sqClicked.addClass("player-1");
    //          });
    //      });
 
    //      $(".player-1").on('click', function(){
    //          let playerClicked = $(this);
    //          playerClicked.active = !playerClicked.active;
    //          // console.log(playerClicked.active);
    //          playerClicked.removeClass("player-1");
    //          console.log(playerClicked.active)
    //          });
       
    // }

}