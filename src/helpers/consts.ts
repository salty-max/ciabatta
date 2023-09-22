export const CELL_SIZE = 16;
export const SPRITESHEET_SRC = "/ciabattas-revenge-sprites.png";

export enum DIRECTION {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export const directionUpdateMap: Record<DIRECTION, { x: number; y: number }> = {
  [DIRECTION.UP]: { x: 0, y: -1 },
  [DIRECTION.DOWN]: { x: 0, y: 1 },
  [DIRECTION.LEFT]: { x: -1, y: 0 },
  [DIRECTION.RIGHT]: { x: 1, y: 0 },
};

export enum NODE_TYPE {
  HERO,
  GOAL,
}

export enum LEVEL_THEME {
  YELLOW,
  BLUE,
  GREEN,
  PINK,
  GRAY,
}

export const THEME_BACKGROUNDS = {
  [LEVEL_THEME.YELLOW]: "#2f2808",
  [LEVEL_THEME.BLUE]: "#3d4c67",
  [LEVEL_THEME.GREEN]: "#2f2808",
  [LEVEL_THEME.PINK]: "#673d5e",
  [LEVEL_THEME.GRAY]: "#96a1c7",
};

export const THEME_TILES_MAP = {
  [LEVEL_THEME.YELLOW]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
  [LEVEL_THEME.BLUE]: {
    FLOOR: "4x1",
    TOP: "4x0",
    LEFT: "3x1",
    RIGHT: "5x1",
    BOTTOM: "4x2",
    WALL: "3x2",
  },
  [LEVEL_THEME.GREEN]: {
    FLOOR: "7x1",
    TOP: "7x0",
    LEFT: "6x1",
    RIGHT: "8x1",
    BOTTOM: "7x2",
    WALL: "6x2",
  },
  [LEVEL_THEME.PINK]: {
    FLOOR: "10x1",
    TOP: "10x0",
    LEFT: "9x1",
    RIGHT: "11x1",
    BOTTOM: "10x2",
    WALL: "9x2",
  },
  [LEVEL_THEME.GRAY]: {
    FLOOR: "13x1",
    TOP: "13x0",
    LEFT: "12x1",
    RIGHT: "14x1",
    BOTTOM: "13x2",
    WALL: "12x2",
  },
};
