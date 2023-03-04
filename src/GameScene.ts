import Phaser from 'phaser';
import Animations from './Animations/Animations';
import Character from './Characters/Character';
import Shot from './Objects/Shot';
import Enemy from './Characters/Enemy';

class GameScene extends Phaser.Scene {
    selectedCharacter: string;
    character: Character;
    animations: Animations;
    base: any;
    // base2: any;
    shotGroup: Phaser.GameObjects.Group;
    shotGroupEnemy: Phaser.GameObjects.Group;
    enemyGroup: Phaser.GameObjects.Group;
    enemy: Enemy;
    chk: boolean = false;
    contVite: number = 0;
    level: number = 1;
    contEnemy: number = 0;
    contaSpawn: number = 1;
    portale: Phaser.GameObjects.Sprite;
    chkON: boolean = true;
    selectedEnemy: string;

    futuro1: Phaser.GameObjects.TileSprite;
    futuro2: Phaser.GameObjects.TileSprite;
    futuro3: Phaser.GameObjects.TileSprite;
    guerra1: Phaser.GameObjects.TileSprite;
    guerra2: Phaser.GameObjects.TileSprite;
    guerra3: Phaser.GameObjects.TileSprite;
    guerra4: Phaser.GameObjects.TileSprite;
    guerra5: Phaser.GameObjects.TileSprite;
    pre1: Phaser.GameObjects.TileSprite;
    pre2: Phaser.GameObjects.TileSprite;
    pre3: Phaser.GameObjects.TileSprite;
    pre4: Phaser.GameObjects.TileSprite;
    pre5: Phaser.GameObjects.TileSprite;
    pre6: Phaser.GameObjects.TileSprite;
    pre7: Phaser.GameObjects.TileSprite;
    pre8: Phaser.GameObjects.TileSprite;

    constructor() {
        super({ key: "GameScene"});
    }

    init(data: any) {
        this.selectedCharacter = data.scelta;
        this.selectedEnemy = data.enemy;
    }

    preload() {
    }

    create() {

        this.chkON = true;

        switch(this.level) {
            case 1:
                this.pre1 = this.add.tileSprite(0, 0, 0, 0, 'pre1').setOrigin(0, 0).setDepth(1).setScale(4);

                this.pre2 = this.add.tileSprite(0, 0, 0, 0, 'pre2').setOrigin(0, 0).setDepth(2).setScale(4);

                this.pre3 = this.add.tileSprite(0, 0, 0, 0, 'pre3').setOrigin(0, 0).setDepth(3).setScale(4);

                this.pre4 = this.add.tileSprite(0, 0, 0, 0, 'pre4').setOrigin(0, 0).setDepth(4).setScale(4);

                this.selectedEnemy = 'dinosaur';

                break;

            case 2:
                this.guerra1 = this.add.tileSprite(0, 0, 0, 0, 'guerra1').setScale(4).setOrigin(0, 0).setDepth(1);

                this.guerra2 = this.add.tileSprite(0, 0, 0, 0, 'guerra2').setScale(4).setOrigin(0, 0).setDepth(2);
    
                this.guerra3 = this.add.tileSprite(0, 0, 0, 0, 'guerra3').setScale(4).setOrigin(0, 0).setDepth(3);
    
                this.guerra4 = this.add.tileSprite(0, 0, 0, 0, 'guerra4').setScale(4).setOrigin(0, 0).setDepth(4);
    
                this.guerra5 = this.add.tileSprite(0, 0, 0, 0, 'guerra5').setScale(4).setOrigin(0, 0).setDepth(5);
    
                this.selectedEnemy = "tank";
    
                break;

            case 3:
                this.futuro1 = this.add.tileSprite(0, 0, 0, 0, 'futuro1').setScale(3.8).setOrigin(0, 0).setDepth(3);

                this.futuro2 = this.add.tileSprite(0, 0, 0, 0, 'futuro2').setScale(5).setOrigin(0, 0).setDepth(1);

                this.futuro3 = this.add.tileSprite(0, 0, 0, 0, 'futuro3').setScale(5).setOrigin(0, 0).setDepth(2);

                this.selectedEnemy = "robot";

                break;

            default:
                break;
        }

        this.shotGroup = this.add.group({runChildUpdate: true});

        this.enemyGroup = this.add.group({runChildUpdate: true});

        this.character = new Character({
            scene: this,
            x: 320,
            y: 615,
            key: this.selectedCharacter + '_spritesheet'
        }).setDepth(100);

        this.enemy = new Enemy({
            scene: this,
            x: 1100,
            y: 606,
            key: this.selectedEnemy,
        }).setDepth(100);

        console.log(this.selectedEnemy);

        this.character = this.physics.add.existing(this.character);

        this.enemy = this.physics.add.existing(this.enemy);

        this.physics.add.collider(
            this.shotGroup,
            this.enemyGroup,
            this.hitEnemy,
            undefined,
            this
        );

        this.base = this.physics.add.staticGroup();
        // this.base2 = this.physics.add.staticGroup();

        this.base.create(0, 975, 'base').setScale(0);
        this.base.create(1280, 975, 'base').setScale(0);

        // this.base.create(640, 600, 'base2').setScale(0);


        this.physics.add.collider(this.character, this.base);
        this.physics.add.collider(this.enemy, this.base);
        this.physics.add.collider(this.enemyGroup, this.base);

        this.physics.add.collider(
            this.shotGroup,
            this.enemy,
            this.hitEnemy,
            undefined,
            this
        );

        this.physics.add.collider(
            this.character,
            this.enemyGroup,
            this.hitCharacter,
            undefined,
            this
        );

        this.physics.add.collider(
            this.character,
            this.enemy,
            this.hitCharacter,
            undefined,
            this
        );

        this.animations = new Animations(this);
        
        if(this.selectedCharacter == 'rick_spritesheet'){
            this.animations.createRickAnimations();
        }
        else if(this.selectedCharacter == 'morty_spritesheet'){
            this.animations.createMortyAnimations();
        }
    }

