import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {Quest} from "../../classes/quest";
import {Attributes} from "../../classes/attributes";
import {NewQuest} from "../../classes/new-quest";

@Component({
  selector: 'app-modal-quest-new',
  templateUrl: './modal-quest-new.component.html',
  styleUrls: ['./modal-quest-new.component.css']
})
export class ModalQuestNewComponent implements OnInit {
  result: boolean = false

  declare name: string
  declare descriptionQuest: string

  declare minLevel: number
  declare conditionPower: number
  declare conditionIntellect: number
  declare conditionWillpower: number
  declare conditionDexterity: number
  declare conditionSpeed: number
  declare conditionEndurance: number
  declare conditionCharm: number
  declare conditionLuck: number

  declare rewardDescription: string

  declare rewardPower: number
  declare rewardIntellect: number
  declare rewardWillpower: number
  declare rewardDexterity: number
  declare rewardSpeed: number
  declare rewardEndurance: number
  declare rewardCharm: number
  declare rewardLuck: number

  constructor(private dialog: MatDialogRef<ModalQuestNewComponent>, private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  newQuest() {
    this.adminService.newQuest(new NewQuest(
      new Quest(this.name, "", this.descriptionQuest, 0, 0, "", "")
      , this.minLevel, new Attributes(0, this.conditionPower, this.conditionIntellect, this.conditionWillpower, this.conditionDexterity, this.conditionSpeed
        , this.conditionEndurance, this.conditionCharm, this.conditionLuck), this.rewardDescription,
      new Attributes(0, this.rewardPower, this.rewardIntellect, this.rewardWillpower, this.rewardDexterity, this.rewardSpeed,
        this.rewardEndurance, this.rewardCharm, this.rewardLuck))).subscribe(response => {
      this.result = false
      this.closeDialog()
    }, error => {
      this.result = true
    })
  }

  closeDialog() {
    this.dialog.close();
  }

}
