import Sprite from "../object-graphics/Sprite";
import { CELL_SIZE } from "../../helpers/consts";
import { LevelState } from "../../classes/Level";

export interface LevelPlacementsLayerProps {
  level: LevelState;
}

export default function LevelPlacementsLayer({
  level,
}: LevelPlacementsLayerProps) {
  return level.placements.map((placement) => {
    const x = `${placement.x * CELL_SIZE}px`;
    const y = `${placement.y * CELL_SIZE}px`;
    const style = {
      position: "absolute",
      transform: `translate(${x}, ${y})`,
    } as const;

    return (
      <div style={style} key={placement.id}>
        <Sprite frameCoord={placement.frameCoord} />
      </div>
    );
  });
}
