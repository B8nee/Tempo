import Phaser from "phaser";
import Animations from "./Animations/Animations";
import FireBallGroup from "./Objects/FireBallGroup";

class Commands extends Phaser.Scene {
    //bitmap text
    commandsTitle: Phaser.GameObjects.BitmapText;
    menu: Phaser.GameObjects.BitmapText;
    //sprirte
    mySpaceBar: Phaser.GameObjects.Sprite;
    myShift: Phaser.GameObjects.Sprite;
    myArrowDown: Phaser.GameObjects.Sprite;
    myArrowUp: Phaser.GameObjects.Sprite;
    myPlayer: Phaser.GameObjects.Sprite;
    myFireball: Phaser.GameObjects.Sprite;
    //group
    fireBallGroup: FireBallGroup;
    //commands
    spaceBar: Phaser.Input.Keyboard.Key;
    cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    animations: Animations;

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
        this.commandsTitle = this.add.bitmapText(width/2 -200, height/2 - (commandsBG_height/2) + 25, "RickAndMorty", "Commands", 100);

        playerBG.fillStyle(0x041c34, 0.8);
        playerBG.fillRect((width/2 - (commandsBG_width/8))-10, (height/2 - (commandsBG_height/8))-35, commandsBG_width/4 +20, commandsBG_height/4 +30);

        this.createCommands();

        this.myPlayer = this.add.sprite(width/2 , 350, 'morty_spritesheet', 0);
        this.fireBallGroup = new FireBallGroup(this);
        this.animations = new Animations(this);
        this.animations.createCommandsAnimations();


        this.menu = this.add.bitmapText(width/2 - (commandsBG_width/2) +25, height/2 - (commandsBG_height/2) + 25, "arcade", "MENU")
        .setInteractive()
        .on("pointerdown", () => {
            this.scene.stop("Commands"),
            this.scene.start("Menu")
        })
        .on("pointerover", () => this.menu.setFont('arcade_green'))
        .on("pointerout", () => this.menu.setFont('arcade'));

        this.mySpaceBar = this.add.sprite(665, 525, 'spacebar', 0).setInteractive().setOrigin(0);
        this.add.bitmapText(width*0.6 + 10, (height -height/4)-10, "arcade", "Shoot", 20);

        this.myShift = this.add.sprite(width*0.4 + 50, height- height/4, 'shift', 0).setInteractive();
        this.add.bitmapText(width*0.4 - 180 , (height -height/4)-10, "arcade", "Shoot Up", 20);

        this.myArrowDown = this.add.sprite(width - commandsBG_width * 0.4, 340, 'arrows', 0).setInteractive();
        this.add.bitmapText(width - commandsBG_width * 0.4 + 30, 328, "arcade", "Crouch", 20);

        this.myArrowUp = this.add.sprite(width - commandsBG_width, 340, 'arrows', 6).setInteractive();
        this.add.bitmapText(width - commandsBG_width + 30, 328, "arcade", "Jump", 20);

        
        this.addEvents();
        this.myPlayer.play("walk-m", true);

        
    }
    update(time: number, delta: number): void {
        
        if(Phaser.Input.Keyboard.JustDown(this.spaceBar)){
            this.shooting = true;
            this.startAnimation(this.mySpaceBar, this.myPlayer, "spaceBar", "shoot-m");
            this.shootFireBall();
            this.myPlayer.anims.setRepeat(0);
            this.myPlayer.on("animationcomplete", ()=>{
                this.stopAnimation(this.mySpaceBar, this.myPlayer, 0);
                this.shooting = false;
            })
        }
        
        
        if(this.cursorKeys.down.isDown){
            this.myPlayer.play("crouch-m", true);
            this.myArrowDown.play("arrowDown", true);
        }
        else if(this.cursorKeys.up.isDown){
            this.myPlayer.play("jump-m", true);
            this.myArrowUp.play("arrowUp", true);
        }
        else if (this.cursorKeys.shift.isDown){
            this.myPlayer.play("shoot-m", true);
            this.myShift.play("shift", true);
        }

        else if(this.shooting){
            return;
        }
        else if(this.eventIsListened == false){
            this.myPlayer.play("walk-m", true);
            this.myArrowDown.stop();
            this.myArrowDown.setFrame(0);
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

    addEvents(){
        this.myArrowDown
        .on("pointerover", () => {
            this.startAnimation(this.myArrowDown, this.myPlayer, "arrowDown", "crouch-m");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowDown, this.myPlayer, 0);
            this.eventIsListened = false;
        });
        this.myArrowUp 
        .on("pointerover", () => {
            this.startAnimation(this.myArrowUp, this.myPlayer, "arrowUp", "jump-m");
            this.eventIsListened = true;
        })
        .on("pointerout", () => {
            this.stopAnimation(this.myArrowUp, this.myPlayer, 6);
            this.eventIsListened = false;
        });
        this.mySpaceBar 
        .on("pointerover", () => {
            this.startAnimation(this.mySpaceBar, this.myPlayer, "spaceBar", "shoot-m");
            this.eventIsListened = true;
            this.shootFireBall();
            this.myPlayer.on("animationcomplete",()=>{this.myPlayer.setFrame(0);})
            
        })
        .on("pointerout", () => {
            this.stopAnimation(this.mySpaceBar, this.myPlayer, 0);
            this.eventIsListened = false;
        });
        this.myShift
        .on("pointerover", () => {
            this.startAnimation(this.myShift, this.myPlayer, "shift", "shoot-m");
            this.eventIsListened = true;
            this.shootFireBall();
            this.myPlayer.on("animationcomplete",()=>{this.myPlayer.setFrame(0);})
        })
    }

    stopAnimation(myButton: Phaser.GameObjects.Sprite, myCharacter: Phaser.GameObjects.Sprite, buttonFrame: number){
        myCharacter.play("walk-m");
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