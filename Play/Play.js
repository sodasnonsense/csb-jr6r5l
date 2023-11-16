/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Play/costumes/costume1.svg", {
        x: 124.25,
        y: 73.5833396911621
      })
    ];

    this.sounds = [new Sound("pop", "./Play/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("message1");
    this.stage.costume = "cutscene";
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }
}
