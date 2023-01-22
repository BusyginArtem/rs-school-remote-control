import { mouse, left, right, up, down, Button } from "@nut-tree/nut-js";
//
import { MOUSE_SPEED } from "../constants.js";

export default async ([width, height]: number[]) => {
  mouse.config.mouseSpeed = MOUSE_SPEED;

  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(Number(width)));
  await mouse.move(down(Number(height)));
  await mouse.move(left(Number(width)));
  await mouse.move(up(Number(height)));

  await mouse.releaseButton(Button.LEFT);
};
