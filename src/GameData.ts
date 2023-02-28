export const GameData: any = {

    images: [

        // General Images
        { name: "favicon", path: "../assets/img/favicon/favicon.png" },

        // Menu Images
        { name: "menu", path: "../assets/img/menu/menu.png" },
        { name: "title", path: "../assets/img/menu/title.png" },
        { name: "subtitle", path: "../assets/img/menu/subtitle.png" },

        // Level Images
        { name: "dino", path: "../assets/img/gameplay/dino.jpg" },
        { name: "futuro", path: "../assets/img/gameplay/futuro.jpg" },
        { name: "medioevo", path: "../assets/img/gameplay/medioevo.png" },
        { name: "pietra", path: "../assets/img/gameplay/pietra.jpg" },

        // Character Selection Images
        { name: "rickSel", path: "../assets/img/gameplay/rickSel.png" },
        { name: "mortySel", path: "../assets/img/gameplay/mortySel.png" },
        { name: "rick", path: "../assets/img/gameplay/rick.png" },
        { name: "morty", path: "../assets/img/gameplay/morty.png" }
    ],

    bitmapfont: [
      {
        name: "arcade",
        imgpath: "../assets/font/arcade.png",
        xmlpath: "../assets/font/arcade.xml",
      },
      {
        name: "RickAndMorty",
        imgpath: "../assets/font/RickAndMorty.png",
        xmlpath: "../assets/font/RickAndMorty.fnt",
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
        path: "../assets/img/gameplay/morty_spritesheet.png",
        frameConfig:{
          frameWidth: 142,
          frameHeight: 142,
        },
      },

      {
        name: "rick_spritesheet",
        path: "../assets/img/gameplay/rick_spritesheet.png",
        frameConfig:{
          frameWidth: 142,
          frameHeight: 142,
        },
      },

      {
        name: "fireball_spritesheet",
        path: "../assets/img/gameplay/fireball.png",
        frameConfig:{
          frameWidth: 32,
          frameHeight: 32,
        },
      }
    ],
  };