import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {GuildMember} from "../../classes/guild-member";

@Component({
  selector: 'app-modal-rang',
  templateUrl: './modal-rang.component.html',
  styleUrls: ['./modal-rang.component.css']
})
export class ModalRangComponent implements OnInit {
  declare rang:string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { guildMember: GuildMember }, private dialog: MatDialogRef<ModalRangComponent>, private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  send() {
    this.data.guildMember.rang = this.rang
    this.adminService.changeRang( this.data.guildMember).subscribe(() => {
      this.closeDialog()
    })
  }

  closeDialog() {
    this.dialog.close();
  }

}
