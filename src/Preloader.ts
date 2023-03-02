import Phaser from "phaser";
import { GameData } from "./Other/GameData";
import {
  BitmapfontAsset,
  ImageAsset,
  SpritesheetAsset,
} from "./Other/Types";

class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: "Preloader" });
  }
  

  preload() {
    this.loadAssets();

    this.add.image(0, 0, "menu").setOrigin(0, 0);

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 10, 320, 50);

    var percentText: Phaser.GameObjects.Text = this.make.text({
      x: width / 2,
      y: height / 2 + 15,
      text: "0%",
      style: {
        font: "18px monospace",
        color: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText: Phaser.GameObjects.Text = this.make.text({
      x: width / 2,
      y: height / 2 + 60,
      text: "",
      style: {
        font: "18px monospace",
        color: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value: number) {
      percentText.setText((value * 100).toFixed(0) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2, 300 * value, 30);
    });

    this.load.on("fileprogress", function (file: Phaser.Textures.Texture) {
      assetText.setText("Loading asset: " + file.key);
    });
    
    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      percentText.destroy();
      assetText.destroy();
    });

   for (var i = 0; i < 200; i++) {
      this.load.image("fav_icon" + i, "/../assets/img/favicon/favicon.png");
      this.load.image("background" + i, "/../assets/img/favicon/favicon.png");
      this.load.image("sound" + i, "/../assets/img/favicon/favicon.png");
      this.load.image("player" + i, "/../assets/img/favicon/favicon.png");
      this.load.image("lol" + i, "/../assets/img/favicon/favicon.png");
    }
    
  }

  create() {
    this.scene.stop("Preloader");
    this.scene.start("Menu");
  }

  loadAssets() {
    
    if (GameData.images != null)
    GameData.images.forEach((element: ImageAsset) => {
      this.load.image(element.name, element.path);
    });

    if (GameData.bitmapfont != null)
      GameData.bitmapfont.forEach((element: BitmapfontAsset) => {
        this.load.bitmapFont(element.name, element.imgpath, element.xmlpath);
      });

    if (GameData.spritesheet != null)
    GameData.spritesheet.forEach((element: SpritesheetAsset) => {
      this.load.spritesheet(element.name, element.path, element.frameConfig, element.xhrSettings);
    });
  }
}
export default Preloader;
