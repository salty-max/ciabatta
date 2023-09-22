import { LEVEL_THEME } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export interface Placement {
  id: number;
  x: number;
  y: number;
  frameCoord: string;
}

export interface LevelState {
  theme: LEVEL_THEME;
  tilesWidth: number;
  tilesHeight: number;
  placements: Placement[];
}

export type LevelStateHandler = (newState: LevelState) => void;

export class Level {
  private _id: string;
  private _theme!: LEVEL_THEME;
  private _tilesWidth!: number;
  private _tilesHeight!: number;
  private _placements: Placement[] = [];

  public onEmit: LevelStateHandler;

  constructor(levelId: string, onEmit: LevelStateHandler) {
    this._id = levelId;
    this.onEmit = onEmit;

    this.start();
  }

  start() {
    this._theme = LEVEL_THEME.BLUE;
    this._tilesWidth = 9;
    this._tilesHeight = 9;
    this._placements = [
      { id: 0, x: 2, y: 2, frameCoord: TILES.ICE_PICKUP },
      { id: 1, x: 2, y: 4, frameCoord: TILES.WATER_PICKUP },
      { id: 2, x: 2, y: 6, frameCoord: TILES.FIRE_PICKUP },
      { id: 3, x: 7, y: 2, frameCoord: TILES.GREEN_KEY },
      { id: 4, x: 7, y: 4, frameCoord: TILES.BLUE_LOCK },
      { id: 5, x: 7, y: 6, frameCoord: TILES.BULLET },
    ];
  }

  get id(): string {
    return this._id;
  }

  getState(): LevelState {
    return {
      theme: this._theme,
      tilesWidth: this._tilesWidth,
      tilesHeight: this._tilesHeight,
      placements: this._placements,
    };
  }

  destroy() {
    // Tear down the level
  }
}
