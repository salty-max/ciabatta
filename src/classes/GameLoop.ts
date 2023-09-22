type RafCallback = number;
type StepHandler = (delta: number) => void;

export class GameLoop {
  private _rafCallback: RafCallback | null;
  private onStep: StepHandler;

  constructor(onStep: StepHandler) {
    this.onStep = onStep;
    this._rafCallback = null;
    this.start();
  }

  start() {
    let previousMs: number;
    const step = 1 / 60;
    const tick = (timestampMs: number) => {
      if (previousMs === undefined) {
        previousMs = timestampMs;
      }

      let delta = (timestampMs - previousMs) / 1000;
      while (delta >= step) {
        this.onStep(step);
        delta -= step;
      }
      previousMs = timestampMs - delta * 1000;
      // Recapture the callback to be able to shut it off
      this._rafCallback = requestAnimationFrame(tick);
    };

    // Initial kick off
    this._rafCallback = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this._rafCallback!);
  }
}
