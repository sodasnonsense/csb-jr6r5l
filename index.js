import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Title from "./Title/Title.js";
import Play from "./Play/Play.js";
import Credit from "./Credit/Credit.js";
import CutsceneText from "./CutsceneText/CutsceneText.js";
import TombolNext from "./TombolNext/TombolNext.js";
import Stage1Objective from "./Stage1Objective/Stage1Objective.js";
import Budi from "./Budi/Budi.js";

const stage = new Stage({ costumeNumber: 4 });

const sprites = {
  Title: new Title({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Play: new Play({
    x: 18,
    y: -39,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 2
  }),
  Credit: new Credit({
    x: 16.582957231216582,
    y: -102.66249736400545,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 3
  }),
  CutsceneText: new CutsceneText({
    x: 24,
    y: -17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  TombolNext: new TombolNext({
    x: 211,
    y: -144,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 5
  }),
  Stage1Objective: new Stage1Objective({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Budi: new Budi({
    x: 83,
    y: -107,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
