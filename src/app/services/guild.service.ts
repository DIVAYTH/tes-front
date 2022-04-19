import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../classes/user";
import {Quest} from "../classes/quest";
import {GuildMember} from "../classes/guild-member";

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
  });

  url = 'http://localhost:8080';
  mainUrl = '/main'
  guildUrl = '/guild'

  enter = '/enter'
  quests = '/quests'
  check = '/check'

  constructor(private http: HttpClient) {
  }

  checkGuild(guildName: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.guildUrl + this.check, guildName, {
      headers,
      responseType: 'text'
    })
  }

  enterGuild(guildName: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.guildUrl + this.enter, guildName, {
      headers,
      responseType: 'text'
    })
  }

  getQuests(guildName: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post<Array<Quest>>(this.url + this.mainUrl + this.guildUrl + this.quests, guildName, {headers})
  }

  getRangs(guildName: string){
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post<Array<GuildMember>>(this.url + this.mainUrl + this.guildUrl, guildName, {headers})
  }
}
