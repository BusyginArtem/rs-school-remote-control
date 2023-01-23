import { mouse, left } from "@nut-tree/nut-js";

export default async ([px]: number[]) => {
  await mouse.move(left(+px));
};
