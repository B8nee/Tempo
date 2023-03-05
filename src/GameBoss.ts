import Phaser from "phaser";

class GameBoss extends Phaser.Scene {
    background: Phaser.GameObjects.Image;
    base: any;

    constructor() {
        super({ key: 'GameBoss' });
    }

    create(){
        this.background = this.add.image(0, 0, 'dino').setOrigin(0, 0);
        this.base = this.physics.add.staticGroup();
        this.base.create(0, 975, 'base').setScale(0, 0);
        this.base.create(1280, 975, 'base').setScale(0, 0);
    }


}

export default GameBoss;

