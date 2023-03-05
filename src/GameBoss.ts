import Phaser from "phaser";
import Boss from "./Characters/Boss";

class GameBoss extends Phaser.Scene {
    background: Phaser.GameObjects.Image;
    base: any;
    boss: Boss;

    constructor() {
        super({ key: 'GameBoss' });
    }

    create(){
        this.background = this.add.image(0, 0, 'dino').setOrigin(0, 0);
        this.base = this.physics.add.staticGroup();
        this.base.create(0, 975, 'base').setScale(0, 0);
        this.base.create(1280, 975, 'base').setScale(0, 0);

        this.boss = new Boss({
            scene: this,
            x: 640,
            y: 100,
            key: 'boss'
        });

        this.boss.play('idle');
        this.delay(1000).then(() => {
            this.boss.play('walk');
        });
    }

    delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }


}

export default GameBoss;

