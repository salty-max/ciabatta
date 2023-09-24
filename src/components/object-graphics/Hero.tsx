import { TILES } from "../../helpers/tiles";
import Sprite from "./Sprite";
import styles from "./Hero.module.css";

export interface HeroProps {
  frameCoord: string;
  yTranslate: number;
}

export default function Hero({ frameCoord, yTranslate }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div
        className={styles.heroBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
    </div>
  );
}
