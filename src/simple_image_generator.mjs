// A generator that just prints out tile number and coordinates. 

import * as PImage from "pureimage";
import * as fs from "fs";

// constants
const IMG_WIDTH = 3000;
const FONT_NAME = "Inter";
const FONT_SIZE = 400;

var fnt = PImage.registerFont(
  // "./fonts/Arimo/static/Arimo-Regular.ttf", - the font doesn't work with the package
  "./fonts/Inter/static/Inter-Regular.ttf",
  FONT_NAME,
);

fnt.loadSync();
function blockXY(blockId) {
  let remainder = blockId % 100;
  let y;
  if (remainder === 0) {
      y = Math.floor(blockId / 100);
  } else {
      y = Math.floor(blockId / 100) + 1;
  }
  let x = blockId - ((y - 1) * 100);
  return [x, y];
}

export async function generateImage(tileNumber) {
  // calculate coords
  const [tileX, tileY] = blockXY(tileNumber)
  // create image and fill bg
  var img = PImage.make(IMG_WIDTH, IMG_WIDTH);
  var ctx = img.getContext("2d");
  ctx.fillStyle = '#FFFFFF'; // set fill style to white
  ctx.fillRect(0, 0, IMG_WIDTH, IMG_WIDTH); // fill the image with the white color

  // wite text
  function putText(text, isOnTop) {
    ctx.fillStyle = "#000000";
    ctx.font = FONT_SIZE + "pt '" + FONT_NAME + "'";
    const textWidth = ctx.measureText(text).width;
    const textHeight = ctx.measureText(text).emHeightAscent;
    const x = img.width / 2 - textWidth / 2;
    const y = img.height / 2 + (isOnTop ? textHeight : - textHeight);
    ctx.fillText(text, x, y);
  }
  putText("Tile #" + tileNumber, false)
  putText("x:" + tileX + ", y:" + tileY, true)

    try {
      await PImage.encodePNGToStream(img, fs.createWriteStream("./images/" + tileNumber + ".png"));
      console.log("wrote out the png file to" + tileNumber + ".png");
    } catch(e) {
      console.log("there was an error writing");
    }
  
}
