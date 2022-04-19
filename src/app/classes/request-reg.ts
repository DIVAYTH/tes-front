import {Hero} from "./hero";
import {User} from "./user";

export class RequestReg {
  hero:Hero
  user:User


  constructor(hero: Hero, user: User) {
    this.hero = hero;
    this.user = user;
  }
}
