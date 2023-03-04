class FireBall extends Phaser.Physics.Arcade.Sprite{
    max: number;
    min: number;
    constructor(scene:any, x:number, y:number){
        super(scene, x, y, 'fireball_spritesheet');
    }
    fire(x: number,y: number, playerScaleX: any, max_width: number, min_width: number){
        this.max = max_width;
        this.min = min_width;
        this.body.reset(x,y);
        this.scaleX = playerScaleX;

        this.setActive(true);
        this.setVisible(true);
        this.setCollideWorldBounds(true);

        
        this.setVelocityX(1900);
        this.play("fireball");
    }


    protected preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta);

        if(this.x >= this.max || this.x < this.min){
            this.destroy();
        }
        
    }
}

class FireBallGroup extends Phaser.Physics.Arcade.Group
{  
    constructor(scene: any){
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: FireBall,
            frameQuantity: 100,
            active: false,
            visible: false,
            key: 'fireball',
        });
    }

    fireFireBall(x:number, y:number, playerScaleX: any, max: number, min: number){
        const fireball = this.getFirstDead(false);
        if(fireball){
            x -= (35 * playerScaleX);
            fireball.fire(x, y, playerScaleX, max, min);
        }
    }

}
export default FireBallGroup;