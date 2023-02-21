import Phaser from "phaser";

class Menu extends Phaser.Scene {
    private play: Phaser.GameObjects.BitmapText;
    private commands: Phaser.GameObjects.BitmapText;
    private credits: Phaser.GameObjects.BitmapText;

    constructor() {
        super({ key: "Menu" });
    }
    
    preload() {
        this.add.image(0, 0, "menu").setOrigin(0, 0); 
    }


    create() {
        this.add.image(this.game.canvas.width/2, this.game.canvas.height/4 - 10, "title").setScale(0.15);
        this.add.image(this.game.canvas.width/2 + 15, this.game.canvas.height/2 - 68, "subtitle").setScale(0.65);
        this.play = this.add.bitmapText(this.game.canvas.width/2 - 63, this.game.canvas.height/2 + 40, "arcade", "PLAY").setInteractive().on("pointerdown", () => this.scene.start("Gameplay")).on("pointerover", () => this.play.setTint(0xB2DF28)).on("pointerout", () => this.play.setTint(0xffffff));
        this.commands = this.add.bitmapText(this.game.canvas.width/2 - 129, this.game.canvas.height/2 + 120, "arcade", "COMMANDS").setInteractive().on("pointerdown", () => this.scene.start("Commands")).on("pointerover", () => this.commands.setTint(0xB2DF28)).on("pointerout", () => this.commands.setTint(0xffffff));
        this.credits = this.add.bitmapText(this.game.canvas.width/2 - 113, this.game.canvas.height/2 + 200, "arcade", "CREDITS").setInteractive().on("pointerdown", () => this.scene.start("Credits")).on("pointerover", () => this.credits.setTint(0xB2DF28)).on("pointerout", () => this.credits.setTint(0xffffff));
    }
}

export default Menu;