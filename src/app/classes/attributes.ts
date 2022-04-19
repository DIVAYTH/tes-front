export class Attributes {
  id:number
  power:number
  intellect:number
  willpower:number
  dexterity:number
  speed:number
  endurance:number
  charm:number
  luck:number


  constructor(id: number, power: number, intellect: number, willpower: number, dexterity: number, speed: number, endurance: number, charm: number, luck: number) {
    this.id = id;
    this.power = power;
    this.intellect = intellect;
    this.willpower = willpower;
    this.dexterity = dexterity;
    this.speed = speed;
    this.endurance = endurance;
    this.charm = charm;
    this.luck = luck;
  }
}
