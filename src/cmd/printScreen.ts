import { mouse, Region, screen } from "@nut-tree/nut-js";
// import Jimp from "jimp/es";

export default async () => {
  const { x, y } = await mouse.getPosition();

  const region = new Region(x - 100, y - 100, 200, 200);

  await screen.highlight(region);
  const bgrImage = await screen.grabRegion(region);
  const rgbImage = await bgrImage.toRGB();

  // const image = new Jimp({ data: rgbImage.data, width: 200, height: 200 });
  // const base64String = await image.getBase64Async(Jimp.MIME_PNG);

  // return base64String.replace("data:image/png;base64,", "");
};
