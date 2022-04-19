import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {QuestService} from "../../services/quest.service";
import {Quest} from "../../classes/quest";
import {QuestEnd} from "../../classes/quest-end";

@Component({
  selector: 'app-modal-quest-end',
  templateUrl: './modal-quest-end.component.html',
  styleUrls: ['./modal-quest-end.component.css']
})
export class ModalQuestEndComponent implements OnInit {
  result: string = 'успех'
  declare description: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { quest: Quest }, private dialog: MatDialogRef<ModalQuestEndComponent>, private questService: QuestService) {
  }

  ngOnInit(): void {
  }

  endQuest() {
    this.questService.endQuest(new QuestEnd(this.data.quest.name, this.result, this.description)).subscribe(() => {
      this.closeDialog()
    })
  }

  closeDialog() {
    this.dialog.close();
  }

}
