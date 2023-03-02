import Phaser from 'phaser';
import GameScene from '../GameScene';
import { genericConfig } from '../Other/Types';
import Animations from '../Animations/Animations';

class Enemy extends Phaser.GameObjects.Sprite {
    config: genericConfig;
    _scene: GameScene;
    _body: Phaser.Physics.Arcade.Body;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    spacebar: Phaser.Input.Keyboard.Key;
    controlloW: boolean = true;
    spawn: boolean = true;
    animations: Animations;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this.config = params;
        this._scene = <GameScene>params.scene;
        this.config.scene.physics.world.enable(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        this._scene.add.existing(this);
        this._body.setSize(100, 160, true).setOffset(30, 22);

        this._body.setDragX(100).setCollideWorldBounds(true, 0.5);
    }

    update() {
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

            if (this.spawn) {
                this.anims.play("e-walk", true);
                delay(500).then(() => {
                    this.spawn = false;
                });  
            } else {
                this.anims.play("e-walk-infinite", true);
            }

        this._body.setVelocityX(-100);
    }

}

export default Enemy;