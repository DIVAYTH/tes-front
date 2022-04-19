import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from "../../services/main.service";
import {HeroAndAttributes} from "../../classes/hero-and-attributes";
import {RaceEnum} from "../../enums/raceEnum";
import {MatDialog} from '@angular/material/dialog';
import {ModalGuildComponent} from "../modal-guild/modal-guild.component";
import {GuildService} from "../../services/guild.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  declare role: string | null

  declare userHero: HeroAndAttributes

  constructor(private router: Router, private mainService: MainService, private dialog: MatDialog, private guildService: GuildService) {
  }

  enterGuild(guild: string) {
    this.guildService.checkGuild(guild).subscribe(() => {
      this.router.navigate(['main/guild'], {queryParams: {guild: guild}})
    }, () => {
      this.openModalGuild(guild)
    })
  }

  openModalGuild(guild: string) {
    this.dialog.open(ModalGuildComponent, {
      data: {name: guild},
      width: '525px',
      height: '200px',
      panelClass: 'custom-dialog-container',
    })
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.mainService.getHero().subscribe(response => {
      this.userHero = response
    }, () => {
    })
  }

  getImg() {
    switch (this.userHero.hero.race) {
      case RaceEnum.ARGONIANIN :
        return "../../../assets/race/Argonianin.gif"
      case RaceEnum.BOSMER :
        return "../../../assets/race/Bosmer.gif"
      case RaceEnum.BRETON :
        return "../../../assets/race/Breton.gif"
      case RaceEnum.DUNMER :
        return "../../../assets/race/Dunmer.png"
      case RaceEnum.IMPEREC:
        return "../../../assets/race/Imperec.gif"
      case RaceEnum.KHADJIT :
        return "../../../assets/race/Khadjit.gif"
      case RaceEnum.NORD:
        return "../../../assets/race/Nord.gif"
      case RaceEnum.ORC :
        return "../../../assets/race/Orc.gif"
      case RaceEnum.REDGUARD :
        return "../../../assets/race/Redguard.png"
      default:
        return "../../../assets/race/Altmer.gif"
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  navigateUser() {
    this.router.navigate(['main/user'])
  }

  navigateAdmin() {
    this.router.navigate(['main/admin'])
  }
}
