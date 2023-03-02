import GameScene from './GameScene';

class Hud extends Phaser.Scene {
    annoText: Phaser.GameObjects.BitmapText;
    anno: number;
    cittaText: Phaser.GameObjects.BitmapText;
    citta: string;
    viteText: Phaser.GameObjects.BitmapText;
    vite: number;
    nemiciText: Phaser.GameObjects.BitmapText;
    nemici: number;
    tempoText: Phaser.GameObjects.BitmapText;
    tempo: number;
    gameScene: GameScene;
    level: number = 1;

    constructor() {
        super({ key: "Hud"});
    }

    preload() {}

    create() {
        this.gameScene = <GameScene>this.scene.get('GameScene');
        this.gameScene.events.off('update-score', this.updateScore, this);
        this.gameScene.events.on('update-score', this.updateScore, this);
        this.gameScene.events.off('decrease-score', this.decreaseScore, this);
        this.gameScene.events.on('decrease-score', this.decreaseScore, this);

        switch(this.level) {
            case 1:
                this.anno = 230000000;
                this.citta = "Pangea";
                break;
            case 2:
                this.anno = 1914;
                this.citta = "Togoland";
                break;
            case 3:
                this.anno = 2070;
                this.citta = "Mars";
                break;
        }

        this.vite = 1;
        this.nemici = 0;
        this.registry.set("vite", this.vite);
        this.registry.set("nemici", this.nemici);

        this.viteText = this.add.bitmapText(50, 20, "arcade", "1").setFontSize(30).setTint(0x000000).setOrigin(0);

        this.nemiciText = this.add.bitmapText(50, 70, "arcade", "0").setFontSize(30).setTint(0x000000).setOrigin(0);
    }

    update() {}

    updateScore(parameters: Array<any>) {
        
    }

    decreaseScore(parameters: Array<any>) {
        
    }
}

export default Hud;