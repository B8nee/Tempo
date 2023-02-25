import Phaser from "phaser";
import FireBallGroup from "./FireBallGroup";

class Commands extends Phaser.Scene {
    //bitmap text
    commandsTitle: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    //sprirte
    mySpaceBar: Phaser.GameObjects.Sprite;
    myArrowDown: Phaser.GameObjects.Sprite;
    myArrowUp: Phaser.GameObjects.Sprite;
    myArrowLeft: Phaser.GameObjects.Sprite;
    myArrowRight: Phaser.GameObjects.Sprite;
    myPlayer: Phaser.GameObjects.Sprite;
    myFireball: Phaser.GameObjects.Sprite;
    //group
    fireBallGroup: FireBallGroup;
    //commands
    spaceBar: Phaser.Input.Keyboard.Key;
    cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    shooting: boolean;
    eventIsListened: boolean;

    constructor() {
        super({ key: "Commands" });
    }
    preload() {}
    create() {
        this.physics.world.setBoundsCollision(true, true, true, true)
        this.eventIsListened = false;

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

        this.createAnimations();
        this.createCommands();

        this.myPlayer = this.add.sprite(width/2 , 350, 'morty_spritesheet', 0);
        this.fireBallGroup = new FireBallGroup(this);



        this.menu = this.add.bitmapText(width/2 - (commandsBG_width/2) +25, height/2 - (commandsBG_height/2) + 25, "arcade", "MENU")
        .setInteractive()
        .on("pointerdown", () => this.scene.start("Menu"))
        .on("pointerover", () => this.menu.setTint(0xb2df28))
        .on("pointerout", () => this.menu.setTint(0xffffff));

        this.mySpaceBar = this.add.sprite(width - commandsBG_width*0.7, 550, 'spacebar', 0).setInteractive();
        this.add.bitmapText(width - commandsBG_width*0.7 + 56, 540, "arcade", "Shoot", 20);

        this.myArrowDown = this.add.sprite(width - commandsBG_width * 0.4, 300, 'arrows', 0).setInteractive();
        this.add.bitmapText(width - commandsBG_width * 0.4 + 30, 290, "arcade", "Crouch", 20);

        this.myArrowLeft = this.add.sprite(width - commandsBG_width*0.4, 400, 'arrows', 2).setInteractive();
        this.add.bitmapText(width - commandsBG_width * 0.4 + 30, 390, "arcade", "Move Left", 20);

        this.myArrowRight = this.add.sprite(width - commandsBG_width, 400, 'arrows', 4).setInteractive();
        this.add.bitmapText(width - commandsBG_width + 30, 390, "arcade", "Move Right", 20);

        this.myArrowUp = this.add.sprite(width - commandsBG_width, 300, 'arrows', 6).setInteractive();
        this.add.bitmapText(width - commandsBG_width + 30, 290, "arcade", "Jump", 20);

        
        this.addEvents();

        
    }
    update(time: number, delta: number): void {
        if(Phaser.Input.Keyboard.JustDown(this.spaceBar)){
            this.shooting = true;
            this.startAnimation(this.mySpaceBar, this.myPlayer, "spaceBar", "shoot");
            this.shootFireBall();
            this.myPlayer.anims.setRepeat(0);
            this.myPlayer.on("animationcomplete", ()=>{
                this.stopAnimation(this.mySpaceBar, this.myPlayer, 0);
                this.shooting = false;
            })
        }
        if(this.shooting){
            return;
        }
        
        if(this.cursorKeys.down.isDown){
            this.myPlayer.play("crouch", true);
            this.myArrowDown.play("arrowDown", true);
        }
        else if(this.cursorKeys.up.isDown){
            this.myPlayer.play("jump", true);
            this.myArrowUp.play("arrowUp", true);
        }
        else if(this.cursorKeys.left.isDown){
            this.myPlayer.scaleX = -1;
            this.myPlayer.play("walk_right", true);
            this.myArrowLeft.play("arrowLeft", true);
        }
        else if(this.cursorKeys.right.isDown){
            this.myPlayer.scaleX = 1;
            this.myPlayer.play("walk_right", true);
            this.myArrowRight.play("arrowRight", true);
        }
        else if(this.eventIsListened == false){
            this.stopAnimation(this.myArrowRight, this.myPlayer, 4);
            this.myArrowDown.stop();
            this.myArrowDown.setFrame(0);
            this.myArrowLeft.stop();
            this.myArrowLeft.setFrame(2);
            this.myArrowRight.stop();
            this.myArrowRight.setFrame(4);
            this.myArrowUp.stop();
            this.myArrowUp.setFrame(6);
        }
    }

    shootFireBall(){
        this.fireBallGroup.fireFireBall(this.myPlayer.x, this.myPlayer.y, this.myPlayer.scaleX, 765, 520);
    }

    createCommands(){
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    createAnimations(){

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
            repeat: 0,           
        });
        this.anims.create({
            key: "fireball",
            frameRate: 6,
            frames: this.anims.generateFrameNames("fireball_spritesheet", {start: 0, end: 2}),
            repeat: -1,
        })
    }
    

    addEvents(){
        this.myArrowDown
        .on("pointerover", () => {
            this.startAnimation(this.myArrowDown, this.myPlayer, "arrowDown", "crouch");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowDown, this.myPlayer, 0);
            this.eventIsListened = false;
        });
        this.myArrowLeft
        .on("pointerover", () => {
            this.myPlayer.scaleX = -1;
            this.startAnimation(this.myArrowLeft, this.myPlayer, "arrowLeft", "walk_right");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowLeft, this.myPlayer, 2);
            this.eventIsListened = false;
        });
        this.myArrowRight 
        .on("pointerover", () => {
            this.myPlayer.scaleX = 1;
            this.startAnimation(this.myArrowRight, this.myPlayer, "arrowRight", "walk_right");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowRight, this.myPlayer, 4);
            this.eventIsListened = false;
        })
        this.myArrowUp 
        .on("pointerover", () => {
            this.startAnimation(this.myArrowUp, this.myPlayer, "arrowUp", "jump");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowUp, this.myPlayer, 6);
            this.eventIsListened = false;
        });
        this.mySpaceBar 
        .on("pointerover", () => {
            this.startAnimation(this.mySpaceBar, this.myPlayer, "spaceBar", "shoot");
            this.eventIsListened = true;
            this.shootFireBall();
            this.myPlayer.on("animationcomplete",()=>{this.myPlayer.setFrame(0);})
            
        })
        .on("pointerout", () => {
            this.stopAnimation(this.mySpaceBar, this.myPlayer, 0);
            this.eventIsListened = false;
        })
    }

    stopAnimation(myButton: Phaser.GameObjects.Sprite, myCharacter: Phaser.GameObjects.Sprite, buttonFrame: number){
        myCharacter.stop();
        myCharacter.setFrame(0);
        myButton.stop();
        myButton.setFrame(buttonFrame);
    }
    startAnimation(myButton: Phaser.GameObjects.Sprite, myCharacter: Phaser.GameObjects.Sprite, buttonAnim: string, characterAnim: string){
        myButton.play(buttonAnim);
        myCharacter.play(characterAnim);
    }
}

export default Commands;