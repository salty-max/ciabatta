import { useEffect, useState } from "react";
import { SPRITESHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";

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

  return <RenderLevel spritesheetImage={spritesheetImage} />;
}

export default App;
