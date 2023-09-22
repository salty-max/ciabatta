import { Node } from "./Node";
import Hero from "../components/object-graphics/Hero";

export class HeroNode extends Node {
  tick() {}

  draw(): JSX.Element {
    return <Hero />;
  }
}
