import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hero} from "../classes/hero";
import {Attributes} from "../classes/attributes";
import {HeroAndAttributes} from "../classes/hero-and-attributes";
import {Quest} from "../classes/quest";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url = 'http://localhost:8080';
  mainUrl = '/main'
  heroUrl = '/user'
  adminUrl = '/admin'

  action = '/quests'


  constructor(private http: HttpClient) {
  }

  getHero() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.get<HeroAndAttributes>(this.url + this.mainUrl + this.heroUrl, {headers})
  }

  getQuests() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('login') + ":" + localStorage.getItem('password'))))
    });
    return this.http.get<Array<Quest>>(this.url + this.mainUrl + this.heroUrl + this.action, {headers})
  }
}
