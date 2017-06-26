"use strict";
import Scene       = require("../lib/scenes/Scene");
import myGame      = require("../MyGame");
import Sprite      = require("../lib/scenes/actors/Sprite");
import MediaPlayer = require("../lib/utils/MediaPlayer");

import Anx         = require("./actors/Anx");

/**
 * MyScene class
 */

class MyScene extends Scene {
  public game:myGame;

  constructor() {
    super();
  }

  reset() {
    super.reset();
    if (!this.spritesByName["anx_walk"]) {
      let sprite = new Sprite({ name: "anx_walk" });
      sprite.img.src = "./assets/sprites/anx_walk.png";
      sprite.size.set(256);
      this.addSprite(sprite);
    }
    this.addActor(new Anx());
    this.game.mediaChannels["music"].play("./assets/music/AuditoryCheesecake_CollectCalls.mp3", true);
  }

}
export = MyScene;
