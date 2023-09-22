import { LevelState } from "../../classes/Level";

export interface LevelPlacementsLayerProps {
  level: LevelState;
}

export default function LevelPlacementsLayer({
  level,
}: LevelPlacementsLayerProps) {
  return level.nodes.map((node) => {
    if (!node) return null;
    const [x, y] = node.displayXY();
    const style = {
      position: "absolute",
      transform: `translate(${x}px, ${y}px)`,
    } as const;

    return (
      <div style={style} key={node.id}>
        {node.draw()}
      </div>
    );
  });
}
