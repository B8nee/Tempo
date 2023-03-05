import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    restart: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    bg: Phaser.GameObjects.Image;

    constructor() {
        super('GameOver');
    }
    
    preload() {

    }


    async create() {
        this.bg = this.add.image(0, 0, "gameover").setOrigin(0, 0);
        this.restart = this.add
          .bitmapText(1280 / 2, 500, "arcade", "Rigioca")
          .setAlpha(1)
          .setOrigin(0.5)
          .setInteractive()
          .setDepth(100)
          .on("pointerup", async () => {
            this.restartGame();
          })
          .on("pointerover", () => {
          })
          .on("pointerout", () => {
          });

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


      async restartGame() {
        this.scene.stop("GameOver");
        this.scene.start("GameScene");
        this.scene.bringToTop("GameScene");
        this.scene.start("Hud");
        this.scene.bringToTop("Hud");
      }
      
      async goMenu() {
        this.scene.stop("GameOver");
        this.scene.start("Menu");
      }
    }
export default GameOver;
    

