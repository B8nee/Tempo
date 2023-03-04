import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    private restart: Phaser.GameObjects.BitmapText;

    constructor() {
        super('GameOver');
    }
    
    preload() {
        this.load.bitmapFont('arcade', 'assets/fonts/arcade.png', 'assets/fonts/arcade.xml');
    }


    async create() {
        this.restart = this.add
          .bitmapText(1280 / 2, 500, "arcade", "Rigioca")
          .setAlpha(1)
          .setOrigin(0.5)
          .setInteractive()
          .setDepth(100)
          .setTint(0x33cc33)
          .on("pointerup", async () => {
            this.restart.removeInteractive();
            this.restartGame();
          })
          .on("pointerover", () => {
            this.restart.setTint(0x009933);
          })
          .on("pointerout", () => {
            this.restart.setTint(0x33cc33);
          });
      }


      async restartGame() {
        this.scene.stop("GameOver");
        this.scene.start("GameScene");
        this.scene.bringToTop("GameScene");
        this.scene.start("Hud");
        this.scene.bringToTop("Hud");
      }
    }
export default GameOver;
    

