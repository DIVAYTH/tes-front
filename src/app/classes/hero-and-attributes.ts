import {Hero} from "./hero";
import {Attributes} from "./attributes";

export class HeroAndAttributes {
  hero:Hero
  attributes:Attributes


  constructor(hero: Hero, attributes: Attributes) {
    this.hero = hero;
    this.attributes = attributes;
  }
}
