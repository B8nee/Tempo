import Phaser from "phaser";

class Credits extends Phaser.Scene {
    text: Phaser.GameObjects.Text;
    title: Phaser.GameObjects.Image;
    subtitle: Phaser.GameObjects.Image;
    masulloThetiLogo: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    constructor() {
        super({ key: "Credits" });
    }
    preload() {
        this.load.text('data', 'assets/credits/credits.txt');
    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenY = this.cameras.main.height;

        this.menu = this.add.bitmapText(20, 10, 'arcade', 'Menu')
        .setInteractive()
        .on("pointerdown", () => this.scene.start("Menu"))
        .on("pointerover", () => this.menu.setTint(0xb2df28))
        .on("pointerout", () => this.menu.setTint(0xffffff));

        this.title = this.add.image(screenCenterX,screenY, "title").setScale(0.15);
        this.subtitle = this.add.image(screenCenterX,screenY + 120, "subtitle").setScale(0.65);
        this.text = this.add.text(screenCenterX,screenY + 300,this.cache.text.get('data'), {fontFamily: 'Arial Black',fontSize: '50px'})
        .setAlign('center').setOrigin(0.5, 0);

        this.masulloThetiLogo = this.add.bitmapText(screenCenterX, screenY +1000, 'rickAndMorty', 'I.T.C.S.G. Masullo Theti', 100)
        .setAlpha(1)
        .setOrigin(0.5, 0.5)
        .setCenterAlign().setLetterSpacing();


    }
    update(time: number, delta: number): void {
        var velocity: number = 1;
        this.title.y -= velocity;
        this.subtitle.y -= velocity;
        this.text.y -= velocity;
        this.masulloThetiLogo.y-= velocity;

    }
}

export default Credits;