import { Node } from "./Node";
import Hero from "../components/object-graphics/Hero";
import { DIRECTION, directionUpdateMap } from "../helpers/consts";

export class HeroNode extends Node {
  tick() {
    this.tickMovingPixelProgress();
  }

  draw(): JSX.Element {
    return <Hero />;
  }

  private tickMovingPixelProgress() {
    if (this._movingPixelsRemaining === 0) {
      return;
    }

    this._movingPixelsRemaining -= this._travelPixelsPerFrame;

    if (this._movingPixelsRemaining <= 0) {
      this._movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  move(direction: DIRECTION) {
    // Attempt to start moving
    if (this._movingPixelsRemaining > 0) {
      return;
    }

    // Start the move
    this._movingPixelsRemaining = 16;
    this._movingDirection = direction;
  }

  private onDoneMoving() {
    const { x, y } = directionUpdateMap[this._movingDirection];
    this._x += x;
    this._y += y;
  }
}
