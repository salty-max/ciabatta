import { LEVEL_THEME, NODE_TYPE } from "../helpers/consts";
import { HeroNode } from "../nodes/HeroNode";
import { Node } from "../nodes/Node";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { nodeFactory } from "./NodeFactory";

export interface LevelState {
  theme: LEVEL_THEME;
  tilesWidth: number;
  tilesHeight: number;
  nodes: (Node | null)[];
}

export type LevelStateHandler = (newState: LevelState) => void;

export class Level {
  private _id: string;
  private _theme!: LEVEL_THEME;
  private _tilesWidth!: number;
  private _tilesHeight!: number;
  private _nodes: (Node | null)[] = [];
  private _gameloop?: GameLoop;
  private _heroRef?: HeroNode;

  private _directionControls: DirectionControls;

  public onEmit: LevelStateHandler;

  constructor(levelId: string, onEmit: LevelStateHandler) {
    this._id = levelId;
    this.onEmit = onEmit;

    this._directionControls = new DirectionControls();

    this.start();
  }

  get id(): string {
    return this._id;
  }

  start() {
    this._theme = LEVEL_THEME.BLUE;
    this._tilesWidth = 9;
    this._tilesHeight = 9;
    this._nodes = [
      { id: 0, x: 2, y: 2, type: NODE_TYPE.HERO },
      { id: 1, x: 6, y: 4, type: NODE_TYPE.GOAL },
    ].map((config) => {
      return nodeFactory.createNode(config, this.getState());
    });

    // Cache a reference to the hero
    this._heroRef = this._nodes.find(
      (node) => node?.type === NODE_TYPE.HERO,
    ) as HeroNode | undefined;

    this.startGameLoop();
  }

  startGameLoop() {
    this._gameloop?.stop();
    this._gameloop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    // Check for movement
    if (this._directionControls.direction) {
      this._heroRef?.move(this._directionControls.direction);
    }

    // Call `tick` on any node that want to tick
    this._nodes.forEach((node) => {
      node?.tick();
    });

    // Emit any changes
    this.onEmit(this.getState());
  }

  getState(): LevelState {
    return {
      theme: this._theme,
      tilesWidth: this._tilesWidth,
      tilesHeight: this._tilesHeight,
      nodes: this._nodes,
    };
  }

  destroy() {
    this._gameloop?.stop();
    this._directionControls.unbind();
  }
}
