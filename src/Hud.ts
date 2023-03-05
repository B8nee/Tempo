import GameScene from './GameScene';

class Hud extends Phaser.Scene {
    annoText: Phaser.GameObjects.BitmapText;
    anno: number;
    annoImg: Phaser.GameObjects.Image;
    cittaText: Phaser.GameObjects.BitmapText;
    citta: string;
    cittaImg: Phaser.GameObjects.Image;
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
    timer: Phaser.Time.TimerEvent;
    checkTimer: boolean = false;
    checkTimer2: boolean = false;

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
        this.gameScene.events.off('update-year', this.updateYear, this);
        this.gameScene.events.on('update-year', this.updateYear, this);
        this.gameScene.events.off('update-time', this.updateTime, this);
        this.gameScene.events.on('update-time', this.updateTime, this);
        this.gameScene.events.off('reset', this.reset, this);
        this.gameScene.events.on('reset', this.reset, this);

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

        this.annoImg = this.add.image(1080, 17, "day").setOrigin(0).setScale(1);
        this.annoText = this.add.bitmapText(1125, 17, "arcade", "23000").setFontSize(30).setTint(0xFFFFFF).setOrigin(0);

        this.cittaImg = this.add.image(1070, 60, "world").setOrigin(0).setScale(0.1);
        this.cittaText = this.add.bitmapText(1125, 70, "arcade", "Pangea").setFontSize(25).setTint(0xFFFFFF).setOrigin(0);

        this.timer = this.time.addEvent({
            delay: 25000,
            paused: false
        });
    }

    bossLevel() {
        this.scene.remove("GameScene");
        this.scene.start("GameBoss");
    }

    updateTime() {
        this.checkTimer = true;
    }

    update() {
        switch(this.level) {
            case 1:
                this.anno = 23000;
                this.citta = "Pangea";
                this.viteText.setFont("arcade_black");
                this.nemiciText.setFont("arcade_black");
                this.tempoText.setFont("arcade_black");
                this.annoText.setFont("arcade_black");
                this.cittaText.setFont("arcade_black");
                break;
            case 2:
                this.anno = 1945;
                this.citta = "Togo";
                this.viteText.setFont("arcade_black");
                this.nemiciText.setFont("arcade_black");
                this.tempoText.setFont("arcade_black");
                this.annoText.setFont("arcade_black");
                this.cittaText.setFont("arcade_black");
                break;
            case 3:
                this.anno = 2070;
                this.citta = "Mars";
                this.viteText.setFont("arcade");
                this.nemiciText.setFont("arcade");
                this.tempoText.setFont("arcade");
                this.annoText.setFont("arcade");
                this.cittaText.setFont("arcade");
                break;
            case 4:
                this.bossLevel();
                break;
            default:
                break;
        }

        this.tempoText.setText(this.timer.getRemainingSeconds().toFixed(0));
        
        if (this.timer.getRemainingSeconds() <= 0) {
            this.timer.paused = true;
            this.scene.stop("GameScene");
            this.scene.start("GameOver");
        }

        if (this.checkTimer) {
            this.timer.paused = true;
            this.timer = this.time.addEvent({
                delay: this.timer.delay + 2000,
                paused: false
            });
            this.checkTimer = false;
        }
    }

    updateScore(parameters: Array<any>) {
        this.nemici += parameters[0];
        this.nemiciText.setText(this.nemici + "");
        this.registry.set("nemici", this.nemici)
    }

    reset (){
        this.level = 1;
        this.nemici = 0;
        this.nemiciText.setText(this.nemici + "");
        this.registry.set("nemici", this.nemici);

        this.tempo = 25;
        this.tempoText.setText(this.tempo + "");
        this.registry.set("tempo", this.tempo);
    }

    decreaseScore(parameters: Array<any>) {
    }

    levelUp() {
        this.level++;
        this.updateYear();
    }

    updateYear() {
        switch (this.level) {
            case 1:
                this.anno = 23000;
                this.annoText.setText(this.anno + "");
                this.registry.set("anno", this.anno);

                this.citta = "Pangea";
                this.cittaText.setText(this.citta);
                this.registry.set("citta", this.citta);
                break;
            case 2:
                this.anno = 1945;
                this.annoText.setText(this.anno + "");
                this.registry.set("anno", this.anno);

                this.citta = "Togo";
                this.cittaText.setText(this.citta);
                this.registry.set("citta", this.citta);
                break;
            case 3:
                this.anno = 2070;
                this.annoText.setText(this.anno + "");
                this.registry.set("anno", this.anno);

                this.citta = "Mars";
                this.cittaText.setText(this.citta);
                this.registry.set("citta", this.citta);
                break;
            default:
                break;
        }
    }
}

export default Hud;