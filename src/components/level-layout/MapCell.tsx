import { CELL_SIZE } from "../../helpers/consts";
import Sprite from "../object-graphics/Sprite";

export interface MapCellProps {
  x: number;
  y: number;
  frameCoord: string;
  image: HTMLImageElement;
}

export default function MapCell({ x, y, frameCoord, image }: MapCellProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite image={image} frameCoord={frameCoord} />
    </div>
  );
}
