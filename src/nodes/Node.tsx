import { LevelState } from "../classes/Level";
import { NODE_TYPE } from "../helpers/consts";

export interface NodeProperties {
  id: number;
  x: number;
  y: number;
  type: NODE_TYPE;
}

export class Node {
  private _id: number;
  private _x: number;
  private _y: number;
  private _type: NODE_TYPE;
  private _level: LevelState;

  get id(): number {
    return this._id;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
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
  }

  renderComponent(): JSX.Element | null {
    return null;
  }
}
