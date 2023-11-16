/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Budi extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("diem", "./Budi/costumes/diem.png", { x: 28, y: 54 }),
      new Costume("jalan1", "./Budi/costumes/jalan1.png", { x: 28, y: 54 }),
      new Costume("jalan2", "./Budi/costumes/jalan2.png", { x: 28, y: 54 }),
      new Costume("diem2", "./Budi/costumes/diem2.png", { x: 32, y: 54 }),
      new Costume("jalan2-1", "./Budi/costumes/jalan2-1.png", { x: 32, y: 54 }),
      new Costume("jalan2-2", "./Budi/costumes/jalan2-2.png", { x: 32, y: 54 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stage1 start" },
        this.whenIReceiveStage1Start3
      )
    ];
  }

  *whenIReceiveStage1Start() {
    this.goto(-178, -107);
    this.costume = "diem";
    while (true) {
      if (this.keyPressed("d")) {
        this.move(10);
      } else {
        if (this.keyPressed("a")) {
          this.move(-10);
        }
      }
      yield;
    }
  }

  *whenIReceiveStage1Start2() {
    this.goto(-178, -107);
    this.costume = "diem";
    while (true) {
      if (this.keyPressed("d")) {
        this.costume = "jalan1";
        yield* this.wait(0.1);
        this.costume = "jalan2";
        yield* this.wait(0.1);
        this.costume = "diem";
      } else {
        if (this.keyPressed("a")) {
          this.costume = "jalan2-2";
          yield* this.wait(0.1);
          this.costume = "jalan2-1";
          yield* this.wait(0.1);
          this.costume = "diem2";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStage1Start3() {
    this.visible = true;
  }
}
