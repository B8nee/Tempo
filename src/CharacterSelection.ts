import Phaser from "phaser";

class CharacterSelection extends Phaser.Scene {
    dinosaurbg: Phaser.GameObjects.Image;
    rickSel: Phaser.GameObjects.Image;
    mortySel: Phaser.GameObjects.Image;
    rickSelected: Phaser.GameObjects.Image;
    mortySelected: Phaser.GameObjects.Image;
    testoScelta: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    scelta: String;
    
    constructor() {
        super({ key: "CharacterSelection" });
    }
    
    preload() {
    }


    create() {
        this.dinosaurbg = this.add.image(0, 0, "dino");
        this.dinosaurbg.setOrigin(0, 0);

        var selectionBG = this.add.graphics();

        selectionBG.fillStyle(0x222222, 0.8);
        selectionBG.fillRect(this.game.canvas.width/2 - 325, this.game.canvas.height/2 - 280, 650, 450).setDepth(1);

        this.menu = this.add.bitmapText(20, 10, 'arcade', 'Menu')
        .setInteractive()
        .on("pointerdown", () => this.scene.start("Menu"))
        .on("pointerover", () => this.menu.setFont("arcade_green"))
        .on("pointerout", () => this.menu.setFont("arcade"));
        
        this.testoScelta = this.add.bitmapText(this.game.canvas.width/2 - 265, this.game.canvas.height/2 - 245, "arcade", "MAKE YOUR CHOICE!").setDepth(1).setOrigin(0, 0);

        this.rickSelected = this.add.image(this.game.canvas.width/2 - 200, this.game.canvas.height/2 - 11, "rick").setAlpha(0).setDepth(2).setScale(0.5);

        this.mortySelected = this.add.image(this.game.canvas.width/2 + 200, this.game.canvas.height/2 + 11, "morty").setAlpha(0).setDepth(2).setScale(0.5);

        this.rickSel = this.add.image(this.game.canvas.width/2 - 79, this.game.canvas.height/2 - 150, "rickSel").setDepth(1).setOrigin(0, 0).setScale(0.75).setInteractive().on("pointerover", () => {
            this.rickSelected.setAlpha(1),
            this.rickSel.setScale(0.8).setAlpha(0.5).setX(this.game.canvas.width/2 - 84)
        }).on("pointerout", () => {
            this.rickSelected.setAlpha(0)
            this.rickSel.setScale(0.75).setAlpha(1).setX(this.game.canvas.width/2 - 79)
        }).on("pointerdown", () => {
            this.scelta = "rick_spritesheet";
            this.scene.stop("CharacterSelection");
            this.scene.start("GameScene", {scelta: this.scelta, enemy: "dinosaur"});
            this.scene.start("Hud");
            this.scene.bringToTop("Hud");
        });

        this.mortySel = this.add.image(this.game.canvas.width/2 + 5, this.game.canvas.height/2 - 150, "mortySel").setDepth(1).setOrigin(0, 0).setScale(0.75).setInteractive().on("pointerover", () => {
            this.mortySelected.setAlpha(1),
            this.mortySel.setScale(0.8).setAlpha(0.5)
        }).on("pointerout", () => {
            this.mortySelected.setAlpha(0)
            this.mortySel.setScale(0.75).setAlpha(1)
        }).on("pointerdown", () => {
            this.scelta = "morty_spritesheet";
            this.scene.stop("CharacterSelection");
            this.scene.start("GameScene", {scelta: this.scelta, enemy: "dinosaur"});
            this.scene.start("Hud");
            this.scene.bringToTop("Hud");
        });
    }
}

export default CharacterSelection;