/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TombolNext extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./TombolNext/costumes/1.png", { x: 125, y: 84 })
    ];

    this.sounds = [new Sound("pop", "./TombolNext/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "  cutscene_button.show" },
        this.whenIReceiveCutsceneButtonShow
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCutsceneButtonShow() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("stage1 start");
    this.visible = false;
  }
}
