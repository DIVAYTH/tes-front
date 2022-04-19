export class Request {
  id:number
  type:string
  heroName:string
  guildName:string
  description:string


  constructor(id: number, type: string, heroName: string, guildName: string, description: string) {
    this.id = id;
    this.type = type;
    this.heroName = heroName;
    this.guildName = guildName;
    this.description = description;
  }
}
