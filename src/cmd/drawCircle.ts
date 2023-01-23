import { mouse, Point, straightTo, Button } from "@nut-tree/nut-js";
//
import { MOUSE_SPEED } from "../constants.js";

export default async ([radius]: number[]) => {
  try {
    mouse.config.mouseSpeed = MOUSE_SPEED;

    const { x: mouseX, y: mouseY } = await mouse.getPosition();

    await mouse.pressButton(Button.LEFT);

    for (let i = 360; i >= 0; i--) {
      const radians = (i * Math.PI) / 180;

      const x = radius * Math.cos(radians) + mouseX - radius;
      const y = radius * Math.sin(radians) + mouseY;

      if (x < 0 || y < 0) {
        throw new Error("Don't leave the main screen!");
        break;
      }

      const target = new Point(x, y);

      await mouse.move(straightTo(target));
    }

    await mouse.releaseButton(Button.LEFT);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
