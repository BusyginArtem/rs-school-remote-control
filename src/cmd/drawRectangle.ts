import { mouse, left, right, up, down, Button } from "@nut-tree/nut-js";

export default async ([width, height]: number[]) => {
  mouse.config.mouseSpeed = 500;

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(+width));
  await mouse.move(down(+height));
  await mouse.move(left(+width));
  await mouse.move(up(+height));
  await mouse.releaseButton(Button.LEFT);
};
