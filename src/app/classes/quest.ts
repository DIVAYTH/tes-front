export class Quest {
  name:string
  guildName:string
  description:string
  conditions:number
  reward:number
  heroName:string
  status:string


  constructor(name: string, guild_name: string, description: string, condition: number, awards: number, heroName: string, status: string) {
    this.name = name;
    this.guildName = guild_name;
    this.description = description;
    this.conditions = condition;
    this.reward = awards;
    this.heroName = heroName;
    this.status = status;
  }
}
