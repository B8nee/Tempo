import Phaser from 'phaser';
import Preloader from './Preloader';
import Menu from './Menu';
import Gameplay from './Gameplay';
import Credits from './Credits';
import Commands from './Commands';

class Main extends Phaser.Scene {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }

  preload() {
    this.load.image('menu', '../assets/img/menu/menu.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'Game',
  width: 1280,
  height: 720,
  scene: [Main, Preloader, Menu, Gameplay, Credits, Commands],
};

new Phaser.Game(config);