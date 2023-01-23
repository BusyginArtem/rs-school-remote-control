import { mouse } from "@nut-tree/nut-js";

export default async () => {
  const { x, y } = await mouse.getPosition();

  return `${x}px,${y}px`;
};
