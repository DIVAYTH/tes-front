export class QuestEnd {
  questName:string
  result:string
  description:string

  constructor(questName: string, result: string, description: string) {
    this.questName = questName;
    this.result = result;
    this.description = description;
  }
}
