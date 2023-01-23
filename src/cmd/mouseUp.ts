import { mouse, up } from "@nut-tree/nut-js";

export default async ([px]: number[]) => {
  await mouse.move(up(+px));
};
