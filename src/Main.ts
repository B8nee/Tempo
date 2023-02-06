import Phaser from 'phaser';
import Boot from './Boot';


class Main extends Phaser.Scene {
  scene: any;
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }

  preload() {}

  create() {
    this.scene.start('Boot');
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'Game',
  width: 1024,
  height: 768,
  scene: [Main, Boot],
};

new Phaser.Game(config);