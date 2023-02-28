import Phaser from 'phaser';
import Animations from './Animations';

class GameScene extends Phaser.Scene {
    selectedCharacter: string;
    character: Phaser.GameObjects.Sprite;
    animations: Animations;

    constructor() {
        super({ key: "GameScene"});
    }

    init(data: any) {
        this.selectedCharacter = data.scelta;
    }

    preload() {
    }

    create() {
        this.animations = new Animations(this);

        this.character = this.add.sprite(0, 0, this.selectedCharacter, 0).setOrigin(0, 0);
        if(this.selectedCharacter == 'rick_spritesheet'){
            this.animations.createRickAnimations();
        }
        else if(this.selectedCharacter == 'morty_spritesheet'){
            this.animations.createMortyAnimations();
        }


        this.character.play("spawn");

    }
}

export default GameScene;