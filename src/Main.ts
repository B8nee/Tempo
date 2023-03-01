import Phaser from 'phaser';
import Preloader from './Preloader';
import Menu from './Menu';
import CharacterSelection from './CharacterSelection';
import Credits from './Credits';
import Commands from './Commands';
import GameScene from './GameScene';

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
  parent: '',
  width: 1280,
  height: 720,

  physics:{
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y:1400
      },
    }
  },

  scene: [Main, Preloader, Menu, CharacterSelection, Credits, Commands, GameScene],

  input: {
    activePointers: 2,
    keyboard: true,
  },
  
  render: {
    pixelArt: true,
    antialias: false,
    roundsPixels: true
  },
};

new Phaser.Game(config);