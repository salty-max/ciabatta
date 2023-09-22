import { NODE_TYPE } from "../helpers/consts";
import { GoalNode } from "../nodes/GoalNode";
import { HeroNode } from "../nodes/HeroNode";
import { Node, NodeProperties } from "../nodes/Node";
import { LevelState } from "./Level";

class NodeFactory {
  createNode(config: NodeProperties, level: LevelState) {
    // TODO: ID
    return this.getInstance(config, level);
  }

  private getInstance(config: NodeProperties, level: LevelState): Node | null {
    switch (config.type) {
      case NODE_TYPE.HERO:
        return new HeroNode(config, level);
      case NODE_TYPE.GOAL:
        return new GoalNode(config, level);
      default:
        console.warn("Unknown node type", config.type);
        return null;
    }
  }
}

export const nodeFactory = new NodeFactory();
