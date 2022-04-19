import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  url = 'http://localhost:8080';
  loginUrl = '/login';

  constructor(private http: HttpClient) {
  }

  authorization(user: User) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(user.username + ":" + user.password)))
    });
    return this.http.get(this.url + this.loginUrl, {headers, responseType: 'text' })
  }
}
