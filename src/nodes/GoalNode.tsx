import { Node } from "./Node";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class GoalNode extends Node {
  renderComponent(): JSX.Element {
    return <Sprite frameCoord={TILES.GOAL_DISABLED} />;
  }
}
