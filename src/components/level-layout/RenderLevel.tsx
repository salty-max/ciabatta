import { useEffect, useState } from "react";
import { THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import styles from "./RenderLevel.module.css";
import { Level, LevelState } from "../../classes/Level";

export default function RenderLevel() {
  const [level, setLevel] = useState<LevelState | null>(null);
  useEffect(() => {
    // Create and subscribe to state changes
    const levelInstance = new Level("1-1", (newState) => setLevel(newState));

    // Get initial state
    setLevel(levelInstance.getState());

    // Destroy the state when this component unmounts
    return () => levelInstance.destroy();
  }, []);

  if (!level) {
    return null;
  }

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementsLayer level={level} />
      </div>
    </div>
  );
}
