import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GuildService} from "../../services/guild.service";

@Component({
  selector: 'app-modal-guild',
  templateUrl: './modal-guild.component.html',
  styleUrls: ['./modal-guild.component.css']
})
export class ModalGuildComponent implements OnInit {

  declare guild: string
  declare result: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }, private dialog: MatDialogRef<ModalGuildComponent>,
              private guildService: GuildService) {
  }

  closeDialog() {
    this.dialog.close();
  }

  ngOnInit(): void {
  }

  sendRequest() {
    this.guildService.enterGuild(this.data.name).subscribe(() => {
      this.result = "Заявка отправлена"
    }, () => {
      this.result = "Неуспешно"
    })
  }
}
