import {GuildMemberId} from "./guild-member-id";

export class GuildMember {
  id:GuildMemberId
  rang:string

  constructor(id: GuildMemberId, rang: string) {
    this.id = id;
    this.rang = rang;
  }
}
