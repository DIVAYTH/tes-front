import {Attributes} from "./attributes";

export class QuestReward {
  id:number
  description:string
  attributes:Attributes


  constructor(id: number, description: string, attributes: Attributes) {
    this.id = id;
    this.description = description;
    this.attributes = attributes;
  }
}
