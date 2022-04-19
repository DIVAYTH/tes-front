import {QuestCondition} from "./quest-condition";
import {Attributes} from "./attributes";
import {QuestReward} from "./quest-reward";

export class QuestConditionsAndReward {
  condition:QuestCondition
  condAttributes:Attributes
  reward:QuestReward
  rewAttributes:Attributes

  constructor(condition: QuestCondition, condAttributes: Attributes, reward: QuestReward, rewAttributes: Attributes) {
    this.condition = condition;
    this.condAttributes = condAttributes;
    this.reward = reward;
    this.rewAttributes = rewAttributes;
  }
}
