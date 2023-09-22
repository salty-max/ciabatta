import {
  CELL_SIZE,
  LEVEL_THEME,
  THEME_BACKGROUNDS,
} from "../../helpers/consts";
import Sprite from "../object-graphics/Sprite";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import styles from "./RenderLevel.module.css";

export interface Level {
  theme: LEVEL_THEME;
  tilesWidth: number;
  tilesHeight: number;
  placements: Placement[];
}

export interface Placement {
  id: number;
  x: number;
  y: number;
  frameCoord: string;
}

export interface RenderLevelProps {
  spritesheetImage: HTMLImageElement;
}

export default function RenderLevel({ spritesheetImage }: RenderLevelProps) {
  const level: Level = {
    theme: LEVEL_THEME.YELLOW,
    tilesWidth: 9,
    tilesHeight: 9,
    placements: [
      { id: 0, x: 2, y: 2, frameCoord: "0x2" },
      { id: 1, x: 2, y: 4, frameCoord: "0x2" },
      { id: 2, x: 2, y: 6, frameCoord: "0x2" },
      { id: 3, x: 2, y: 8, frameCoord: "0x2" },
      { id: 4, x: 4, y: 2, frameCoord: "0x2" },
      { id: 5, x: 4, y: 4, frameCoord: "0x2" },
      { id: 6, x: 4, y: 6, frameCoord: "0x2" },
      { id: 7, x: 4, y: 8, frameCoord: "0x2" },
      { id: 8, x: 6, y: 2, frameCoord: "0x2" },
      { id: 9, x: 6, y: 4, frameCoord: "0x2" },
      { id: 10, x: 6, y: 6, frameCoord: "0x2" },
      { id: 11, x: 6, y: 8, frameCoord: "0x2" },
      { id: 12, x: 8, y: 2, frameCoord: "0x2" },
      { id: 13, x: 8, y: 4, frameCoord: "0x2" },
      { id: 14, x: 8, y: 6, frameCoord: "0x2" },
      { id: 15, x: 7, y: 8, frameCoord: "0x2" },
      { id: 16, x: 8, y: 8, frameCoord: "0x2" },
    ],
  };

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} image={spritesheetImage} />
        {level.placements.map((placement) => {
          const x = `${placement.x * CELL_SIZE}px`;
          const y = `${placement.y * CELL_SIZE}px`;
          const style = {
            position: "absolute",
            transform: `translate(${x}, ${y})`,
          } as const;

          return (
            <div style={style} key={placement.id}>
              <Sprite
                image={spritesheetImage}
                frameCoord={placement.frameCoord}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
