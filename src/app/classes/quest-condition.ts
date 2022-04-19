export class QuestCondition {
  id:number
  minLevel:number
  attributes:number

  constructor(id: number, minLevel: number, attributes: number) {
    this.id = id;
    this.minLevel = minLevel;
    this.attributes = attributes;
  }
}
