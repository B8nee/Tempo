import Phaser from 'phaser';

class GameMorty extends Phaser.Scene {
    selectedCharacter: string;
    character: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: "GameMorty"});
    }

    init(data: any) {
        this.selectedCharacter = data.scelta;
    }

    preload() {
    }

    create() {
       this.character = this.add.sprite(0, 0, this.selectedCharacter, 0).setOrigin(0, 0);
    }
}

export default GameMorty;