import { LevelState } from "../classes/Level";
import { CELL_SIZE, DIRECTION, NODE_TYPE } from "../helpers/consts";

export interface NodeProperties {
  id: number;
  x: number;
  y: number;
  type: NODE_TYPE;
}

export class Node {
  private _id: number;
  protected _x: number;
  protected _y: number;
  private _type: NODE_TYPE;
  private _level: LevelState;

  protected _travelPixelsPerFrame: number;
  protected _movingPixelsRemaining: number;
  protected _movingDirection: DIRECTION;

  get id(): number {
    return this._id;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get type(): NODE_TYPE {
    return this._type;
  }

  get level(): LevelState {
    return this._level;
  }

  constructor(properties: NodeProperties, level: LevelState) {
    this._id = properties.id;
    this._x = properties.x;
    this._y = properties.y;
    this._type = properties.type;
    this._level = level;

    this._travelPixelsPerFrame = 1.5;
    this._movingPixelsRemaining = 0;
    this._movingDirection = DIRECTION.RIGHT;
  }

  tick() {}

  displayXY() {
    if (this._movingPixelsRemaining > 0) {
      return this.displayMovingXY();
    }

    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;

    return [x, y];
  }

  private displayMovingXY() {
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this._movingPixelsRemaining;
    switch (this._movingDirection) {
      case DIRECTION.UP:
        return [x, y - progressPixels];
      case DIRECTION.DOWN:
        return [x, y + progressPixels];
      case DIRECTION.LEFT:
        return [x - progressPixels, y];
      case DIRECTION.RIGHT:
        return [x + progressPixels, y];
      default:
        return [x, y + progressPixels];
    }
  }

  draw(): JSX.Element | null {
    return null;
  }
}
