import Phaser from 'phaser';
import Animations from './Animations';
import Character from './Character';
import FireBallGroup from "./FireBallGroup";

class GameScene extends Phaser.Scene {
    selectedCharacter: string;
    character: Character;
    animations: Animations;
    fireballGroup: Phaser.GameObjects.Group;
    base: any;

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
    }

    preload() {
    }

    create() {

        this.fireballGroup = this.add.group({ runChildUpdate: true});

        this.character = new Character({
            scene: this,
            x: 690,
            y: 640,
            key: this.selectedCharacter + '_spritesheet'
        }).setDepth(100);

        this.character = this.physics.add.existing(this.character);

        this.base = this.physics.add.staticGroup();

        this.base.create(0, 1000, 'base').setScale(0);

        this.physics.add.collider(this.character, this.base);

        // this.futuro1 = this.add.tileSprite(0, 0, 0, 0, 'futuro1').setScale(3.8).setOrigin(0, 0).setDepth(3);

        // this.futuro2 = this.add.tileSprite(0, 0, 0, 0, 'futuro2').setScale(5).setOrigin(0, 0).setDepth(1);

        // this.futuro3 = this.add.tileSprite(0, 0, 0, 0, 'futuro3').setScale(5).setOrigin(0, 0).setDepth(2);

        // this.guerra1 = this.add.tileSprite(0, 0, 0, 0, 'guerra1').setScale(4).setOrigin(0, 0).setDepth(1);

        // this.guerra2 = this.add.tileSprite(0, 0, 0, 0, 'guerra2').setScale(4).setOrigin(0, 0).setDepth(2);

        // this.guerra3 = this.add.tileSprite(0, 0, 0, 0, 'guerra3').setScale(4).setOrigin(0, 0).setDepth(3);

        // this.guerra4 = this.add.tileSprite(0, 0, 0, 0, 'guerra4').setScale(4).setOrigin(0, 0).setDepth(4);

        // this.guerra5 = this.add.tileSprite(0, 0, 0, 0, 'guerra5').setScale(4).setOrigin(0, 0).setDepth(5);

        this.pre1 = this.add.tileSprite(0, 0, 0, 0, 'pre1').setOrigin(0, 0).setDepth(1).setScale(0.7);

        this.pre2 = this.add.tileSprite(0, 0, 0, 0, 'pre2').setOrigin(0, 0).setDepth(2).setScale(0.7);

        this.pre3 = this.add.tileSprite(0, 0, 0, 0, 'pre3').setOrigin(0, 0).setDepth(3).setScale(0.7);

        this.pre4 = this.add.tileSprite(0, 0, 0, 0, 'pre4').setOrigin(0, 0).setDepth(4).setScale(0.7);

        this.pre5 = this.add.tileSprite(0, 0, 0, 0, 'pre5').setOrigin(0, 0).setDepth(5).setScale(0.7);

        this.pre6 = this.add.tileSprite(0, 0, 0, 0, 'pre6').setOrigin(0, 0).setDepth(6).setScale(0.7);

        this.pre7 = this.add.tileSprite(0, 0, 0, 0, 'pre7').setOrigin(0, 0).setDepth(7).setScale(0.7);

        this.pre8 = this.add.tileSprite(0, 0, 0, 0, 'pre8').setOrigin(0, 0).setDepth(8).setScale(0.7);

        this.animations = new Animations(this);
        
        if(this.selectedCharacter == 'rick_spritesheet'){
            this.animations.createRickAnimations();
        }
        else if(this.selectedCharacter == 'morty_spritesheet'){
            this.animations.createMortyAnimations();
        }


        this.character.play("spawn");



    }

    update() {
        this.character.update();
        // this.futuro1.tilePositionX -= -0.5;
        // this.futuro2.tilePositionX -= -0.3;
        // this.futuro3.tilePositionX -= -0.35;
        // this.guerra1.tilePositionX -= -0.2;
        // this.guerra2.tilePositionX -= -0.25;
        // this.guerra3.tilePositionX -= -0.3;
        // this.guerra4.tilePositionX -= -0.35;
        // this.guerra5.tilePositionX -= -0.5;
        this.pre1.tilePositionX -= -0.15;
        this.pre2.tilePositionX -= -0.2;
        this.pre3.tilePositionX -= -0.25;
        this.pre4.tilePositionX -= -0.3;
        this.pre5.tilePositionX -= -0.35;
        this.pre6.tilePositionX -= -0.4;
        this.pre7.tilePositionX -= -0.45;
        this.pre8.tilePositionX -= -0.6;

    }
}

export default GameScene;