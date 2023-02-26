import Phaser from 'phaser';

class GameRick extends Phaser.Scene {
    selectedCharacter: String;

    constructor() {
        super({ key: "GameRick"});
    }

    init(data: any) {
        this.selectedCharacter = data.scelta;
    }

    preload() {
    }

    create() {
       
    }
}

export default GameRick;