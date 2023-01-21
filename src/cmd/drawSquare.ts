import { mouse, left, right, up, down, Button } from "@nut-tree/nut-js";

export default async ([side]: number[]) => {
  mouse.config.mouseSpeed = 500;

  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(+side));
  await mouse.move(up(+side));
  await mouse.move(right(+side));
  await mouse.move(down(+side));
  await mouse.releaseButton(Button.LEFT);
};
