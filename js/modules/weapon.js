export class Weapon {
    constructor() {
        this.active = false;
        this.damage = false;
    };

    isActive() {
        let imageDatabase = {
            'axe' : document.getElementsByClassName('axe'),
            'bow': document.getElementsByClassName('bow'),
            'flail': document.getElementsByClassName('flail'),
            'sword': document.getElementsByClassName('sword')
        }
        
        let axe = document.getElementsByClassName('axe');

        
        axe.addEventListener('click', function() {
            alert("Hello World");
        });

        // axe.addEventListener('click', function(){
        //     prompt("this should work");
        //     //axe.style.boxShadow = "0px 10px 50px rgba(255, 0, 0, 1)";
        // });

        //console.log(imageDatabase);
    };

    strike() {

    };

    damage() {

    };

   
}