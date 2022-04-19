import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Request} from "../classes/request";
import {Quest} from "../classes/quest";
import {NewQuest} from "../classes/new-quest";
import {RequestDecision} from "../classes/request-decision";
import {GuildMember} from "../classes/guild-member";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:8080';
  mainUrl = '/main'
  admin = '/admin'

  member = '/members'
  requests = '/requests'
  quests = '/quests'
  new = '/new'
  enter = '/enter'
  end = '/end'
  rang = '/rang'

  constructor(private http: HttpClient) {
  }

  getRangs() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.get<Array<GuildMember>>(this.url + this.mainUrl + this.admin + this.member, {headers})
  }

  getRequests() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.get<Array<Request>>(this.url + this.mainUrl + this.admin + this.requests, {headers})
  }

  getQuests() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.get<Array<Quest>>(this.url + this.mainUrl + this.admin + this.quests, {headers})
  }

  newQuest(quest: NewQuest) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.admin + this.quests + this.new, quest, {
      headers,
      responseType: 'text'
    })
  }

  allowRequestEnter(requestDecision: RequestDecision) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.admin + this.requests + this.enter, requestDecision, {
      headers,
      responseType: 'text'
    })
  }

  allowRequestEnd(requestDecision: RequestDecision) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.admin + this.requests + this.end, requestDecision, {
      headers,
      responseType: 'text'
    })
  }

  changeRang(guildMember: GuildMember) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.post(this.url + this.mainUrl + this.admin + this.member + this.rang, guildMember, {
      headers,
      responseType: 'text'
    })
  }
}
