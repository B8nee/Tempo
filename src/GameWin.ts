class GameWin extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  menu: Phaser.GameObjects.BitmapText;
  restart: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: "GameWin",
    });
  }

  async preload() {}

  async create() {
    this.background = this.add.image(0, 0, "gamewin").setOrigin(0, 0);

    this.menu = this.add
      .bitmapText(1280 / 2, 600, "arcade", "Ritorna al Menu")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .on("pointerdown", async () => {
        this.goMenu();
      })
      .on("pointerover", () => {
        this.menu.setFont("arcade_green");
      })
      .on("pointerout", () => {
        this.menu.setFont("arcade");
      });
  }

  async goMenu() {
    this.scene.stop("GameScene");
    this.scene.start("Menu");
  }
}
export default GameWin;
