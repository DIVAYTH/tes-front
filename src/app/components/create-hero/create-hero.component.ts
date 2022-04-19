import {Component, OnInit} from '@angular/core';
import {Hero} from "../../classes/hero";
import {Race} from "../../classes/race";
import {RaceEnum} from "../../enums/raceEnum"
import {SexEnum} from "../../enums/sexEnum";
import {RegistrationService} from "../../services/registration.service";
import {HeroClass} from "../../classes/heroClass";
import {Galaxy} from "../../classes/galaxy";
import {User} from "../../classes/user";
import {Router} from "@angular/router";
import {RequestReg} from "../../classes/request-reg";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})

export class CreateHeroComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) {

  }

  arrRace = new Array<Race>()
  iRace: number = 0

  arrClass: Array<HeroClass> = new Array<HeroClass>()
  iClass: number = 0

  arrGalaxy: Array<Galaxy> = new Array<Galaxy>()
  iGalaxy: number = 0

  registrationResult: string = ""
  colorResult: boolean = false
  valid: string = ""

  Sex = SexEnum
  Race = RaceEnum

  name: string = ""
  gender: string = SexEnum.MALE
  race_name: string = RaceEnum.ALTMER
  heroClass: string = "Маг"
  galaxy_name: string = "Воин"
  password: string = ""

  ngOnInit(): void {
    this.registrationService.getRaces().subscribe(results => {
      this.arrRace = results;
    })
    this.registrationService.getClasses().subscribe(results => {
      this.arrClass = results;
    })
    this.registrationService.getGalaxy().subscribe(results => {
      this.arrGalaxy = results;
    })
  }

  getImgRace() {
    switch (this.race_name) {
      case RaceEnum.ARGONIANIN :
        this.iRace = 1
        return "../../../assets/race/Argonianin.gif"
      case RaceEnum.BOSMER :
        this.iRace = 2
        return "../../../assets/race/Bosmer.gif"
      case RaceEnum.BRETON :
        this.iRace = 3
        return "../../../assets/race/Breton.gif"
      case RaceEnum.DUNMER :
        this.iRace = 4
        return "../../../assets/race/Dunmer.png"
      case RaceEnum.IMPEREC:
        this.iRace = 5
        return "../../../assets/race/Imperec.gif"
      case RaceEnum.KHADJIT :
        this.iRace = 6
        return "../../../assets/race/Khadjit.gif"
      case RaceEnum.NORD:
        this.iRace = 7
        return "../../../assets/race/Nord.gif"
      case RaceEnum.ORC :
        this.iRace = 8
        return "../../../assets/race/Orc.gif"
      case RaceEnum.REDGUARD :
        this.iRace = 9
        return "../../../assets/race/Redguard.png"
      default:
        this.iRace = 0
        return "../../../../assets/race/Altmer.gif"
    }
  }

  getImgClass() {
    switch (this.heroClass) {
      case "Боевой маг" :
        this.iClass = 1
        return "../../../assets/classes/battleMage.jpg"
      case "Чародей" :
        this.iClass = 2
        return "../../../assets/classes/sorcerer.jpg"
      case "Вор" :
        this.iClass = 3
        return "../../../assets/classes/theif.jpg"
      case "Ассасин" :
        this.iClass = 4
        return "../../../assets/classes/assasin.jpg"
      case "Пилигрим" :
        this.iClass = 5
        return "../../../assets/classes/piligrim.jpg"
      case "Воин" :
        this.iClass = 6
        return "../../../assets/classes/warrior.jpg"
      case "Паладин" :
        this.iClass = 7
        return "../../../assets/classes/paladin.jpg"
      case "Лучник" :
        this.iClass = 8
        return "../../../assets/classes/archer.jpg"
      default:
        this.iClass = 0
        return "../../../../assets/classes/mage.jpg"
    }
  }

  getImgGalaxy() {
    switch (this.galaxy_name) {
      case "Вор" :
        this.iGalaxy = 1
        return "../../../assets/galaxy/thief.gif"
      case "Маг" :
        this.iGalaxy = 2
        return "../../../assets/galaxy/mage.gif"
      case "Атронах" :
        this.iGalaxy = 3
        return "../../../assets/galaxy/atron.gif"
      case "Башня" :
        this.iGalaxy = 4
        return "../../../assets/galaxy/tower.gif"
      case "Жеребец" :
        this.iGalaxy = 5
        return "../../../assets/galaxy/steed.gif"
      case "Змея" :
        this.iGalaxy = 6
        return "../../../assets/galaxy/serpent.gif"
      case "Леди" :
        this.iGalaxy = 7
        return "../../../assets/galaxy/lady.gif"
      case "Лорд" :
        this.iGalaxy = 8
        return "../../../assets/galaxy/lord.gif"
      case "Любовник" :
        this.iGalaxy = 9
        return "../../../assets/galaxy/lover.gif"
      case "Подмастерье" :
        this.iGalaxy = 10
        return "../../../assets/galaxy/apprent.gif"
      case "Ритуал" :
        this.iGalaxy = 11
        return "../../../assets/galaxy/ritual.gif"
      case "Тень" :
        this.iGalaxy = 12
        return "../../../assets/galaxy/shadow.gif"
      default:
        this.iGalaxy = 0
        return "../../../../assets/galaxy/warrior.gif"
    }
  }

  return() {
    this.router.navigate(['login'])
  }

  sendHero(form: NgForm) {
    if (form.valid) {
      this.valid = ""
      this.registrationService.create(new RequestReg(new Hero(this.name, this.gender, 1, this.race_name, this.heroClass, this.galaxy_name, 0),
        new User(this.name, this.password))).subscribe(() => {
        this.registrationResult = "Пользователь зарегестрирован"
        this.colorResult = true
      }, () => {
        this.registrationResult = "Неуспешная регистрация"
        this.colorResult = false
      })
    } else {
      this.valid = "Данные введены неверно"
    }
  }
}
