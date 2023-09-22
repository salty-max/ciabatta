import { Node } from "./Node";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class HeroNode extends Node {
  renderComponent(): JSX.Element {
    return <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />;
  }
}
