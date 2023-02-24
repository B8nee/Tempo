interface genericConfig {
    scene: Phaser.Scene;
    x: number;
    y: number;
    key: string;
  }
  
  interface ImageAsset {
    name: string;
    path: string;
  }
  
  interface ScriptAsset {
    key: string;
    path: string;
  }
  
  interface TileMapsAsset {
    key: string;
    path: string;
  }
  
  interface SpritesheetAsset {
    name: string;
    path: string;
    frameConfig?: {
      frameWidth: number;
      frameHeight?: number;
    };
    xhrSettings?: {
      responseType: XMLHttpRequestResponseType;
    }

  }
  
  interface SoundAsset {
    name: string;
    paths: Array<string>;
  }
  
  interface AudioSpriteAsset {
    name: string;
    jsonpath: string;
    paths: Array<string>;
    instance: { instance: number };
  }
  
  interface BitmapfontAsset {
    name: string;
    imgpath: string;
    xmlpath: string;
  }
  
  interface AtlasAsset {
    key: string;
    imagepath: string;
    jsonpath: string;
  }
  
  export {genericConfig, ImageAsset, ScriptAsset, TileMapsAsset, SpritesheetAsset, SoundAsset, AudioSpriteAsset, BitmapfontAsset, AtlasAsset};
  