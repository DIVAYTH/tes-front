import {Quest} from "./quest";
import {Attributes} from "./attributes";

export class NewQuest {

  quest:Quest
  minLevel:number
  condition:Attributes
  rewardDescription:string
  reward:Attributes


  constructor(quest: Quest, minLevel: number, condition: Attributes, rewardDescription: string, reward: Attributes) {
    this.quest = quest;
    this.minLevel = minLevel;
    this.condition = condition;
    this.rewardDescription = rewardDescription;
    this.reward = reward;
  }
}
