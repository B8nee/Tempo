import Phaser from "phaser";

class LevelChange extends Phaser.Scene {
    selectedCharacter: string;
    level: number;
    background: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: "LevelChange" });
    } 

    init(data: any) {
        this.selectedCharacter = data.scelta;
        this.level = data.level;
    }
    
    preload() {}

    create() {
        this.scene.bringToTop("LevelChange");
        this.background = this.add.sprite(0, 0, "loading").setOrigin(0, 0).setDepth(2);
        this.background.play("loading");
        this.delay(3000).then(() => {
            this.scene.start("GameScene", { scelta: this.selectedCharacter, level: this.level });
            this.scene.bringToTop("Hud");
        });
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    update() {}
}

export default LevelChange;