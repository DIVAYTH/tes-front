import {Component, OnInit} from '@angular/core';
import {Quest} from "../../classes/quest";
import {MainService} from "../../services/main.service";
import {ModalQuestComponent} from "../modal-quest/modal-quest.component";
import {MatDialog} from "@angular/material/dialog";
import {Request} from "../../classes/request";
import {RequestDecisionComponent} from "../request-decision/request-decision.component";
import {NewQuest} from "../../classes/new-quest";
import {ModalQuestEndComponent} from "../modal-quest-end/modal-quest-end.component";

@Component({
  selector: 'app-hero',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private mainService: MainService, private dialog: MatDialog) {
  }

  public questsArr = new Array<Quest>();

  ngOnInit(): void {
    this.mainService.getQuests().subscribe((response: Array<Quest>) => {
      this.questsArr = response
    })
  }

  openQuest(quest: Quest) {
    this.dialog.open(ModalQuestEndComponent, {
      data: {quest: quest},
      width: '400px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }
}
