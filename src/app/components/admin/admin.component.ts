import {Component, OnInit} from '@angular/core';
import {Request} from "../../classes/request";
import {AdminService} from "../../services/admin.service";
import {Quest} from "../../classes/quest";
import {ModalQuestComponent} from "../modal-quest/modal-quest.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalQuestNewComponent} from "../modal-quest-new/modal-quest-new.component";
import {RequestDecisionComponent} from "../request-decision/request-decision.component";
import {GuildMember} from "../../classes/guild-member";
import {ModalRangComponent} from "../modal-rang/modal-rang.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  arrRequest = new Array<Request>()
  arrQuests = new Array<Quest>()
  arrRangs = new Array<GuildMember>()

  constructor(private adminService: AdminService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.adminService.getRequests().subscribe(response => {
      this.arrRequest = response
    })
    this.adminService.getQuests().subscribe(response => {
      this.arrQuests = response
    })
    this.adminService.getRangs().subscribe(response => {
      this.arrRangs = response
    })
  }

  openModalRang(guildMember:GuildMember) {
    this.dialog.open(ModalRangComponent, {
      data: {guildMember: guildMember},
      width: '400px',
      height: '200px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }

  openRequestDecision(request: Request) {
    this.dialog.open(RequestDecisionComponent, {
      data: {request: request},
      width: '475px',
      height: '275px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }

  openQuestModal(quest: Quest) {
    this.dialog.open(ModalQuestComponent, {
      data: {quest: quest},
      width: '400px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }

  openQuestModalNew() {
    this.dialog.open(ModalQuestNewComponent, {
      width: '400px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    }).afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }
}
