import Phaser from "phaser";

class Commands extends Phaser.Scene {
    commandsTitle: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    mySpaceBarSprite: Phaser.GameObjects.Sprite;
    myArrowDownSprite: Phaser.GameObjects.Sprite;
    myArrowUpSprite: Phaser.GameObjects.Sprite;
    myArrowLeftSprite: Phaser.GameObjects.Sprite;
    myArrowRightSprite: Phaser.GameObjects.Sprite;
    myPlayerSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: "Commands" });
    }
    preload() {}
    create() {
        var width: number = this.game.canvas.width;
        var height: number = this.game.canvas.height;
        var commandsBG_width: number = this.game.canvas.width*0.8;
        var commandsBG_height: number = this.game.canvas.height*0.8;

        this.add.image(0, 0, "menu").setOrigin(0, 0); 
        var commandsBG = this.add.graphics();
        var playerBG = this.add.graphics();

        commandsBG.fillStyle(0x041c34, 0.8);
        commandsBG.fillRect(width/2 - (commandsBG_width/2), height/2 - (commandsBG_height/2), commandsBG_width, commandsBG_height);
        this.commandsTitle = this.add.bitmapText(width/2 -200, height/2 - (commandsBG_height/2) + 25, "rickAndMorty", "Commands", 100);

        playerBG.fillStyle(0x041c34, 0.8);
        playerBG.fillRect((width/2 - (commandsBG_width/8))-10, (height/2 - (commandsBG_height/8))-35, commandsBG_width/4 +20, commandsBG_height/4 +30);

        this.myPlayerSprite = this.add.sprite(width/2 , 350, 'morty_spritesheet', 0);



        this.menu = this.add.bitmapText(width/2 - (commandsBG_width/2) +25, height/2 - (commandsBG_height/2) + 25, "arcade", "MENU")
        .setInteractive()
        .on("pointerdown", () => this.scene.start("Menu"))
        .on("pointerover", () => this.menu.setTint(0xb2df28))
        .on("pointerout", () => this.menu.setTint(0xffffff));

        this.mySpaceBarSprite = this.add.sprite(width - commandsBG_width*0.7, 550, 'spacebar', 0).setInteractive();
        this.add.bitmapText(width - commandsBG_width*0.7 + 56, 540, "arcade", "Shoot", 20);

        this.myArrowDownSprite = this.add.sprite(width - commandsBG_width * 0.4, 300, 'arrows', 0).setInteractive();
        this.add.bitmapText(width - commandsBG_width * 0.4 + 30, 290, "arcade", "Crouch", 20);

        this.myArrowLeftSprite = this.add.sprite(width - commandsBG_width*0.4, 400, 'arrows', 2).setInteractive();
        this.add.bitmapText(width - commandsBG_width * 0.4 + 30, 390, "arcade", "Move Left", 20);

        this.myArrowRightSprite = this.add.sprite(width - commandsBG_width, 400, 'arrows', 4).setInteractive();
        this.add.bitmapText(width - commandsBG_width + 30, 390, "arcade", "Move Right", 20);

        this.myArrowUpSprite = this.add.sprite(width - commandsBG_width, 300, 'arrows', 6).setInteractive();
        this.add.bitmapText(width - commandsBG_width + 30, 290, "arcade", "Jump", 20);

        this.anims.create({
            key: "arrowDown",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("arrows", { start: 0, end: 1 }),
            repeat: -1
        });
        this.anims.create({
            key: "arrowLeft",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("arrows", { start: 2, end: 3 }),
            repeat: -1
        });
        this.anims.create({
            key: "arrowRight",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("arrows", { start: 4, end: 5 }),
            repeat: -1
        });
        this.anims.create({
            key: "arrowUp",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("arrows", { start: 6, end: 7 }),
            repeat: -1
        });
        this.anims.create({
            key: "spaceBar",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("spacebar", { start: 0, end: 1 }),
            repeat: -1
        });
        this.anims.create({
            key: "walk_left",
            frameRate: 6,
            frames:this.anims.generateFrameNames("morty_spritesheet", {start: 4, end: 7}),
            repeat: -1
        });
        this.anims.create({
            key: "walk_right",
            frameRate: 6,
            frames:this.anims.generateFrameNames("morty_spritesheet", {start: 8, end: 11}),
            repeat: -1
        });
        this.anims.create({
            key: "jump",
            frameRate: 6,
            frames:this.anims.generateFrameNames("morty_spritesheet", {start: 12, end: 15}),
            repeat: -1,
        });
        this.anims.create({
            key: "crouch",
            frameRate: 6,
            frames:this.anims.generateFrameNames("morty_spritesheet", {start: 16, end: 19}),
            repeat: -1,
            repeatDelay: 100,           
        });
        this.anims.create({
            key: "shoot",
            frameRate: 6,
            frames:this.anims.generateFrameNames("morty_spritesheet", {start: 20, end: 23}),
            repeat: -1,           
        });


        this.myArrowDownSprite
        .on("pointerover", () => {
            this.myArrowDownSprite.play("arrowDown");
            this.myPlayerSprite.play("crouch");
    })
        .on("pointerout", () => {
            this.myArrowDownSprite.stop(); 
            this.myArrowDownSprite.setFrame(0);
            this.myPlayerSprite.stop(); 
            this.myPlayerSprite.setFrame(0);
        });
        this.myArrowLeftSprite
        .on("pointerover", () => {
            this.myArrowLeftSprite.play("arrowLeft");
            this.myPlayerSprite.play("walk_left");
        })
        .on("pointerout", () => {
            this.myArrowLeftSprite.stop(); 
            this.myArrowLeftSprite.setFrame(2);
            this.myPlayerSprite.stop(); 
            this.myPlayerSprite.setFrame(0);
        });
        this.myArrowRightSprite
        .on("pointerover", () => {
            this.myArrowRightSprite.play("arrowRight"); 
            this.myPlayerSprite.play("walk_right");
        })
        .on("pointerout", () => {
            this.myArrowRightSprite.stop();
            this.myArrowRightSprite.setFrame(4); 
            this.myPlayerSprite.stop(); 
            this.myPlayerSprite.setFrame(0);
        })
        this.myArrowUpSprite
        .on("pointerover", () => {
            this.myArrowUpSprite.play("arrowUp");
            this.myPlayerSprite.play("jump");
        })
        .on("pointerout", () => {
            this.myPlayerSprite.stop();
            this.myPlayerSprite.setFrame(0);
            this.myArrowUpSprite.stop(); 
            this.myArrowUpSprite.setFrame(6)});
        this.mySpaceBarSprite
        .on("pointerover", () => {
            this.mySpaceBarSprite.play("spaceBar");
            this.myPlayerSprite.play("shoot");
        })
        .on("pointerout", () => {
            this.myPlayerSprite.stop();
            this.myPlayerSprite.setFrame(0);
            this.mySpaceBarSprite.stop();
            this.mySpaceBarSprite.setFrame(0);
        });
    }
}

export default Commands;