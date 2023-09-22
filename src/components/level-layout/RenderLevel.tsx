import Sprite from "../object-graphics/Sprite";
import styles from "./RenderLevel.module.css";

export interface RenderLevelProps {
  spritesheetImage: HTMLImageElement;
}

export default function RenderLevel({ spritesheetImage }: RenderLevelProps) {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.gameScreen}>
        <Sprite image={spritesheetImage} frameCoord="1x0" />
        <Sprite image={spritesheetImage} frameCoord="0x2" />
        <Sprite image={spritesheetImage} frameCoord="2x3" />
        <Sprite image={spritesheetImage} frameCoord="5x3" />
        <Sprite image={spritesheetImage} frameCoord="3x4" />
        <Sprite image={spritesheetImage} frameCoord="1x5" />
        <Sprite image={spritesheetImage} frameCoord="2x5" />
      </div>
    </div>
  );
}
