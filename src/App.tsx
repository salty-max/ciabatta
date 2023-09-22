import { useEffect } from "react";
import { SPRITESHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spritesheetAtom } from "./atoms/spritesheetAtom";

function App() {
  const [spritesheet, setSpritesheet] = useRecoilState(spritesheetAtom);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITESHEET_SRC;
    image.onload = () => setSpritesheet(image);
  }, [setSpritesheet]);

  if (!spritesheet) {
    return null;
  }

  return <RenderLevel />;
}

export default App;
