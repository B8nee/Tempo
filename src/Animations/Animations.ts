class Animations extends Phaser.GameObjects.Container{
    constructor(scene: Phaser.Scene){
        super(scene);
    }

    createCommandsAnimations(){

        this.scene.anims.create({
            key: "arrowDown",
            frameRate: 1,
            frames: this.scene.anims.generateFrameNumbers("arrows", { start: 0, end: 1 }),
            repeat: -1
        });
        this.scene.anims.create({
            key: "arrowLeft",
            frameRate: 1,
            frames: this.scene.anims.generateFrameNumbers("arrows", { start: 2, end: 3 }),
            repeat: -1
        });
        this.scene.anims.create({
            key: "arrowRight",
            frameRate: 1,
            frames: this.scene.anims.generateFrameNumbers("arrows", { start: 4, end: 5 }),
            repeat: -1
        });
        this.scene.anims.create({
            key: "arrowUp",
            frameRate: 1,
            frames: this.scene.anims.generateFrameNumbers("arrows", { start: 6, end: 7 }),
            repeat: -1
        });
        this.scene.anims.create({
            key: "spaceBar",
            frameRate: 1,
            frames: this.scene.anims.generateFrameNumbers("spacebar", { start: 0, end: 1 }),
            repeat: -1
        });
        this.createMortyAnimations();
        
    }

    createMortyAnimations(){
        this.scene.anims.create({
            key: "spawn",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("morty_spritesheet", {start: 4, end: 7}),
            repeat: 0,
        });
        this.scene.anims.create({
            key: "walk",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("morty_spritesheet", {start: 8, end: 11}),
            repeat: -1
        });
        this.scene.anims.create({
            key: "jump",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("morty_spritesheet", {start: 12, end: 15}),
            repeat: 0,
        });
        this.scene.anims.create({
            key: "crouch",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("morty_spritesheet", {start: 16, end: 19}),
            repeat: -1,
            repeatDelay: 100,           
        });
        this.scene.anims.create({
            key: "shoot",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("morty_spritesheet", {start: 20, end: 23}),
            repeat: 0,           
        });

        this.createGameAnimations();
        
    }

    createRickAnimations(){
        this.scene.anims.create({
            key: "spawn",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("rick_spritesheet", {start: 4, end: 7}),
            repeat: 0,
        });
        this.scene.anims.create({
            key: "walk",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("rick_spritesheet", {start: 8, end: 11}),
            repeat: -1
        });
        this.scene.anims.create({
            key: "jump",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("rick_spritesheet", {start: 12, end: 15}),
            repeat: 0,
        });
        this.scene.anims.create({
            key: "crouch",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("rick_spritesheet", {start: 16, end: 19}),
            repeat: 0,          
        });
        this.scene.anims.create({
            key: "shoot",
            frameRate: 6,
            frames:this.scene.anims.generateFrameNames("rick_spritesheet", {start: 20, end: 23}),
            repeat: 0,           
        });

        this.createGameAnimations();
        
    }

    createGameAnimations(){
        this.scene.anims.create({
            key: "fireball",
            frameRate: 3,
            frames: this.scene.anims.generateFrameNames("fireball_spritesheet", {start: 0, end: 2}),
            repeat: -1,
        }),

        this.scene.anims.create({
            key: "robot-walk",
            frameRate: 6,
            frames: this.scene.anims.generateFrameNames("robot_spritesheet", {start: 3, end: 0}),
            repeat: -1,
        }),

        this.scene.anims.create({
            key: "robot-walk-infinite",
            frameRate: 6,
            frames: this.scene.anims.generateFrameNames("robot_spritesheet", {start: 0, end: 0}),
            repeat: -1,
        })
    }
} export default Animations