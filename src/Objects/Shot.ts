import Phaser from 'phaser';
import GameScene from '../GameScene';
import { genericConfig } from '../Other/Types';

class Shot extends Phaser.GameObjects.Sprite {
    config: genericConfig;
    _scene: GameScene;
    _body: Phaser.Physics.Arcade.Body;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this.config = params;
        this._scene = <GameScene>params.scene;
        this.config.scene.physics.world.enable(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        this._body.setDragX(1000).setVelocityX(100);

        this.create();
    }

    create() {
        this.setScale(1);
        this.setAlpha(0).setScale(1).setDepth(10);
        this._scene.tweens.add({
            targets: this,
            alpha: 1,
            scale: 1,
            duration: 1,
        });
        this._scene.addShot(this);
        this._scene.add.existing(this);
        this._body.allowGravity = false;
        this._body.setVelocityX(1700);
    }

    shotObliq() {
        this.setScale(1);
        this.setAlpha(0).setScale(1).setDepth(10);
        this._scene.tweens.add({
            targets: this,
            alpha: 1,
            scale: 1,
            duration: 1,
        });
        this._scene.addShot(this);
        this._scene.add.existing(this);
        this._body.allowGravity = false;
        this._body.setVelocityX(1700).setVelocityY(-1700);
    }

    update() {
        if (this.x < 0) {
            this._scene.removeShot(this);
        }
    }
}

export default Shot;