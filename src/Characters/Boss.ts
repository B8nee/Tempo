import Phaser from "phaser";
import GameBoss from "../GameBoss";
import { genericConfig } from "../Other/Types";
import Animations from "../Animations/Animations";

class Boss extends Phaser.GameObjects.Sprite {
    config: genericConfig;
    _scene: GameBoss;
    _body: Phaser.Physics.Arcade.Body;
    animations: Animations;
    boss: Phaser.GameObjects.Sprite;
    

    constructor(params: genericConfig ) {
        super(params.scene, params.x, params.y, params.key);
        this.config = params;
        this._scene = <GameBoss>params.scene;
        this.config.scene.physics.world.enable(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        this._scene.add.existing(this);
        this._body.setCollideWorldBounds(true, 0.5);
    }

    update() {
    }


}

export default Boss;