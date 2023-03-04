class GameBoss extends Phaser.Scene {

    boss: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: 'GameBoss' });
    }

    create(){
        this.boss = this.add.sprite(400, 300, 'boss').setOrigin(0.5, 0.5);
        this.boss.setScale(0.5);
    }


}

export default GameBoss;


// creare un enemy aereo con uno sparo diverso 
// boss


