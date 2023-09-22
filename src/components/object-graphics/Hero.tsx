import { TILES } from "../../helpers/tiles";
import Sprite from "./Sprite";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div className={styles.heroBody}>
        <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />
      </div>
    </div>
  );
}
