import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestReg} from "../classes/request-reg";
import {Race} from "../classes/race";
import {HeroClass} from "../classes/heroClass";
import {Galaxy} from "../classes/galaxy";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://localhost:8080';
  createUrl = "/create";
  raceUrl  = '/create/races';
  classUrl  = '/create/classes';
  galaxyUrl  = '/create/galaxies';

  constructor(private http: HttpClient) {
  }

  public create(request: RequestReg) {
    return this.http.post(this.url + this.createUrl, request);
  }

  getRaces() {
    return this.http.get<Array<Race>>(this.url + this.raceUrl);
  }

  getClasses() {
    return this.http.get<Array<HeroClass>>(this.url + this.classUrl);
  }

  getGalaxy() {
    return this.http.get<Array<Galaxy>>(this.url + this.galaxyUrl);
  }
}
