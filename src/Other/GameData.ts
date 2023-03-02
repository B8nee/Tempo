export const GameData: any = {

    images: [

        // General Images
        { name: "favicon", path: "../assets/img/favicon/favicon.png" },
        { name: "base", path: "../assets/img/gameplay/general/base.png" },
        { name: "base2", path: "../assets/img/gameplay/general/base2.png" },

        // Menu Images
        { name: "menu", path: "../assets/img/menu/menu.png" },
        { name: "title", path: "../assets/img/menu/title.png" },
        { name: "subtitle", path: "../assets/img/menu/subtitle.png" },
        { name: "dino", path: "../assets/img/gameplay/background/dino.jpg" },

        // Level Images
        { name: "futuro1", path: "../assets/img/gameplay/level3/futuro1.png" },
        { name: "futuro2", path: "../assets/img/gameplay/level3/futuro2.png" },
        { name: "futuro3", path: "../assets/img/gameplay/level3/futuro3.png" },
        { name: "guerra1", path: "../assets/img/gameplay/level2/guerra1.png" },
        { name: "guerra2", path: "../assets/img/gameplay/level2/guerra2.png" },
        { name: "guerra3", path: "../assets/img/gameplay/level2/guerra3.png" },
        { name: "guerra4", path: "../assets/img/gameplay/level2/guerra4.png" },
        { name: "guerra5", path: "../assets/img/gameplay/level2/guerra5.png" },
        { name: "pre1", path: "../assets/img/gameplay/level1/pre1.png" },
        { name: "pre2", path: "../assets/img/gameplay/level1/pre2.png" },
        { name: "pre3", path: "../assets/img/gameplay/level1/pre3.png" },
        { name: "pre4", path: "../assets/img/gameplay/level1/pre4.png" },

        // Character Selection Images
        { name: "rickSel", path: "../assets/img/gameplay/characters/rickSel.png" },
        { name: "mortySel", path: "../assets/img/gameplay/characters/mortySel.png" },
        { name: "rick", path: "../assets/img/gameplay/characters/rick.png" },
        { name: "morty", path: "../assets/img/gameplay/characters/morty.png" },

        // Objects
        { name: "skull", path: "../assets/img/gameplay/objects/skull.png" },
        { name: "time", path: "../assets/img/gameplay/objects/time.png" },
    ],

    bitmapfont: [
      {
        name: "arcade",
        imgpath: "../assets/font/arcade/arcade.png",
        xmlpath: "../assets/font/arcade/arcade.xml",
      },
      {
        name: "RickAndMorty",
        imgpath: "../assets/font/rickandmorty/RickAndMorty.png",
        xmlpath: "../assets/font/rickandmorty/RickAndMorty.fnt",
      },
    ],

    spritesheet: [
      {
        name: "arrows",
        path: "../assets/img/commands/arrows.png",
        frameConfig: {
          frameWidth: 32,
          frameHeight: 32,
        },
      },
      {
        name: "spacebar",
        path: "../assets/img/commands/spaceBar.png",
        frameConfig:{
          frameWidth: 96,
          frameHeight: 32,
        }
      },

      {
        name: "morty_spritesheet",
        path: "../assets/img/gameplay/characters/morty_spritesheet.png",
        frameConfig:{
          frameWidth: 142,
          frameHeight: 142,
        },
      },

      {
        name: "rick_spritesheet",
        path: "../assets/img/gameplay/characters/rick_spritesheet.png",
        frameConfig:{
          frameWidth: 142,
          frameHeight: 142,
        },
      },

      {
        name: "fireball_spritesheet",
        path: "../assets/img/gameplay/objects/fireball.png",
        frameConfig:{
          frameWidth: 32,
          frameHeight: 32,
        },
      },

      {
        name: "robot_spritesheet",
        path: "../assets/img/gameplay/characters/robot_spritesheet.png",
        frameConfig:{
          frameWidth: 192.5,
          frameHeight: 216,
        },
      },

      {
        name: "heart",
        path: "../assets/img/gameplay/objects/heart.png",
        frameConfig:{
          frameWidth: 32,
          frameHeight: 32,
        },
      }
    ],
  };