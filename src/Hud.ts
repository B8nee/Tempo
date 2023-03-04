import GameScene from './GameScene';

class Hud extends Phaser.Scene {
    annoText: Phaser.GameObjects.BitmapText;
    anno: number;
    cittaText: Phaser.GameObjects.BitmapText;
    citta: string;
    viteText: Phaser.GameObjects.BitmapText;
    vite: number;
    viteSprite: Phaser.GameObjects.Sprite;
    nemiciText: Phaser.GameObjects.BitmapText;
    nemici: number;
    nemiciImg: Phaser.GameObjects.Image;
    tempoText: Phaser.GameObjects.BitmapText;
    tempo: number;
    tempoImg: Phaser.GameObjects.Image;
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
        this.gameScene.events.off('level-up', this.levelUp, this);
        this.gameScene.events.on('level-up', this.levelUp, this);

        

        this.vite = 1;
        this.nemici = 0;
        this.registry.set("vite", this.vite);
        this.registry.set("nemici", this.nemici);

        this.viteSprite = this.add.sprite(5, 17, "heart").setOrigin(0).setFrame(0).setScale(1.2);
        this.viteText = this.add.bitmapText(50, 20, "arcade", "1").setFontSize(30).setTint(0xFFFFFF).setOrigin(0);

        this.nemiciImg = this.add.image(0, 67, "skull").setOrigin(0).setScale(0.04);
        this.nemiciText = this.add.bitmapText(50, 70, "arcade", "0").setFontSize(30).setTint(0xFFFFFF).setOrigin(0);

        this.tempoImg = this.add.image(2, 117, "time").setOrigin(0).setScale(0.4);
        this.tempoText = this.add.bitmapText(50, 120, "arcade", "25").setFontSize(30).setTint(0xFFFFFF).setOrigin(0);
    }

    bossLevel() {
        this.scene.stop("GameScene");
        this.scene.start("GameBoss");
    }

    update() {
        switch(this.level) {
            case 1:
                this.anno = 230000000;
                this.citta = "Pangea";
                break;
            case 2:
                this.anno = 1914;
                this.citta = "Togoland";
                this.viteText.setFont("arcade_black");
                this.nemiciText.setFont("arcade_black");
                this.tempoText.setFont("arcade_black");
                break;
            case 3:
                this.anno = 2070;
                this.citta = "Mars";
                this.viteText.setFont("arcade");
                this.nemiciText.setFont("arcade");
                this.tempoText.setFont("arcade");
                break;
            case 4:
                this.bossLevel();
                break;
            default:
                break;
        }
    }

    updateScore(parameters: Array<any>) {
        this.nemici += parameters[0];
        this.nemiciText.setText(this.nemici + "");
        this.registry.set("nemici", this.nemici)
    }

    decreaseScore(parameters: Array<any>) {
    }

    levelUp() {
        this.level++;
    }
}

export default Hud;