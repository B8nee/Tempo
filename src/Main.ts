import Phaser from 'phaser';
import Preloader from './Preloader';
import Menu from './Menu';
import CharacterSelection from './CharacterSelection';
import Credits from './Credits';
import Commands from './Commands';
import GameScene from './GameScene';
import Hud from './Hud';
import LevelChange from './LevelChange';
import GameOver from "./GameOver";

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
  type: Phaser.CANVAS,
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

  scene: [Main, Preloader, Menu, CharacterSelection, Credits, Commands, GameScene, Hud, LevelChange, GameOver],

  input: {
    activePointers: 2,
    keyboard: true,
  },
  
  render: {
    pixelArt: true,
    antialias: false,
    roundsPixels: true,
    powerPreference: 'high-performance'
  },
};

new Phaser.Game(config);