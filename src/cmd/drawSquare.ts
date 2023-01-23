import { mouse, left, right, up, down, Button } from "@nut-tree/nut-js";
//
import { MOUSE_SPEED } from "../constants.js";

export default async ([side]: number[]) => {
  mouse.config.mouseSpeed = MOUSE_SPEED;

  await mouse.pressButton(Button.LEFT);

  await mouse.move(left(Number(side)));
  await mouse.move(up(Number(side)));
  await mouse.move(right(Number(side)));
  await mouse.move(down(Number(side)));

  await mouse.releaseButton(Button.LEFT);
};
