/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CutsceneText extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CutsceneText/costumes/costume1.svg", {
        x: 210.2426349250793,
        y: 137.91667366027832
      }),
      new Costume("costume2", "./CutsceneText/costumes/costume2.svg", {
        x: 210.2426349250793,
        y: 137.91667159851076
      })
    ];

    this.sounds = [new Sound("pop", "./CutsceneText/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start
      )
    ];
  }

  *whenIReceiveMessage1() {
    this.costume = "costume1";
    this.visible = true;
    this.effects.ghost = 60;
    yield* this.wait(0.1);
    this.effects.ghost = 40;
    yield* this.wait(0.1);
    this.effects.ghost = 20;
    yield* this.wait(0.1);
    this.effects.clear();
    yield* this.wait(8);
    this.costume = "costume2";
    this.effects.ghost = 60;
    yield* this.wait(0.1);
    this.effects.ghost = 40;
    yield* this.wait(0.1);
    this.effects.ghost = 20;
    yield* this.wait(0.1);
    this.effects.clear();
    this.broadcast("  cutscene_button.show");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStage1Start() {
    this.visible = false;
  }
}
