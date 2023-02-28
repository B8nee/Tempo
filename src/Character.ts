import Phaser from 'phaser';
import GameScene from './GameScene';
import { genericConfig } from './types';
import Animations from './Animations';
import FireBallGroup from "./FireBallGroup";

class Character extends Phaser.GameObjects.Sprite {
    config: genericConfig;
    _scene: GameScene;
    _body: Phaser.Physics.Arcade.Body;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    spacebar: Phaser.Input.Keyboard.Key;
    controlloW: boolean = true;
    fireBallGroup: FireBallGroup;
    spawn: boolean = true;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this.config = params;
        this._scene = <GameScene>params.scene;
        this.config.scene.physics.world.enable(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        this._scene.add.existing(this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this._body.setSize(80, 120, true).setOffset(20, 10);

        this._body.setDragX(100).setCollideWorldBounds(true, 0.5);
    }

    update() {

        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        if (this.cursors.up.isDown && this._body.blocked.down) {
            this.anims.play("jump", true);
            this._body.setVelocityY(-500);
            delay(500).then(() => {
                this._body.setVelocityY(0);
            })
            this.controlloW = false;
        } else if (this.cursors.down.isDown) {
            this.anims.play("crouch", true);
            this.controlloW = false;
        } else {
            
            if (this.spawn) {
                this.anims.play("spawn", true);
                delay(500).then(() => {
                    this.spawn = false;
                    this.controlloW = false;
                });  
            } else {
                this.anims.play("walk", true);
                this.controlloW = true;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
            if (this.controlloW) {
                this.anims.play("shoot", true);
                this.fireBallGroup.fireFireBall(this.x, this.y, this.scaleX, 765, 520);
            }
        }
    }

}

export default Character;