import { THEME_TILES_MAP } from "../../helpers/consts";
import MapCell from "./MapCell";
import { Level } from "./RenderLevel";

export interface LevelBackgroundTilesLayerProps {
  level: Level;
  image: HTMLImageElement;
}

export default function LevelBackgroundTilesLayer({
  level,
  image,
}: LevelBackgroundTilesLayerProps) {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;
  const tiles = THEME_TILES_MAP[level.theme];

  function getBackgroundTile(x: number, y: number) {
    if (x === 0) {
      return tiles.LEFT;
    }
    if (x === widthWithWalls) {
      return tiles.RIGHT;
    }
    if (y === 0) {
      return tiles.TOP;
    }
    if (y === heightWithWalls) {
      return tiles.BOTTOM;
    }

    return tiles.FLOOR;
  }

  const canvases = [];

  for (let y = 0; y <= heightWithWalls; y++) {
    for (let x = 0; x <= widthWithWalls; x++) {
      // Skip the bottom corners
      if (y === heightWithWalls && (x === 0 || x === widthWithWalls)) continue;

      // Add a cell to the map
      canvases.push(
        <MapCell
          key={`${x}_${y}`}
          image={image}
          x={x}
          y={y}
          frameCoord={getBackgroundTile(x, y)}
        />,
      );
    }
  }

  return <div>{canvases}</div>;
}
