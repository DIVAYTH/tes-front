import {Component, OnInit} from '@angular/core';
import {Quest} from "../../classes/quest";
import {ActivatedRoute} from "@angular/router";
import {GuildService} from "../../services/guild.service";
import {ModalQuestComponent} from "../modal-quest/modal-quest.component";
import {MatDialog} from "@angular/material/dialog";
import {GuildMember} from "../../classes/guild-member";

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit {

  declare guild: string
  declare description: string
  public questsArr = new Array<Quest>();
  public rangArr = new Array<GuildMember>();

  constructor(private router: ActivatedRoute, private guildsService: GuildService, private dialog: MatDialog) {
  }

  getGuild() {
    this.router.queryParamMap.subscribe(
      (param) => {
        // @ts-ignore
        this.guild = param.get('guild')
        switch (this.guild) {
          case 'Гильдия Магов':
            this.description = 'Гильдия магов — профессиональная организация, созданная для того, чтобы продвигать изучение тайных искусств. Гильдия магов является одной из самых могущественных организаций Тамриэля. Её возглавляет Ганнибал Травен, известный борец с некромантией.\n' +
              '\n' +
              'Основной задачей Гильдии является изучение и применение волшебства. Все самые популярные зелья и волшебные предметы были созданы членами Гильдии магов. Всё это всегда можно купить в отделениях Гильдии за разумную цену, равно как и множество разнообразных заклинаний и компонентов для создания снадобий. Те, кто продвинулся в науке, получают доступ к созданию собственных заклинаний и зачарованию'
            break
          case 'Гильдия Бойцов':
            this.description = 'Гильдия бойцов — профессиональная организация, основанная потентатом Версидью-Шайе с целью регулирования найма и обучения наёмников. Членам организации предоставляется бесплатный ночлег, а также скидки на обучение, товары и услуги по починке амуниции. Сама Гильдия была основана военачальником-цаэски Диниерас-Весом и первоначально называлась «Сиффим». Хартия Гильдии была утверждена потентатом в 2Э 231.\n' +
              '\n' +
              'На службу в гильдию принимаются преимущественно сильные и здоровые люди. Гильдия бойцов обеспечивает заключение контрактов с частными лицами. Граждане могут заключать с гильдией контракты на уничтожение паразитов и монстров, доставку товаров на опасных маршрутах, сбор животных для арен, а также для выполнения других задач по решению управления гильдии. Контракты не могут противоречить имперским и местным законам.'
            break
          case 'Темное Братство':
            this.description = 'Тёмное Братство — это секта безжалостных ассасинов, убивающих ради денег, удовольствия и во славу Отца Ужаса, Ситиса. Их пути скрыты от всех, кто не принадлежит к их числу, они всегда остаются в тени, но при этом их легко находят те, кто захочет оплатить их услуги'
            break
          case 'Гильдия Воров':
            this.description = 'Гильдия воров — организация, занимающаяся как воровством, так и обучением этому искусству. Официальные власти стараются не задевать интересы Гильдии. Причина такого поведения проста — лучше иметь дело с одной организацией, чем думать, как справиться с тысячами воришек, не подчиняющихся никому. Как и любая другая гильдия, Гильдия воров — организация профессионалов, среди которых есть воры, грабители, карманники, контрабандисты и представители других профессий. Гильдия не имеет официальных представительств, предпочитая собираться в крупных городских трактирах'
            break
        }
        this.guildsService.getQuests(this.guild).subscribe((response: Array<Quest>) => {
          this.questsArr = response
        })
        this.guildsService.getRangs(this.guild).subscribe((response: Array<GuildMember>) => {
          this.rangArr = response
        })
      }
    );
  }

  openQuestModal(quest: Quest) {
    this.dialog.open(ModalQuestComponent, {
      data: {quest: quest},
      width: '400px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.getGuild()
    })
  }

  ngOnInit(): void {
    this.getGuild()
  }
}
