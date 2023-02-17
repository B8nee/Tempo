import Phaser from "phaser";

class Gameplay extends Phaser.Scene {
    dinosaurbg: Phaser.GameObjects.Image;
    neolbg: Phaser.GameObjects.Image;
    medievalbg: Phaser.GameObjects.Image; 
    warbg: Phaser.GameObjects.Image;
    modernbg: Phaser.GameObjects.Image; 
    
    constructor() {
        super({ key: "Gameplay" });
        
    }
    
    preload() {
        this.load.image("dinosaurbg", "../assets/img/gameplay/dino.jpg");
        this.load.image("neolbg", "../assets/img/gameplay/pietra.jpg");
        this.load.image("medievalbg", "../assets/img/gameplay/medioevo.png");
        this.load.image("modernbg", "../assets/img/gameplay/futuro.jpg");
    }


    create() {
        this.dinosaurbg = this.add.image(0, 0, "warbg");
        this.dinosaurbg.setOrigin(0, 0);
    }
}

export default Gameplay;