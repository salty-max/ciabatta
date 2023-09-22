import { useEffect, useState } from "react";
import Sprite from "./components/object-graphics/Sprite";
import { SPRITESHEET_SRC } from "./helpers/consts";

function App() {
  const [spritesheetImage, setSpritesheetImage] =
    useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITESHEET_SRC;
    image.onload = () => setSpritesheetImage(image);
  }, []);

  if (!spritesheetImage) {
    return null;
  }

  return (
    <div>
      <Sprite image={spritesheetImage} frameCoord="1x0" />
      <Sprite image={spritesheetImage} frameCoord="0x2" />
      <Sprite image={spritesheetImage} frameCoord="0x3" />
    </div>
  );
}

export default App;
