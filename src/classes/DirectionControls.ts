import { DIRECTION } from "../helpers/consts";

export type DirectionKeys = Record<string, DIRECTION>;

export class DirectionControls {
  public directionKeys: DirectionKeys;
  public heldDirections: DIRECTION[] = [];

  private directionKeyDownHandler: (e: KeyboardEvent) => void;
  private directionKeyUpHandler: (e: KeyboardEvent) => void;

  constructor() {
    this.directionKeys = {
      ArrowUp: DIRECTION.UP,
      ArrowDown: DIRECTION.DOWN,
      ArrowLeft: DIRECTION.LEFT,
      ArrowRight: DIRECTION.RIGHT,
      w: DIRECTION.UP,
      s: DIRECTION.DOWN,
      a: DIRECTION.LEFT,
      d: DIRECTION.RIGHT,
    };

    this.directionKeyDownHandler = (e: KeyboardEvent) => {
      const dir = this.directionKeys[e.key];
      if (dir && !this.heldDirections.includes(dir)) {
        this.heldDirections.unshift(dir);
        console.log(this.heldDirections);
      }
    };

    this.directionKeyUpHandler = (e: KeyboardEvent) => {
      const dir = this.directionKeys[e.key];
      const idx = this.heldDirections.indexOf(dir);
      if (idx > -1) {
        this.heldDirections.splice(idx, 1);
        console.log(this.heldDirections);
      }
    };

    document.addEventListener("keydown", this.directionKeyDownHandler);
    document.addEventListener("keyup", this.directionKeyUpHandler);
  }

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpHandler);
  }
}
