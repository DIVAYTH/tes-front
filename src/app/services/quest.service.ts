import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QuestConditionsAndReward} from "../classes/quest-conditions-and-reward";
import {QuestEnd} from "../classes/quest-end";

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  url = 'http://localhost:8080';
  mainUrl = '/main'
  user = '/user'
  guildUrl = '/guild'
  quests = '/quests'

  info = '/info'
  take = '/take'
  end = '/end'

  constructor(private http: HttpClient) {
  }

  getCondition(questName: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post<QuestConditionsAndReward>(this.url + this.mainUrl + this.guildUrl + this.quests + this.info, questName, {headers})
  }

  takeQuest(questName: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.guildUrl + this.quests + this.take, questName, {headers, responseType: 'text'})
  }

  endQuest(questEnd:QuestEnd) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.user + this.quests + this.end, questEnd, {headers, responseType: 'text'})
  }
}
