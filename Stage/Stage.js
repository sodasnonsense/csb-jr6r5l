/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("title screen", "./Stage/costumes/title screen.svg", {
        x: 240,
        y: 180
      }),
      new Costume("cutscene", "./Stage/costumes/cutscene.png", {
        x: 480,
        y: 360
      }),
      new Costume("stage3", "./Stage/costumes/stage3.png", { x: 480, y: 360 }),
      new Costume("stage1", "./Stage/costumes/stage1.svg", {
        x: 348.11110051472986,
        y: 182.66666030883778
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "title screen";
    this.visible = false;
  }

  *whenIReceiveStage1Start() {
    this.costume = "stage1";
  }
}
