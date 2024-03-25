import * as SimpleGenerator from "../src/simple_image_generator.mjs";

async function generateImages() {
    for (let i = 1; i<=10; i++) {
      await SimpleGenerator.generateImage(i);
    }
  }
generateImages();