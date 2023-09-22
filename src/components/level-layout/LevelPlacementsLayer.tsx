import { CELL_SIZE } from "../../helpers/consts";
import { LevelState } from "../../classes/Level";

export interface LevelPlacementsLayerProps {
  level: LevelState;
}

export default function LevelPlacementsLayer({
  level,
}: LevelPlacementsLayerProps) {
  return level.nodes.map((node) => {
    if (!node) return null;
    const x = `${node.x * CELL_SIZE}px`;
    const y = `${node.y * CELL_SIZE}px`;
    const style = {
      position: "absolute",
      transform: `translate(${x}, ${y})`,
    } as const;

    return (
      <div style={style} key={node.id}>
        {node.draw()}
      </div>
    );
  });
}
