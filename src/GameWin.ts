class GameWin extends Phaser.Scene{
    bgWin: Phaser.GameObjects.Image;

    constructor(){
        super({
            key: "GameWin"
        })
    }

    async preload() {
        this.bgWin = this.add.image(
          this.game.canvas.width / 2,
          this.game.canvas.height / 2,
          "winbg"
        );
    
        this.scene.stop("GameScene");
        this.scene.stop("Hud");
      }
    
      async create() {
      }
    }

export default GameWin;