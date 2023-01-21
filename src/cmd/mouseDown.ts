import { mouse, down } from "@nut-tree/nut-js";

export default async ([px]: number[]) => {
  await mouse.move(down(+px));
};
