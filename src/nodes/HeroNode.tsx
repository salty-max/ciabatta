import { Node } from "./Node";
import Hero from "../components/object-graphics/Hero";
import {
  BODY_SKIN,
  DIRECTION,
  HERO_RUN_1,
  HERO_RUN_2,
  directionUpdateMap,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

const HERO_SKIN_MAP = {
  [BODY_SKIN.DEFAULT]: [TILES.HERO_LEFT, TILES.HERO_RIGHT],
  [HERO_RUN_1]: [TILES.HERO_RUN_1_LEFT, TILES.HERO_RUN_1_RIGHT],
  [HERO_RUN_2]: [TILES.HERO_RUN_2_LEFT, TILES.HERO_RUN_2_RIGHT],
};

export class HeroNode extends Node {
  tick() {
    this.tickMovingPixelProgress();
  }

  draw(): JSX.Element {
    return (
      <Hero frameCoord={this.getFrame()} yTranslate={this.getYTranslate()} />
    );
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
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  private updateFacingDirection() {
    if (
      this._movingDirection === DIRECTION.LEFT ||
      this._movingDirection === DIRECTION.RIGHT
    ) {
      this._spriteFacingDirection = this._movingDirection;
    }
  }

  private updateWalkFrame() {
    this._spriteWalkFrame = this._spriteWalkFrame === 0 ? 1 : 0;
  }

  private getFrame() {
    const idx = this._spriteFacingDirection === DIRECTION.LEFT ? 0 : 1;

    // Use correct walking frame per direciton
    if (this._movingPixelsRemaining > 0) {
      const walkKey = this._spriteWalkFrame === 0 ? HERO_RUN_1 : HERO_RUN_2;
      return HERO_SKIN_MAP[walkKey][idx];
    }

    return HERO_SKIN_MAP[BODY_SKIN.DEFAULT][idx];
  }

  getYTranslate() {
    // Stand on ground when not moving
    if (this._movingPixelsRemaining === 0) {
      return 0;
    }

    // Elevate ramp up or down at beginning/end of movement
    const pixelsFromEnd = 2;
    if (
      this._movingPixelsRemaining < pixelsFromEnd ||
      this._movingPixelsRemaining > 16 - pixelsFromEnd
    ) {
      return -1;
    }

    // Highest in the middle of the movement
    return -2;
  }

  private onDoneMoving() {
    const { x, y } = directionUpdateMap[this._movingDirection];
    this._x += x;
    this._y += y;
  }
}
