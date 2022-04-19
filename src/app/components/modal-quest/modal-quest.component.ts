import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Quest} from "../../classes/quest";
import {QuestService} from "../../services/quest.service";
import {QuestConditionsAndReward} from "../../classes/quest-conditions-and-reward";


@Component({
  selector: 'app-modal-quest',
  templateUrl: './modal-quest.component.html',
  styleUrls: ['./modal-quest.component.css']
})
export class ModalQuestComponent implements OnInit {
  declare questConditionsAndReward: QuestConditionsAndReward
  declare level: number
  declare result: string
  role :string | null = localStorage.getItem("role")

  constructor(@Inject(MAT_DIALOG_DATA) public data: { quest: Quest }, private dialog: MatDialogRef<ModalQuestComponent>
    , private questService: QuestService) {
  }

  ngOnInit(): void {
    this.questService.getCondition(this.data.quest.name).subscribe((response: QuestConditionsAndReward) => {
      this.questConditionsAndReward = response
    })
  }

  takeQuest() {
    this.questService.takeQuest(this.data.quest.name).subscribe(() => {
      this.closeDialog()
    }, () => {
      this.result = "Вы пока не можете взять такой сложный квест"
    })
  }

  closeDialog() {
    this.dialog.close();
  }

}
