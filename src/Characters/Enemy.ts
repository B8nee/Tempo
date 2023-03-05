import Phaser from 'phaser';
import GameScene from '../GameScene';
import { genericConfig } from '../Other/Types';
import Animations from '../Animations/Animations';
import Shot from '../Objects/Shot';

class Enemy extends Phaser.GameObjects.Sprite {
    config: genericConfig;
    _scene: GameScene;
    _body: Phaser.Physics.Arcade.Body;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    spacebar: Phaser.Input.Keyboard.Key;
    controlloW: boolean = true;
    spawn: boolean = true;
    animations: Animations;
    shotCounter: number = 0;

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

    delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    shotController() {
        if (this._scene.contNem > 6) {
            const shot = new Shot(
                {
                    scene: this._scene,
                    x: this.x,
                    y: this.y + 39,
                    key: "fireball_spritesheet",
                }
            );
    
            shot.shotEnemy();
            shot.update();
    
            this.shotCounter++;
    
            setTimeout(() => {
                this.shotCounter--;
            }, Phaser.Math.Between(2000, 2000));
        }
        
    };

    update() {

        switch (this._scene.level) {
            case 1:
                if (this.spawn) {
                    this.anims.play("e-walk-d", true);
                    this.delay(500).then(() => {
                            this.spawn = false;
                        });  
                    } else {
                        this.anims.play("e-walk-infinite-d", true);
                    }

                this._scene.enemy.setScale(2);
                this._body.setSize(50, 60, true).setOffset(10, 10);
                break;
            case 2:
                if (this.spawn) {
                    this.anims.play("e-walk-t", true);
                    this.delay(500).then(() => {
                            this.spawn = false;
                        });  
                    } else {
                        this.anims.play("e-walk-infinite-t", true);
                    }
                    this._scene.enemy.setScale(3);
                    this._body.setSize(45, 20, true).setOffset(5, 30);

                    if (this._scene.contNem < 6) {
                        return;
                    } else {
                        if (this.shotCounter < 1) {
                            this.shotController();
                        }
                    }
                break;
            case 3:
                if (this.spawn) {
                    this.anims.play("e-walk-r", true);
                    this.delay(500).then(() => {
                            this.spawn = false;
                        });  
                    } else {
                        this.anims.play("e-walk-infinite-r", true);
                    }
                break;
            default:
                break;
            }

       switch (this._scene.level) {
            case 1:
                this._body.setVelocityX(-100);
                break;
            case 2:
                this._body.setVelocityX(-100);
                break;
            case 3:
                this._body.setVelocityX(-100);
                break;
            default:
                break;
       }

    }

}

export default Enemy;