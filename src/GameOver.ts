import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    menu: Phaser.GameObjects.BitmapText;
    bg: Phaser.GameObjects.Image;

    constructor() {
        super('GameOver');
    }
    
    preload() {

    }


    create() {
        this.bg = this.add.image(0, 0, "gameover").setOrigin(0, 0);

        this.menu = this.add
        .bitmapText(1280/2, 600, "arcade", "Menu")
        .setAlpha(1)
        .setOrigin(0.5)
        .setInteractive()
        .setDepth(100)
        .on("pointerup", async () => {

          this.goMenu();
        })
        .on("pointerover", () => {
        })
        .on("pointerout", () => {
        });
      }
      
      goMenu() {
        this.scene.stop("GameOver");
        this.scene.start("Menu");
      }
    }
export default GameOver;
    

