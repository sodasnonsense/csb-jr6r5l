/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage1Objective extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Stage1Objective/costumes/costume1.svg", {
        x: 204.000275,
        y: 147.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage1Objective/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.visible = false;
  }

  *whenIReceiveStage1Start() {
    this.effects.ghost = 20;
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