    addShot(shot: Shot) {
        this.shotGroup.add(shot);
    }

    removeShot(shot: Shot) {
        this.shotGroup.remove(shot, true, true);
    }

    addEnemy(enemy: Enemy) {
        this.enemyGroup.add(enemy);
    }

    removeEnemy(enemy: Enemy) {
        this.chk = true;
        
            this.enemyGroup.remove(enemy, true, true);
            this.enemy.destroy();

        this.contEnemy++;

        if(this.contEnemy == 5){
            this.contEnemy = 0;
            // this.level++;
            if (this.level == 4) {
                this.scene.remove('GameScene');
                this.scene.remove('Hud');
                this.scene.start('Menu');
            }
            // this.create();
            // this.scene.stop("GameScene");
            // this.scene.start('GameScene', {level: this.level, selectedCharacter: this.selectedCharacter});

            this.portale = this.add.sprite(640, 600, 'portal').setScale(0.5).setDepth(100);
            this.portale.play('portal').setFlipX(true);
            this.portale = this.physics.add.existing(this.portale);

            this.physics.add.collider(this.portale, this.base);

            this.physics.add.collider(
                this.character,
                this.portale,
                this.hitPortal,
                undefined,
                this
            );

        }

            this.delay(Phaser.Math.Between(1000, 3000)).then(() => {
                this.addEnemy(this.enemy = new Enemy({
                    scene: this,
                    x: 1100,
                    y: 606,
                    key: this.selectedEnemy,
                }).setDepth(100));
            });

        this.events.emit("update-score", [1]);
    }

    hitEnemy(shot: any, enemy: any) {
        this.contVite++;
        this.removeShot(shot);
        if(this.contVite == 2){
            this.removeEnemy(enemy);
            this.contVite = 0;
    }
    }

    hitCharacter() {
        this.scene.stop('GameScene');
        this.scene.stop('Hud');
        this.scene.start('GameOver');
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    hitPortal() {
        this.chkON = false;
        this.level++;
        this.events.emit("level-up", [this.level]);
        this.scene.stop('GameScene');
        this.scene.start('LevelChange', {level: this.level, selectedCharacter: this.selectedCharacter});
    }

    update() {
        if(this.chkON == true){
            switch(this.level) {
                case 3:
                    this.futuro1.tilePositionX -= -0.5;
                    this.futuro2.tilePositionX -= -0.3;
                    this.futuro3.tilePositionX -= -0.35;
                    break;
                case 2:
                    this.guerra1.tilePositionX -= -0.2;
                    this.guerra2.tilePositionX -= -0.25;
                    this.guerra3.tilePositionX -= -0.3;
                    this.guerra4.tilePositionX -= -0.35;
                    this.guerra5.tilePositionX -= -0.5;
                    break;
                case 1:
                    this.pre1.tilePositionX -= -0.15;
                    this.pre2.tilePositionX -= -0.2;
                    this.pre3.tilePositionX -= -0.25;
                    this.pre4.tilePositionX -= -0.3;
                    break;
                default:
                    break;
            }
        }

        this.character.update();
        if(!this.chk){
            this.enemy.update();
        }

        if (this.portale != null) {
            this.portale.x -= 1;
        }

    }
}

export default GameScene;

