import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";
//
import { IMAGE_SIZE } from "../constants.js";

export default async () => {
  try {
    const { x, y } = await mouse.getPosition();

    const region = new Region(x - 100, y - 100, IMAGE_SIZE, IMAGE_SIZE);

    await screen.highlight(region);

    const grabedRegion = await screen.grabRegion(region);
    const rgbImage = await grabedRegion.toRGB();
    const image = new Jimp(200, 200);

    image.bitmap.data = rgbImage.data;
    image.bitmap.width = rgbImage.width;
    image.bitmap.height = rgbImage.height;

    const base64String = await image.getBase64Async(Jimp.MIME_PNG);

    return base64String.replace("data:image/png;base64,", "");
  } catch (error) {
    console.error("error >>>>>>>>>>>>>.", error);
  }
};
