export class Weapon {
    constructor(name, attackPower) {
        this.name = name;
        this.active = false;
        this.damage = false;
        this.attackPower = attackPower;
        this.cell = null;
        this.player = null;
    };

    // weaponInGame(){
    //     let weaponArray = [];

    //     let weaponElements = document.querySelectorAll(".weapon");
    //     for (var i = 0; i < weaponElements.length; i++) {
    //         weaponElements[i].id = 'weapon-' + i;
    //         weaponArray.push(weaponElements[i].id);
    //     };
    //     return weaponArray;

    // };


    // isWeaponActive() {
    //     let weaponCopy = this.weaponInGame();

    //     for (let weaponId of weaponCopy){
    //         let weaponPicked = document.getElementById(weaponId);
    //         weaponPicked.addEventListener('click', () => {
    //             this.active = true;
    //             weaponPicked.style.boxShadow = "0px 10px 50px rgba(255, 0, 0, 1)";
    //         });
    //     };

    // };

    // strike() {

    // };

    // damage() {

    // };

   
};