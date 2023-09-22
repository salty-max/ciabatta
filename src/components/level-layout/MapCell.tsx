import { CELL_SIZE } from "../../helpers/consts";
import Sprite from "../object-graphics/Sprite";

export interface MapCellProps {
  x: number;
  y: number;
  frameCoord: string;
}

export default function MapCell({ x, y, frameCoord }: MapCellProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite frameCoord={frameCoord} />
    </div>
  );
}
